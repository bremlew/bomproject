let lastScrollPosition = 0;
const navbar = document.querySelector('nav.linker');
const scrollThreshold = 60; // How far to scroll before hiding (px)

window.addEventListener('scroll', function() {
  const currentScrollPosition = window.pageYOffset;
  
  // Always show at top of page
  if (currentScrollPosition <= 10) {
    navbar.classList.remove('hide-nav');
    navbar.classList.add('show-nav');
    return;
  }

  // Scrolling down
  if (currentScrollPosition > lastScrollPosition) {
    navbar.classList.remove('show-nav');
    navbar.classList.add('hide-nav');
  } 
  // Scrolling up
  else {
    // Only hide if scrolled past threshold
    if (currentScrollPosition > scrollThreshold) {
      navbar.classList.remove('hide-nav');
      navbar.classList.add('show-nav');
    }
  }

  lastScrollPosition = currentScrollPosition;
});


let scrollTimeout;

window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    // Your existing scroll logic
  }, 100);
});


