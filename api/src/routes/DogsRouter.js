const { Router } = require("express");

const {
    getDogsHandler,
    getDogsByIdHandler,
    postDogsHandler
} =  require('../handlers/dogsHandler')

const dogsRouter =  Router()

dogsRouter
    .get('/', getDogsHandler)
    .get('/:idRaza', getDogsByIdHandler)
    .post('/', postDogsHandler)


module.exports = dogsRouter;