const lazy = () => {


  // Универсальный скрипт - для подгрузки изображений в html
  // Вставьте data атрибут data-source вместо src. А в src подменную прозрачную картинку
  // Подробнее в видео вк

  const lazyImages = document.querySelectorAll("img[data-source]");
  const windowHeight = document.documentElement.clientHeight;

  let lazyImagesPositions = [];
  if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
      if (img.dataset.source) {
        lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
        lazyScrollCheck();
      }
    })
  }

  // При скролле
  window.addEventListener("scroll", lazyScroll);

  // При изменении содержимого тегов
  document.querySelector(".quiz__right").addEventListener("DOMSubtreeModified", lazyScroll);


  function lazyScroll() {
    if (document.querySelectorAll("img[data-source]").length > 0) {
      lazyScrollCheck();
    }
  }

  function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
      item => pageYOffset > item - windowHeight
    )

    if (imgIndex >= 0) {
      if (lazyImages[imgIndex].dataset.source) {
        lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.source;
        lazyImages[imgIndex].removeAttribute("data-source");
      }

      delete lazyImagesPositions[imgIndex];
    }
  }
}

export default lazy;
