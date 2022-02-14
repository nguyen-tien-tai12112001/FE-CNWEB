import { AUTH, LOGIN_FAIL, SIGNUP_FAIL } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    const er = error.response.data.message;
    console.log(er);

    dispatch({ type: LOGIN_FAIL, er });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    // console.log(error.response.data.message);

    const er = error.response.data.message;
    console.log(er);

    dispatch({ type: SIGNUP_FAIL, er });
  }
};
