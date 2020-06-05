class User {
    constructor(_username, _password, _email) {
        this.username = _username || "aucun";
        this.password = _password || 123456;
        this.email = _email ;


    }
}


module.exports = User;