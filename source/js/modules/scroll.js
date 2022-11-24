const scroll = () => {

  const header = document.querySelector(".header");
  const links = header.querySelectorAll(".nav__link");
  const button = document.querySelector(".header__burger");

  // Реализация плавного скролла по id
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const linkHref = link.getAttribute("href");
      const section = document.querySelector(linkHref);
      if (linkHref.indexOf('#') > -1) {
        event.preventDefault();
      }

      if (section) {
        // Скролл с помощью библиотеки (кроссбарузерно)
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });

        if (header.classList.contains("header_active")) {
          header.classList.remove("header_active");
          button.classList.remove("open");
        }

        // Обычный скролл
        // section.scrollIntoView({
        //   block: "start",
        //   behavior: "smooth"
        // })
      }
    })
  })

  const priceBtn = document.querySelector(".header__btn");

  priceBtn.addEventListener("click", (e) => {
    e.preventDefault();

    header.classList.remove("header_active");
    button.classList.remove("open");

    const href = priceBtn.getAttribute("href");
    const section = document.querySelector(href);

    seamless.scrollIntoView(section, {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  })


  const calcBtns = document.querySelectorAll(".btn_calc");

  calcBtns.forEach((calcBtn) => {
    calcBtn.addEventListener("click", (e) => {
      e.preventDefault();

      header.classList.remove("header_active");
      button.classList.remove("open");

      const href = calcBtn.getAttribute("href");
      const section = document.querySelector(href);

      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    })
  })
}

export default scroll;
