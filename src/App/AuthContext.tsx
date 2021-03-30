import React from 'react';
import { IProps } from '../models';

type AuthState = {
  status: string;
  error: null | { message: string };
  user: null | { username: string };
};

export const AuthContext = React.createContext({} as AuthState);

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const getUser = () => sleep(1000).then(() => ({ username: 'elmo' }));

export function AuthProvider({ children }: IProps) {
  const [state, setState] = React.useState<AuthState>({
    status: 'pending',
    error: null,
    user: null,
  });

  React.useEffect(() => {
    getUser().then(
      (user) => setState({ status: 'success', error: null, user }),
      (error) => setState({ status: 'error', error, user: null })
    );
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        'Loading...'
      ) : state.status === 'error' ? (
        <div>
          Oh no
          <div>
            <pre>{state.error?.message}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
