import React, { useReducer } from 'react';
// import { RouteComponentProps } from '@reach/router';

interface Message {
  name: string;
  message: string;
}

interface Action {
  type: string;
  message: Message;
  messages: Message[];
}

interface AppState {
  messages: Message[];
}

interface ContextInterface {
  appState: AppState;
  appDispatch: React.Dispatch<any>;
}

export const AppContext = React.createContext<ContextInterface>({
  appState: { messages: [] },
  appDispatch: () => {},
});

export const ContextProvider: React.FC = ({ children }) => {
  const initState = {
    messages: [],
  };

  const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [appState, appDispatch] = useReducer(reducer, initState);
  const value: ContextInterface = { appState, appDispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
