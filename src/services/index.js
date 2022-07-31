const URL = "https://swapi.dev/api/";

const getResource = async url => {
  try {
    const res = await fetch(`${URL}/${url}`);
    if (!res.ok) return { name: "failed fetch" };
    return await res.json();
  } catch (e) {
    console.error(e.message);
    console.error("Status is", e.status);
    return false;
  }
};

const getEntity = async (entity, id = "") => {
  const res = await getResource(`${entity}/${id}`);
  return res;
};

const getPerson = id => getEntity("people", id);

const getPlanet = id => getEntity("planets", id);

const getStarShip = id => getEntity("starships", id);

const getAllEntities = async entities => {
  const res = await getResource(entities);
  if (!res) return [{ name: "failed" }];
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
