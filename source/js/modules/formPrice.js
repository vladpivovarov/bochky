const formPrice = () => {
  const form = document.querySelector(".form-price");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    console.log("Отправка form-price");
  }


}

export default formPrice;
