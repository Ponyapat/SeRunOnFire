import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => { 
    try {
    // login user

    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    
        history.push('/');
    } catch (error) {
        alert('email or password failed')
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
    // signup user

    const { data } =await api.signUp(formData);

    dispatch({ type: AUTH, data });

        history.push('/posts');
    } catch (error) {
        console.log(error);
    }
};