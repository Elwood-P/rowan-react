// Stores state in the URL using useSearchParams - use similar to useState
// https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/
import { useSearchParams } from 'react-router-dom';

const useSearchParamsState = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = acquiredSearchParam ?? defaultValue;

  const setSearchParamsState = (newState: string) => {
    const next = Object.assign(
      {},
      [...searchParams.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
      { [searchParamName]: newState }
    );
    setSearchParams(next);
  };
  return [searchParamsState, setSearchParamsState];
};

export default useSearchParamsState;
