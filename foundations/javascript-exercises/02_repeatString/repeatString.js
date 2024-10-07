const repeatString = function(string, num) {
    let longstring = "";
    if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++){
        longstring += string;
    }
    return longstring;
};

// Do not edit below this line
module.exports = repeatString;
