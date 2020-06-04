class User {

    constructor(_name, _firstname, _username, _password, _email) {
        this._name = _name || " ";         // A modifier (pas problematique mais gardons la memem convention) 
        this._firstname = _firstname || "";        // A modifier (pas problematique mais gardons la memem convention)
        this.username = _username || "";
        this.password = _password;
        this.email = this._email;        // A modifier
        this.creationDate = new date();
        this.lastLogged = new date();
        this.isLogged = false;
    }
    
    // ############### GETTERS ###############
    
    // ON PRIVILIGIERA LE CAMEL CASE pourLesNomsDeFonctions
    get_name() {
        return this._name       // A modifier + ; manquant !
    }

    get_firstname() {
        return this._firstname       // A modifier + ; manquant !
    }

    get_username() {
        return this._username;       // A modifier
    }
    get_password() {
        return this._password       // A modifier + ; manquant !
    }
    get_email() {
        return this._email       // A modifier + ; manquant !
    }
    get_creationDate() {
        return this._creationDate       // A modifier + ; manquant !
    }

    get_lastLogged() {
        return this._lastLogged       // A modifier + ; manquant !
    }

    get_isLogged() {
        return this._isLogged       // A modifier + ; manquant !
    }

    // ############### GETTERS ###############
    set_name(_name) {
        this._name = _thisname;       // A modifier
    }

    set_firstname(_firstname) {
        this._firstname = _firstname        // A modifier + ; manquant !
    }

    set_username(_username) {
        this._username = _username;       // A modifier
    }
    set_password(_password) {
        this._password = _password;       // A modifier
    }
    set_email(_email) {
        this._email = _email;       // A modifier
    }
    set_creationDate(_creationDate) {
        this._creationDate = _creationDate;       // A modifier
    }

    set_lastLogged(_lastLogged) {
        this._lastLogged = _lastLogged;       // A modifier
    }

    set_isLogged(_isLogged) {
        this._isLogged = _isLogged;       // A modifier
    }

}

module.exports = User;









