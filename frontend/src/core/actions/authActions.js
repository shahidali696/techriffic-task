export const loginSuccess = (userData) => ({
    type: 'LOGIN_SUCCESS',
    payload: userData
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const saveToken = (token) => ({
    type: 'SAVE_TOKEN',
    payload: token
});

export const checkAuthentication = () => ({
    type: 'CHECK_AUTHENTICATION'
});
