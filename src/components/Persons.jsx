import { useEffect } from "react";
import { getAllPeople, getPerson } from "../services";
import Card from "./Card";
import ItemList from "./ItemList";

const Persons = ({ people, person, onPersonClick, setPerson, setPeople }) => {
  useEffect(() => {
    getAllPeople().then(people => setPeople(people));
    getPerson(2).then(person => setPerson(person));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="content-list">
        <ItemList list={people} onItemClick={onPersonClick} />
      </div>
      <div className="content-details">
        <Card entity={person} />
      </div>
    </>
  );
};

export default Persons;
