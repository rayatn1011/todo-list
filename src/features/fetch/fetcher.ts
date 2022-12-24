import { env } from '@/features/utils';

interface IFetcher {
  url: string;
  config: RequestInit;
}

export interface IErrorMessage {
  status: number;
  info: Record<string, unknown>;
}

export async function fetcher({ url, config = {} }: IFetcher) {
  const fetchUrl = env.baseUrl + url;
  const res = await fetch(fetchUrl, {
    ...config,
  });

  // handle the status code is not in the range 200-299
  if (!res.ok) {
    const errorMessage: IErrorMessage = {
      status: res.status,
      info: (await res.json()) as Record<string, unknown>,
    };
    throw errorMessage;
  }

  return res.json();
}
