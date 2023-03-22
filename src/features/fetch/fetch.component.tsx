import { SWRConfig } from 'swr';
import { fetcher } from './fetcher';

interface IFetchProvider {
  children?: React.ReactNode;
}

function FetchProvider({ children }: IFetchProvider) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}

export { FetchProvider };
