const { Router } = require("express");

const {getTemperamentsHandlers, getTemperamentsHandlersDB} = require('../handlers/temperamentsHandlers')

const temperamentsRouter =  Router()

temperamentsRouter
    .get('/api1', getTemperamentsHandlers)
    .get('/api2', getTemperamentsHandlersDB)


module.exports = temperamentsRouter