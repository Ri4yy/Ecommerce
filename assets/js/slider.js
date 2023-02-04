const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
  
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },   
  });