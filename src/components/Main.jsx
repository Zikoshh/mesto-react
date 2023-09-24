import { useState, useEffect } from "react";
import api from '../utils/Api.js';
import Card from '../components/Card.jsx';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(userInfo => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => {
        console.error(err);
      });

    api.getInitialCards()
      .then(cardData => {
        setCards(cardData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return (
    <main>
      <section className="profile">
          <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="Аватар пользователя" src={userAvatar} />
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="cards">
          {cards.map(card =>
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          )}
        </section>
    </main>
  )
}

export default Main;