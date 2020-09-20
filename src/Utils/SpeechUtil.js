import axios from 'axios';

export const searchSpeeches = (query) => {
    return (axios.get('http://localhost:5000/speech?query=' + query, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}

export const getSpeech = (id) => {
    return (axios.get('http://localhost:5000/speech?id=' + id, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}

export const searchWordInSpeech = (speechId, word) => { };

export const getWordsListFromSpeech = (speechId) => { };

export const getWordsList = () => { };

export const getGroup = () => { };

export const getByLocation = (speechId, paragraphId, sentenceId, wordIndex) => { };

export const createGroup = (groupName, words) => { };

export const createPhrase = (words) => { };

export const addSpeech = (name, speaker, location, data, file) => { };