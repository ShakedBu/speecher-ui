import axios from 'axios';

const server = process.env.REACT_APP_SERVER || 'http://localhost:5000'

export const login = (userName, password) => {
    return (axios.post(server + '/auth', {
        'username': userName,
        'password': password,
    })).then((response) => {
        sessionStorage.setItem('jwt', JSON.stringify(response.data));
        return response.data
    }).catch((error) => console.error(error));
};

export const logout = () => {
    sessionStorage.removeItem('jwt');
};

export const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem('jwt'));
};

export const authHeader = () => {
    const user = JSON.parse(sessionStorage.getItem('jwt'));

    if (user) {
        return { 'Authorization': 'JWT ' + user.access_token };
    } else {
        return {};
    }
}
