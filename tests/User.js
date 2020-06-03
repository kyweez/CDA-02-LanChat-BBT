class User {

    constructor(_username, _password, _email, _creationDate, _lastLogged, _isLogged) {

        this.username = _username || "";
        this.password = _password;
        this.email = _email;
        this.creationDate = parseint(_creationDate);
        this.lastLogged = _lastLogged;
        this.isLogged = _isLogged;


    }
    get _username() {
        return this._username;
    }
    get _password() {
        return this._password
    }
    get _email() {
        return this._email
    }
    get _creationDate() {
        return this._creationDate
    }

    get _lastLogged() {
        return this._lastLogged
    }

    get _isLogged() {
        return this._isLogged
    }

    set _username(_username) {
        this._username = _username;
    }
    set _password(_password) {
        this._password = _password;
    }
    set _email(_email) {
        this._email = _email;
    }
    set _creationDate(_creationDate) {
        this._creationDate = _creationDate;
    }

    set _lastLogged(_lastLogged) {
        this._lastLogged = _lastLogged;
    }

    set _isLogged(_isLogged) {
        this._isLogged = _isLogged;
    }

}

const User = new User ()

