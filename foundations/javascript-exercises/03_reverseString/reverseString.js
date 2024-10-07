const reverseString = function(string) {
    const strArray = string.split("");
    const len = strArray.length;
    let revString = "";
    for (let i = len; i > 0; i--) {
        revString += strArray[i - 1]
    }
    return revString
};

// Do not edit below this line
module.exports = reverseString;
