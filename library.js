const fetch = require("node-fetch")

const peopleGetId = (id) => new Promise((resolve, reject) => { 
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            if(response.status != 404) return response.json()
            return false
        })
        .then(json => resolve(json)) 
})


const planetGetId = (id) => new Promise((resolve, reject) => { 
    fetch(`https://swapi.dev/api/planets/${id}`)
    .then(response =>{
        if(response.status != 404) return response.json()
        return false
    })
    .then(json => resolve(json)) 
})

const starshipsGetId = (id) => new Promise((resolve, reject) => { 
    fetch(`https://swapi.dev/api/starships/${id}`)
    .then(response => {
        if(response.status != 404) return response.json()
        return false
    })
    .then(json => resolve(json)) 
})

const getResourcesAll = (stringResources) => new Promise((resolve, reject) => { 
    fetch(`https://swapi.dev/api/${stringResources}`)
    .then(response => {
        if(response.status != 404) return response.json()
        return false
    })
    .then(json => resolve(json)) 
})


module.exports = {
    peopleGetId,
    planetGetId,
    starshipsGetId,
    getResourcesAll
    
}

