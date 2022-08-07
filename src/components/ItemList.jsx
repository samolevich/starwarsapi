const ItemList = ({ list, onItemClick }) => {
  const itemList = list.map(({ id, name }) => (
    <li key={id} className="list-group-item list-group-item-action" id={id}>
      {name}
    </li>
  ));
  return (
    <ul className="list-group" onClick={event => onItemClick(event.target.id)}>
      {itemList}
    </ul>
  );
};

export default ItemList;
