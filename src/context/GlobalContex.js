import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducer';

// Initial state
const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  success: null,
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      return 'existing';
    }

    // Create a new user object
    const newUser = { email, password };

    // Add the new user to the existing users array
    users.push(newUser);

    // Update the state and localStorage
    dispatch({ type: 'SIGNUP', payload: newUser });
    localStorage.setItem('users', JSON.stringify(users));

    return 'success';
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and password matches
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Update the state
      dispatch({ type: 'LOGIN', payload: user });
    } else {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid credentials' });
    }
  };

  const logout = () => {
    // Clear the state
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        error: state.error,
        success: state.success,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
