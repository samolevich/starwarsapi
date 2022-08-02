const ItemList = ({ list }) => {
  const itemList = list.map(({ id, name }) => (
    <li key={id} className="list-group-item list-group-item-action">
      {name}
    </li>
  ));
  return <ul className="list-group">{itemList}</ul>;
};

export default ItemList;
