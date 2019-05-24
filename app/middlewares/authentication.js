const { User } = require('../Models/User') 
const authenticateUser =  function(req, res,next){
    const token = req.header('x-auth')
  
       // res.send('success')
       console.log(`success`)
       User.findByToken(token)
            .then(function(user){
                if(user){
                    req.user = user
                    req.token = token
                   next()
                }else{
                    res.status('401').send({notice:'token not availabel'})
                }
               
            })
            .catch(function(err){
                res.status('401').send(err)
            })
}

module.exports = {
    authenticateUser
}