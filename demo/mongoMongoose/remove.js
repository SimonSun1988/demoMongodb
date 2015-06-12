
// 引用寫好的 User Models
var User = require('./userModel');

if(!process.argv[2]){
    console.log('需要傳入一個參數當作刪除的條件喔');
    process.exit();
}

var name = process.argv[2];

User.findOne({ name: name }, function (err, user){

    if(err){
        console.log('找尋資料時發生錯誤 : ' + err);
    }

    user.remove(function (err, removedUser){

        if(err){
            console.log('刪除資料時發生錯誤 : ' + err);
        }

        console.log(removedUser);
        process.exit();
    });
});
