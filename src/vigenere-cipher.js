const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(option) {
        this.option = option;
    }

    alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    square = [];

    generateSquare() {
        for (let i = 0; i < this.alph.length; i++) {
            let row = this.alph.slice(i);
            row += this.alph.slice(0, i);
            this.square.push(row.split(""));
        }
    }

    keyExtender(key, message) {
        let newKey = "";
        let y = 0;

        for (let i = 0; i < message.length; i++) {
            if (this.alph.indexOf(message.toUpperCase()[i]) == -1) {
                newKey += message[i];
                continue;
            }

            newKey += key[y];
            y++;
            if (y == key.length) y = 0;
        }

        return newKey;
    }

    encrypt(message, key) {
        if (message == undefined || key == undefined) throw new Error("Got ya!");

        let encrypted = "";

        message = message.toUpperCase();
        key = key.toUpperCase();

        this.generateSquare();
        key = this.keyExtender(key, message);

        for (let i = 0; i < message.length; i++) {
            if (this.alph.indexOf(message[i]) === -1) {
                encrypted += message[i];
                continue;
            }

            let x = this.alph.indexOf(message[i]);
            let y = this.alph.indexOf(key[i]);

            encrypted += this.square[x][y];
        }

        if (this.option === false) {
            return encrypted.split("").reverse().join("");
        }

        return encrypted;
    }

    decrypt(message, key) {
        if (message == undefined || key == undefined) throw new Error("Got ya!");

        let decrypted = "";
        message = message.toUpperCase();
        key = key.toUpperCase();

        this.generateSquare();
        key = this.keyExtender(key, message);

        for (let i = 0; i < message.length; i++) {
            if (this.alph.indexOf(message[i]) === -1) {
                decrypted += message[i];
                continue;
            }
            let x = this.alph.indexOf(key[i]);
            let y = this.square[x].indexOf(message[i]);
            decrypted += this.alph[y];
        }

        if (this.option === false) {
            return decrypted.split("").reverse().join("");
        }

        return decrypted;
    }
}

module.exports = VigenereCipheringMachine;