const sumAll = function(startNum, endNum) {
  let sum = 0;
  const args = Array.from(arguments)

  args.forEach(element => {
    if (typeof(element) != 'number' || element < 0) {
      sum = 'ERROR';
    }
  });
  if (sum == 'ERROR') {
    return sum;
  }
  
  if (args[0] > args[1]) {
    startNum = args[1];
    endNum = args[0];
  }

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
