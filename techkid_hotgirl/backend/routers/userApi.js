const express = require('express');
const UserApiRouter = express.Router();

const UserModel = require('../models/userModel');

UserApiRouter.get('/', (req,res) =>{
    UserModel.find({}, (err, users) =>{
        if(err) res.json({ success: false, err})
        else res.json({ success: true, data: users});
    })
})


UserApiRouter.post('/', (req,res) =>{
    UserModel.create(req.body,(err,doc) =>{
        if(err) res.json({ success: false, err})
        else res.json({ success: true, data: doc});
        
    })    

 
    
})

UserApiRouter.put('/:id', (req,res) =>{
    const id = req.params.id
    UserModel.findById(id,(err, userFound) =>{
        if(err) res.json({success:false, err})
        else if(!userFound) res.json({success:false, err:"Not found"});
        else {
            for ( let key in req.body){
                let value = req.body[key];
                if(value !== null){
                    userFound[key] = value;
                }
                
            }
            userFound.save((err, userUpdated) =>{
                if(err) res.json({success:false, err});
                else res.json({success: true, data: userUpdated});
            });
        }
    })

    
})

UserApiRouter.delete('/:id', (req,res) =>{
    const id = req.params.id
    UserModel.findByIdAndDelete(id,(err) =>{
        if(err) res.json({success:false, err});
        else res.json({success:true});
       
    })

    
})

module.exports = UserApiRouter;