const calculatorServiceTest = require('./utils-test/caculator.service.test');
const planetServiceTest = require('./utils-test/planet.service.test');


describe("Swapi-diameter Tests", function() {
    calculatorServiceTest();
    planetServiceTest();
});