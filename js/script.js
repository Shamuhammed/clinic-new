// const leftSide = 'hiddenLeft';
// const rightSide = 'hiddenRight';
// const topSide = 'hiddenTop';
// const bottomSide = 'hiddenBottom';

const banner = document.querySelector('.banner');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section-anim');
document.body.onload = () => {
   animF(banner)
   animF(header)
}; 

function animF(section) {
   let elems = section.querySelectorAll('.animate');
   elems.forEach(elem => {
      addHidden(elem, elem.dataset.time, elem.dataset.side)
   })
   section.classList.add('section-animated');
   if (section.classList.contains('stats')) startStateAnim();
}

function addHidden(elem, time, side) {
   elem.classList.add(side);
   setTimeout(()=>{removeHidden(elem, side)}, time)
}
function removeHidden(elem, side) {
   elem.classList.remove(side)
   elem.style.transition = 'all .8s ease';
}

function startSectionAnimation(height) {
   sections.forEach(sec => {
      if (!sec.classList.contains('section-animated')){
      let secHeight = sec.offsetTop;
      if ((secHeight - window.innerHeight + 100) < height) {
         animF(sec);
      }}
   });
}

window.addEventListener('scroll', () => {
   startSectionAnimation(window.pageYOffset);
   headerToggle()
});

// header
function headerToggle() {
   if (window.pageYOffset > 80) {
      header.classList.add('active')
   } else if (window.pageYOffset < 80) {
      header.classList.remove('active')
   }
}

//anim stats count
const stats = document.querySelectorAll('.statNum');

function startStateAnim() {
   stats.forEach(elem => {
      stateAnimation(elem, 0, parseInt(elem.dataset.count))
   });
}

function stateAnimation(elem, num, count) {

   let time; 

   if (num > 1000) elem.innerHTML = `${String(num).slice(0, -3)},${String(num).substr(-3)}`;
   else elem.innerHTML = num;

   if (count > 1000 && count > (num + 150)) {
      time = Math.ceil(1000 / (count / 150))
      num += 150;
   } else {
      num++;
      time = Math.ceil(1000 / count)
   }
   

   if (num !== count+1) return setTimeout(() => {
      stateAnimation(elem, num, count)
   }, time);
}

