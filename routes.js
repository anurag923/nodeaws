const router = require('express').Router();
    router.get('/users',(req,res,next)=>{
        console.log('middelware');
        next();
    },(req,res)=>{
        res.send({
            "response" : "Hello Users"
        })
    })

    router.get('/user',(req,res,next)=>{
        console.log('middelware');
        next();
    },(req,res)=>{
        res.send({
            "response" : "Hello User"
        })
    })

module.exports = router;