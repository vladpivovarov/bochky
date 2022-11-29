const formReady = () => {
  const form = document.querySelector(".form-ready");
  const box = document.querySelector(".ready__form-block");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      box.classList.add("_sending");
      let response = await fetch("sendcallmodal.php", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        let result = await response.json();

        form.reset();
        box.classList.remove("_sending");
        box.classList.add("_ok");

        setTimeout(function () {
          box.classList.remove("_ok");
        }, 5000);
      } else {
        box.classList.add("_no");
        box.classList.remove("_sending");

        setTimeout(function () {
          box.classList.remove("_no");
        }, 3000);
      }
    } else {
      console.log("Заполните поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.classList.remove("_error");
  }

  // Функция теста Email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

}

export default formReady;
