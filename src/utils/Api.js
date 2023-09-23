class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorizationToken = headers.authorization;
  }

  _getResponse(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }

    return response.json();
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorizationToken,
      },
    }).then(this._getResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorizationToken,
      },
    }).then(this._getResponse);
  }

  setUserInfo({ userName, aboutUser }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${userName}`,
        about: `${aboutUser}`,
      }),
    }).then(this._getResponse);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      }),
    }).then(this._getResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorizationToken,
      },
    }).then(this._getResponse);
  }

  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authorizationToken,
      },
    }).then(this._getResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authorizationToken,
      },
    }).then(this._getResponse);
  }

  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._getResponse);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
    authorization: "af9c56b1-8df9-4cc1-aff7-4c8e6a2b0592",
    "Content-Type": "application/json",
  },
});

export default api;
