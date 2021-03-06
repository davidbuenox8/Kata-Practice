//Optimize the given directions

function dirReduc(arr) {
  let shortDir = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
      (arr[i + 1] === 'NORTH' && arr[i] === 'SOUTH') ||
      (arr[i] === 'EAST' && arr[i + 1] === 'WEST') ||
      (arr[i] === 'WEST' && arr[i + 1] === 'EAST')
    ) {
      i++;
    } else if (
      (shortDir[shortDir.length - 1] === 'NORTH' && arr[i] === 'SOUTH') ||
      (shortDir[shortDir.length - 1] === 'SOUTH' && arr[i] === 'NORTH') ||
      (shortDir[shortDir.length - 1] === 'EAST' && arr[i] === 'WEST') ||
      (shortDir[shortDir.length - 1] === 'WEST' && arr[i] === 'EAST')
    ) {
      shortDir.pop();
    } else {
      shortDir.push(arr[i]);
    }
  }
  return shortDir;
}

//How many people liked a post

function likes(names) {
  if (names.length === 0) return 'no one likes this';
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  else if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

//getaway Amazon assessment
function droppedRequest(timeRequest) {
  let n = timeRequest.length;
  let notDropped = 0;

  for (let i = 0; i < n; i++) {
    if (i > 2 && timeRequest[i] == timeRequest[i - 3]) {
      notDropped += 1;
    } else if (i > 9 && timeRequest[i] - timeRequest[i - 10] < 10) {
      notDropped += 1;
    } else if (i > 59 && timeRequest[i] - timeRequest[i - 60] < 60) {
      notDropped += 1;
    }
  }
  return notDropped;
}

//get a pair which sum matches the parameter given

function getPair(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return undefined;
}

//get the biggest sum of a contigous subsequence
function maxSequence(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    //cumulating answers to the top

    //compare currentSum add current number
    //with current number and store the maximum value
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    //compare maxSum with currentSum and store the greater value
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

//Find the Smallest (insanely difficult)

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

function smallest(n) {
  let iter = `${n}`.length,
    res = new Map();
  for (let i = 0; i < iter; i++) {
    for (let j = 0; j < iter; j++) {
      let number = `${n}`.split('').move(i, j).join('');
      if (!res.has(+number)) res.set(+number, [i, j]);
    }
  }
  let min = Math.min(...res.keys());
  return [min, ...res.get(min)];
}
