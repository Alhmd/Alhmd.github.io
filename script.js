// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Hide nav on scroll down, show on scroll up (glass header stays put near top)
let lastScroll = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  navbar.style.transform = (currentScroll > lastScroll && currentScroll > 80)
    ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = currentScroll;
});

// No scroll-reveal animation: content is visible unconditionally by
// default (see CSS). A previous version hid content until scrolled
// into view via IntersectionObserver, but that left everything blank
// in non-scrolling render contexts (print-to-PDF, crawlers, etc.) —
// not an acceptable tradeoff for a site whose whole job is being read.
