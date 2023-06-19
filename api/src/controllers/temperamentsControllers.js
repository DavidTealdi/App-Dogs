const axios = require("axios")
const {Temperament} = require('../db')

const {
	URL_API
  } = process.env;

const getTemperaments = async () => {

    const response = await axios.get(`${URL_API}`)

    for (const data of response.data) {
		if (data && data.temperament) {
			const res = data.temperament.split(',');
			for (const temperamentName of res) {
				const trimmedNames = temperamentName.trim();
				await Temperament.findOrCreate({
					where: {
						name: trimmedNames,
					},
				});
			}
		}
	}
	 
    const result = await Temperament.findAll();

	return result;
}


const getTemperamentsDB = async () => {
	
	const temperamentDB = await Temperament.findAll()

	return temperamentDB
}


module.exports = {
    getTemperaments,
	getTemperamentsDB
}