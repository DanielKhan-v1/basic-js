const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;

    let result = [];

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == "string") {
            result.push(members[i].trim()[0].toUpperCase());
        }
    }

    return result.sort().join("");
};