const CustomError = require("../extensions/custom-error");

const chainMaker = {
    values: [],

    getLength() {
        return this.values.length;
    },
    addLink(value) {
        this.values.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position != "number") {
            this.clearChain();
            throw new Error("Got ya!");
        }

        this.values.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.values.reverse();
        return this;
    },
    finishChain() {
        let result = "";

        for (let item of this.values) {
            result += `( ${item} )~~`;
        }

        this.clearChain();

        return result.slice(0, -2);
    },
    clearChain() {
        this.values = [];
    },
};

module.exports = chainMaker;