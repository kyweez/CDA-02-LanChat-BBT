const bcrypt = require('bcrypt');

/**
 * @todo : work on the regex because 2 letters names are not accepted and several spaces either...
 */
const regexName = /^([A-Za-z]{2,29})([ \-]{1})?([A-Za-z]{2,30})$|^[A-Za-z]{2,60}$/;
const regexUser = /^([a-zA-Z0-9]{1,9})([a-zA-Z]{1,2})([a-zA-Z0-9]{1,9})$/;
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#$%*+=])[A-Za-z\d#$%*+=]{8,}$/;

class Security {
    /**
     * This method checks if the input password fit to the given hash (related to the account)
     * @param string _userInput 
     * @param string _passwordDB
     * @returns boolean 
     */
    static checkEncryptedPassword(_userInput, _passwordDB) {
        if (Security.isValidPassword(_userInput))
            return false;
        if (typeof _passwordDB !== "string")
            return false;
        if (_passwordDB.length === 0)
            return false;
        return bcrypt.compareSync(_userInput, _passwordDB);
    }
 
    /**
     * This method translate a plaintext password into an encrypted password
     * The plaintext password has to fit to the regex
     * The encryption depends on the salt
     * @param string _plainTextPassword
     * @returns encrypted password (string)
     */
    static encryptPassword(_plainTextPassword) {
        if (!this.isValidString(_plainTextPassword, regexPassword))
            return "";
        return bcrypt.hashSync(_plainTextPassword, 10);
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
     * This method checks if the input string is a valid email
     * The email validity depends on the associated regex
     * @param string _email
     * @returns boolean
     */
    static isValidEmail(_email) {
        return Security.isValidString(_email, regexEmail);
    }
    
    /**
     * Tnis method checks if the given argument is a valid id
     * This id must be a positive integer
     * @param int _id
     * @returns boolean
     */
    static isValidId(_id) {
        if (!Security.isValidNumber(_id))
            return false;
        if (_id < 0)
            return false;
        return true;
    }
    
    /**
     * This method checks if the input string is a valid name
     * Name can't exceed 61 characters
     * It can't contain numbers
     * It can contain a dash or a space, no more special chars
     * @param string _name
     * @returns boolean
     */
    static isValidName(_name) {
        return Security.isValidString(_name, regexName);
    }

    /**
     * This method checks if the given argument is a valid number (excluding Infinty and NaN)
     * @param int _number
     * @returns boolean
     */
    static isValidNumber(_number) {
        if (typeof _number !== "number")
            return false;
        if (!isFinite(_number))
            return false;
        return true;
    }
    
    /**
     * At the moment, this method checks if the argument might be a password
     * The implementation might change depending on the decision we'll take about password management
     * @todo : A reflechir pour implementation
     * @param string _password
     * @returns boolean
     */
    static isValidPassword(_password) {
        if (!(typeof _password === "string"))
            return false;
        if (!(_password.length > 0))
            return false;
        return true;
    }

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
     * This method checks if the input object is a valid User
     * A valid User needs t o respect a list of constraints
     * It must have the following valid attributes : Id, lastname, firstname, username, email, creationDate, password 
     * @param User _user
     * @returns boolean
     */
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
     * This method checks if the input string is a valid username
     * A username cant exceed 20 chararcters
     * It can't contains special chars
     * It can contain number but not only
     * It needs at least one letter
     * @param string _username
     * @returns boolean
     */
    static isValidUsername(_username) {
        return Security.isValidString(_username, regexUser);
    }

    /**
     * This method checks if the input object is a valid User
     * A valid User needs t o respect a list of constraints
     * It must have the following valid attributes : Id, lastname, firstname, username, email, creationDate, password 
     * @param User _user
     * @returns boolean
     */
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
}

module.exports = Security;