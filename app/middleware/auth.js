const jwt = require('jsonwebtoken')

module.exports = {
    auth : (req, res, next)=>{
        try {
            if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
                const token = req.headers.authorization.split(" ")[1] 
                const decoded = jwt.verify(token, 'secret')
                if(decoded){
                    req.user = decoded.user;
                    next();
                }
            }else{
                // res.status(401).json(new Body BodyResponse({message: "unAuthorization!",error:true,status:401}));
                res.status(401).json({message: "unAuthorization!",error:true,status:401});
            }



        } catch (err) {
            console.log(err)
            res.status(401).json({message: 'invalid token'})
        }
    }
}