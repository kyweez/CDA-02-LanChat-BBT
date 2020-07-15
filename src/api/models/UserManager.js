const User = require("./User.js");
const Security = require("./Security.js");

class UserManager {
    constructor() {
        this.user = [];
    }


    isValid(_user) {


        if (!(_user instanceof User)) {
            return false;
        }

        return true;
    }
    create(_user) {
        if (this.isValid(_user)) {




            this.user.push(_user);
        }

        return _user;
    }

    delete(_username) {
        for (let i = 0; i < this.user.length; i++) {
            if (this.user[i].username == _username) {
                this.user.splice(i, 1);
                break;

            }
        }

    }
    updateEmail(_user, _email) {
        if (!(typeof email === 'string')) {
            console.log("Le mail n'est pas dans le bon format");
            return;
        }
        if (!(_email.length > 7)) {
            console.log("Le mail est pas assez long");
            return;
        }
        
        _user.email = _email;
    }
    updateUsername(_user, _username) {
        if (!(typeof _username === 'string')) {
            console.log("Le nom n'est pas dans le bon format");
            return;
        }
        if (!(_username.length > 0)) {
            console.log("Le nom n'est pas assez long");
            return;
        }
        
        _user.username = _username;
    }
    updatePassword(_user,_password){
        if (!(_password.length > 6)) {
            console.log("Le mot de passe n'est pas assez long");
            return;
        }
    }
    read(_username) {

        let user1 = this.user.find(user1 => user1.username === parseInt(_username));

        if (user1 !== undefined) {
            let clone = Object.assign(new User(), user1);
            return clone;
        }

        return undefined;
    }
}
module.exports = UserManager;
