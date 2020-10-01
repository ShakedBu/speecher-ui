import axios from 'axios';
import { authHeader } from '../Utils/AuthUtils';

const server = process.env.REACT_APP_SERVER || 'http://localhost:5000'

export const countChars = (speechId, paragraph, sentence, word) => {
    let url = server + '/statistics?count=chars&speech_id=' + speechId
    if (paragraph !== 0) url = url + '&paragraph=' + paragraph
    if (sentence !== 0) url = url + '&sentence=' + sentence
    if (word !== 0) url = url + '&word=' + word

    return (axios.get(url, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
}

export const countWords = (speechId, paragraph, sentence) => {
    let url = server + '/statistics?count=words&speech_id=' + speechId
    if (paragraph !== 0) url = url + '&paragraph=' + paragraph
    if (sentence !== 0) url = url + '&sentence=' + sentence

    return (axios.get(url, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
}

export const wordsAppearances = (speechId) => {
    let url = server + '/statistics?count=appearances'
    if (speechId != null) url = url + '&speech_id=' + speechId

    return (axios.get(url, {
        headers: authHeader()
    }).then((result) => result.status === 200 ? result.data : console.log(result)).catch((error) => null)
    );
}