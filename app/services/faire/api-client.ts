import axios from 'axios';

const accessToken = process.env.FAIRE_ACCESS_TOKEN || '';
const appCredentials = process.env.FAIRE_APP_CREDENTIALS || '';

const url = 'https://www.faire.com/external-api/v2';

const headers = {
  'X-FAIRE-OAUTH-ACCESS-TOKEN': accessToken,
  'X-FAIRE-APP-CREDENTIALS': appCredentials,
};

export const faireApiClient = axios.create({
  baseURL: url,
  headers,
});
