// const express = require('express')


// const router = express.Router()
// const { User } = require('../Models/User') 
// const { authenticateUser } = require('../middlewares/authentication') 




// //localhost:3000/users/register
// router.post('/register',function(req, res){
//     const body = req.body
//     const user = new User(body)
//    console.log(user.isNew)
//     user.save()
//         .then(function(user){
//             console.log(user.isNew)
//             res.send(user)
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })


// //localhost:3000/users/login
// router.post('/login',function(req, res){
//     const body = req.body
//     User.findByCredentials(body.email,body.password)
//         .then(function(user){
//             return user.generateToken()
//         })
//         .then(function(token){
//            res.send({token})
//         //    res.setHeader('x-auth',token).send({})
//         })
//         .catch(function(err){
            
//            res.status(404).send(err)
//         })
// })

// //localhost:3000/users/account
// router.get('/account',authenticateUser,function(req,res){
//     const { user } =req
//      res.send(user)
  
// })


// //localhost:3000/users/logout
// router.delete('/logout',authenticateUser,function(req,res){
   
//     const { user, token } = req
//     User.findByIdAndUpdate(user._id,{ $pull : {tokens :{token : token }}})
//         .then(function(){
//                 res.send({notice : "successfully logegd out"})
//         })
//         .catch(function(err){
//                 res.send(err)
//         })
// })
// module.exports = {
//     usersRouter : router
// }

const express = require('express')


const router = express.Router()
const { User } = require('../Models/User') 
const { authenticateUser } = require('../middlewares/authentication') 


//localhost:3000
router.get('/' , function(req,res) {
    User.find()      
        .then(function(users) {
            res.send(users)
        })
        .catch(function(err) {
            res.send(err)
    })
    
})

router.get('/:id',function(req,res) {
    const id = req.params.id
    Contact.findById(id)          
        .then(function(contact) {       
            res.send(contact)      
        })
        .catch(function(err) {
            res.send(err)
        })
})

//localhost:3000/users/register
router.post('/register',function(req,res){
    const body = req.body
    const user = new User(body)
    //console.log(user.isNew) // will get true when register new
    user.save()
        .then(function(user){
      //      console.log(user.isNew) // will get false user registerd  is stored in db
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })
   
})

//localhost:3000/users/login
router.post('/login',function(req,res){
    const body = req.body

    User.findByCredentials(body.email , body.password)
        .then(function(user){
           return user.generateToken()
           
        })
        .then(function(token){
            res.send({token})
            //res.send(token)
        })
        .catch(function(err){
            res.send(err)
        })
})

//localhost:3000/users/account
router.get('/account',authenticateUser,function(req,res){
   const { user } = req
   res.send(user)
//res.send('success')
})





//localhost:3000/users/logout
router.delete('/logout',authenticateUser,function(req,res){
    const { user, token} = req
    User.findByIdAndUpdate(user._id ,{ $pull: {tokens: {token: token}}})
        .then(function(){
            res.send({notice:'successfully logged out'})
            })
            .catch(function(err){
                res.send(err)
            })
        
})

module.exports = {
    usersRouter : router
}