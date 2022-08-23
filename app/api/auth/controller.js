const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signin : async(req, res, next) => {
        try {
            const {username, password} = req.body;
            const checkUser = await User.findOne({where: {username: username} });

            if(checkUser){
                const checkPassword = bcrypt.compareSync(password, checkUser.password);

                if(checkPassword){
                    const token = jwt.sign(
                        {
                            user :{
                                id: checkUser.id,
                                name: checkUser.name,
                                username: checkUser.username,
                            },
                        },
                        'secret'
                    )
                    res.status(200).json({ 
                        error:false,
                        message: 'sucess sign in', data: token
                     });
                } else{
                    res.status(200).json({
                        error:true,
                        message: 'invalid password',
                        data: null
                    });
                }
            } else{
                res.status(200).json({
                    error:true,
                    message: 'invalid username',
                    data: null
                });
            }
        } catch (err) {
            next(err);
        }
    },

    signup : async(req, res, next) => {
        try {
            const {name, username, password, confirmPassword} = req.body;

            // if(password !== confirmPassword){
            //     res.status(403).json({message: 'password and confirm password does not match'});
            // }

            const checkusername = await User.findOne({where: {username:username}});
            if(checkusername){
                return res.status(403).json({message: 'username registered'});
            }

            const user = await User.create({
                name,username,
                password: bcrypt.hashSync(password, 10), 
            });

            delete user.dataValues.password;

            res.status(201).json({
                message: 'success sign up',
                data : user
            });
        } catch (err) {
            next(err);
        }
    }
}