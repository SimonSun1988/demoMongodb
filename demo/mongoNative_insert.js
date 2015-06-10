/*
 * 在 node.js 使用 mongodb 的 module
 */
var MongoClient = require('mongodb').MongoClient;
var myName = process.argv[2];


/*
 * 連線到自己電腦的 mongodb, 資料庫名稱叫做 demo
 */
MongoClient.connect('mongodb://localhost:27017/demo' , function(err, db) {


    // 「錯誤處理」 - 如果連線錯誤，則會跳出錯誤訊息並且中斷程式
    if(err){
        console.log('連線發生錯誤了 : ' + err);
        process.exit();
    }


    // 如果成功連線，會跳出連線成功的訊息
    console.log("成功連線");



    // 連到 user 這個 collection
    var user = db.collection('user');

    user.insert({ 'name': myName }, {w: 1}, function (err, newUser){

        if(err){
            console.log('新增資料發生錯誤了 : ' + err);
            process.exit();
        }

        user.find({}).toArray(function (err, users){

            // 「錯誤處理」 - 如果查詢資料庫發生錯誤，就會噴出錯誤
            if(err){
                console.log('查詢資料發生錯誤了 : ' + err);
                process.exit();
            }

            console.log(users);
            process.exit();

        });
    });

});