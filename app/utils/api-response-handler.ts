import { ApiResponse } from 'app/types';
import { json } from '@remix-run/node';

interface ResponseParams {
  message?: string | null;
  responseInitParams?: ResponseInit;
}

interface Params {
  onSuccess?: ResponseParams;
  onError?: ResponseParams;
}

export const handleApiResponse = async <T>(
  request: () => Promise<T>,
  params?: Params,
) => {
  try {
    const data = await request();

    const response: ApiResponse<T> = {
      data,
      success: true,
      message: params?.onSuccess?.message ?? null,
    };

    return json(response, params?.onSuccess?.responseInitParams);
  } catch (err) {
    const errorMessage = JSON.stringify((err as Error)?.message, null, 2);
    const response: ApiResponse<T> = {
      data: null,
      success: false,
      message:
        errorMessage && params?.onError?.message
          ? `${params?.onError?.message}: ${errorMessage}`
          : errorMessage || params?.onError?.message || null,
    };

    return json(response, params?.onError?.responseInitParams);
  }
};
