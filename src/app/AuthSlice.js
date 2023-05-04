import { createSlice } from "@reduxjs/toolkit";
import { logIn, signUp } from "../api/AuthRequests";


const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isSignUp: false
    },
    reducers: {
        login: (formData, navigate) => async (dispatch) => {
            dispatch({ type: "AUTH_START" });
            try {
                const { data } = await logIn(formData);
                dispatch({ type: "AUTH_SUCCESS", data: data });
                navigate("../", { replace: true });
            } catch (error) {
                console.log(error);
                dispatch({ type: "AUTH_FAIL" });
            }
        },
        signup: (formData, navigate) => async (dispatch) => {
            dispatch({ type: "AUTH_START" });
            try {
                const { data } = await signUp(formData);
                dispatch({ type: "AUTH_SUCCESS", data: data });
                navigate("../", { replace: true });
            } catch (error) {
                console.log(error);
                dispatch({ type: "AUTH_FAIL" });
            }
        },

    }
})

export const { login, signup, } = AuthSlice.actions

export default AuthSlice.reducer