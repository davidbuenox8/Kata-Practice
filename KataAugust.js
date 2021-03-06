//turn seconds into readable time
function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds / 3600 - hh) * 60);
  let ss = Math.round(((seconds / 3600 - hh) * 60 - mm) * 60);

  hh < 10 ? (hh = `0${hh}`) : hh;
  mm < 10 ? (mm = `0${mm}`) : mm;
  ss < 10 ? (ss = `0${ss}`) : ss;

  return `${hh}:${mm}:${ss}`;
}

// get the first two sum pairs and make it optimal
function sumPairs(ints, s) {
  let seen = {};
  for (let num of ints) {
    if (seen[s - num]) return [s - num, num];
    seen[num] = true;
    console.log(seen);
  }
}

//non-optimal
function sumPairs(ints, s) {
  let pair = undefined;
  let length = ints.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (ints[i] + ints[j] == s) {
        pair = [ints[i], ints[j]];
        length = j;
      }
    }
  }
  return pair;
}

//and first attempt
function sumPairs(ints, s) {
  let pairs = {};
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        pairs[j] = [ints[i], ints[j]];
      }
    }
  }
  let pairsKeys = Math.min(parseInt(Object.keys(pairs)));
  return pairs[pairsKeys] || undefined;
}

//Find the only number that repeats an odd number of times
function findOdd(A) {
  let numbersRepetition = {};
  for (let num of A) {
    numbersRepetition[num]
      ? (numbersRepetition[num] += 1)
      : (numbersRepetition[num] = 1);
  }
  for (let odd in numbersRepetition) {
    if (numbersRepetition[odd] % 2 !== 0) return parseInt(odd);
  }
}

//is the string alphanumeric ?
function alphanumeric(string) {
  //your code here
  if (string.length === 0 || string.split(' ').length >= 2) {
    return false;
  }
  if (/^[a-z0-9]+$/i.test(string)) {
    return true;
  }
  return false;
}
