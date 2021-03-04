const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    function check(value) {
        if (typeof value == "boolean" || value === null) {
            return String(value);
        } else return value;
    }

    if (str === undefined) throw new Error("Got Ya!");

    let result = "";

    let params = {
        repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
        separator: check(options.separator) ? String(options.separator) : "+",
        addition: check(options.addition) ? String(options.addition) : "",
        additionRepeatTimes: options.additionRepeatTimes ?
            options.additionRepeatTimes :
            1,
        additionSeparator: check(options.additionSeparator) ?
            String(options.additionSeparator) :
            "|",
    };

    for (let i = params.repeatTimes; i > 0; i--) {
        result += str;

        for (let y = params.additionRepeatTimes; y > 0; y--) {
            result += params.addition;

            if (y == 1) continue;
            result += params.additionSeparator;
        }

        if (i == 1) continue;
        result += params.separator;
    }

    return result;
};