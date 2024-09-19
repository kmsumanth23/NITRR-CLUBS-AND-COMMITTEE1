const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
        case 'AUTH_LOGIN_SUCCESS':
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case 'LOGIN_FAIL':
        case 'REGISTER_FAIL':
        case 'AUTH_LOGIN_FAIL':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}
