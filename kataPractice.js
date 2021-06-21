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