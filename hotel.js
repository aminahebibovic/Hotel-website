document.addEventListener('DOMContentLoaded', function () {
  // Preloader - sakrij ga kada stranica bude učitana
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }

  // Prebacivanje između tamne i svetle teme
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-theme'); // Prebaci klasu za tamnu temu
    const icon = themeToggleBtn.textContent === '🌙' ? '🌞' : '🌙'; // Menjaj ikonu
    themeToggleBtn.textContent = icon;
  });

  // Sat na vrhu stranice
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Pokreni odmah

  // Kod za pretragu (search)
  const searchInput = document.getElementById('search-input');
  const boxes = document.querySelectorAll('.box');
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    boxes.forEach(function (box) {
      const boxTitle = box.querySelector('h3').innerText.toLowerCase();

      if (boxTitle.includes(searchTerm)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });

  // Scrollanje do sekcija na klik dugmadi
  const traziButton = document.querySelector('.button');
  traziButton.addEventListener('click', function (event) {
    event.preventDefault();
    const ciljnaSekcija = document.querySelector('.search-bar-section');
    if (ciljnaSekcija) {
      ciljnaSekcija.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Sekcija nije pronađena');
    }
  });

  // Scrollanje do posebne ponude
  const posebnaponudaButton = document.getElementById('posebnaponudaButton');
  const formaContainer = document.querySelector('.posebna-ponuda');
  posebnaponudaButton.addEventListener('click', function () {
    formaContainer.scrollIntoView({ behavior: 'smooth' });
  });

  // Slider funkcionalnost
  const slider = document.querySelector('.slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = document.querySelector('.slider-container').clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(currentIndex);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  setInterval(nextSlide, 10000);
  showSlide(currentIndex);

  // Scrollanje do "O nama" sekcije
  var oNamaBtn = document.getElementById('oNamaBtn');
  oNamaBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var container = document.querySelector('.container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Container nije pronađen');
    }
  });

  // Scrollanje do "Kontakt" sekcije
  var KontaktBtn = document.getElementById('KontaktBtn');
  KontaktBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var container = document.querySelector('.contact-section');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Container nije pronađen');
    }
  });

  // Scrollanje do "Blog" sekcije
  var BlogBtn = document.getElementById('BlogBtn');
  BlogBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var container = document.querySelector('.blog-info button');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Container nije pronađen');
    }
  });

  // Toggle za prikazivanje blog sekcije
  var blogToggleBtn = document.getElementById('blogToggleBtn');
  blogToggleBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleBlogContainer();
  });

  function toggleBlogContainer() {
    var blogContainer = document.querySelector('.blog-container');
    var computedStyle = window.getComputedStyle(blogContainer);

    if (computedStyle.display === 'none') {
      blogContainer.style.display = 'flex';
    } else {
      blogContainer.style.display = 'none';
    }
  }

  // Dodavanje klase za header prilikom skrolovanja
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.classList.add('header');
    } else {
      header.classList.remove('header');
    }
  });

  // Kreiraj dugme
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.textContent = '↑';
  scrollToTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopBtn);

  // Funkcija za prikazivanje dugmeta
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Funkcija za scroll to top
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
});
