const formQuiz = () => {
  const form = document.querySelector(".form-quiz");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    console.log("Отправка form-quiz");
  }


}

export default formQuiz;
