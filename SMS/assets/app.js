
// Mobile nav & theme toggle + scroll reveal (respects reduced motion)
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  if (nav && navToggle){
    navToggle.addEventListener('click', () => nav.classList.toggle('show'));
  }

  const toggle = document.querySelector('.theme-toggle');
  if (toggle){
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.dataset.theme !== 'light';
      document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', document.documentElement.dataset.theme);
    });
    const saved = localStorage.getItem('theme');
    if (saved){ document.documentElement.dataset.theme = saved; }
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('reveal-in'); io.unobserve(e.target); } });
    }, { threshold:.18 });
    els.forEach(el => io.observe(el));
  }
});
