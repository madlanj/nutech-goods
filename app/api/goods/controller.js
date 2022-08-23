const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { path } = require('../../../app');
const { Good } = require('../../db/models');
const upload = require('../../middleware/multer');
const paths = require("path")
const DeleteFileSingle = require('../../../lib/utils/delete-file');
const { NUMERIC } = require('sequelize');
module.exports = {
    create : async(req, res, next) => {
        try {
            const { title, purchasePrice, purchaseSell, stock } = req.body

            const checkTitle = await Good.findOne({
                where:{ title:title }
            })

            if(checkTitle){
                return res.status(200).json({
                    message: 'Title is exist'
                })
            }

            const goods = await Good.create({
                title,
                purchasePrice,
                purchaseSell,
                stock,
            })

            
            return res.status(200).json({
                error:false,
                message: 'success add goods',
                data: goods,
            });
                


        } catch (err) {
            res.status(500).json({
                message: err.message,
                data: null
            });
        }
    },

    update : async (req, res, next)=>{
        try {
            const { id } = req.params;
            const { purchasePrice, purchaseSell, stock } = req.body;
            const checkGoods = await Good.findOne({ 
                where:{
                    id: id,
                },raw:true,nest:true
            })
            if(!checkGoods){
                return res.json({
                    error:true,
                    data:null
                })
            }


            return await Good.update(
                { purchasePrice, purchaseSell, stock },
                { where:{id}, returning:true})
                .then( async ([_,val])=> {
                    const values = await Good.findOne({
                        where:{ id:id },
                        raw:true,
                        nest:true
                    })
                    return res.status(200).json({
                        error:false,
                        message: 'success update data',
                        data : {
                            id:checkGoods.id,
                            result:values,
                        },
                    });
                })
                .catch((err)=> {
                    return res.status(500).json({
                        error:true,
                        message: err.message,
                        data: null
                    })
                })

        } catch (err) {
            return res.status(500).json({
                error:true,
                data : null,
                message: err?.message ?? err
            })
        }
    },

    updateImage : async (req, res, next)=>{
        try {
            upload.uploadMiddleware(req,res, async function(err){
                if(err){
                    return res.status(500).json({
                        error:true,
                        message: err.message,
                        data: null
                    })
                }
                
                try{
                    const { id } = req.params
                    const image = req.file?.path ?? null;        
                
                    const checkId = await Good.findOne({
                        where:{ id:id },
                        raw:true,
                        nest:true
                    })
        
                    if(!checkId){
                        return res.status(404).json({
                            message: 'Id is not found'
                        })
                    }

                    if(checkId?.image !== null){
                        DeleteFileSingle(checkId.image)
                    }

        
                    return await Good.update(
                        { image:image },
                        { where:{id}, returning:true})
                        .then( async ([_,val])=> {
                            const values = await Good.findOne({
                                where:{ id:id },
                                raw:true,
                                nest:true
                            })
                            return res.status(200).json({
                                error:false,
                                message: 'success update data',
                                data : {
                                    id:checkId.id,
                                    result:values,
                                },
                            });
                        })
                        .catch((err)=> {
                            return res.status(500).json({
                                error:true,
                                message: err.message,
                                data: null
                            })
                        })
        
                }
                catch(err){
                    return res.status(500).json({
                        error:true,
                        message: err.message
                    })
                }
            })


        } catch (err) {
            return res.status(500).json({
                error:true,
                data : null,
                message: err?.message ?? err
            })
        }
    },

    getAll: async (req, res, next)=>{
        try {
            const goods = await Good.findAll({
              
            });

            res.status(200).json({
                message: 'success get all goods',
                data : goods
            })

        } catch (err) {
            return res.status(500).json({
                error:true,
                data : null,
                message: err?.message ?? err
            })
        }
    },

    getById: async (req, res, next) => {
        try{
            const { id } = req.params;
     
            const detailGoods = await Good.findOne({
               where: {id :id},
           });
     
           res.status(200).json({
               message: 'success get detail transactions',
               data : detailGoods
           })
        } catch (err) {
            return res.status(500).json({
                error:true,
                data : null,
                message: err?.message ?? err
            })
        }
    },

    deleteGoods : async (req, res, next) => {
        try {
            const goods = await Good.findOne({where: {id: req.params.id}})

            if(!goods){
                return res.status(404).json({message: 'Id goods not found'})
            }

            if(goods.image != null) {
                DeleteFileSingle(goods.image)

            }
            goods.destroy();

            res.status(200).json({
                error:false,
                message: 'success delete goods',
                data: goods
            })

        } catch (err) {
            return res.status(500).json({
                error:true,
                data : null,
                message: err?.message ?? err
            }) 
        }
    }
}