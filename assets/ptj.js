// ==========================================
// MENÚ MÓVIL - SOLUCIÓN SIMPLE Y FUNCIONAL
// ==========================================

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

// Función para abrir menú
function openMenu() {
  navMenu.classList.add("show-menu");
  document.body.classList.add("menu-open");
}

// Función para cerrar menú
function closeMenu() {
  navMenu.classList.remove("show-menu");
  document.body.classList.remove("menu-open");
}

// Abrir menú cuando se clickea el botón hamburguesa
if (navToggle) {
  navToggle.addEventListener("click", openMenu);
}

// Cerrar menú cuando se clickea la X
if (navClose) {
  navClose.addEventListener("click", closeMenu);
}

// Cerrar menú cuando se clickea cualquier enlace
navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Cerrar menú al presionar ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("show-menu")) {
    closeMenu();
  }
});

// Cerrar menú al redimensionar a desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// ==========================================
// SCROLL ACTIVO - MARCAR SECCIÓN VISIBLE
// ==========================================

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

// ==========================================
// HEADER CON SOMBRA AL HACER SCROLL
// ==========================================

function scrollHeader() {
  const header = document.getElementById("header");
  if (header) {
    if (window.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }
}

window.addEventListener("scroll", scrollHeader);

// ==========================================
// BOTÓN SCROLL TO TOP
// ==========================================

function scrollUp() {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (scrollUpBtn) {
    if (window.scrollY >= 560) {
      scrollUpBtn.classList.add("show-scroll");
    } else {
      scrollUpBtn.classList.remove("show-scroll");
    }
  }
}

window.addEventListener("scroll", scrollUp);

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// ==========================================
// INICIALIZACIÓN AL CARGAR
// ==========================================

window.addEventListener("load", () => {
  closeMenu();
  scrollActive();
  scrollHeader();
  console.log("✅ Portfolio cargado correctamente");
});