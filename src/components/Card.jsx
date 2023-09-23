function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <button className="card__delete-button" type="button"></button>
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <button className="card__like-button" type="button"></button>
        <span className="card__likes-counter">{card.likes.length}</span>
      </div>
    </article>
  )
}

export default Card;