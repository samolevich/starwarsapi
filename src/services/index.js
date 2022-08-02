const URL = "https://swapi.dev/api/";

const getResource = async url => {
  try {
    const res = await fetch(`${URL}/${url}`);
    if (res.ok) return await res.json();
    throw new Error(res);
  } catch (err) {
    console.error(err.message);
    console.error(`Could not fetch ${URL}/${url}`);
  }
};

const getEntity = async (entity, id = "") => {
  try {
    const res = await getResource(`${entity}/${id}`);
    return res;
  } catch (err) {
    console.error(err.message);
    console.error("Status is", err.status);
    return {};
  }
};

const extractId = url => {
  if (url) return url.match(/\/(\d*)\/$/)[1];
};

const modificationPersonData = person => {
  return {
    header: "Personage",
    "Birth Year": person.birth_year,
    "Eye Color": person.eye_color,
    Gender: person.gender,
    "Hair Color": person.hair_color,
    Height: `${person.height}cm`,
    Mass: `${person.mass}kg`,
    name: person.name,
    "Skin Color": person.skin_color,
    id: extractId(person.url),
  };
};

const modificationStarshipData = starship => {
  return {
    header: "Starship",
    MGLT: starship.MGLT,
    "Cargo Capacity": starship.cargo_capacity,
    Consumables: starship.consumables,
    Cost: `${starship.cost_in_credits} credits`,
    Crew: starship.crew,
    "Hyperdrive Rating": starship.hyperdrive_rating,
    Length: `${starship.length}m`,
    Manufacturer: starship.manufacturer,
    Model: starship.model,
    name: starship.name,
    Passengers: starship.passengers,
    "Starship Class": starship.starship_class,
    id: extractId(starship.url),
  };
};

const modificationPlanetData = planet => {
  return {
    header: "Planet",
    name: planet.name,
    Diameter: `${planet.diameter}km`,
    "Rotation period": planet.rotation_period,
    "Orbital period": planet.orbital_period,
    Population: planet.population,
    Terrain: planet.terrain,
    Gravity: `${planet.gravity}G`,
    "Surface water": `${planet.surface_water}%`,
    id: extractId(planet.url),
  };
};

const getPerson = async id => {
  const person = await getEntity("people", id);
  return modificationPersonData(person);
};

const getPlanet = async id => {
  const planet = await getEntity("planets", id);
  return modificationPlanetData(planet);
};

const getStarship = async id => {
  const starship = await getEntity("starships", id);
  return modificationStarshipData(starship);
};

const getAllEntities = async entities => {
  const res = await getResource(entities);
  if (!res) return [{ name: "oops! something went wrong :| " }];
  return res.results;
};

const getAllPeople = async () => {
  const people = await getAllEntities("people");
  return people.map(person => modificationPersonData(person));
};

const getAllPlanets = async () => {
  const planets = await getAllEntities("planets");
  return planets.map(planet => modificationPlanetData(planet));
};

const getAllStarships = async () => {
  const starships = await getAllEntities("starships");
  return starships.map(starship => modificationStarshipData(starship));
};

export {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
  getPerson,
  getPlanet,
  getStarship,
};
