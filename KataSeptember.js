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
