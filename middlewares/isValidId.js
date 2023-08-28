const {isValidObjectId} = require('mongoose');
const AppError = require('../services/appError');

const isValidId = (req, res, next) => {
    const {id} = req.params;
    
    if(!isValidObjectId(id)) {
        next(new AppError(400, `${id} is not valid id`))
    }
    next()
};

module.exports = { isValidId };