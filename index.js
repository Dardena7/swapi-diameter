const yargs = require('yargs');
const mySwapi = require('./utils/mySwapi');
const myCalculator = require('./utils/myCalculator');

const filmId = yargs.argv._[0] || yargs.argv.n;

mySwapi.getPlanetsFromFilm(filmId).then(planets => {
    console.log(myCalculator.getTotalDiameterWithMountainsAndWater(planets));
},
error => {
    console.log(error);
});