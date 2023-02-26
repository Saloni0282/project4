const mongoose = require('mongoose');

const Schema = mongoose.Schema({
name: String,
img : String,
price :String,
detail: String,
type: String
},
{
timestamps: true
});


const postModel = mongoose.model('post', Schema);


module.exports = {postModel};