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

// No scroll-reveal animation: content is visible unconditionally by
// default (see CSS). A previous version hid content until scrolled
// into view via IntersectionObserver, but that left everything blank
// in non-scrolling render contexts (print-to-PDF, crawlers, etc.) —
// not an acceptable tradeoff for a site whose whole job is being read.
