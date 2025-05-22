'use strict';

//Page scrolling effect
document.querySelector('.nav-list').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-list-link')) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  }
});


document.querySelector('.nav-list-big').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('hideOnMobile')) {
    const id2 = e.target.getAttribute('href');
    const section2 = document.querySelector(id2);
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

//Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//hamburger menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navList = document.querySelector('.nav-list');

// menuToggle.addEventListener('click', () => {
//   navList.classList.toggle('open');
// });

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
