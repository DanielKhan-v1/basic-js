const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counter = 1;
        let maxDepth = 1;

        for (let item of arr) {
            if (Array.isArray(item)) {
                counter = 1 + this.calculateDepth(item);
            }

            maxDepth = Math.max(counter, maxDepth);
        }

        return maxDepth;
    }
};