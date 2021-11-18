import { categoryConstants } from "../actions/constants";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducers = (state = initState, action) => {
    console.log(action);
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstants.ADD_NEW_CATEGORIES_REQUEST:
        state={
            ...state,
            loading:true
        }
        break;
    case categoryConstants.ADD_NEW_CATEGORIES_SUCCESS:
        state = {
            ...state,
            loading:false
        }
        break;
    case categoryConstants.ADD_NEW_CATEGORIES_FAILURE:
        state={
            ...initState
        }
        break;
    default:
      return state;
  }
  return state;
};

export default categoryReducers;
