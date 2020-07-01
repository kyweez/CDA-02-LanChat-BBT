class User {

    constructor(_lastname, _firstname, _username, _password, _email) {
        this.lastname = _lastname || "";
        this.firstname = _firstname || "";
        this.username = _username || "";
        this.password = _password;
        this.email = _email;
        this.creationDate = new Date();
        this.lastLogged = new Date();
        this.isLogged = false;





        // ############### GETTERS ###############


    }
    get_Name() {
        return this._name;

    }

    get_FirsName() {
        return this.firstname;
    }

    get_UserName() {
        return this.username;
    }
    get_PassWord() {
        return this.password;
    }
    get_Email() {
        return this.email;
    }
    get_CreationDate() {
        return this.creationDate;
    }

    get_LastLogged() {
        return this.lastLogged;
    }

    get_IsLogged() {
        return this.isLogged;
    }


    // ############### SETTERS ###############


    set_Name(_name) {
        this._name = thisname;
    }

    set_FirstName(_firstname) {
        this._firstname = firstname
    }

    set_UserName(_username) {
        this._username = username;
    }
    set_Password(_password) {
        this._password = password;
    }
    set_Email(_email) {
        this._email = email;
    }
    set_CreationDate(_creationDate) {
        this._creationDate = creationDate;
    }

    set_LastLogged(_lastLogged) {
        this._lastLogged = lastLogged;
    }

    set_IsLogged(_isLogged) {
        this._isLogged = isLogged;
    }

}




module.exports = User;





