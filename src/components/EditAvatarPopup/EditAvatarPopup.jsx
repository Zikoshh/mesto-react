import { useRef, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/index.jsx";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef("");

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      submitButtonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingSubmitButtonText="Сохранение..."
      submitButtonAriaLabel="Кнопка обновления карточки"
    >
      <input
        id="placeAvatar"
        className="popup__input"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      ></input>
      <p className="popup__error placeAvatar-error"></p>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
