const User = require('./User.js');

class LanChat {
    constructor() {
        this.user = [];
    }
    create(_user) {
        this.user.push(_user);
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
        for (let i = 0; i < this.user.length; i++) {
            if (this.user[i].username == _username) {
                console.log(this.user[i]);
                break;
            }
        }
    }
}
module.exports = LanChat;