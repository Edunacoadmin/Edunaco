import { schemaFromExecutor, wrapSchema } from '@graphql-tools/wrap';
import type { GraphQLSchema } from 'graphql';
import { print } from 'graphql';

async function executor({ document, variables, operationName }) {
  const query = typeof document === 'string' ? document : print(document);
  const body = JSON.stringify({
    operationName,
    variables,
    query,
  });
  const response = await fetch('http://64.227.112.209:8082/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlZHVuYWNvIiwiaWF0IjoxNjc2MzI1MDU0LCJleHAiOjE3MDc4NjEwNTQsImF1ZCI6Ind3dy5lZHVuYWNvLmN6Iiwic3ViIjoiZWR1bmFjb0BlZHVuYWNvLmN6In0.mUEIg8_vrLn7bB4ato85LpsOmXTvPdkDJQX5J9hjSv8'
    },
    body,
  });
  return response.json();
}

export async function createSchema(): Promise<GraphQLSchema> {
  return wrapSchema({
    // @ts-ignore
    schema: await schemaFromExecutor(executor),
    // @ts-ignore
    executor
  });
}
