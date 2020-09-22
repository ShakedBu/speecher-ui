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

export const getByLocation = (speechId, paragraphId, sentenceId, wordIndex) => { };

export const addSpeech = (speech) => { 
    return (axios.post('http://localhost:5000/speech', {
        'name': speech.name,
        'speaker': speech.speaker,
        'location': speech.location,
        'date': speech.date,
        'file_path': speech.file,
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
};