const repeatString = function(string_to_repeat, amount) {
    let output = '';
    if (amount > 0) {
        for (let i = 1; i <= amount; i++) {
            output += string_to_repeat
        }
    } else if (amount < 0) {
        output = 'ERROR'
    }

    return output
};

module.exports = repeatString;
