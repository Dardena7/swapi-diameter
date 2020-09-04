const swapi = require('swapi-node');
 
function getAllPlanetsData(planetsId)
{
    const planetsDataPromises = planetsId.map(id => {
        return getPlanetData(id);
    });
    //If any of the promise fails it will return an error
    return Promise.all(planetsDataPromises).then(
        result => {
            return result;
        }
    );
}

function getPlanetData(planetId)
{
    return new Promise((resolve, reject) => {
        swapi.getPlanets(planetId).then(planetData => {
            resolve(planetData);
        },
        error => {
            reject(handleErrors(error,"planetRequest",planetId));
        });
    });
}

function getPlanetsId(urls)
{
    return urls.map(url => {
        url = url.split('/');
        return url[url.length-2];
    });
}

function getPlanetsUrls(filmId)
{
    return new Promise((resolve, reject) => {
        if (!filmId)
            reject(`No film number was provided. Please type "node index.js <film number>".`);
        swapi.getFilm(filmId).then(result => {
            resolve(result.planets);
        },
        error => {
            reject(handleErrors(error,"filmRequest",filmId));
        });
    });
}

function handleErrors(error, type, id = "")
{
    if (+error.message >= 500)
        return "A problem occured with SWAPI server. Please retry later.";
    else if (+error.message == 404)
        return getErrorMessage(type, id);
    else
        return "An unknown error occured.";
}

function getErrorMessage(type, id)
{
    switch (type) {
        case "filmRequest": 
            return `Film with id ${id} is incorrect (must be between 1 and 6).`;
        case "planetRequest":
            return `Planet with id ${id} is incorrect.`;
        default:
            return "An unknown error occured.";
    }
}

module.exports = { 
    getPlanetsFromFilm(filmId)
    {
        return new Promise((resolve, reject) => {
            getPlanetsUrls(filmId).then(urls => {
                const planetsId = getPlanetsId(urls);
                resolve(getAllPlanetsData(planetsId));
            },
            error => {
                reject(error);
            });
        });
    }
 };