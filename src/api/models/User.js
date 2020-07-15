const Security = require("./Security.js");

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
    getId() {
        return this.#id;
    }

    getLastname() {
        return this.#lastname;
    }

    getFirstname() {
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
    setId(_id) {
        if (!Security.isValidId(_id)) {
            this.#id = 0;
            return false;
        }
        this.#id = _id;
        return true;
    }

    setLastname(_lastname) {
        if (!Security.isValidName(_lastname)) {
            this.#lastname = "";
            return false;
        }
        this.#lastname = _lastname;
        return true;
    }

    setFirstname(_firstname) {
        if (!Security.isValidName(_firstname)) {
            this.#firstname = "";
            return false;
        }
        this.#firstname = _firstname;
        return true;
    }

    setUserName(_username) {
        if (!Security.isValidUsername(_username)) {
            this.#username = "";
            return false;
        }
        this.#username = _username;
        return true
    }

    setPassword(_password) {
        if (typeof _password !== "string") {
            this.#password = "";
            return false;
        }
        this.#password = Security.encryptPassword(_password);
        return true;
    }

    setEmail(_email) {
        if (!Security.isValidEmail(_email)) {
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
        if (!Security.isValidDate(_lastLogged)) {
            this.#lastLogged = new Date();
            return false;
        }
        this.#lastLogged = new Date();
        return true;
    }

    setIsLogged(_isLogged) {
        if (typeof _isLogged !== "boolean") {
            this.#isLogged = false;
            return false;
        }
        this.#isLogged = _isLogged;
        return true;
    }

    // ############### METHODS ###############
    toString() {
        let str;

        str = `Lastname : ${this.#lastname}\n`;
        str += `Firstname : ${this.#firstname}\n`;
        str += `Username : ${this.#username}\n`;
        str += `Email : ${this.#email}\n`;
        str += `Password : ${this.#password}\n`;
    }
}

let userTest1 = new User("aure", "boubou", "boudaure", "123", "aure@gmail.com");

console.log(userTest1 instanceof User);
console.log(userTest1.getLastname());
console.log(userTest1.getFirstname());
console.log(userTest1.getUsername());
console.log(userTest1.getEmail());
console.log(userTest1 instanceof User);

console.log('le dernier console.log ', userTest1.getPassword());
console.log(Security.checkEncryptedPassword("1234", userTest1.getPassword()));

module.exports = User;




