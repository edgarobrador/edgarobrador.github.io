// Menu móvil - Versión simple y funcional
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Mostrar menú
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Ocultar menú
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Cerrar menú al hacer click en cualquier enlace
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((n) => n.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
}));

// Scroll sections active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Scroll header
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Show scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Cerrar menú móvil al redimensionar la ventana
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("show-menu");
  }
});