import axios from 'axios';

export const searchSpeeches = (query) => {
    if (query == "")
        return Promise.resolve([
            {
                "id": 18,
                "name": "Duties of American Citizenship",
                "speaker": "Theodore Roosevelt",
                "location": "Buffalo, New York",
                "text": "... A race must be strong and vigorous; it must be a race of good <strong>fight</strong>ers and good breeders, else its wisdom will come to naught and its virtue be ineffective; and no sweetness and delicacy, no love for and appreciation of beauty in art or literature, no capacity for building up material prosperity can possibly atone for the lack of the great virile virtues.... All these corruptions and vices are what every good American citizen must <strong>fight</strong> against."
            },
            {
                "id": 19,
                "name": "We Shall Fight on the Beaches",
                "speaker": "Winston Churchill",
                "location": "House of Commons",
                "text": "... Boulogne and Calais were the scenes of desperate <strong>fight</strong>ing.... He spurned the offer, and four days of intense street <strong>fight</strong>ing passed before silence reigned over Calais, which marked the end of a memorable resistance.... Meanwhile, the Royal Air Force, which had already been intervening in the battle, so far as its range would allow, from home bases, now used part of its main metropolitan <strong>fight</strong>er strength, and struck at the German bombers and at the <strong>fight</strong>ers which in large numbers protected them.... In the long series of very fierce battles, now on this front, now on that, <strong>fight</strong>ing on three fronts at once, battles fought by two or three divisions against an equal or somewhat larger number of the enemy, and fought fiercely on some of the old grounds that so many of us knew so well-in these battles our losses in men have exceeded 30,000 killed, wounded and missing.... In the confusion of this <strong>fight</strong> it is inevitable that many have been left in positions where honor required no further resistance from them.... If parachute landings were attempted and fierce <strong>fight</strong>ing attendant upon them followed, these unfortunate people would be far better out of the way, for their own sakes as well as for ours.... We shall go on to the end, we shall <strong>fight</strong> in France, we shall <strong>fight</strong> on the seas and oceans, we shall <strong>fight</strong> with growing confidence and growing strength in the air, we shall defend our Island, whatever the cost may be, we shall <strong>fight</strong> on the beaches, we shall <strong>fight</strong> on the landing grounds, we shall <strong>fight</strong> in the fields and in the streets, we shall <strong>fight</strong> in the hills; we shall never surrender, and even if, which I do not for a moment believe, this Island or a large part of it were subjugated and starving, then our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle, until, in God’s good time, the New World, with all its power and might, steps forth to the rescue and the liberation of the old."
            }
        ]);

    return (axios.get('http://127.0.0.1:5000/speech?query=' + query, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    }));
}