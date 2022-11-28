const formReady = () => {
  const form = document.querySelector(".form-ready");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    console.log("Отправка form-ready");
  }


}

export default formReady;
