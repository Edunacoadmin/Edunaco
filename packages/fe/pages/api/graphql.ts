import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createSchema } from '@/src/connector';

async function getSchema() {
  const schema = await createSchema();
  return schema;
}

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: getSchema(),
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql'
})