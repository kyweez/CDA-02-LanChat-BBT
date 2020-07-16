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
        if (!Security.isValidId(_id))
            return false;
        if (!UserManager.isUniqueId(_id))
            return false;
        this.#id = _id;
        return true;
    }

    setLastname(_lastname) {
        if (!Security.isValidName(_lastname))
            return false;
        this.#lastname = _lastname;
        return true;
    }

    setFirstname(_firstname) {
        if (!Security.isValidName(_firstname))
            return false;
        this.#firstname = _firstname;
        return true;
    }

    setUserName(_username) {
        if (!Security.isValidUsername(_username))
            return false;
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
        if (!Security.isValidEmail(_email))
            return false;
        this.#email = _email;
        return true
    }

    setLastLogged() {
        this.#lastLogged = new Date();
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

        str = `Lastname  : ${this.#lastname}\n`;
        str += `Firstname : ${this.#firstname}\n`;
        str += `Username  : ${this.#username}\n`;
        str += `Email     : ${this.#email}\n`;
        str += `Password  : ${this.#password}\n`;
        return str;
    }

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

let userTest1 = new User("aure", "boubou", "boudaure", "123", "aure@gmail.com");
let userTest2 = new User("aure", "boubou", "boudaure", "123", "aure@gmail.com");
let userTest3 = new User("aure", "boubou", "boudaure", "abc", "aure@gmail.com");

console.log(userTest1.toString());
console.log(userTest2.toString());
console.log(userTest3.toString());

console.log(`Test avec bon passsword     : ${Security.checkEncryptedPassword("123", userTest1.getPassword())}`);
console.log(`Test avec mauvais passsword : ${Security.checkEncryptedPassword("1234", userTest1.getPassword())}\n`);

console.log(`Test avec bon passsword     : ${Security.checkEncryptedPassword("123", userTest2.getPassword())}`);
console.log(`Test avec mauvais passsword : ${Security.checkEncryptedPassword("1234", userTest2.getPassword())}\n`);

console.log(`Test avec bon passsword     : ${Security.checkEncryptedPassword("abc", userTest3.getPassword())}`);
console.log(`Test avec mauvais passsword : ${Security.checkEncryptedPassword("1234", userTest3.getPassword())}\n`);

console.log(Security.isValidPassword(userTest3.getPassword()))
console.log(Security.isValidPassword(userTest2.getPassword()))
console.log(Security.isValidPassword(userTest2))

module.exports = User;