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

// Nav active-link highlighting (class toggle only — does not hide/show content)
const navAnchors = document.querySelectorAll('.nav-links a');
const sectionEls = Array.from(navAnchors)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
if (sectionEls.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sectionEls.forEach(el => navObserver.observe(el));
}

// Project card spotlight cursor
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});

// Hero photo 3D tilt (desktop only, subtle)
const heroPhoto = document.getElementById('heroPhoto');
if (heroPhoto && window.matchMedia('(hover: hover)').matches) {
  heroPhoto.addEventListener('mousemove', (e) => {
    const rect = heroPhoto.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    heroPhoto.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  heroPhoto.addEventListener('mouseleave', () => {
    heroPhoto.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
  });
}

// No scroll-reveal animation: content is visible unconditionally by
// default (see CSS). A previous version hid content until scrolled
// into view via IntersectionObserver, but that left everything blank
// in non-scrolling render contexts (print-to-PDF, crawlers, etc.) —
// not an acceptable tradeoff for a site whose whole job is being read.
