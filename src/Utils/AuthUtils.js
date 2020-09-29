// import axios from 'axios';

export const login = (userName, password) => {
    Promise.resolve(true).then((response) => {
        localStorage.setItem('jwt', JSON.stringify(response.data));
        return response.data
    })
};

export const logout = () => {
    localStorage.removeItem('jwt');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('jwt'));
};

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('jwt'));

    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}
