// slideshow start
const slideshowDivs = () => {
  for (let i = 1; i <= 4; i++) {
    const div = document.createElement('div');

    div.style.backgroundImage = `url(../images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add('change');
    document.querySelector('.slideshow').appendChild(div);
  }
};
slideshowDivs();
const divs = document.querySelectorAll('.slideshow div');
let a = 1;
const slideshow = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector('.slideshow .change');
    div.classList.remove('change');

    if (a < divs.length) {
      div.nextElementSibling.classList.add('change');
    } else {
      divs[0].classList.add('change');
      a = 1;
    }
  }, 15000);
};
slideshow();
// slideshow end

/* pc wrap animation start here*/
let currentImageIndex = 0;
const images = document.querySelectorAll('.pc-image');

function rotateImage() {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = 'block';
}

// Start the rotation
setInterval(rotateImage, 2000); // Rotate every 2 seconds
/* pc wrap animation end here*/

// section 3 start here Faqs
// show/hide FAQs

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq-icon i');

    if (icon.className === 'uil uil-plus-circle') {
      icon.className = 'uil uil-minus-circle';
    } else {
      icon.className = 'uil uil-plus-circle';
    }
  });
});
// section 3 end here Faqs
