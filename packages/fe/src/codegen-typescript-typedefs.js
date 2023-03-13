// https://github.com/dotansimha/graphql-code-generator/issues/3899
const { dirname } = require('path');

module.exports = {
  plugin(schema, documents, config, info) {
    let pluginPath = '';
    let render = false;
    for (
      let index =
        info.outputFile.split('/').length -
        info.outputFile.split('/').indexOf('src') -
        2;
      index > 0;
      index--
    ) {
      pluginPath += '../';
    }
    pluginPath = pluginPath + 'src/getGqlData';

    const _ret = documents
      .map((doc) => {
        const docs = doc.document.definitions
          .filter((def) => {
            return (
              def.kind == 'OperationDefinition' && def.operation == 'query'
            );
          })
          .map((def) => {
            return {
              name: def.name.value,
              body: def.loc.source.body || '',
            };
          });

        if (docs.length != 0) {
          render = true;
        }

        let _ret = '';
        for (let i = 0; i < docs.length; i++) {
          const doc = docs[i];
          // let docName = doc.name.charAt(0).toUpperCase() + doc.name.slice(1);
          const docName = doc.name.replace(/(^|_)(\S)/g, (_, a, b) => {
            return a + b.toUpperCase();
          });
          // export const ${docName}Document = gql\`
          // ${doc.body}
          // \`
          _ret += `

export const getData_${docName}Query = async function (
  options?: Omit<GetGqlDataOptions<${docName}QueryVariables>, 'query'>
): Promise<${docName}Query> {
  return getGqlData<${docName}Query, ${docName}QueryVariables>({
    ...options,
    query: ${docName}Document,
  });
};

export type GetData_${docName}QueryHookResult = ReturnType<typeof getData_${docName}Query>;

`;
        }
        return _ret;
      })
      .join('\n');

    if (render) {
      return `
import { getGqlData } from '${pluginPath}';
import { GetGqlDataOptions } from '${pluginPath}';
${_ret}
`;
    }

    return '';
  },
};
