/**
 * DSBS - Admin Business School (Dayananda Sagar)
 * Elite Institutional Interactive Script
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.elite-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 2. Hero Carousel Logic
  const slides = document.querySelectorAll('.elite-carousel-slide');
  const dots = document.querySelectorAll('.elite-carousel-dot');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (!slides.length) return;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  window.nextHeroSlide = function () {
    showSlide(currentSlide + 1);
  };

  window.prevHeroSlide = function () {
    showSlide(currentSlide - 1);
  };

  window.goToHeroSlide = function (index) {
    showSlide(index);
    restartSlideTimer();
  };

  function startSlideTimer() {
    if (slides.length > 1) {
      slideInterval = setInterval(window.nextHeroSlide, 5000);
    }
  }

  function restartSlideTimer() {
    if (slideInterval) clearInterval(slideInterval);
    startSlideTimer();
  }

  const carouselContainer = document.querySelector('.elite-carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      if (slideInterval) clearInterval(slideInterval);
    });
    carouselContainer.addEventListener('mouseleave', () => {
      startSlideTimer();
    });
  }

  startSlideTimer();

  // 3. Testimonial Slider Logic
  const tSlides = document.querySelectorAll('.t-slide');
  const tDots = document.querySelectorAll('.t-dot');
  let currentTIndex = 0;

  window.showTestimonial = function (index) {
    if (!tSlides.length) return;
    if (index >= tSlides.length) index = 0;
    if (index < 0) index = tSlides.length - 1;

    tSlides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    tDots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentTIndex = index;
  };

  window.nextTestimonial = function () {
    window.showTestimonial(currentTIndex + 1);
  };

  window.prevTestimonial = function () {
    window.showTestimonial(currentTIndex - 1);
  };

  // 4. Mobile Drawer Menu Toggle
  const mobileToggle = document.querySelector('.elite-mobile-toggle');
  const offcanvasMenu = document.querySelector('.offcanvas-menu');
  const offcanvasOverlay = document.querySelector('.offcanvas-overlay');
  const closeOffcanvas = document.querySelector('.close-offcanvas');

  function openMobileMenu() {
    if (offcanvasMenu) offcanvasMenu.classList.add('active');
    if (offcanvasOverlay) offcanvasOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (offcanvasMenu) offcanvasMenu.classList.remove('active');
    if (offcanvasOverlay) offcanvasOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (closeOffcanvas) closeOffcanvas.addEventListener('click', closeMobileMenu);
  if (offcanvasOverlay) offcanvasOverlay.addEventListener('click', closeMobileMenu);

  // 5. Accreditations Track Scroller
  const accredTrack = document.getElementById('accred-track');
  window.scrollAccredTrack = function (dir) {
    if (accredTrack) {
      accredTrack.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  // 6. Ensure DSBS Buddy Chatbot sits cleanly at bottom-right
  function alignDsbsChatbots() {
    const eeIcon = document.getElementById('__eechatIcon') || document.querySelector('[id*="eechatIcon"]');
    if (eeIcon) {
      eeIcon.style.setProperty('position', 'fixed', 'important');
      eeIcon.style.setProperty('right', '25px', 'important');
      eeIcon.style.setProperty('bottom', '25px', 'important');
      eeIcon.style.setProperty('z-index', '99992', 'important');
    }
    const indicator = document.querySelector('#eeChatIndicator .indicator') || document.querySelector('.indicator');
    if (indicator) {
      indicator.style.setProperty('position', 'fixed', 'important');
      indicator.style.setProperty('right', '98px', 'important');
      indicator.style.setProperty('bottom', '27px', 'important');
      indicator.style.setProperty('z-index', '214483647', 'important');
    }
  }
  alignDsbsChatbots();
  const chatbotObserver = new MutationObserver(alignDsbsChatbots);
  chatbotObserver.observe(document.body, { childList: true, subtree: true });
});
