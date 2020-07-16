const User = require("./User.js");
const Security = require("./Security.js");

class UserManager {
    // ############### ATTRIBUTES ###############
    #userTab;
    #lastId;

    // ############### CONSTRUCTOR ###############
    constructor() {
        this.userTab = [];
        this.#lastId = 0;
    }

    // ############### GETTER ###############
    getUserTab() {
        return this.#userTab;
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
    /**
     * @todo : A tester !!!!
     * @param callback _filter 
     */
    read(_filter) {
        return Object.assign(new User(), this.#userTab.find(_filter));
    }

    update(_filter, _user) {
        user = this.#userTab.find(_filter);
        if (user === undefined)
            return user;
        user.copy(_user);
        return user;
    }

    delete(_filter) {
        let indexToDelete = this.userTab.findIndex(_filter);
        if (indexToDelete === -1)
            return false;
        this.userTab.splice(indexToDelete, 1);
        return true;
    }

    static isUniqueId(_id) {
        if ((this.getUserTab().find(item => item.getId() === _id)) !== undefined)
            return false;
        return true;
    }

    static isUniqueUsername(_username) {
        if ((this.getUserTab().find(item => item.getUsername() === _username)) !== undefined)
            return false;
        return true;
    }

    static isUniqueEmail(_email) {
        if ((this.getUserTab().find(item => item.getEmail() === _email)) !== undefined)
            return false;
        return true;
    }

    static hasUniqueAttributes(_user) {
        if (!this.isUniqueId(_user.getId()))
            return false;
        if (!this.isUniqueUsername(_user.getUsername()))
            return false;
        if (!this.isUniqueEmail(_user.getEmail()))
            return false;
        return true;

    }
}

module.exports = UserManager;