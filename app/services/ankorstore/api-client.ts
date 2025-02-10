import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const clientId = process.env.ANKORSTORE_CLIENT_ID || '';
const clientSecret = process.env.ANKORSTORE_CLIENT_SECRET || '';

const BASE_URL = 'https://www.ankorstore.com';
const TOKEN_URL = '/oauth/token';

const defaultHeaders = {
  accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
};

const tokenClient = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders,
});

export const ankorstoreApiClient = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
});

let accessToken: string | null = null;

async function fetchAccessToken(): Promise<string> {
  const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}&scope=*`;

  try {
    const response = await tokenClient.post(TOKEN_URL, body);
    accessToken = response?.data.access_token;

    return accessToken || '';
  } catch (error) {
    throw error;
  }
}

ankorstoreApiClient.interceptors.request.use(
  // @ts-ignore
  async (config: AxiosRequestConfig) => {
    if (!accessToken) {
      await fetchAccessToken();
    }
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

ankorstoreApiClient.interceptors.response.use(
  (response) => response,
  async (
    error: AxiosError & { config: AxiosRequestConfig & { _retry?: boolean } },
  ) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await fetchAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return ankorstoreApiClient(originalRequest);
      } catch (tokenError) {
        return Promise.reject(tokenError);
      }
    }

    return Promise.reject(error);
  },
);
