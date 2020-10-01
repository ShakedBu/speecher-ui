import axios from 'axios';
import { authHeader } from '../Utils/AuthUtils';

const server = process.env.REACT_APP_SERVER || 'http://localhost:5000'

export const getAllWords = () => {
    return (axios.get(server + '/word', {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
}

export const createPhrase = (words) => {
    return (axios.post(server + '/phrase', {
        'words': words,
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return ({ 'error': error.response }) })
    );
};

export const getAllPhrases = () => {
    return (axios.get(server + '/phrase', {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
}
