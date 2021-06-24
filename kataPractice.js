//Kata Practice

/* This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests! */
function multiply(a, b) {
    const result = BigInt(a) * BigInt(b)
    return result.toString()
}



/* Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. */

function nextBigger(n) {
    var d = n.toString().split('');
    var p = -1;
    for (var i = d.length - 1; i > 0; i--) {
        if (+d[i] > +d[i - 1]) {
            p = i - 1;
            break;
        }
    }
    if (p == -1) return p;
    var right = d.splice(p);
    var pv = right.splice(0, 1)[0];
    var mm = null, mmi = null;
    for (var i = 0; i < right.length; i++) {
        if (right[i] > pv) {
            if (mm == null || right[i] < mm) {
                mm = right[i];
                mmi = i;
            }
        }
    }

    if (mmi == null) return -1;

    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();
    var ret = +d.concat([mm]).concat(right).join('');
    if (ret < n) return -1;

    return ret;
}


/* Overview
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word". */

function i(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let letter of word) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelCount += 1
        }
    }
    const consonantCount = word.length - vowelCount;

    if (word.length > 1
        && word === word[0].toUpperCase() + word.slice(1)
        && word[0].toUpperCase() !== 'I'
        && consonantCount > vowelCount) {
        return 'i' + word
    }
    return 'Invalid word'
}

/* Write a function that takes a string of parentheses, and determines
 if the order of the parentheses is valid. The function
 should return true if the string is valid, and false if it's invalid. */

function validParentheses(parens) {
    let count = 0
    for (let char of parens) {
        if (char === '(') {
            count++
        }
        if (char === ')') {
            count--
        }
        if (count < 0) {
            return false
        }
    }
    return count === 0
}

/* So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

example:

[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!". */

function meeting(x, need) {
    if (!need || need == 0) { return 'Game On' };
    let freeChairsInRooms = x
        .map(room => { let i = room[1] - room[0].length; return i <= 0 ? 0 : i; })
    if (freeChairsInRooms.reduce((a, b) => a + b, 0) < need) { return 'Not enough!' };
    let took = [];
    for (let i = 0; i < freeChairsInRooms.length; i++) {
        let chairs = freeChairsInRooms[i];
        if (need != 0) {
            if (need - chairs >= 0) {
                need -= chairs; took.push(chairs);
            } else { took.push(need); need -= need; };
        } else { break; }
    }

    return took;
}

/* Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time. */

function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    const years = Math.floor(seconds / (86400 * 365));
    const days = Math.floor(seconds % (86400 * 365) / 86400);
    const hours = Math.floor(((seconds % (86400 * 365)) % 86400) / 3600);
    const minutes = Math.floor(((seconds % (86400 * 365)) % 86400) % 3600 / 60);
    const second = (((seconds % (86400 * 365)) % 86400) % 3600) % 60;

    const isYears = () => (years ? years + " year" + (years === 1 ? ', ' : 's, ') : '');

    const isDays = () => (days ? days + " day" + (days === 1 ? ', ' : 's, ') : '');

    const isHours = () => {
        if (isMinutes().charAt(0) === 'a') {
            return (hours ? hours + " hour" + (hours === 1 ? ' ' : 's ') : '');
        }
        if (second === 0 && minutes === 0) {
            return (hours ? hours + " hour" + (hours === 1 ? '' : 's') : '');
        }
        return (hours ? hours + " hour" + (hours === 1 ? ', ' : 's, ') : '');
    };


    const isMinutes = () => {
        if (second === 0 && days !== 0) {
            return 'and ' + (minutes ? minutes + " minute" + (minutes === 1 ? '' : 's') : '');
        }
        return (minutes ? minutes + " minute" + (minutes === 1 ? '' : 's') : '');
    }
    const isSeconds = () => (second ? (((seconds > 60) ? ' and ' + second + " second" : +second + " second") + (second === 1 ? '' : 's')) : '');


    return isYears() + isDays() + isHours() + isMinutes() + isSeconds()
}

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

function highAndLow(numbers) {
    const num = numbers.split(' ');
    return `${Math.max(...num)} ${Math.min(...num)}`
}