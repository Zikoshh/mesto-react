function PopupWithForm({
  title,
  name,
  submitButtonText,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  loadingSubmitButtonText,
  submitButtonAriaLabel,
  children,
}) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
          aria-label="Кнопка закрытия попапа"
        ></button>
        <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
        <form
          className={`popup__form popup__form_${name}`}
          action="#"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="popup__submit"
            type="submit"
            aria-label={submitButtonAriaLabel}
          >
            {isLoading ? loadingSubmitButtonText : submitButtonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
