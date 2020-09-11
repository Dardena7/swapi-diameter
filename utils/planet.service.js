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
        if (filmId === undefined) {
            reject(new Error(`No film number was provided. Please type "node index.js <film number>".`));
        }
        if (filmId === 0) {
            reject(new Error(getErrorMessage("filmRequest",filmId)));
        }

        swapi.getFilm(filmId).then(result => {
            resolve(result.planets);
        },
        error => {
            reject(new Error(handleErrors(error,"filmRequest",filmId)));
        });
    });
}

function handleErrors(error, type, id = "")
{
    const errorCode = parseInt(error.message);
    if (errorCode >= 500) {
        return "A problem occured with SWAPI server. Please retry later.";
    }
    if (errorCode == 404) {
        return getErrorMessage(type, id);
    }
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