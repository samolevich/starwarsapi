import Card from "./Card";
import ItemList from "./ItemList";

const Persons = ({ people, person }) => {
  return (
    <>
      <div className="content-list">
        <ItemList list={people} />
        <hr />
      </div>
      <div className="content-details">
        <Card {...person} />
      </div>
    </>
  );
};

export default Persons;
