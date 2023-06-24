// GlobalContext.js
import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      return 'existing';
    }

    const newUser = { email, password };
    users.push(newUser);

    dispatch({ type: 'SIGNUP', payload: newUser });
    localStorage.setItem('users', JSON.stringify(users));

    return 'success';
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    } else {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid credentials' });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        error: state.error,
        signup,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
