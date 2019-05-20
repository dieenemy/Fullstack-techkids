const express = require("express");
const PostAPIRouter = express.Router();
const mongoose = require('mongoose');

const PostModel = require('../models/postModel');



PostAPIRouter.get("/", function(req, res){
    PostModel.find({}, function(err, posts){
        if(err) res.json({err});
        else res.json({success: true, data: posts})
    })
});



PostAPIRouter.post("/", function(req, res){
    PostModel.create(req.body, function(err, postCreated){
        if(err) res.json({err});
        else res.json({success: true, data: postCreated})
    })
});



PostAPIRouter.put("/:id", function(req, res){
    const {id} = req.params;
    PostModel.findById(id, function(err, postFound){
        if(err) res.json({err});
        else if(!postFound) res.json({success: false, err: "Not Found"});
        else {
            for(let key in req.body){
                if(req.body[key] !== null){
                    postFound[key] = req.body[key];
                }
            }
            postFound.save((err, postUpdated)=>{
                if(err) res.json({success: false, err});
                else res.json({success: true, data: postUpdated})
            })
        }
    })
});



PostAPIRouter.delete("/:id", function(req, res){
    const {id} = req.params;
    PostModel.findByIdAndDelete(id, function(err){
        if(err) res.json({success: false, err});
        else res.json({success: true});
    })
})

module.exports = PostAPIRouter;