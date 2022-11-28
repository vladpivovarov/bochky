const preload = () => {

  //Скрипт для прелоадера
  const wrapper = document.querySelector(".wrapper");

  function removeLoader() {
    if (wrapper.classList.contains("loading")) {
      wrapper.classList.remove("loading");
    }
  }

  window.addEventListener("load", removeLoader);

  // Если не загрузилось пофиг - вырубаем прелоадер
  setTimeout(removeLoader, 4000);
}

export default preload;
