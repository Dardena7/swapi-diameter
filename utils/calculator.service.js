//I considered that "mountain ranges" is also good
function getTotalDiameterWithMountainsAndWater(planets)
{
    let diameter = 0;
    for (const planet of planets) {
        if (planet.surface_water > 0 && planet.terrain.includes("mountain"))
            diameter += parseInt(planet.diameter, 10);
    }
    return diameter;
}

module.exports = { getTotalDiameterWithMountainsAndWater };