const Card = ({ entity }) => {
  const randomCardColor = ["bg-success", "bg-danger", "bg-warning", "bg-info"];
  const classNames =
    "card text-white mb-3 " + randomCardColor[Math.floor(Math.random() * 4)];

  const { name, header, id, ...features } = entity;

  const featuresList = Object.entries(features).map(([k, value]) => {
    if (/unknown|n\/a/.test(value)) return null;
    return (
      <li
        key={k}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {k}
        <span className="badge bg-primary rounded-pill">{value}</span>
      </li>
    );
  });

  return (
    <div className={classNames}>
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h4 className="card-title">{entity.name}</h4>
        <ul className="list-group">{featuresList}</ul>
      </div>
    </div>
  );
};

export default Card;
