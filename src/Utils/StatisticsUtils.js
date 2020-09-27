import axios from 'axios';

export const countChars = (speechId, paragraph, sentence, word) => {
    let url = 'http://localhost:5000/statistics?count=chars&speech_id=' + speechId
    paragraph == 0 ? url = url : url = url + '&paragraph=' + paragraph
    sentence == 0 ? url = url : url = url + '&sentence=' + sentence
    word == 0 ? url = url : url = url + '&word=' + word

    return (axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}

export const countWords = (speechId, paragraph, sentence) => {
    let url = 'http://localhost:5000/statistics?count=words&speech_id=' + speechId
    paragraph == 0 ? url = url : url = url + '&paragraph=' + paragraph
    sentence == 0 ? url = url : url = url + '&sentence=' + sentence

    return (axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}

export const wordsAppearances = (speechId) => {
    let url = 'http://localhost:5000/statistics?count=appearances'
    speechId == null ? url = url : url = url + '&speech_id=' + speechId

    return (axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}