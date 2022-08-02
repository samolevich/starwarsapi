const URL = "https://swapi.dev/api/";

const getResource = async url => {
  try {
    const res = await fetch(`${URL}/${url}`);
    if (!res.ok) return { name: "failed fetch" };
    return await res.json();
  } catch (err) {
    console.error(err.message);
    console.error("Status is", err.status);
    return false;
  }
};

const getEntity = async (entity, id = "") => {
  const res = await getResource(`${entity}/${id}`);
  return res;
};

const modificationPersonData = person => {
  return {
    header: "Personage",
    "Birth Year": person.birth_year,
    "Eye Color": person.eye_color,
    Gender: person.gender,
    "Hair Color": person.hair_color,
    Height: person.height,
    Mass: person.mass,
    name: person.name,
    "Skin Color": person.skin_color,
  };
};

const modificationStarshipData = starship => {
  return {
    MGLT: starship.MGLT,
    "Cargo Capacity": starship.cargo_capacity,
    Consumables: starship.consumables,
    Cost: `${starship.cost_in_credits} credits`,
    Crew: starship.crew,
    "Hyperdrive Rating": starship.hyperdrive_rating,
    Length: `${starship.length}m`,
    Manufacturer: starship.manufacturer,
    Model: starship.model,
    Name: starship.name,
    Passengers: starship.passengers,
    "Starship Class": starship.starship_class,
    id: starship.url,
  };
};
const modificationPlanetData = planet => {
  return {
    Name: planet.name,
    Diameter: `${planet.diameter}km`,
    "Rotation period": planet.rotation_period,
    "Orbital period": planet.orbital_period,
    Population: planet.population,
    Terrain: planet.terrain,
    Gravity: `${planet.gravity}G`,
    "Surface water": `${planet.surface_water}%`,
    id: planet.url,
  };
};

const getPerson = async id => {
  const person = await getEntity("people", id);
  return modificationPersonData(person);
};

const getPlanet = id => modificationPlanetData(getEntity("planets", id));

const getStarShip = id => modificationStarshipData(getEntity("starships", id));

const getAllEntities = async entities => {
  const res = await getResource(entities);
  if (!res) return [{ name: "oops! something went wrong :| " }];
  return res.results;
};

const getAllPeople = async () => await getAllEntities("people");

const getAllPlanets = async () => await getAllEntities("planets");

const getAllStarships = async () => await getAllEntities("starships");

export {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
  getPerson,
  getPlanet,
  getStarShip,
};
