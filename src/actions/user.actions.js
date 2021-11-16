import axios from "../helpers/axios";
import { userConstatnts } from "./constants";

//signup action
export const signup = (user) => {
    console.log(user);
    return async (dispatch) => {
      //Request
      dispatch({ type: userConstatnts.USER_REGISTER_REQUEST });
      //Success
      const res = await axios.post(`/admin/signup`, { ...user});
      if (res.status === 201) {
        const {message} = res.data;
        dispatch({ type: userConstatnts.USER_REGISTER_SUCCESS, payload: {message}});
      }
      //Failure
      else {
         if(res.status === 400){
             dispatch ({type:userConstatnts.USER_REGISTER_FAILURE, payload:{error:res.data.error}})
         } 
      }
    }
}