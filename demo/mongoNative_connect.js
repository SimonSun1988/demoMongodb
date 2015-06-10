/*
 * 在 node.js 使用 mongodb 的 module
 */
var MongoClient = require('mongodb').MongoClient;

/*
 * 連線到自己電腦的 mongodb, 資料庫名稱叫做 demo
 */
MongoClient.connect('mongodb://localhost:27017/demo' , function (err, db) {

    // 「錯誤處理」 - 如果連線錯誤，則會跳出錯誤訊息並且中斷程式
    if(err){
        console.log('連線發生錯誤了 : ' + err);
        process.exit();
    }

    console.log('連線成功');

    process.exit();
});