import axios from 'axios';

export const getAllWords = () => {
    return (axios.get('http://localhost:5000/word', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.status === 200 ? result.data : null).catch((error) => null)
    );
}