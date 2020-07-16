const User = require("./User.js");
const Security = require("./Security.js");

class UserManager {
    // ############### ATTRIBUTES ###############
    #userTab;
    #lastId;

    // ############### CONSTRUCTOR ###############
    constructor() {
        this.user = [];
        this.#lastId = 0;
    }

    // ############### METHODS ###############

    create(_user) {
        if (!Security.isValidUser(_user))
            return undefined;
        _user.setId(++this.#lastId);
        this.#userTab.push(_user);
        return _user;
    }

    //@param  _filter le(s) filtre(s) à appliquer sous forme d'expression lambda (ex: item => item.id === 2)
    read(_filter) {
        return Object.assign(new User(), this.#userTab.find(_filter));
    }

    /**
     * ICI ON A STOP  !!
     */

    update(){}

    delete(_username) {
        for (let i = 0; i < this.user.length; i++) {
            if (this.user[i].username == _username) {
                this.user.splice(i, 1);
                break;

            }
        }

    }

    // updateEmail(_user, _email) {
    //     if (!(typeof email === 'string')) {
    //         console.log("Le mail n'est pas dans le bon format");
    //         return;
    //     }
    //     if (!(_email.length > 7)) {
    //         console.log("Le mail est pas assez long");
    //         return;
    //     }

    //     _user.email = _email;
    // }
    // updateUsername(_user, _username) {
    //     if (!(typeof _username === 'string')) {
    //         console.log("Le nom n'est pas dans le bon format");
    //         return;
    //     }
    //     if (!(_username.length > 0)) {
    //         console.log("Le nom n'est pas assez long");
    //         return;
    //     }

    //     _user.username = _username;
    // }
    // updatePassword(_user, _password) {
    //     if (!(_password.length > 6)) {
    //         console.log("Le mot de passe n'est pas assez long");
    //         return;
    //     }
    // }


}
module.exports = UserManager;
