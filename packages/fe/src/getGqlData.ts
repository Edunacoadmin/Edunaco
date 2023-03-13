import { DocumentNode, print } from 'graphql';

const path = '/api/graphql';
const url = `http://127.0.0.1:3000${path}`;


// if server 
// const url = `http://64.227.112.209:8082/graphql`;



export type GetGqlDataOptions<TVariables = any> = {
  query: string | DocumentNode;
  variables?: TVariables;
  revalidate?: number;
  skip?: boolean;
  cache?: RequestCache;
};
const phase = process.env.NEXT_PHASE;

export async function getGqlData<TQuery = any, TVariables = any>({
  query,
  variables,
  revalidate = 60,
  cache = 'force-cache',
  skip,
}: GetGqlDataOptions<TVariables>): Promise<TQuery> {
  let data;
  if (!skip && phase !== 'phase-production-build') {
    const finalQuery = typeof query === 'string' ? query : print(query);
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ query: finalQuery, variables }),
        headers: {
          'Content-Type': 'application/json',
        },
        cache,
        next: { revalidate },
      });
      data = await res.json();
    } catch (e: any) {
      console.error(e);
    }
  }
  return data?.data || {};
}
