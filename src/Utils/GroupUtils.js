import axios from 'axios';
import { authHeader } from '../Utils/AuthUtils';

const server = process.env.REACT_APP_SERVER || 'http://localhost:5000'

export const getGroups = (query) => {
    return (axios.get(server + '/group?query=' + query, {
        headers: authHeader()
    }).then((result) =>
        result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};


export const getGroup = (groupId) => {
    return (axios.get(server + '/group?id=' + groupId, {
        headers: authHeader()
    }).then((result) =>
        result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};

export const createGroup = (groupName, words) => {
    return (axios.post(server + '/group', {
        'name': groupName,
        'words': words
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};

export const addWords2Group = (groupId, words) => {
    return (axios.put(server + '/group', {
        'action': 'add',
        'id': groupId,
        'words': words
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};

export const removeWordsFromGroup = (groupId, words) => {
    return (axios.put(server + '/group', {
        'action': 'remove',
        'id': groupId,
        'words': words
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};