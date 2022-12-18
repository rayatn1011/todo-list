import useSWR from 'swr';
import { useAuth } from '@/features/auth';
import { fetcher } from '@/features/fetch';
import type { IErrorMessage } from '@/features/fetch';

export function useFetchGetCheck() {
    const { authToken } = useAuth();

    const apiUrl = '/check';
    const { data, error } = useSWR<string, IErrorMessage>(
        {
            url: apiUrl,
            config: {
                headers: {
                    authorization: authToken,
                },
                method: 'GET',
            },
        },
        fetcher,
        {
            shouldRetryOnError: false,
        }
    );
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}
