const ItemList = ({ list }) => {
  const itemList = list.map(item => (
    <li
      key={item.name}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {item.name}
      <span className="badge bg-primary rounded-pill">{item.url}</span>
    </li>
  ));
  return <ul className="list-group">{itemList}</ul>;
};

export default ItemList;
