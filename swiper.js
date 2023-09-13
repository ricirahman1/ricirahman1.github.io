const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,
    spaceBetween:100,
  
    // If we need pagination
     //write above instantiation of main slider
     const swiper_thumbnail = new Swiper(".swiper_thumbnail", { 
        slidesPerView: 3,                                      
    }),
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });