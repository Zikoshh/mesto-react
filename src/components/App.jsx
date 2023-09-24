import { useState } from "react";
import Header from "./Header.jsx";
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return ( 
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm title='Редактировать профиль' name='profile-edit' submitButtonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="userName" className="popup__input popup__input_user-name" name="userName" type="text" placeholder="Введите имя" minLength="2" maxLength="40" required></input>
        <p className="popup__error userName-error"></p>
        <input id="aboutUser" className="popup__input popup__input_about-user" name="aboutUser" type="text" placeholder="О себе" minLength="2" maxLength="200" required></input>
        <p className="popup__error aboutUser-error"></p>
      </PopupWithForm>
      <PopupWithForm title='Новое место' name='add-card' submitButtonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="placeName" className="popup__input" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" required></input>
        <p className="popup__error placeName-error"></p>
        <input id="placeLink" className="popup__input" name="link" type="url" placeholder="Ссылка на картинку" required></input>
        <p className="popup__error placeLink-error"></p>
      </PopupWithForm>
      <PopupWithForm title='Вы уверены?' name='delete-card' submitButtonText='Да' />
      <PopupWithForm title='Обновить аватар' name='edit-avatar' submitButtonText='Сохранить' isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups}>
        <input id="placeAvatar" className="popup__input" name="link" type="url" placeholder="Ссылка на картинку" required></input>
        <p className="popup__error placeAvatar-error"></p>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  )
}

export default App;
