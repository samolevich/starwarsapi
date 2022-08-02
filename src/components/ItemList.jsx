const ItemList = ({ list }) => {
  const itemList = list.map(item => (
    <li key={item.name} className="list-group-item list-group-item-action">
      {item.name}
    </li>
  ));
  return <ul className="list-group">{itemList}</ul>;
};

export default ItemList;
