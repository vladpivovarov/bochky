const video = () => {


  const options = {
    fluid: true,
    responsive: true
  };


  const modal = document.querySelector(".modal-video");
  const close = modal.querySelector(".close");
  const modalInner = modal.querySelector(".modal-video__inner");
  const btn = document.querySelector(".video-link");
  const videoReal = document.querySelector("video");

  // Подключаем видео плагин
  function ready() {

    const player = videojs('my-video', options, function onPlayerReady() {
      const wrap = modal.querySelector(".my-video-dimensions");
      wrap.classList.add("vjs-fluid");

      const video = this;

      if (video.isReady_) {

        btn.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("load");
          modal.classList.add("modal-video_load");
          setTimeout(go, 1000);

          function go() {
            console.log("play");
            modal.classList.remove("modal-video_load");
            modal.classList.add("modal-video_active");
            video.play();
          }
        });
      }

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
          video.currentTime(0);
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
        video.currentTime(0);
      })
    });
  }


  document.addEventListener("DOMContentLoaded", ready);
}

export default video;
