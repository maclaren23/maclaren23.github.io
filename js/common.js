function searchActive() {
  const searchBtn = document.querySelector('.search__btn');
  const searchInp = document.querySelector('.search__inp');
  const searchBody = document.querySelector('.header__search');
  searchBtn.addEventListener('click', (e) => {
    searchInp.classList.toggle('active');
    searchBody.classList.toggle('active');
  });
}

searchActive();
function raitingActive() {
  const raitingBody = document.querySelector('.raiting__list');
  const raitingTxt = document.querySelector('.raiting__txt');

  raitingBody.addEventListener('click', (e) => {
    if (e.target.dataset.itemValue) {
      let numStars = e.target.dataset.itemValue;
      raitingBody.dataset.totalValue = numStars;
      raitingTxt.style.color = '#C29974';
    }
  });
}

raitingActive();
function burgerMenu() {
  const btnOpen = document.querySelector('.burger-btns__open');
  const btnClose = document.querySelector('.burger-btns__close');
  const bodyMenu = document.querySelector('.burger');
  const bodyPage = document.querySelector('body');

  btnOpen.addEventListener('click', (e) => {
    btnOpen.classList.add('active');
    btnClose.classList.add('active');
    bodyMenu.classList.add('active');
    bodyPage.style.overflow = 'hidden';
  });
  btnClose.addEventListener('click', (e) => {
    btnOpen.classList.remove('active');
    btnClose.classList.remove('active');
    bodyMenu.classList.remove('active');
    bodyPage.style.overflow = '';
  });
}

burgerMenu();
;
