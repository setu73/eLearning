const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        error: null,
        success: 'Account created. Please login.',
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        error: action.payload,
        success: null,
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
        success: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
        success: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

export default AppReducer;
