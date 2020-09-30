import axios from 'axios';
import { authHeader } from '../Utils/AuthUtils';

export const getGroups = (query) => {
    return (axios.get('http://localhost:5000/group?query=' + query, {
        headers: authHeader()
    }).then((result) =>
        result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};


export const getGroup = (groupId) => {
    return (axios.get('http://localhost:5000/group?id=' + groupId, {
        headers: authHeader()
    }).then((result) =>
        result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};

export const createGroup = (groupName, words) => {
    return (axios.post('http://localhost:5000/group', {
        'name': groupName,
        'words': words
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};

export const addWords2Group = (groupId, words) => {
    return (axios.put('http://localhost:5000/group', {
        'action': 'add',
        'id': groupId,
        'words': words
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};

export const removeWordsFromGroup = (groupId, words) => {
    return (axios.put('http://localhost:5000/group', {
        'action': 'remove',
        'id': groupId,
        'words': words
    }, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};