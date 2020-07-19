const User = require("./User.js");
const Security = require("./Security.js");

class UserManager {
    // ############### ATTRIBUTES ###############
    #userTab;
    #lastId;

    // ############### CONSTRUCTOR ###############
    /**
     * UserManager class constructor
     * This class contains (at the moment a User[] which is used as a DB)
     * The lastId attribute is the reference used to creat new IDs in the DB
     */
    constructor() {
        this.userTab = [];
        this.#lastId = 0;
    }

    // ############### GETTER ###############
    /**
     * @returns User[]
     */
    getUserTab() {
        return this.#userTab;
    }

    // ############### METHODS ###############
    /**
     * This method create a new entry in the DB.
     * It checks if the given User is valid and it pushes in the DB.
     * If the given user is pushed, returns it. Else, it returns undefined.
     * @param User _user
     * @returns User
     */
    create(_user) {
        if (!Security.isValidUser(_user))
            return undefined;
        _user.setId(++this.#lastId);
        this.#userTab.push(_user);
        return _user;
    }


    /**
     * This method takes a callback as a parameter and returns the desire object if it's found
     * @param function callback (ex: item => item.id === 2)
     * This call back finds the object in the DB with an id === 2
     * If nothing is found, returns undefined, else returns the object found
     * @returns User
     */
    read(_filter) {
        return Object.assign(new User(), this.#userTab.find(_filter));
    }

    /**
     * This method looks for an object to update depending on the given callback
     * If the object is found, and if the user given as an argument is valid and has unique attributes, update the found object by a copy
     * If the object is found, and if the user given as an argument isn't valid, returns the found object without updating it
     * If the object is not found, returns undefined
     * @param function callback (ex: item => item.id === 2)
     * This call back finds the object in the DB with an id === 2
     * If nothing is found, returns undefined, else returns the object found
     * @param User _user
     * @returns User
     */
    update(_filter, _user) {
        user = this.#userTab.find(_filter);
        if (user === undefined)
            return user;
        user.copy(_user);
        return user;
    }

    /**
     * This method looks for an object to delete, depending on the given callback
     * If the object is not found, returns false and nothing is deleted
     * Else delete the line and returns true
     * @param function callback (ex: item => item.id === 2)
     * This call back finds the object in the DB with an id === 2
     * If nothing is found, returns undefined, else returns the object found
     * @returns boolean (true if it worked, false if it didn't)
     */
    delete(_filter) {
        let indexToDelete = this.userTab.findIndex(_filter);
        if (indexToDelete === -1)
            return false;
        this.userTab.splice(indexToDelete, 1);
        return true;
    }

    /**
     * This method checks if the given ID is unique (doesn't already exists in the DB)
     * @param int _id
     * @returns boolean(true if it's unique, false either)
     */
    static isUniqueId(_id) {
        if (!Security.isValidNumber(_id))
            return false;
        if ((this.getUserTab().find(item => item.getId() === _id)) !== undefined)
            return false;
        return true;
    }

    /**
     * This method checks if the given username is unique (doesn't already exists in the DB)
     * @param string _username 
     * @returns boolean(true if it's unique, false either)
     */
    static isUniqueUsername(_username) {
        if (!Security.isValidUsername(_username))
            return false;
        if ((this.getUserTab().find(item => item.getUsername() === _username)) !== undefined)
            return false;
        return true;
    }

    /**
     * This method checks if the given email is unique (doesn't already exists in the DB)
     * @param string _email 
     * @returns boolean(true if it's unique, false either)
     */
    static isUniqueEmail(_email) {
        if (!Security.isUniqueEmail(_email))
            return false;
        if ((this.getUserTab().find(item => item.getEmail() === _email)) !== undefined)
            return false;
        return true;
    }

    /**
     * This method checks if the given User has unique ID/username/email (don't already exists in the DB)
     * @param User _user 
     * @returns boolean(true if the all three attributes are unique, false either)
     */
    static hasUniqueAttributes(_user) {
        if (!Security.isValidUser(_user))
            return false;
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