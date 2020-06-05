const User = require('./User.js');

class LanChat {
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
    update(_user, _email) {
        _user.email = _email;
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
module.exports = LanChat;