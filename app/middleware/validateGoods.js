const { check, validationResult } = require('express-validator')

const rule = [
    check('title')
        .notEmpty().withMessage('Title is required')
        .isString(),
    
    check('purchasePrice')
        .notEmpty().withMessage('Purchase Price is required')
        .isNumeric().withMessage('Value must numeric'),
        
    check('purchaseSell')
        .notEmpty().withMessage('Purchase Sell is required')
        .isNumeric().withMessage('Value must numeric'),
    
    check('stock')
        .notEmpty().withMessage('Stock is required')
        .isInt().withMessage('Value must numeric'),
    
    // check('image')
    //     .isByteLength()
    
    
]

const validateGoods = [
    rule,
    (req, res, next) => {
        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(422).json({errors: error.mapped()})
        }
        next();
    }
]

module.exports = validateGoods