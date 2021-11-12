import { authConstants, authConstatnts } from "../actions/constants";

const initState = {
name : "Aravind Kumar"
//   token: null,
//   user: {
//     firstName: "",
//     lastName: "",
//     email: "",
//     picture: "",
//   },
//   authenticate: false,
//   authenticating: false,
//   loading: false,
//   error: null,
//   message: "",
};

const authReducers = (state = initState, action) => {
  console.log(action);
  
  switch(action.type) {
      case authConstatnts.LOGIN_REQUEST:
          state={
              ...state,
              ...action.payload 
          }
          break;
        default:
            return state;
  }
  return state;
};
export default authReducers;

// switch (action.type) {
//     case authConstants.LOGIN_REQUEST:
//       state = {
//         ...state,
//         authenticating: true,
//       };
//       break;
//     case authConstants.LOGIN_SUCCESS:
//       state = {
//         ...state,
//         user: action.payload.user,
//         token: action.payload.token,
//         authenticate: true,
//         authenticating: false,
//       };
//       break;
//     case authConstants.LOGOUT_REQUEST:
//       state = {
//         ...state,
//         loading: true,
//       };
//       break;
//     case authConstants.LOGOUT_SUCCESS:
//       state = {
//         ...initState,
//       };
//       break;
//     case authConstants.LOGOUT_FAILURE:
//       state = {
//         ...state,
//         error: action.payload.error,
//         loading: false,
//       };
//       break;
//     default:
//       return state;
//   }
//   return state;