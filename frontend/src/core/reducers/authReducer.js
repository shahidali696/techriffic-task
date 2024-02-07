const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };
        case 'CHECK_AUTHENTICATION':
            return {
                ...state,
                isAuthenticated: !!localStorage.getItem('token')
            };
        default:
            return state;
    }
};

export default authReducer;
