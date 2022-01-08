function openPopup() {
  const btnOpen = document.querySelector('.banner__btn');
  const popup = document.querySelector('.popup-contacts');
  const bodyPopup = document.querySelector('.popup-contacts ');
  const bodyPage = document.querySelector('body');
  const inpName = document.querySelector('#contact-name');

  btnOpen.addEventListener('click', () => {
    popup.classList.add('active');
    bodyPage.style.overflow = 'hidden';
    inpName.focus();
  });

  bodyPopup.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.classList.contains('popup-btn-close') ||
      target.classList.contains('popup-contacts__body')
    ) {
      popup.classList.remove('active');
      bodyPage.style.overflow = '';
      btnOpen.focus();
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && popup.classList.contains('active')) {
      popup.classList.remove('active');
      bodyPage.style.overflow = '';
      btnOpen.focus();
    }
  });
}

openPopup();
;
function activateSlider() {
  new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    spaceBetween: 20,
    loop: true,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.41,
        spaceBetween: 16,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.7,
        spaceBetween: 16,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.62,
        spaceBetween: 20,
      },
      // when window width is >= 820px
      820: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 1020px
      1020: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

activateSlider();
;
function audioStart() {
  const btnOn = document.querySelector('.audio-btn__icon_on'),
        btnOff = document.querySelector('.audio-btn__icon_off'),
        audio = document.querySelector('.audio');

  document.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    if (target.classList.contains('audio-btn__icon_off')) {
      btnOff.classList.remove('active');
      btnOn.classList.add('active');
      audio.play();
      audio.volume = 0.6;
    } else {
      btnOff.classList.add('active');
      btnOn.classList.remove('active');
      audio.pause();
    }
  });
}

audioStart();
;

