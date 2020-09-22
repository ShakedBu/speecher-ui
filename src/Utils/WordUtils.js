import axios from 'axios';

export const getAllWords = () => {
    return (axios.get('http://localhost:5000/word', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}

export const createPhrase = (words) => {
    return (axios.post('http://localhost:5000/phrase', {
        'words': words,
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
};
