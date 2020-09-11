const yargs = require('yargs');
const planetService = require('./utils/planet.service');
const calculatorService = require('./utils/calculator.service');

const filmId = yargs.argv._[0] || yargs.argv.n;

console.log(filmId);

planetService.getPlanetsFromFilm(filmId).then(planets => {
    console.log(calculatorService.getTotalDiameterWithMountainsAndWater(planets));
},
error => {
    console.log(error.message);
});