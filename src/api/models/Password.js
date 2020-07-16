let saltRounds = 10;
let myPlaintextPassword = 'test';
let bcrypt = require('bcrypt');

bcrypt.genSalt(saltRounds, function (err, salt) {
  if (err) {
    console.log(err);
    throw err;
  }
  else {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
      if (err) {
        throw err;
      }
      else {
        console.log(err);
        console.log(hash + `\n`);
      }
    })
  }
});

const passwordEnteredByUser = `test`;
const hash = "";

bcrypt.compare(passwordEnteredByUser, hash, function (err, isMatch) {
  if (err) {
    throw err
  } else if (!isMatch) {
    console.log("Password doesn't match!")
  } else {
    console.log("Password matches!")
  }
})