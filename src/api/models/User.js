const Security = require("./Security.js");
const UserManager = require("./UserManager.js");

class User {
    // ############### ATTRIBUTES ###############
    #id
    #lastname;
    #firstname;
    #username;
    #password;
    #email;
    #creationDate;
    #lastLogged;
    #isLogged;

    // ############### CONSTRUCTOR ###############
    /**
     * User class constructor
     * @param string _lastname
     * This variable must be a string between 2 and 60 chars.
     * It can contains several spaces and dashes but not more than 1 in a row, can't start or finish by it
     * @param string _firstname
     * This variable must be a string between 2 and 60 chars.
     * It can contains several spaces and dashes but not more than 1 in a row, can't start or finish by it
     * @param string _username
     * This variable can contain only 20 characters and minimum 3
     * It can contain number and letters, but not exclusively numbers
     * @param string _password
     * This variable must have at least 8 characters, included a capital, a special char and a number
     * @param string _email
     * This variable must fit to the mail regex given in the Security class
     */
    constructor(_lastname, _firstname, _username, _password, _email) {
        this.#id = 0;
        this.setLastname(_lastname) || this.setLastname("");
        this.setFirstname(_firstname) || this.setFirstname("");
        this.setUserName(_username) || this.setUserName("");
        this.setPassword(_password);
        this.setEmail(_email) || this.setPassword("");
        this.#creationDate = new Date();
    }

    // ############### GETTERS ###############
    /**
     * @returns int
     */
    getId() {
        return this.#id;
    }

    /**
     * @returns string
     */
    getLastname() {
        return this.#lastname;
    }

    /**
     * @returns string
     */
    getFirstname() {
        return this.#firstname;
    }

    /**
     * @returns string
     */
    getUsername() {
        return this.#username;
    }

    /**
     * @returns string
     */
    getPassword() {
        return this.#password;
    }

    /**
     * @returns string
     */
    getEmail() {
        return this.#email;
    }

    /**
     * @returns Date
     */
    getCreationDate() {
        return this.#creationDate;
    }

    /**
     * @returns Date
     */
    getLastLogged() {
        return this.#lastLogged;
    }

    /**
     * @returns boolean
     */
    getIsLogged() {
        return this.#isLogged;
    }

    // ############### SETTERS ###############
    /**
     * This setter checks if the given int is a valid Id and if it's unique before setting the value
     * @param int _id
     * @returns boolean (true if it worked, false if if it didn't)
     */
    setId(_id) {
        if (!Security.isValidId(_id))
            return false;
        if (!UserManager.isUniqueId(_id))
            return false;
        this.#id = _id;
        return true;
    }

    /**
     * This setter checks if the given string is a valid name before setting the value
     * @param string _lastname 
     * @returns boolean (true if it worked, false if if it didn't)
     */
    setLastname(_lastname) {
        if (!Security.isValidName(_lastname))
            return false;
        this.#lastname = _lastname;
        return true;
    }

    /**
     * This setter checks if the given string is a valid name before setting the value
     * @param string _firstname 
     * @returns boolean (true if it worked, false if it didn't)
     */
    setFirstname(_firstname) {
        if (!Security.isValidName(_firstname))
            return false;
        this.#firstname = _firstname;
        return true;
    }

    /**
     * This setter checks if the given string is a valid username before setting the value
     * @param string _username
     * @returns boolean (true if it worked, false if it didn't)
     */
    setUserName(_username) {
        if (!Security.isValidUsername(_username))
            return false;
        this.#username = _username;
        return true
    }

    /**
     * This setter checks if the given password is a string and if it respects the password constraints given in the Security class
     * It encrypts this password and returns the hash. If there is a problem, the return password will be an empty string.
     * @param string _password 
     * @returns boolean (true if it worked, false if it didn't)
     */
    setPassword(_password) {
        if (typeof _password !== "string") {
            this.#password = "";
            return false;
        }
        this.#password = Security.encryptPassword(_password);
        return true;
    }

    /**
     * This setter checks if the given argument is a valid email before setting the value
     * @param string _email 
     * @returns boolean (true if it worked, false if it didn't)
     */
    setEmail(_email) {
        if (!Security.isValidEmail(_email))
            return false;
        this.#email = _email;
        return true
    }

    /**
     * This setter simply update the date of the lastLogged attribute
     */
    setLastLogged() {
        this.#lastLogged = new Date();
    }

    /**
     * This setter checks if the given argument is a valid boolean before setting the value
     * @param boolean _isLogged 
     * @returns boolean (true if the value has beem updated, false if it didn't suceed)
     */
    setIsLogged(_isLogged) {
        if (typeof _isLogged !== "boolean") {
            this.#isLogged = false;
            return false;
        }
        this.#isLogged = _isLogged;
        return true;
    }

    // ############### METHODS ###############
    /**
     * This method returns the most important information about the current object
     * It will be deleted later, we just need it during the programming to make some tests
     * @returns string
     */
    toString() {
        let str;

        str = `Lastname  : ${this.#lastname}\n`;
        str += `Firstname : ${this.#firstname}\n`;
        str += `Username  : ${this.#username}\n`;
        str += `Email     : ${this.#email}\n`;
        str += `Password  : ${this.#password}\n`;
        return str;
    }

    /**
     * This method takes a User object as an argument
     * If the given user is a valid user and his attributes are uniques, every attributes are copied in the current object
     * @param User _user
     * @returns boolean (true if it worked, false if it didn't)
     */
    copy(_user) {
        if (!Security.isValidUser(_user))
            return false;
        if (!UserManager.hasUniqueAttributes(_user))
            return false;
        this.#lastname = _user.getLastname();
        this.#firstname = _user.getFirstname();
        this.#username = _user.getUsername();
        this.#password = _user.getPassword();
        this.#email = _user.getEmail();
        return true;
    }
}

module.exports = User;