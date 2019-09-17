var typed = new Typed('.typed', {
  strings: ["python", "css", "flask", "html", "php", "Arduino", "C#", 'raspberry pi'],
  typeSpeed: 50,
  loop: true,
  backSpeed: 30
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
  items:5,
    autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
ScrollReveal().reveal('.reveal', { delay: 500 });