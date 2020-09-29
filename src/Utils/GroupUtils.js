import axios from 'axios';

export const getGroups = (query) => {
    return (axios.get('http://localhost:5000/group?query=' + query).then((result) =>
        result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};


export const getGroup = (groupId) => {
    return (axios.get('http://localhost:5000/group?id=' + groupId).then((result) =>
        result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};

export const createGroup = (groupName, words) => {
    return (axios.post('http://localhost:5000/group', {
        'name': groupName,
        'words': words
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => { return { 'error': error.response } })
    );
};

export const addWords2Group = (groupId, words) => {
    return (axios.put('http://localhost:5000/group', {
        'action': 'add',
        'id': groupId,
        'words': words
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};

export const removeWordsFromGroup = (groupId, words) => {
    return (axios.put('http://localhost:5000/group', {
        'action': 'remove',
        'id': groupId,
        'words': words
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
};