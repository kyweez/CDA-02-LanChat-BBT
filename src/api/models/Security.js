const bcrypt = require('bcrypt');

/**
 * @todo Regex a retravailler car nom trop court pas pris en compte
 */
const regexName = /^([A-Za-z]{2,30})([ \-]{1})?([A-Za-z]{2,30})$/;
const regexUser = /^([a-zA-Z0-9]{1,9})([a-zA-Z]{1,2})([a-zA-Z0-9]{1,9})$/;
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#$%*+=])[A-Za-z\d#$%*+=]{8,}$/;

class Security {
    /**
     * This method checks wether the input string is valid or not
     * @param string _string 
     * @param string _regex
     * @returns boolean true if the string fits to the constraints
     */
    static isValidString(_string, _regex) {
        if (typeof _string !== "string")
            return false;
        if (!(_string.match(_regex)))
            return false;
        return true;
    }

    /**
     * This method checks if the input date is valid
     * The valid date can't be in the future and can't be before 2020 (since the API is created in 2020)
     * @param Date _date
     * @returns boolean
     */
    static isValidDate(_date) {
        if (!(_date instanceof Date))
            return false;
        if (_date > new Date())
            return false;
        if (_date.getFullYear < 2020)
            return false;
        return true;
    }

    /**
     * This method checks if the input string is a valid name
     * Name can't exceed 61 characters
     * It can't contain numbers
     * It can contain a dash or a space, no more special chars
     * @param string _string
     * @param regex regexName
     * @returns boolean
     */
    static isValidName(_string) {
        return Security.isValidString(_string, regexName);
    }

    /**
     * This method checks if the input string is a valid username
     * A username cant exceed 20 chararcters
     * It can't contains special chars
     * It can contain number but not only
     * It needs at least one letter
     * @param string _string
     * @returns boolean
     */
    static isValidUsername(_string) {
        return Security.isValidString(_string, regexUser);
    }

    static isValidEmail(_string) {
        return Security.isValidString(_string, regexEmail);
    }

    static isValidUser(_user) {
        if (!(_user instanceof User))
            return false;
        if (!this.isValidId(_user.getId()))
            return false;
        if (!this.isValidName(_user.getLastname()) || !this.isValidName(_user.getFirstname()))
            return false;
        if (!this.isValidUsername(_user.getUsername()))
            return false;
        if (!this.isValidEmail(_user.getEmail()))
            return false;
        if (!this.isValidDate(_user.getCreationDate()))
            return false;
        /** @todo : Implementation password */
        if (!this.isValidPassword(_user.getPassword()))
            return false;
        return true;
    }

    /**
     * @todo : A reflechir pour implementation
     * @param string _password 
     */
    static isValidPassword(_password) {
        if (!(typeof _password === "string"))
            return false;
        if (!(_password.length > 0))
            return false;
        return true;
    }

    static isValidNumber(_number) {
        if (typeof _number !== "number")
            return false;
        if (!isFinite(_number))
            return false;
        return true;
    }

    static isValidId(_id) {
        if (!Security.isValidNumber(_id))
            return false;
        if (_id < 0)
            return false;
        return true;
    }

    static encryptPassword(_plainTextPassword) {
        if (!this.isValidString(_plainTextPassword, regexPassword))
            return "";
        return bcrypt.hashSync(_plainTextPassword, 10);
    }

    static checkEncryptedPassword(_userInput, _passwordDB) {
        /**
         * @todo : Proteger le truc
         */
        return bcrypt.compareSync(_userInput, _passwordDB);
    }
}

module.exports = Security;