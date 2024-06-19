import burgerMenu from "./scss/components/burger-menu/burger-menu.js";
import gallery from "./scss/components/section-gallery/section-gallery.js"

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);

      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
      });
      e.preventDefault();
    }
  }
}

burgerMenu();
gallery();