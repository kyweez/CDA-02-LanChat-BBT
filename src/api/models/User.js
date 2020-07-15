const Security = require("./Security.js");

class User {
    // ############### ATTRIBUTS ###############
    #lastname;
    #firstname;
    #username;
    #password;
    #email;
    #creationDate;
    #lastLogged;
    #isLogged;

    constructor(_lastname, _firstname, _username, _password, _email) {
        this.#lastname = this.setLastname(_lastname);
        this.#firstname = this.setFirstName(_firstname);
        this.#username = this.setUserName(_username);
        this.#password = this.setPassword(_password);
        this.#email = this.setEmail(_email);
        this.#creationDate = new Date();
    }

    // ############### GETTERS ###############
    getLastname() {
        return this.#lastname;
    }

    getFirsname() {
        return this.#firstname;
    }

    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    getEmail() {
        return this.#email;
    }

    getCreationDate() {
        return this.#creationDate;
    }

    getLastLogged() {
        return this.#lastLogged;
    }

    getIsLogged() {
        return this.#isLogged;
    }

    // ############### SETTERS ###############
    setLastname(_lastname) {
        if (Security.isValidName(_lastname)){
            this.#lastname = "";
            return false;
        }
        this.#lastname = _lastname;
        return true;
    }

    setFirstName(_firstname) {
        if (Security.isValidName(_firstname)){
            this.#firstname = "";
            return false;
        }
        this.#firstname = _firstname;
        return true;
    }

    setUserName(_username) {
        if (Security.isValidUsername(_username)){
            this.#username = "";
            return false;
        }
        this.#username = _username;
        return true
    }

    setPassword(_password) {
        if (typeof _password !== "string"){
            this.#password = "";
            return false;
        }
        this.#password = _password;
        return true
    }

    setEmail(_email) {
        if (Security.isValidEmail(_email)){
            this.#email = "";
            return false;
        }
        this.#email = _email;
        return true
    }

    setLastLogged(_lastLogged) {
        /**
         * @todo Voir comment on fait changer le truc ?
         */
        if (Security.isValidDate(_lastLogged)){
            this.#lastLogged = new Date();
            return false;
        }
        this.#lastLogged = new Date();
        return true;
    }

    setIsLogged(_isLogged) {
        if (typeof _isLogged !== "boolean"){
            this.#isLogged = false;
            return false;
        }
        this.#isLogged = _isLogged;
        return true;
    }
}

module.exports = User;