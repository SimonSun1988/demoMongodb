// 引用我們已經寫好的 userModel.js
var User = require('./userModel');

if(!process.argv[2]){
    console.log('需要傳入一個參數當作新增名字喲');
    process.exit();
}

var name = process.argv[2];

// 在 User model 創造一筆資料
User.create({ name: name }, function (err, newUser){

    if(err){
        console.log('創造資料時發生錯誤 : ' + err);
        process.exit();
    }

    console.log(newUser);
    process.exit();
});


