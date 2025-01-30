import { GraphQLClient } from 'graphql-request';

const accessToken = process.env.ORDERCHAMP_ACCESS_TOKEN || '';

const url = 'https://api.orderchamp.com/v1/graphql';

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

export const orderchampGraphqlClient = new GraphQLClient(url, {
  headers,
  method: 'POST',
  errorPolicy: 'ignore',
});
