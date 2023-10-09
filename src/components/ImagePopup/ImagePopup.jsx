function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_full-image ${
        card ? "popup_opened_image" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          src={`${card?.link}`}
          alt={`${card?.name}`}
        />
        <h2 className="popup__title popup__title_image">{`${card?.name}`}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
