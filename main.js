/* ========================================
   MADEN WORKWEAR - Main JavaScript
   ======================================== */

(function () {
  'use strict';

  // ========================================
  // PRELOADER
  // ========================================
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = '';
      // Trigger hero background zoom
      const heroBgImg = document.querySelector('.hero-bg-img');
      if (heroBgImg) heroBgImg.style.transform = 'scale(1)';
    }, 800);
  });

  // ========================================
  // CUSTOM CURSOR (Desktop only)
  // ========================================
  const cursor = document.getElementById('cursor');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let cursorX = 0, cursorY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

    function animateCursor() {
      currentX += (cursorX - currentX) * 0.15;
      currentY += (cursorY - currentY) * 0.15;
      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .product-card, .featured-item, .channel-card, .store-card');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // ========================================
  // NAVBAR
  // ========================================
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const mobileOverlay = document.getElementById('mobileOverlay');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  // Mobile menu toggle
  function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  }

  navToggle.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', toggleMobileMenu);

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  // ========================================
  // SMOOTH SCROLL for anchor links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ========================================
  // INTERSECTION OBSERVER - Reveal Animations
  // ========================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ========================================
  // COUNTER ANIMATION
  // ========================================
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = new Set();

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
          countersAnimated.add(entry.target);
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(update);
  }

  // ========================================
  // PARALLAX EFFECT
  // ========================================
  const statsBgImg = document.getElementById('statsBgImg');
  const statsSection = document.querySelector('.stats');

  if (statsBgImg && statsSection) {
    window.addEventListener('scroll', () => {
      const rect = statsSection.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const translateY = -10 + progress * 20;
        statsBgImg.style.transform = `translateY(${translateY}%)`;
      }
    });
  }

  // ========================================
  // BACK TO TOP
  // ========================================
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========================================
  // IMAGE ERROR FALLBACK
  // ========================================
  const fallbackImages = {
    jacket: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    pants: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80',
    shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    general: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  };

  // Fallback already handled via onerror attributes in HTML
  // This adds a secondary CSS-based fallback for background consistency
  document.querySelectorAll('img[referrerpolicy]').forEach((img) => {
    img.addEventListener('error', function () {
      if (!this.dataset.fallbackApplied) {
        this.dataset.fallbackApplied = 'true';
        this.src = fallbackImages.general;
      }
    });
  });

  // ========================================
  // ACTIVE NAV LINK on scroll
  // ========================================
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.scrollY + navbar.offsetHeight + 100;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = navLinks.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.style.color = 'var(--color-tan)';
        } else {
          link.style.color = '';
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ========================================
  // HERO BACKGROUND PARALLAX
  // ========================================
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`;
      }
    });
  }
})();
