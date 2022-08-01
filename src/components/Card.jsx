const Card = ({ name, birth_year }) => {
  const randomCardColor = ["bg-success", "bg-danger", "bg-warning", "bg-info"];
  const classNames =
    "card text-white mb-3 " + randomCardColor[Math.floor(Math.random() * 4)];

  return (
    <div className={classNames}>
      <div className="card-header">{name}</div>
      <div className="card-body">
        <h4 className="card-title">{birth_year}</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;
