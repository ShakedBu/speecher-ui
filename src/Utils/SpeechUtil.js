import axios from 'axios';

export const searchSpeeches = (query) => {
    if (query == null)
        return Promise.resolve(null);

    return (axios.get('http://127.0.0.1:5000/speech?query=' + query));
}