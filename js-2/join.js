function join(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i !== arr.length - 1) {
        result += " ";
      }
    }
    return result;
  }
  
  console.log(join(['Hello', 'world'])); // "Hello world"
  console.log(join(['I', 'love', 'coding'])); // "I love coding"
  console.log(join([])); // ""
  