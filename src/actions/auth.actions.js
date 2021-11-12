import { authConstatnts } from "./constants";

export const login = (user) => {
console.log(user);

  return async (dispatch) => {
    dispatch({
      type: authConstatnts.LOGIN_REQUEST,
      payload: {
        ...user
      },
    });
  };
};
