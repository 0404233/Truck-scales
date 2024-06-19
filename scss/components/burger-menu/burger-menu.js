export default function burgerMenu() {
  const headerMenu = document.querySelector('.header__menu');
  const burgerMenu = document.querySelector('.burger-menu');
  const menuBody = document.querySelector('.menu__body');

  headerMenu.addEventListener('click', () => {
    menuBody.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  })
}
