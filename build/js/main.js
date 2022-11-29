!function(){"use strict";try{(()=>{const e=document.querySelector(".wrapper");function t(){e.classList.contains("loading")&&e.classList.remove("loading")}window.addEventListener("load",t),setTimeout(t,4e3)})()}catch(e){console.log(e)}try{document.documentElement.classList.remove("no-js")}catch(e){console.log(e)}try{new Swiper(".slider-portfolio",{init:!0,wrapperClass:"slider-portfolio__wrapper",slideClass:"slider-portfolio__screen",direction:"horizontal",slidesPerView:"auto",loop:!0,autoplay:{delay:2e7,pauseOnMouseEnter:!0,disableOnInteraction:!1},speed:600,navigation:{nextEl:".slider-portfolio__button-next",prevEl:".slider-portfolio__button-prev",disabledClass:"slider-portfolio__button-disabled"},pagination:{el:".slider-portfolio__pagination",type:"bullets",bulletClass:"slider-portfolio__pagination-bullet",bulletActiveClass:"slider-portfolio__pagination-bullet_active",clickable:!0},on:{init:function(){}}})}catch(e){console.log(e)}try{$("a.colorbox").colorbox({maxWidth:"90%",maxHeight:"90%",opacity:"0.9",current:"",transition:"fade"})}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".questions__list"),t=e.querySelectorAll(".questions__item");if(e&&t)for(let e=0;e<t.length;e++){const o=t[e];o.querySelector(".questions__subtitle").addEventListener("click",(s=>{for(let o=0;o<t.length;o++){const s=t[o];o!==e&&s.classList.contains("questions__item_open")&&s.classList.remove("questions__item_open")}o.classList.toggle("questions__item_open")}))}})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".contact__address");var t=[50,81.5],o=[50,81.5],s=[-25,-81.5],n=[-25,-81.5],i=[-12.5,-40.75],c=[25,40.75];document.addEventListener("DOMContentLoaded",(function(){ymaps.ready((function(){var l=new ymaps.Map("map",{center:[45.005775,38.931188],zoom:16,controls:["zoomControl"],behaviors:["drag"]}),a=e.innerHTML;window.innerWidth>=768&&window.innerWidth<1370?(c=t,i=s):window.innerWidth>=1370&&(c=o,i=n);var r=new ymaps.Placemark([45.005775,38.931188],{hintContent:"Выставка бань-бочек от Bochky® Вт-Сб с 10:00 до 18:00",balloonContent:a},{iconLayout:"default#image",iconImageHref:"img/map-pin.png",iconImageSize:c,iconImageOffset:i});l.geoObjects.add(r)})),setTimeout((function(){let e=document.querySelector(".ymaps-2-1-79-gototech");e&&e.parentNode.removeChild(e)}),2e3)}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelectorAll(".year"),t=(new Date).getFullYear();e.forEach((e=>{e.textContent=t}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".up");e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href"),s=document.querySelector(o);seamless.scrollIntoView(s,{behavior:"smooth",block:"start",inline:"center"})}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".header"),t=e.querySelectorAll(".nav__link"),o=document.querySelector(".header__burger");t.forEach((t=>{t.addEventListener("click",(s=>{const n=t.getAttribute("href"),i=document.querySelector(n);n.indexOf("#")>-1&&s.preventDefault(),i&&(seamless.scrollIntoView(i,{behavior:"smooth",block:"start",inline:"center"}),e.classList.contains("header_active")&&(e.classList.remove("header_active"),o.classList.remove("open")))}))}));const s=document.querySelector(".header__btn");s.addEventListener("click",(t=>{t.preventDefault(),e.classList.remove("header_active"),o.classList.remove("open");const n=s.getAttribute("href"),i=document.querySelector(n);seamless.scrollIntoView(i,{behavior:"smooth",block:"start",inline:"center"})})),document.querySelectorAll(".btn_calc").forEach((t=>{t.addEventListener("click",(s=>{s.preventDefault(),e.classList.remove("header_active"),o.classList.remove("open");const n=t.getAttribute("href"),i=document.querySelector(n);seamless.scrollIntoView(i,{behavior:"smooth",block:"start",inline:"center"})}))}))})()}catch(e){console.log(e)}try{window.screen.width<=1024?new AirDatepicker("#air",{weekends:[0,1],isMobile:!0,autoClose:!0}):new AirDatepicker("#air",{weekends:[0,1],autoClose:!0})}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".header__burger"),t=document.querySelector(".header");e.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("header_active")?(t.classList.remove("header_active"),e.classList.remove("open")):(t.classList.add("header_active"),e.classList.add("open"))}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".quiz"),t=e.querySelectorAll(".quiz__question-block"),o=e.querySelector(".quiz__next"),s=e.querySelector(".quiz__prev"),n=e.querySelector(".quiz__send"),i=e.querySelector(".personal"),c=e.querySelector(".progressbar__line"),l=e.querySelector(".progressbar__actually-question"),a=e.querySelector(".quiz__author-desc"),r=e.querySelector(".quiz__status"),d=e.querySelector(".quiz__gift-status_1"),u=e.querySelector(".quiz__gift-status_2"),m=e.querySelector(".quiz__gift-status_3"),v=document.querySelector(".top"),_="Пройдите этот тест и я лично для Вас рассчитаю стоимость",y="Пока-что:",L="не известна",f="закрыт",h="не выбран";let p=0;function q(){seamless.scrollIntoView(v,{behavior:"smooth",block:"start",inline:"center"})}t.forEach((e=>{e.classList.remove("quiz__question-block_open")})),t[p].classList.add("quiz__question-block_open"),c.style.width=100*(p+1)/6+"%",l.textContent=1,a.textContent=_,r.textContent=y,d.textContent=L,u.textContent=f,m.textContent=h,o.addEventListener("click",(s=>{if(s.preventDefault(),p>=t.length-1)return;let v=t[p],g=!1;v.querySelectorAll("input").forEach((e=>{e.checked&&(g=!0)})),!1!==g&&(p++,q(),t.forEach((e=>{e.classList.remove("quiz__question-block_open")})),t[p].classList.add("quiz__question-block_open"),p!=t.length-1&&(i.classList.add("visually-hidden"),e.classList.remove("quiz_finish"),a.textContent=_,r.textContent=y,d.textContent=L,u.textContent=f,m.textContent=h),p===t.length-1&&(i.classList.remove("visually-hidden"),o.style.display="none",n.style.display="block",e.classList.add("quiz_finish"),a.textContent="Отлично! Я приступаю к расчету стоимости!",r.textContent="Теперь:",d.textContent="известна",u.textContent="открыт",m.textContent="выбран"),c.style.width=100*(p+1)/6+"%",l.textContent=p+1,l.textContent>t.length-1&&(l.textContent=6))})),s.addEventListener("click",(s=>{s.preventDefault(),p<=0||(p--,q(),t.forEach((e=>{e.classList.remove("quiz__question-block_open")})),t[p].classList.add("quiz__question-block_open"),p!=t.length-1&&(i.classList.add("visually-hidden"),o.style.display="block",n.style.display="none",e.classList.remove("quiz_finish"),a.textContent=_,r.textContent=y,d.textContent=L,u.textContent=f,m.textContent=h),c.style.width=100*(p+1)/6+"%",l.textContent=p+1)}))})()}catch(e){console.log(e)}try{!function(e,t="+7 (___) ___-__-__"){const o=document.querySelectorAll(e);function s(e){const o=e.keyCode,s=t,n=s.replace(/\D/g,""),i=this.value.replace(/\D/g,"");let c=0,l=s.replace(/[_\d]/g,(function(e){return c<i.length?i.charAt(c++)||n.charAt(c):e}));c=l.indexOf("_"),-1!==c&&(l=l.slice(0,c));let a=s.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of o)e.addEventListener("input",s),e.addEventListener("focus",s),e.addEventListener("blur",s)}(".mask-phone-js","+7 (___) ___-__-__")}catch(e){console.log(e)}try{(()=>{const e={fluid:!0,responsive:!0},t=document.querySelector(".modal-video"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".video-link");document.querySelector("video"),document.addEventListener("DOMContentLoaded",(function(){videojs("my-video",e,(function(){t.querySelector(".my-video-dimensions").classList.add("vjs-fluid");const e=this;e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),console.log("load"),t.classList.add("modal-video_load"),setTimeout((function(){console.log("play"),t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))}))})()}catch(e){console.log(e)}try{(()=>{const e={fluid:!0,responsive:!0};document.querySelector(".reviews__link_1"),(()=>{const t=document.querySelector(".modal-video-mini_1"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".reviews__link_1");videojs("my-video1",e,(function(){const e=this;t.querySelector(".my-video1-dimensions").classList.add("vjs-fluid"),e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),t.classList.add("modal-video_load"),setTimeout((function(){t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))})(),(()=>{const t=document.querySelector(".modal-video-mini_2"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".reviews__link_2");videojs("my-video2",e,(function(){const e=this;t.querySelector(".my-video2-dimensions").classList.add("vjs-fluid"),e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),t.classList.add("modal-video_load"),setTimeout((function(){t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))})(),(()=>{const t=document.querySelector(".modal-video-mini_3"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".reviews__link_3");videojs("my-video3",e,(function(){const e=this;t.querySelector(".my-video3-dimensions").classList.add("vjs-fluid"),e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),t.classList.add("modal-video_load"),setTimeout((function(){t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))})(),(()=>{const t=document.querySelector(".modal-video-mini_4"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".reviews__link_4");videojs("my-video4",e,(function(){const e=this;t.querySelector(".my-video4-dimensions").classList.add("vjs-fluid"),e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),t.classList.add("modal-video_load"),setTimeout((function(){t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))})(),(()=>{const t=document.querySelector(".modal-video-mini_5"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".reviews__link_5");videojs("my-video5",e,(function(){const e=this;t.querySelector(".my-video5-dimensions").classList.add("vjs-fluid"),e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),t.classList.add("modal-video_load"),setTimeout((function(){t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))})(),(()=>{const t=document.querySelector(".modal-video-mini_6"),o=t.querySelector(".close"),s=t.querySelector(".modal-video__inner"),n=document.querySelector(".reviews__link_6");videojs("my-video6",e,(function(){const e=this;t.querySelector(".my-video6-dimensions").classList.add("vjs-fluid"),e.isReady_&&n.addEventListener("click",(o=>{o.preventDefault(),t.classList.add("modal-video_load"),setTimeout((function(){t.classList.remove("modal-video_load"),t.classList.add("modal-video_active"),e.play()}),1e3)})),t.addEventListener("click",(o=>{o.composedPath().includes(s)||(t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0))})),o.addEventListener("click",(o=>{o.preventDefault(),t.classList.contains("modal-video_active")&&t.classList.remove("modal-video_active"),e.pause(),e.currentTime(0)}))}))})()})()}catch(e){console.log(e)}try{(()=>{let e=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&$(".counting").each((function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"easeOutCirc",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})}))}))}),{rootMargin:"-50px",threshold:[.5]}),t=document.querySelectorAll(".dreams__list");for(let o of t)e.observe(o)})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelectorAll(".modal"),t=document.querySelector(".modal__call"),o=document.querySelectorAll(".modal-open-js"),s=document.querySelector(".header__burger"),n=document.querySelector(".header");o.forEach((o=>{o.addEventListener("click",(o=>{o.preventDefault(),n.classList.remove("header_active"),s.classList.remove("open"),e.forEach((e=>{e.classList.contains("modal_active")&&e.classList.remove("modal_active")})),t.classList.add("modal_active")}))})),e.forEach((t=>{const o=t.querySelector(".modal__close"),s=t.querySelector(".modal__inner");t.addEventListener("click",(e=>{e.composedPath().includes(s)||t.classList.remove("modal_active")})),o.addEventListener("click",(t=>{t.preventDefault(),e.forEach((e=>{e.classList.contains("modal_active")&&e.classList.remove("modal_active")}))}))}))})()}catch(e){console.log(e)}try{(()=>{function e(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}var t=e("alertwin");if("no"!=t){function o(){const e=document.querySelector(".modal_shit"),t=e.querySelector(".modal__inner"),o=e.querySelector(".modal__close");e.classList.add("modal_active"),e.addEventListener("click",(o=>{o.composedPath().includes(t)||e.classList.remove("modal_active")})),o.addEventListener("click",(t=>{t.preventDefault(),e.classList.contains("modal_active")&&e.classList.remove("modal_active")}))}$(document).mouseleave((function(s){if(s.clientY<10){if("no"==(t=e("alertwin")))return;o(),console.log(t);var n=new Date;n.setDate(n.getDate()+1),document.cookie="alertwin=no; max-age=86400; path=/;"}}))}})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".header__top");window.addEventListener("scroll",(()=>{window.scrollY>=70&&window.innerWidth<=1280&&e.classList.add("header__top_sticky"),(window.scrollY<70||window.innerWidth>1280)&&e.classList.remove("header__top_sticky")})),window.addEventListener("resize",(()=>{window.scrollY>=70&&window.innerWidth<=1280&&e.classList.add("header__top_sticky"),(window.scrollY<70||window.innerWidth>1280)&&e.classList.remove("header__top_sticky")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".photos__btn1"),t=document.querySelector(".photos__btn2"),o=document.querySelector(".photos__list_2");e.addEventListener("click",(()=>{o.classList.add("photos__list_open")})),t.addEventListener("click",(()=>{o.classList.remove("photos__list_open")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelectorAll("img[data-source]"),t=document.documentElement.clientHeight;let o=[];function s(){let s=o.findIndex((e=>pageYOffset>e-t));s>=0&&(e[s].dataset.source&&(e[s].src=e[s].dataset.source,e[s].removeAttribute("data-source")),delete o[s])}e.length>0&&e.forEach((e=>{e.dataset.source&&(o.push(e.getBoundingClientRect().top+pageYOffset-1e3),s())})),window.addEventListener("scroll",(function(){document.querySelectorAll("img[data-source]").length>0&&s()}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".form-quiz"),t=document.querySelector(".form-quiz"),o=document.querySelector(".modal_ok");function s(e){e.classList.add("_error")}function n(e){e.classList.remove("_error")}function i(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(c){c.preventDefault();let l=function(e){let t=0,o=e.querySelectorAll("._req");for(let e=0;e<o.length;e++){const c=o[e];n(c),c.classList.contains("_email")?i(c)&&(s(c),t++):("checkbox"===c.getAttribute("type")&&!1===c.checked||""===c.value)&&(s(c),t++)}return t}(e),a=new FormData(e);if(0===l){t.classList.add("_sending");let s=await fetch("sendquiz.php",{method:"POST",body:a});s.ok?(await s.json(),e.reset(),t.classList.remove("_sending"),o.classList.add("modal_active"),setTimeout((function(){o.classList.remove("modal_active")}),5e3)):(t.classList.add("_no"),t.classList.remove("_sending"),setTimeout((function(){t.classList.remove("_no")}),3e3))}else console.log("Заполните поля")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".form-shit"),t=document.querySelector(".modal_shit").querySelector(".modal__inner");function o(e){e.classList.add("_error")}function s(e){e.classList.remove("_error")}function n(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(i){i.preventDefault();let c=function(e){let t=0,i=e.querySelectorAll("._req");for(let e=0;e<i.length;e++){const c=i[e];s(c),c.classList.contains("_email")?n(c)&&(o(c),t++):("checkbox"===c.getAttribute("type")&&!1===c.checked||""===c.value)&&(o(c),t++)}return t}(e),l=new FormData(e);if(0===c){t.classList.add("_sending");let o=await fetch("sendshit.php",{method:"POST",body:l});o.ok?(await o.json(),e.reset(),t.classList.remove("_sending"),t.classList.add("_ok"),setTimeout((function(){t.classList.remove("_ok")}),5e3)):(t.classList.add("_no"),t.classList.remove("_sending"),setTimeout((function(){t.classList.remove("_no")}),3e3))}else console.log("Заполните поля")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".form-call"),t=document.querySelector(".modal__call").querySelector(".modal__inner");function o(e){e.classList.add("_error")}function s(e){e.classList.remove("_error")}function n(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(i){i.preventDefault();let c=function(e){let t=0,i=e.querySelectorAll("._req");for(let e=0;e<i.length;e++){const c=i[e];s(c),c.classList.contains("_email")?n(c)&&(o(c),t++):("checkbox"===c.getAttribute("type")&&!1===c.checked||""===c.value)&&(o(c),t++)}return t}(e),l=new FormData(e);if(0===c){t.classList.add("_sending");let o=await fetch("sendcallmodal.php",{method:"POST",body:l});o.ok?(await o.json(),e.reset(),t.classList.remove("_sending"),t.classList.add("_ok"),setTimeout((function(){t.classList.remove("_ok")}),5e3)):(t.classList.add("_no"),t.classList.remove("_sending"),setTimeout((function(){t.classList.remove("_no")}),3e3))}else console.log("Заполните поля")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".form-exhibition"),t=document.querySelector(".form-exhibition");function o(e){e.classList.add("_error")}function s(e){e.classList.remove("_error")}function n(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(i){i.preventDefault();let c=function(e){let t=0,i=e.querySelectorAll("._req");for(let e=0;e<i.length;e++){const c=i[e];if(s(c),c.classList.contains("_date")){let e=new Date,s=c.value,n=s.slice(0,2),i=s.slice(3,5),l=s.slice(6,10),a=new Date(l+"-"+i+"-"+n),r=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],d=r[a.getDay()];console.log(e.getHours()),(d===r[0]||d===r[1]||e.getTime()>a.getTime())&&(o(c),t++)}c.classList.contains("_email")?n(c)&&(o(c),t++):("checkbox"===c.getAttribute("type")&&!1===c.checked||""===c.value)&&(o(c),t++)}return t}(e),l=new FormData(e);if(0===c){t.classList.add("_sending");let o=await fetch("sendexhibition.php",{method:"POST",body:l});o.ok?(await o.json(),e.reset(),t.classList.remove("_sending"),t.classList.add("_ok"),setTimeout((function(){t.classList.remove("_ok")}),5e3)):(t.classList.add("_no"),t.classList.remove("_sending"),setTimeout((function(){t.classList.remove("_no")}),3e3))}else console.log("Заполните поля")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".form-ready"),t=document.querySelector(".ready__form-block");function o(e){e.classList.add("_error")}function s(e){e.classList.remove("_error")}function n(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(i){i.preventDefault();let c=function(e){let t=0,i=e.querySelectorAll("._req");for(let e=0;e<i.length;e++){const c=i[e];s(c),c.classList.contains("_email")?n(c)&&(o(c),t++):("checkbox"===c.getAttribute("type")&&!1===c.checked||""===c.value)&&(o(c),t++)}return t}(e),l=new FormData(e);if(0===c){t.classList.add("_sending");let o=await fetch("sendcallmodal.php",{method:"POST",body:l});o.ok?(await o.json(),e.reset(),t.classList.remove("_sending"),t.classList.add("_ok"),setTimeout((function(){t.classList.remove("_ok")}),5e3)):(t.classList.add("_no"),t.classList.remove("_sending"),setTimeout((function(){t.classList.remove("_no")}),3e3))}else console.log("Заполните поля")}))})()}catch(e){console.log(e)}try{(()=>{const e=document.querySelector(".form-price"),t=document.querySelector(".form-price");function o(e){e.classList.add("_error")}function s(e){e.classList.remove("_error")}function n(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(i){i.preventDefault();let c=function(e){let t=0,i=e.querySelectorAll("._req");for(let e=0;e<i.length;e++){const c=i[e];s(c),c.classList.contains("_email")?n(c)&&(o(c),t++):("checkbox"===c.getAttribute("type")&&!1===c.checked||""===c.value)&&(o(c),t++)}return t}(e),l=new FormData(e);if(0===c){t.classList.add("_sending");let o=await fetch("sendprice.php",{method:"POST",body:l});o.ok?(await o.json(),e.reset(),t.classList.remove("_sending"),t.classList.add("_ok"),setTimeout((function(){t.classList.remove("_ok")}),5e3)):(t.classList.add("_no"),t.classList.remove("_sending"),setTimeout((function(){t.classList.remove("_no")}),3e3))}else console.log("Заполните поля")}))})()}catch(e){console.log(e)}}();
//# sourceMappingURL=main.js.map