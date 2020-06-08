const list = document.getElementById('slides-list');
let updater = document.getElementById('sr-only');
const slides = Array.from(list.children);
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const pagination = Array.from((document.getElementById('pagination-container').children));

// console.dir(list.children);

function slideNumberReporter() {

  for (i=0;i<list.children.length;i++) {

  if (list.children[i].className == 'current-slide') {

    let updaterStatement = '- slide ' + (i+1) + ' of ' + list.children.length;
    updater.innerText = updaterStatement;
  }

  }

}

// slideNumberReporter();







// Positioning the slides in the clunkiest way possible

slides[0].style.left = 0;
slides[1].style.left = '900px';
slides[2].style.left = '1800px';


// Moving the slides on click

const moveToSlide = (list, currentSlide, targetSlide, currentLink, targetLink) => {

  list.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
  currentSlide.classList.add('opaque');
  targetSlide.classList.remove('opaque');
  currentSlide.setAttribute('aria-hidden','true');
  targetSlide.setAttribute('aria-hidden','false');
  currentLink.setAttribute('tabindex','-1');
  targetLink.setAttribute('tabindex','0');


}

previousButton.addEventListener('click', e => {
  const currentSlide = list.querySelector('.current-slide');
  const previousSlide = currentSlide.previousElementSibling;
  const currentLink = currentSlide.querySelector('a');
  const previousLink = previousSlide.querySelector('a');


  moveToSlide(list, currentSlide, previousSlide, currentLink, previousLink);
  slideNumberReporter();

})

nextButton.addEventListener('click', e => {
  const currentSlide = list.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentLink = currentSlide.querySelector('a');
  const nextLink = nextSlide.querySelector('a');

  moveToSlide(list, currentSlide, nextSlide, currentLink, nextLink);
  slideNumberReporter();

})

// Pattern abridged from Kevin Powell's video: https://www.youtube.com/watch?v=gBzsE0oieio
