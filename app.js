const fetch = require("node-fetch")

const starwars = require("./library");


starwars.peopleGetId(3).then(people => {
    if(people != false) {
        console.log(`Nombre: ${people.name} \ngenero: ${people.gender}`)
        console.log(`Altura: ${people.height} \nColor de ojos: ${people.eye_color} \n`)
    } else {
        console.log(`\n No se ha encontrado el recurso solicitado Error 404 \n`)
    }
})

starwars.planetGetId(2).then(planet => {
    if(planet != false) { 
        console.log(`Nombre del planeta: ${planet.name} \nperiodo de rotacion: ${planet.rotation_period}`)
        console.log(`Clima: ${planet.climate} \nPoblacion: ${planet.population} \n`)
    } else {
        console.log(`\n No se ha encontrado el recurso solicitado Error 404 \n`)
    }
 })

starwars.starshipsGetId(1).then(starship => {
    if(starship != false) { 
        console.log(`Nombre de la nave: ${starship.name} \nModelo: ${starship.model}`)
        console.log(`pasajeros: ${starship.passengers} \nCapacidad: ${starship.cargo_capacity} \n`)
    } else {
        console.log(`\n No se ha encontrado el recurso solicitado Error 404 \n`)
    }

})

starwars.getResourcesAll("people").then(resources => {
    if(resources != false) { 
        console.log(resources)
    } else {
        console.log(`\n No se ha encontrado el recurso solicitado Error 404 \n`)
    }

})


