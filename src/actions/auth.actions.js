import axios from "../helpers/axios";
import { authConstatnts } from "./constants";

//login action
export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    //Request
    dispatch({ type: authConstatnts.LOGIN_REQUEST });
    //Success
    const res = await axios.post(`/admin/signin`, { ...user});
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user",JSON.stringify(user));
      dispatch({ type: authConstatnts.LOGIN_SUCCESS, payload: {token, user}});
    }
    //Failure
    else {
       if(res.status === 400){
           dispatch ({type:authConstatnts.LOGIN_FAILURE, payload:{error:res.data.error}})
       } 
    }
  }
}

//check loggedIn ?? action 
export const isUserLoggedIn = () =>{
    return async dispatch =>{
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({ type: authConstatnts.LOGIN_SUCCESS, payload: {token, user}});
        }else{
            dispatch ({type:authConstatnts.LOGIN_FAILURE, payload:{error:'Failed to login'}})
        }
    }
}

//signout action
export const signout =() =>{
  return async dispatch =>{
    localStorage.clear();
    dispatch({
      type:authConstatnts.LOGOUT_REQUEST
    });
  }
}
