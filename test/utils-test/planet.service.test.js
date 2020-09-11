const assert = require('assert');
const planetService = require('../../utils/planet.service')

module.exports = function () {
    describe('utils/planet.service', function() {

        describe('getPlanetsFromFilm', function() {

            describe('Assert we get all the planets from each film', function() {

                it('Film with number 0 should throw an error', async function () {
                    return planetService.getPlanetsFromFilm(0).catch( 
                        function(error) {
                            assert.equal(error.message, "Film with id 0 is incorrect (must be between 1 and 6).");
                        }
                    );
                });

                it('Film with number 7 should throw an error', async function () {
                    return planetService.getPlanetsFromFilm(7).catch( 
                        function(error) {
                            assert.equal(error.message, "Film with id 7 is incorrect (must be between 1 and 6).");
                        }
                    );
                });

                it('No argument should throw an error', async function () {
                    return planetService.getPlanetsFromFilm().catch( 
                        function(error) {
                            assert.equal(error.message, 'No film number was provided. Please type "node index.js <film number>".');
                        }
                    );
                });

                it('Film 1 should return 3', async function () {
                    return planetService.getPlanetsFromFilm(1).then(function(planets) {
                        assert.equal(planets.length, 3);
                    });
                });

                it('Film 2 should return 4', async function () {
                    return planetService.getPlanetsFromFilm(2).then(function(planets) {
                        assert.equal(planets.length, 4);
                    });
                });

                it('Film 3 should return 5', async function () {
                    return planetService.getPlanetsFromFilm(3).then(function(planets) {
                        assert.equal(planets.length, 5);
                    });
                });

                it('Film 4 should return 3', async function () {
                    return planetService.getPlanetsFromFilm(4).then(function(planets) {
                        assert.equal(planets.length, 3);
                    });
                });

                it('Film 5 should return 5', async function () {
                    return planetService.getPlanetsFromFilm(5).then(function(planets) {
                        assert.equal(planets.length, 5);
                    });
                });

                it('Film 6 should return 13', async function () {
                    return planetService.getPlanetsFromFilm(6).then(function(planets) {
                        assert.equal(planets.length, 13);
                    });
                });

            });

        });
    });

}