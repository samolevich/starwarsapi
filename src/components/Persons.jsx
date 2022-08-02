import Card from "./Card";
import ItemList from "./ItemList";

const Persons = ({ people, person }) => {
  return (
    <>
      <div className="content-list">
        <ItemList list={people} />
      </div>
      <div className="content-details">
        <Card person={person} />
      </div>
    </>
  );
};

export default Persons;
