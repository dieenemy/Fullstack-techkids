const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
// mongoose.Schema.Types.


const postSchema = new Schema({
    author: {type:Schema.Types.ObjectId, ref:'user'},
    post: string,
    view: {type: number},
    title: {type: String, required: true},
    like: {type: number, default:0},
    image : {type:String, required: true},


}, { 
    // option cua Schema
    // _id: false   // bo tu dong generate id
    // versionKey: false,
    timestamps: true // createdAt & updatedAt 
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
