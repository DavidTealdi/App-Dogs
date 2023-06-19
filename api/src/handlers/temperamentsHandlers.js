const {getTemperaments, getTemperamentsDB} = require('../controllers/temperamentsControllers')

const getTemperamentsHandlers = async (req, res) => {

    try {

        const response = await getTemperaments()

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 

const getTemperamentsHandlersDB = async (req, res) => {

    try {

        const response = await getTemperamentsDB()

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 


module.exports = {
    getTemperamentsHandlers,
    getTemperamentsHandlersDB
}