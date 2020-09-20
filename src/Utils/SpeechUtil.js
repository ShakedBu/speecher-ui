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
    }));
    // return Promise.resolve({
    //     "date": "Tue, 04 Jun 1940 00:00:00 GMT",
    //     "full_text": " From the moment that the French defenses at Sedan and on the Meuse were broken at the end of the second week of May, only a rapid retreat to Amiens and the south could have saved the British and French Armies who had entered Belgium at the appeal of the Belgian King; but this strategic fact was not immediately realized.\n\nThe French High Command hoped they would be able to close the gap, and the Armies of the north were under their orders.\n\nMoreover, a retirement of this kind would have involved almost certainly the destruction of the fine Belgian Army of over 20 divisions and the abandonment of the whole of Belgium.\n\nTherefore, when the force and scope of the German penetration were realized and when a new French Generalissimo, General Weygand, assumed command in place of General Gamelin, an effort was made by the French and British Armies in Belgium to keep on holding the right hand of the Belgians and to give their own right hand to a newly created French Army which was to have advanced across the Somme in great strength to grasp it.\n\nHowever, the German eruption swept like a sharp scythe around the right and rear of the Armies of the north.\n\nEight or nine armored divisions, each of about four hundred armored vehicles of different kinds, but carefully assorted to be complementary and divisible into small self-contained units, cut off all communications between us and the main French Armies.\n\nIt severed our own communications for food and ammunition, which ran first to Amiens and afterwards through Abbeville, and it shore its way up the coast to Boulogne and Calais, and almost to Dunkirk.\n\nBehind this armored and mechanized onslaught came a number of German divisions in lorries, and behind them again there plodded comparatively slowly the dull brute mass of the ordinary German Army and German people, always so ready to be led to the trampling down in other lands of liberties and comforts which they have never known in their own.\n\nI have said this armored scythe-stroke almost reached Dunkirk-almost but not quite.\n\nBoulogne and Calais were the scenes of desperate fighting.\n\nThe Guards defended Boulogne for a while and were then withdrawn by orders from this country.\n\nThe Rifle Brigade, the 60th Rifles, and the Queen Victoria’s Rifles, with a battalion of British tanks and 1,000 Frenchmen, in all about four thousand strong, defended Calais to the last.\n\nThe British Brigadier was given an hour to surrender.\n\nHe spurned the offer, and four days of intense street fighting passed before silence reigned over Calais, which marked the end of a memorable resistance.\n\nOnly 30 unwounded survivors were brought off by the Navy, and we do not know the fate of their comrades.\n\nTheir sacrifice, however, was not in vain.\n\nAt least two armored divisions, which otherwise would have been turned against the British Expeditionary Force, had to be sent to overcome them.\n\nThey have added another page to the glories of the light divisions, and the time gained enabled the Graveline water lines to be flooded and to be held by the French troops.\n\nThus it was that the port of Dunkirk was kept open.\n\nWhen it was found impossible for the Armies of the north to reopen their communications to Amiens with the main French Armies, only one choice remained.\n\nIt seemed, indeed, forlorn.\n\nThe Belgian, British and French Armies were almost surrounded.\n\nTheir sole line of retreat was to a single port and to its neighboring beaches.\n\nThey were pressed on every side by heavy attacks and far outnumbered in the air.\n\nWhen, a week ago today, I asked the House to fix this afternoon as the occasion for a statement, I feared it would be my hard lot to announce the greatest military disaster in our long history.\n\nI thought-and some good judges agreed with me-that perhaps 20,000 or 30,000 men might be re-embarked.\n\nBut it certainly seemed that the whole of the French First Army and the whole of the British Expeditionary Force north of the Amiens-Abbeville gap would be broken up in the open field or else would have to capitulate for lack of food and ammunition.\n\nThese were the hard and heavy tidings for which I called upon the House and the nation to prepare themselves a week ago.\n\nThe whole root and core and brain of the British Army, on which and around which we were to build, and are to build, the great British Armies in the later years of the war, seemed about to perish upon the field or to be led into an ignominious and starving captivity.\n\nThat was the prospect a week ago.\n\nBut another blow which might well have proved final was yet to fall upon us.\n\nThe King of the Belgians had called upon us to come to his aid.\n\nHad not this Ruler and his Government severed themselves from the Allies, who rescued their country from extinction in the late war, and had they not sought refuge in what was proved to be a fatal neutrality, the French and British Armies might well at the outset have saved not only Belgium but perhaps even Poland.\n\nYet at the last moment, when Belgium was already invaded, King Leopold called upon us to come to his aid, and even at the last moment we came.\n\nHe and his brave, efficient Army, nearly half a million strong, guarded our left flank and thus kept open our only line of retreat to the sea.\n\nSuddenly, without prior consultation, with the least possible notice, without the advice of his Ministers and upon his own personal act, he sent a plenipotentiary to the German Command, surrendered his Army, and exposed our whole flank and means of retreat.\n\nI asked the House a week ago to suspend its judgment because the facts were not clear, but I do not feel that any reason now exists why we should not form our own opinions upon this pitiful episode.\n\nThe surrender of the Belgian Army compelled the British at the shortest notice to cover a flank to the sea more than 30 miles in length.\n\nOtherwise all would have been cut off, and all would have shared the fate to which King Leopold had condemned the finest Army his country had ever formed.\n\nSo in doing this and in exposing this flank, as anyone who followed the operations on the map will see, contact was lost between the British and two out of the three corps forming the First French Army, who were still farther from the coast than we were, and it seemed impossible that any large number of Allied troops could reach the coast.\n\nThe enemy attacked on all sides with great strength and fierceness, and their main power, the power of their far more numerous Air Force, was thrown into the battle or else concentrated upon Dunkirk and the beaches.\n\nPressing in upon the narrow exit, both from the east and from the west, the enemy began to fire with cannon upon the beaches by which alone the shipping could approach or depart.\n\nThey sowed magnetic mines in the channels and seas; they sent repeated waves of hostile aircraft, sometimes more than a hundred strong in one formation, to cast their bombs upon the single pier that remained, and upon the sand dunes upon which the troops had their eyes for shelter.\n\nTheir U-boats, one of which was sunk, and their motor launches took their toll of the vast traffic which now began.\n\nFor four or five days an intense struggle reigned.\n\nAll their armored divisions-or what Was left of them-together with great masses of infantry and artillery, hurled themselves in vain upon the ever-narrowing, ever-contracting appendix within which the British and French Armies fought.\n\nMeanwhile, the Royal Navy, with the willing help of countless merchant seamen, strained every nerve to embark the British and Allied troops; 220 light warships and 650 other vessels were engaged.\n\nThey had to operate upon the difficult coast, often in adverse weather, under an almost ceaseless hail of bombs and an increasing concentration of artillery fire.\n\nNor were the seas, as I have said, themselves free from mines and torpedoes.\n\nIt was in conditions such as these that our men carried on, with little or no rest, for days and nights on end, making trip after trip across the dangerous waters, bringing with them always men whom they had rescued.\n\nThe numbers they have brought back are the measure of their devotion and their courage.\n\nThe hospital ships, which brought off many thousands of British and French wounded, being so plainly marked were a special target for Nazi bombs; but the men and women on board them never faltered in their duty.\n\nMeanwhile, the Royal Air Force, which had already been intervening in the battle, so far as its range would allow, from home bases, now used part of its main metropolitan fighter strength, and struck at the German bombers and at the fighters which in large numbers protected them.\n\nThis struggle was protracted and fierce.\n\nSuddenly the scene has cleared, the crash and thunder has for the moment-but only for the moment-died away.\n\nA miracle of deliverance, achieved by valor, by perseverance, by perfect discipline, by faultless service, by resource, by skill, by unconquerable fidelity, is manifest to us all.\n\nThe enemy was hurled back by the retreating British and French troops.\n\nHe was so roughly handled that he did not hurry their departure seriously.\n\nThe Royal Air Force engaged the main strength of the German Air Force, and inflicted upon them losses of at least four to one; and the Navy, using nearly 1,000 ships of all kinds, carried over 335,000 men, French and British, out of the jaws of death and shame, to their native land and to the tasks which lie immediately ahead.\n\nWe must be very careful not to assign to this deliverance the attributes of a victory.\n\nWars are not won by evacuations.\n\nBut there was a victory inside this deliverance, which should be noted.\n\nIt was gained by the Air Force.\n\nMany of our soldiers coming back have not seen the Air Force at work; they saw only the bombers which escaped its protective attack.\n\nThey underrate its achievements.\n\nI have heard much talk of this; that is why I go out of my way to say this.\n\nI will tell you about it.\n\nThis was a great trial of strength between the British and German Air Forces.\n\nCan you conceive a greater objective for the Germans in the air than to make evacuation from these beaches impossible, and to sink all these ships which were displayed, almost to the extent of thousands?\n\nCould there have been an objective of greater military importance and significance for the whole purpose of the war than this?\n\nThey tried hard, and they were beaten back; they were frustrated in their task.\n\nWe got the Army away; and they have paid fourfold for any losses which they have inflicted.\n\nVery large formations of German aeroplanes-and we know that they are a very brave race-have turned on several occasions from the attack of one-quarter of their number of the Royal Air Force, and have dispersed in different directions.\n\nTwelve aeroplanes have been hunted by two.\n\nOne aeroplane was driven into the water and cast away by the mere charge of a British aeroplane, which had no more ammunition.\n\nAll of our types-the Hurricane, the Spitfire and the new Defiant-and all our pilots have been vindicated as superior to what they have at present to face.\n\nWhen we consider how much greater would be our advantage in defending the air above this Island against an overseas attack, I must say that I find in these facts a sure basis upon which practical and reassuring thoughts may rest.\n\nI will pay my tribute to these young airmen.\n\nThe great French Army was very largely, for the time being, cast back and disturbed by the onrush of a few thousands of armored vehicles.\n\nMay it not also be that the cause of civilization itself will be defended by the skill and devotion of a few thousand airmen?\n\nThere never has been, I suppose, in all the world, in all the history of war, such an opportunity for youth.\n\nThe Knights of the Round Table, the Crusaders, all fall back into the past-not only distant but prosaic; these young men, going forth every morn to guard their native land and all that we stand for, holding in their hands these instruments of colossal and shattering power, of whom it may be said that\n\nEvery morn brought forth a noble chance And every chance brought forth a noble knight, deserve our gratitude, as do all the brave men who, in so many ways and on so many occasions, are ready, and continue ready to give life and all for their native land. I return to the Army.\n\nIn the long series of very fierce battles, now on this front, now on that, fighting on three fronts at once, battles fought by two or three divisions against an equal or somewhat larger number of the enemy, and fought fiercely on some of the old grounds that so many of us knew so well-in these battles our losses in men have exceeded 30,000 killed, wounded and missing.\n\nI take occasion to express the sympathy of the House to all who have suffered bereavement or who are still anxious.\n\nThe President of the Board of Trade [Sir Andrew Duncan] is not here today.\n\nHis son has been killed, and many in the House have felt the pangs of affliction in the sharpest form.\n\nBut I will say this about the missing: We have had a large number of wounded come home safely to this country, but I would say about the missing that there may be very many reported missing who will come back home, some day, in one way or another.\n\nIn the confusion of this fight it is inevitable that many have been left in positions where honor required no further resistance from them.\n\nAgainst this loss of over 30,000 men, we can set a far heavier loss certainly inflicted upon the enemy.\n\nBut our losses in material are enormous.\n\nWe have perhaps lost one-third of the men we lost in the opening days of the battle of 21st March, 1918, but we have lost nearly as many guns — nearly one thousand-and all our transport, all the armored vehicles that were with the Army in the north.\n\nThis loss will impose a further delay on the expansion of our military strength.\n\nThat expansion had not been proceeding as far as we had hoped.\n\nThe best of all we had to give had gone to the British Expeditionary Force, and although they had not the numbers of tanks and some articles of equipment which were desirable, they were a very well and finely equipped Army.\n\nThey had the first-fruits of all that our industry had to give, and that is gone.\n\nAnd now here is this further delay.\n\nHow long it will be, how long it will last, depends upon the exertions which we make in this Island.\n\nAn effort the like of which has never been seen in our records is now being made.\n\nWork is proceeding everywhere, night and day, Sundays and week days.\n\nCapital and Labor have cast aside their interests, rights, and customs and put them into the common stock.\n\nAlready the flow of munitions has leaped forward.\n\nThere is no reason why we should not in a few months overtake the sudden and serious loss that has come upon us, without retarding the development of our general program.\n\nNevertheless, our thankfulness at the escape of our Army and so many men, whose loved ones have passed through an agonizing week, must not blind us to the fact that what has happened in France and Belgium is a colossal military disaster.\n\nThe French Army has been weakened, the Belgian Army has been lost, a large part of those fortified lines upon which so much faith had been reposed is gone, many valuable mining districts and factories have passed into the enemy’s possession, the whole of the Channel ports are in his hands, with all the tragic consequences that follow from that, and we must expect another blow to be struck almost immediately at us or at France.\n\nWe are told that Herr Hitler has a plan for invading the British Isles.\n\nThis has often been thought of before.\n\nWhen Napoleon lay at Boulogne for a year with his flat-bottomed boats and his Grand Army, he was told by someone.\n\n“There are bitter weeds in England.\n\n” There are certainly a great many more of them since the British Expeditionary Force returned.\n\nThe whole question of home defense against invasion is, of course, powerfully affected by the fact that we have for the time being in this Island incomparably more powerful military forces than we have ever had at any moment in this war or the last.\n\nBut this will not continue.\n\nWe shall not be content with a defensive war.\n\nWe have our duty to our Ally.\n\nWe have to reconstitute and build up the British Expeditionary Force once again, under its gallant Commander-in-Chief, Lord Gort.\n\nAll this is in train; but in the interval we must put our defenses in this Island into such a high state of organization that the fewest possible numbers will be required to give effective security and that the largest possible potential of offensive effort may be realized.\n\nOn this we are now engaged.\n\nIt will be very convenient, if it be the desire of the House, to enter upon this subject in a secret Session.\n\nNot that the government would necessarily be able to reveal in very great detail military secrets, but we like to have our discussions free, without the restraint imposed by the fact that they will be read the next day by the enemy; and the Government would benefit by views freely expressed in all parts of the House by Members with their knowledge of so many different parts of the country.\n\nI understand that some request is to be made upon this subject, which will be readily acceded to by His Majesty’s Government.\n\nWe have found it necessary to take measures of increasing stringency, not only against enemy aliens and suspicious characters of other nationalities, but also against British subjects who may become a danger or a nuisance should the war be transported to the United Kingdom.\n\nI know there are a great many people affected by the orders which we have made who are the passionate enemies of Nazi Germany.\n\nI am very sorry for them, but we cannot, at the present time and under the present stress, draw all the distinctions which we should like to do.\n\nIf parachute landings were attempted and fierce fighting attendant upon them followed, these unfortunate people would be far better out of the way, for their own sakes as well as for ours.\n\nThere is, however, another class, for which I feel not the slightest sympathy.\n\nParliament has given us the powers to put down Fifth Column activities with a strong hand, and we shall use those powers subject to the supervision and correction of the House, without the slightest hesitation until we are satisfied, and more than satisfied, that this malignancy in our midst has been effectively stamped out.\n\nTurning once again, and this time more generally, to the question of invasion, I would observe that there has never been a period in all these long centuries of which we boast when an absolute guarantee against invasion, still less against serious raids, could have been given to our people.\n\nIn the days of Napoleon the same wind which would have carried his transports across the Channel might have driven away the blockading fleet.\n\nThere was always the chance, and it is that chance which has excited and befooled the imaginations of many Continental tyrants.\n\nMany are the tales that are told.\n\nWe are assured that novel methods will be adopted, and when we see the originality of malice, the ingenuity of aggression, which our enemy displays, we may certainly prepare ourselves for every kind of novel stratagem and every kind of brutal and treacherous maneuver.\n\nI think that no idea is so outlandish that it should not be considered and viewed with a searching, but at the same time, I hope, with a steady eye.\n\nWe must never forget the solid assurances of sea power and those which belong to air power if it can be locally exercised.\n\nI have, myself, full confidence that if all do their duty, if nothing is neglected, and if the best arrangements are made, as they are being made, we shall prove ourselves once again able to defend our Island home, to ride out the storm of war, and to outlive the menace of tyranny, if necessary for years, if necessary alone.\n\nAt any rate, that is what we are going to try to do.\n\nThat is the resolve of His Majesty’s Government-every man of them.\n\nThat is the will of Parliament and the nation.\n\nThe British Empire and the French Republic, linked together in their cause and in their need, will defend to the death their native soil, aiding each other like good comrades to the utmost of their strength.\n\nEven though large tracts of Europe and many old and famous States have fallen or may fall into the grip of the Gestapo and all the odious apparatus of Nazi rule, we shall not flag or fail.\n\nWe shall go on to the end, we shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air, we shall defend our Island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender, and even if, which I do not for a moment believe, this Island or a large part of it were subjugated and starving, then our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle, until, in God’s good time, the New World, with all its power and might, steps forth to the rescue and the liberation of the old.",
    //     "location": "House of Commons",
    //     "name": "We Shall Fight on the Beaches",
    //     "speaker": "Winston Churchill",
    //     "speech_id": "19"
    // });
}

export const searchWordInSpeech = (speechId, word) => { };

export const getWordsListFromSpeech = (speechId) => { };

export const getByLocation = (speechId, paragraphId, sentenceId, wordIndex) => { };

export const createGroup = (groupName, words) => { };

export const createPhrase = (words) => { };

export const addSpeech = (name, speaker, location, data, file) => { };