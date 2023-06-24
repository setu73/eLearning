// AppReducer.js
const AppReducer = (state, action) => {
    switch (action.type) {
      case 'SIGNUP':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          error: null,
        };
      case 'SIGNUP_ERROR':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: action.payload,
        };
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          error: null,
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: null,
        };
      case 'CLEAR_ERROR':
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default AppReducer;
  