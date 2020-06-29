const User = require('./models/User.js');
const LanChat = require('./models/LanChat.js');

let chat = new LanChat();

var user1 = new User("moi", 123, "moi@mail.fr");
var user2 = new User("aucun",123,"aucun@mail.fr");

chat.create(user1);
chat.create(user2);
//console.log(user1);


chat.updateUsername(user1,'');
//console.log(user1);

