const axios = require('axios');
const {Dog, Temperament} = require('../db')

const {
    URL_API
  } = process.env;

// Atre de la API
const getDogsApi = async (req, res) => {

   
    const apiDogs = await axios.get(`${URL_API}`);

	const resultApi = apiDogs.data.map((data) => {
		return {
			id: data.id,
			name: data.name,
			image: data.image.url,
			height: data.height.metric,
			weight: data.weight.metric,
			temperaments: data.temperament,
			lifeSpan: data.life_span,
			created: false,
		};
	});
	
    return resultApi;
}

// Atre de la DB y su relacion
const getDogsDB = async () => {

    const DBDogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name']
        }
    });

    return DBDogs
}

// Juntamos los datos de la DB y API y lo retornamos. Si hay query lo buscar aca
const getAllDogs = async (name) => {

    const dogsDB = await getDogsDB(); //todos los dogs de la DB
    const dogsApi = await getDogsApi(); //todos los dogs de la API

    const allDogs = [...dogsDB, ...dogsApi]; //todos los dogs

    // si mandan una query con el nombre lo buscamos aca
    if (name) {
      
        let filterDogs = allDogs.filter((dog) =>
            dog.name.toLowerCase().includes(name.toLowerCase())
        );
      
      if (filterDogs.length) return filterDogs;

      throw new Error('No se encontro un perro con esa raza')

    } else {
      
        return allDogs;
    }
};


// Optiene el detalle de un perro por su ID
const getDogsById = async (id) => {
    
    if (isNaN(id)) {
        const dog = await Dog.findByPk(id, {
            include: {
                model: Temperament,
                attributes: ['name']
            }
        });

        return dog;
    }
    
    const dogs = (
        await axios.get(`${URL_API}`)
    ).data;
    
    const dog = dogs.filter((dog) => parseInt(dog.id) === parseInt(id))

    const result = dog.map((data) => {
		return {
			id: data.id,
			name: data.name,
			image: data.image.url,
			height: data.height.metric,
			weight: data.weight.metric,
			temperaments: data.temperament,
			lifeSpan: data.life_span,
		};
	});

    return result
}


const createDogsDB = async (name, image, height, weight, lifeSpan, temperamentName) => {

    const newDog = await Dog.create({
		name,
		image,
		height,
		weight,
		lifeSpan,
	}); 

    const temperamentsToAdd = await Temperament.findAll({
        where: {
            name: temperamentName
        }
    })


    await newDog.addTemperament(temperamentsToAdd)

    return newDog;
} 



module.exports = {
    getAllDogs,
    getDogsById,
    createDogsDB
}