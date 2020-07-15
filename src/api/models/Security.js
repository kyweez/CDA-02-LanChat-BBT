const user = require("./User.js");
const regexName = /^([A-Za-z]{2,30})([ \-]{1})?([A-Za-z]{2,30})$/;
const regexUser = /^([a-zA-Z0-9]{1,9})([a-zA-Z]{1,2})([a-zA-Z0-9]{1,9})$/;
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

class Security {
    static isValidString(_string, _regex) {
        if (typeof _string !== "string")
            return false;
        if (!(_string.match(_regex)))
            return false;
        return true;
    }

    static isValidDate(_date){
        if (!(_date instanceof Date))
            return false;
        if (_date > new Date())
            return false;
        if (_date.getFullYear < 2020)
            return false;
        return true;
    }

    static isValidName(_string) {
        return Security.isValidString(_string, regexName);
    }

    static isValidUsername(_string) {
        return Security.isValidString(_string, regexUser);
    }

    static isValidEmail(_string){
        return Security.isValidString(_string, regexEmail);
    }
}


let date_mdr = new Date("2020-07-16");
let date_mdr2 = new Date("2020-06-16");

console.log(date_mdr);
console.log(Security.isValidDate(date_mdr));
console.log(Security.isValidDate(date_mdr2));



module.exports = Security;