import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import PopupWithForm from "../PopupWithForm/index.jsx";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile-edit"
      submitButtonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingSubmitButtonText="Сохранение..."
      submitButtonAriaLabel="Кнопка обновления информации о пользователе"
    >
      <input
        id="name"
        className="popup__input popup__input_user-name"
        name="name"
        type="text"
        placeholder="Введите имя"
        minLength="2"
        maxLength="40"
        required
        value={name || ''}
        onChange={handleNameChange}
      />
      <p className="popup__error name-error"></p>
      <input
        id="about"
        className="popup__input popup__input_about-user"
        name="about"
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <p className="popup__error about-error"></p>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
