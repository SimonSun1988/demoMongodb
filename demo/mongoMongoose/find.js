
// 引用寫好的 User Models
var User = require('./userModel');


// 找尋 User model 裡面的所有 user
User.find({}, function (err, users){

    if(err){
        console.log('查詢資料時發生錯誤 : ' + err);
        process.exit();
    }

    console.log(users);
    process.exit();
});