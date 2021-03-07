const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (
        isNaN(parseFloat(sampleActivity)) ||
        typeof sampleActivity != "string" ||
        +sampleActivity <= 0 ||
        +sampleActivity > 15
    )
        return false;

    let result =
        Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD);

    if (isNaN(result)) return false;

    return Math.ceil(result);
};