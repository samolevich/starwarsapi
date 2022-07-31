const ItemList = ({ list }) => {
  const peopleList = list.map(person => (
    <li
      key={person.name}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {person.name}
      <span className="badge bg-primary rounded-pill">{person.birth_year}</span>
    </li>
  ));
  return <ul className="list-group">{peopleList}</ul>;
};

export default ItemList;
