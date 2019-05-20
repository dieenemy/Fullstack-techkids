const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
// mongoose.Schema.Types.
const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: String,
    name: String,

}, { 
    // option cua Schema
    // _id: false   // bo tu dong generate id
    // versionKey: false,
    timestamps: true // createdAt & updatedAt 
});




const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
