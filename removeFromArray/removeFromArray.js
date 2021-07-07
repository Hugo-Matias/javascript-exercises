const removeFromArray = function() {
  let args = Array.from(arguments)
  let arr = args[0]

  for (let i = 1; i < args.length; i++) {
    arr.forEach(element => {
      if (args[i] === element) {
        const remIndex = arr.indexOf(args[i])
        if (remIndex === 0) {
          arr.shift()
        } else if (remIndex === arr.length - 1) {
          arr.pop()
        } else {
          arr = arr.slice(0, remIndex).concat(arr.slice(remIndex + 1))
        }
      }
    });
  }
  return arr
};

module.exports = removeFromArray;
