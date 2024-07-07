const User = require('../models/user')
//import users  from "../data.js"

const test = (req,res)=>{
    res.json('test is working')
}
const loginUser=(req,res)=>{
    res.json(users);
    
}
const registerUser =(req, res)=>{
    try{
        const {name, email,password} = req.body;
        //check if name was enter
        if(!name)
            {
                return res.json({
                    error: 'Name is required'
                })
            };
            //if password is good
            if(!password || password.length <6)
                {
                    return res.json({
                        error: "Passwprd is required and shouldbe least 6 charachter long"
                    })
                    
                };
                // check email
                const exist =  User.findOne({email});
                if(exist){
                    return res.json({
                        error: 'Email is already used'
                    })
                }

                const user =  User.create({
                        name , email , password
                })
                return res.json(user);
    }catch(error){
        console.log(error)
    }

}
module.exports = {
    test,
    registerUser,
    loginUser,
}

