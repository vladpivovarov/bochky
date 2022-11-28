const formShit = () => {
  const form = document.querySelector(".form-shit");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    console.log("Отправка form-shit");
  }


}

export default formShit;
