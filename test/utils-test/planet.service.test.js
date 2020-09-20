const assert = require('assert');
const planetService = require('../../utils/planet.service')


    describe('utils/planet.service', () => {

        describe('getPlanetsFromFilm', () => {

            describe('Assert bad inputs throws errors', () => {

                test('Film with number 0 should throw an error', () => {
                    expect.assertions(1);
                    return planetService.getPlanetsFromFilm(0).catch(
                        e => expect(e.message).toEqual("Film with id 0 is incorrect (must be between 1 and 6).")
                    );
                });

                test('Film with number 7 should throw an error', () => {
                    expect.assertions(1);
                    return planetService.getPlanetsFromFilm(7).catch(
                        e => expect(e.message).toEqual("Film with id 7 is incorrect (must be between 1 and 6).")
                    );
                });

                test('No argument should throw an error', () => {
                    expect.assertions(1);
                    return planetService.getPlanetsFromFilm().catch(
                        e => expect(e.message).toEqual('No film number was provided. Please type "node index.js <film number>".')
                    );
                });
            });

            describe('Assert we get all the planets from each film', () => {

                test('Film 1 should return 3', () => {
                    return planetService.getPlanetsFromFilm(1).then(
                        (planets) => {
                        expect(planets.length).toBe(3);
                    });
                });

                test('Film 2 should return 4', () => {
                    return planetService.getPlanetsFromFilm(2).then(
                        (planets) => {
                        expect(planets.length).toBe(4);
                    });
                });

                test('Film 3 should return 5', () => {
                    return planetService.getPlanetsFromFilm(3).then(
                        (planets) => {
                        expect(planets.length).toBe(5);
                    });
                });

                test('Film 4 should return 3', () => {
                    return planetService.getPlanetsFromFilm(4).then(
                        (planets) => {
                        expect(planets.length).toBe(3);
                    });
                });

                test('Film 5 should return 5', () => {
                    return planetService.getPlanetsFromFilm(5).then(
                        (planets) => {
                        expect(planets.length).toBe(5);
                    });
                });

                test('Film 6 should return 13', () => {
                    return planetService.getPlanetsFromFilm(6).then(
                        (planets) => {
                        expect(planets.length).toBe(13);
                    });
                });

            });

        });
    });