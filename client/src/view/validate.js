const validate = (input) => {
    let error = {}

    if (!/^[a-zA-ZÀ-ÿ\s]{3,50}$/.test(input.name)) {
        error.name = 'Raza Icorrecta, Solo letras'
    
    } else {

        if (!/^\d+$/.test(input.height)) {
            error.height = 'Altura Incorrecta, Solo numeros enteros'
        
        } else {
            
            if (!/^\d+$/.test(input.weight)) {
                error.weight = 'Peso Incorrecto, Solo numeros enteros'
            
            } else {

                if (!/^\d+$/.test(input.lifeSpan)) {
                    error.lifeSpan = 'Esperanza de vida Incorrecta, Solo numeros enteros'
                } 
            }
        }
    }  
 
    return error
}


export default validate