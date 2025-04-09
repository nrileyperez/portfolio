function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  // Carousel functionality for Work section
  const carouselInner = document.querySelector('.carousel-inner');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const slides = document.querySelectorAll('.work-item');
  let currentSlide = 0;

  function updateCarousel() {
    carouselInner.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
  }

  prevBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

  // Hamburger menu functionality
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleMenu);
  }

  // Modal functionality for multiple modals
  const viewButtons = document.querySelectorAll('.view-project');
  viewButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
         modal.style.display = 'block';
         document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal when clicking the close button
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  });

  // Close modal when clicking outside modal content
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
});
