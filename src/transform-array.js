const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (arr == undefined) throw new Error();

    let temp = arr.slice();

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === "--discard-next") {
            temp[i] = undefined;
            temp.splice(i + 1, 1);
            i = 0;
        } else if (temp[i] === "--discard-prev") {
            if (i == 0) {
                temp[i] = undefined;
                temp.splice(i, 1);
            } else {
                temp[i] = undefined;
                temp.splice(i - 1, 1);
            }
            i = 0;
        } else if (temp[i] === "--double-next") {
            temp[i] = undefined;
            temp.splice(i, 1, temp[i + 1]);
            i = 0;
        } else if (temp[i] === "--double-prev") {
            temp[i] = temp[i - 1];
            i = 0;
        }
    }

    let result = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == undefined) {
            continue;
        } else {
            result.push(temp[i]);
        }
    }

    return result;
};