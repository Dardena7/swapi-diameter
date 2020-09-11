const assert = require('assert');
const calculatorService = require('../../utils/calculator.service');
const planetService = require('../../utils/planet.service');

module.exports = function () {
    describe('utils/calculator.service', function() {
        describe('getTotalDiameterWithMountainsAndWater', function() {

            const planets = [
                {
                    "diameter" : "5000",
                    "terrain" : "desert, lava, mountains",
                    "surface_water": "60"
                
                },
                {
                    "diameter" : "2000",
                    "terrain" : "fields, water",
                    "surface_water": "20"
                },
                {
                    "diameter" : "15000",
                    "terrain" : "mountain range",
                    "surface_water": "5"

                },
                {
                    "diameter" : "3000",
                    "terrain" : "mountain",
                    "surface_water": "0"

                }
            ];

            it('Empty array should return 0', function () {
                assert.equal(
                    calculatorService.getTotalDiameterWithMountainsAndWater([]),
                     0);
            });

            it('Planets should return 20000', function () {
                assert.equal(
                    calculatorService.getTotalDiameterWithMountainsAndWater(planets),
                     20000);
            });
        });
    });
}