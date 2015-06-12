// 引用我們已經寫好的 userModel.js
var User = require('./userModel');

if(!process.argv[2]){
    console.log('需要傳入一個參數當作查詢的名字喲');
    process.exit();
}

if(!process.argv[3]){
    console.log('需要傳入一個參數當作更新的名字喲');
    process.exit();
}

var name = process.argv[2];
var changeName = process.argv[3];

// 在 User model 創造一筆資料
User.update({ name: name }, { name: changeName }, function (err, rawRes){

    if(err){
        console.log('更新資料時發生錯誤 : ' + err);
    }

    // rawRes 會回應 mongodb 正常 response 的資料給我們
    console.log(rawRes);
    process.exit();
});