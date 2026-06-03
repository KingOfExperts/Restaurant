const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
const navContainer = document.querySelector('.nav-container');

if (menu && menuToggle) {
  const menuId = menu.id || 'primary-menu';
  menu.id = menuId;
  menuToggle.setAttribute('aria-controls', menuId);
  menuToggle.setAttribute('aria-expanded', 'false');

  const setMenuState = (isOpen) => {
    menu.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active');
    setMenuState(!isOpen);
  });

  // Close menu when a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close the menu when clicking outside it on mobile
  document.addEventListener('click', (event) => {
    if (!menu.classList.contains('active')) return;
    if (navContainer && navContainer.contains(event.target)) return;
    closeMenu();
  });

  // Close with Escape for keyboard users
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  // Close as soon as the user starts scrolling
  window.addEventListener('scroll', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    }
  }, { passive: true });

  document.addEventListener('wheel', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    }
  }, { passive: true });

  document.addEventListener('touchmove', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    }
  }, { passive: true });

  // Reset the menu if the viewport grows back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
