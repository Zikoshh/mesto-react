import { useRef, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/index.jsx";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const inputNameRef = useRef("");
  const inputLinkRef = useRef("");

  useEffect(() => {
    inputNameRef.current.value = "";
    inputLinkRef.current.value = "";
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value,
    });
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
        ref={inputNameRef}
      ></input>
      <p className="popup__error placeName-error"></p>
      <input
        id="placeLink"
        className="popup__input"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={inputLinkRef}
      ></input>
      <p className="popup__error placeLink-error"></p>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
