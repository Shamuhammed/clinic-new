//accardion
const accardion = document.querySelector('.accordion');
const accordionItem = document.querySelectorAll('.accordion__item');
accardion.addEventListener('click', beClick);

function beClick(e) {
   if (e.target.closest('.target')) {
      removeTargetAccardionItem()
   } else {
      removeTargetAccardionItem()
      addTargetAccardionItem(e.target)
   }
}

function addTargetAccardionItem(item) {
   let elem = item.closest('.accordion__item');
   elem.classList.add('target')
}

function removeTargetAccardionItem() {
   for (elem of accordionItem) {
      elem.classList.remove('target');
   }
}