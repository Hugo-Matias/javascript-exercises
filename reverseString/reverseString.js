const reverseString = function(inputString) {
    let reversed = []
    for (let i = 0; i < inputString.length; i++){
        reversed.unshift(inputString[i])
    }
    return reversed.join('')
};

module.exports = reverseString;
