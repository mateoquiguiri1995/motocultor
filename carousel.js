document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.gallery-item');
    let currentIndex = 3; // El índice de la imagen central (la 3)
    let autoSlideInterval;
  
    function updateCarousel(index) {
      // Rotar las imágenes en base al índice
      items.forEach((item, i) => {
        item.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        const newIndex = (i + index) % items.length;
        item.classList.add(`gallery-item-${newIndex + 1}`);
      });
    }
  
    function goToNext() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel(currentIndex);
      resetAutoSlide();
    }
  
    function goToPrev() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(currentIndex);
      resetAutoSlide();
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(goToNext, 5000);
    }
  
    // Avanzar al hacer clic en la imagen
    items.forEach(item => {
      item.addEventListener('click', goToNext);
    });
  
    // Botones de anterior y siguiente
    document.getElementById('next').addEventListener('click', goToNext);
    document.getElementById('prev').addEventListener('click', goToPrev);
  
    // Auto slide cada 5 segundos si no se hace clic
    autoSlideInterval = setInterval(goToNext, 5000);
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el modal, iframe y botón de cerrar
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModalBtn = document.querySelector('.close');
  
    // Seleccionamos todas las imágenes que disparan el modal
    const videoTriggers = document.querySelectorAll('.video-trigger');
  
    // Para cada imagen, añadimos un evento de clic
    videoTriggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        modalVideo.src = videoSrc;  // Establecemos la fuente del iframe
        modal.style.display = 'flex';  // Mostramos el modal
      });
    });
  
    // Evento para cerrar el modal cuando se hace clic en la "X"
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modalVideo.src = '';  // Reseteamos la fuente del iframe
    });
  
    // Evento para cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modalVideo.src = '';  // Reseteamos la fuente del iframe
      }
    });
  });
  


