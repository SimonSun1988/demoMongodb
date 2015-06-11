/*
 * 引用 mongoose 這個 module
 */
var mongoose = require('mongoose');

/*
 * 連線到 db
 */
mongoose.connect('mongodb://localhost:27017/demo');

// 連線成功
console.log('連線成功');

// 設定 Schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

// 將 Schema 實體化
var User = mongoose.model('User', UserSchema);

module.exports = User;