const {
    getAllDogs,
    getDogsById,
    createDogsDB

} = require('../controllers/dogsControllers')

// Atre todo los dogs tanto api como db y busca por query tambian
const getDogsHandler = async (req, res) => {

    const { name } = req.query

    try {

        if (name) {
            
            const response = await getAllDogs(name)

            return res.status(200).json(response)
        }

        const response = await getAllDogs()
        
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


const getDogsByIdHandler = async (req, res) => {

    const {idRaza} = req.params
    
    try {
        const response = await getDogsById(idRaza)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

 
const postDogsHandler = async (req, res) => {

    const { name, image, height, weight, lifeSpan, temperamentId } = req.body

    try {

        const response = await createDogsDB(name, image, height, weight, lifeSpan, temperamentId)

        return res.status(200).json({message: 'Dog created'})

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


module.exports = {
    getDogsHandler,
    getDogsByIdHandler,
    postDogsHandler
}