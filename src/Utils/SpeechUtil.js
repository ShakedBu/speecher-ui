import axios from 'axios';

export const searchSpeeches = (query) => {
    return (axios.get('http://localhost:5000/speech?query=' + query, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => { return { 'error': error.response } })
    );
}

export const getSpeech = (id) => {
    return (axios.get('http://localhost:5000/speech?id=' + id, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => { return { 'error': error.response } })
    );
}

export const searchWordInSpeech = (speechId, word) => {
    return (axios.get('http://localhost:5000/word?speech_id=' + speechId + '&word=' + word, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => { return { 'error': error.response } })
    );
};

export const getWordsListFromSpeech = (speechId) => {
    return (axios.get('http://localhost:5000/word?speech_id=' + speechId, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
};

export const getByLocation = (speechId, paragraphId, sentenceId, wordIndex) => {
    return (axios.get('http://localhost:5000/word?speech_id=' + speechId + '&paragraph=' + paragraphId + '&sentence=' + sentenceId + '&index=' + wordIndex, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
};

export const getCountsBySpeech = (speechId) => {
    return (axios.get('http://localhost:5000/statistics?speech_id=' + speechId, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
};

export const addSpeech = (speech) => {
    return (axios.post('http://localhost:5000/speech', {
        'name': speech.name,
        'speaker': speech.speaker,
        'location': speech.location,
        'date': speech.date,
        'file_path': speech.file,
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => { return { 'error': error.response } })
    );
};

export const searchPhrase = (speechId, phraseId) => {
    return (axios.get('http://localhost:5000/phrase?speech_id=' + speechId + '&phrase_id=' + phraseId, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => { return { 'error': error.response } })
    );
}

export const getAllSpeeches = () => {
    return (axios.get('http://localhost:5000/speech', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}