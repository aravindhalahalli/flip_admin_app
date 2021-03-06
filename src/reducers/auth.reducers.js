import { authConstatnts } from "../actions/constants";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

const authReducers = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case authConstatnts.LOGIN_REQUEST:
      state = { ...state, authenticating: true};
      break;
    case authConstatnts.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating:false
      };
      break;
    case authConstatnts.LOGOUT_REQUEST:
      state = {
        ...state,
        loading:true
      }
      break;
    case authConstatnts.LOGOUT_SUCCESS:
      state = {
        ...initState
      }
      break;
    case authConstatnts.LOGOUT_FAILURE:
      state = {
        ...state,
        error:action.payload.error,
        loading:false
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
