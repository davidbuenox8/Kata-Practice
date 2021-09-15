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
