// 引用我們已經寫好的 userModel.js
var User = require('./userModel');

User.find().exec(function (err, users){
    console.log(users);
    process.exit();
});