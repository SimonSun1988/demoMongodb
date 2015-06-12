
// 引用寫好的 User Model
var User = require('./userModel');

if(!process.argv[2]){
    console.log('需要傳入一個參數用來新增姓名唷');
    process.exit();
}

var name = process.argv[2];

// 在 User model 創造一筆資料
User.create({ name: name }, function (err, newUser){

    if(err){
        console.log('新增資料時發生錯誤 : ' + err);
        process.exit();
    }

    console.log(newUser);
    process.exit();
});


