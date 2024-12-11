import axios from 'axios';

export const login = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/users/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
    }
};

export const register = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/users/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
    }
};

export const authorizedLogin = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/users/auth-login', userData);
        dispatch({ type: 'AUTH_LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({ type: 'AUTH_LOGIN_FAIL', payload: error.response.data });
    }
};
