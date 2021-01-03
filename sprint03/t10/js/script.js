const initSlider = () => {
  const images = document.querySelector('.images');
  const imgs = Array.from(images.querySelectorAll('img'));
  const buttons = document.querySelectorAll('.btn');
  const arrBtns = Array.from(buttons);
  let currentTask;
  let currentIndex = 0;

  const showImage = () => {
    images.style.transform = `translateX(-${100 * currentIndex}%)`;
  };

  const resetInterval = () => {
    clearInterval(currentTask);
    
    currentTask = setInterval(() => {
      currentIndex = (currentIndex + 1) % imgs.length;

      showImage();
    }, 2000)
  };

  resetInterval();

  arrBtns[1].addEventListener('click', () => {
    resetInterval();
    currentIndex = (currentIndex + 1) % imgs.length;
    showImage();
  });

  arrBtns[0].addEventListener('click', () => {
    resetInterval();
    
    if (currentIndex !== 0) {
      currentIndex--;  
    } else {
      currentIndex = imgs.length - 1;
    }

    showImage();
  });
  
};

initSlider();