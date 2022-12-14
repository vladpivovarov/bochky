const formExhibition = () => {
  const form = document.querySelector(".form-exhibition");
  const box = document.querySelector(".form-exhibition");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      box.classList.add("_sending");
      let response = await fetch("sendexhibition.php", {
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

      // Проверка поля email, chekbox(согласия на обработку данных) и текстовых полей
      if (input.classList.contains("_date")) {
        let nowDate = new Date();
        let part = input.value;
        let partFirst = part.slice(0, 2);
        let partMedium = part.slice(3, 5);
        let partLast = part.slice(6, 10);
        let finish = partLast + "-" + partMedium + "-" + partFirst;
        let date1 = new Date(finish);
        let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        let dayOfWeek = days[date1.getDay()];

        console.log(nowDate.getHours());

        if ((dayOfWeek === days[0]) || (dayOfWeek === days[1]) || (nowDate.getTime() > date1.getTime())) {
          formAddError(input);
          error++;
        }
      }

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

export default formExhibition;
