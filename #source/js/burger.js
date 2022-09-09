
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackkBerry/i);
   },
   IOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any : function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

//arrow
const mobile = document.querySelector('._touch');
if (mobile) {
   let menuArrows = document.querySelectorAll('.top-menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }
}

//меню бургер

const iconMenu = document.querySelector('.top-menu__icon');
const menuBody = document.querySelector('.top-menu__nav');
if (iconMenu) {
   iconMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

//прокрутка к секции

const menuLinks = document.querySelectorAll('.top-menu__link[data-goto]');
if (menuLinks.length > 0) { //проверка есть ли мену линк с дата
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick); //событие при клике
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;//целевая ссылка 
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {//Проверка естьли дата гото и заполнены ли они
         const gotoBlock = document.querySelector(menuLink.dataset.goto);//конкретный дата
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;//рстояние скролла

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({ //функция скролла
            top: gotoBlockValue, //растояние
            behavior: 'smooth' //скорость
         });
         e.preventDefault(); //ссылки глочим
      }
   }
} 