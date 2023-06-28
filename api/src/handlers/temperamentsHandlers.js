const {getTemperaments, getTemperamentsDB, postTemperamentsControllers} = require('../controllers/temperamentsControllers')

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


const postTemperamentsHandlers = async (req, res) => {

    const {name} = req.body

    try {

        const response = await postTemperamentsControllers(name)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 



module.exports = {
    getTemperamentsHandlers,
    getTemperamentsHandlersDB,
    postTemperamentsHandlers
}