const mongoose = require('mongoose')
const {Schema} = mongoose
// const jwt = require('jsonwebtoken')
const userSchema = new Schema({
    name: {type: String,
        required: true,
    },
    email:{
        type: String,
        unique : true,
        required: true,
    },
    password: 
    {
        type: String,
        required: true,
    },
});
// userSchema.methods.generateAuthToken=function(){
//     const token= jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY)
//     return token
// }
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

