//I considered that "mountain ranges" is also good
function filterPlanetsWithMountainsAndWater(planets)
{
    return planets.filter(planet => 
        planet.surface_water > 0 && planet.terrain.includes("mountain")
    );
}

function getTotalDiameterWithMountainsAndWater(planets)
{
    let diameter = 0;
    planets = filterPlanetsWithMountainsAndWater(planets);
    for (const planet of planets)
        diameter += +planet.diameter;
    return diameter;
}

module.exports = { getTotalDiameterWithMountainsAndWater };