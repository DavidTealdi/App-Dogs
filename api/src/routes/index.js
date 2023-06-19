const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerDogs = require('./DogsRouter')
const routerTemperaments = require('./TemperamentsRouter')


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/dogs", routerDogs);
mainRouter.use("/temperaments", routerTemperaments);

module.exports = mainRouter;