const ItemList = ({ list, onItemClick }) => {
  const itemList = list.map(({ id, name }) => (
    <li
      key={id}
      className="list-group-item list-group-item-action"
      onClick={() => onItemClick(id)}
    >
      {name}
    </li>
  ));
  return <ul className="list-group">{itemList}</ul>;
};

export default ItemList;
