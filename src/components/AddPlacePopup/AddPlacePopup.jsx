import { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/index.jsx";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [ name, setName ] = useState("");
  const [ link, setLink ] = useState("");

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      submitButtonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingSubmitButtonText="Создание..."
      submitButtonAriaLabel="Кнопка добавления карточки"
    >
      <input
        id="placeName"
        className="popup__input"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={handleNameChange}
      ></input>
      <p className="popup__error placeName-error"></p>
      <input
        id="placeLink"
        className="popup__input"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
      ></input>
      <p className="popup__error placeLink-error"></p>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
