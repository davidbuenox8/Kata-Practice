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