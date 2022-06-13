const menu=document.querySelector('header .bars');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',(event)=>{
    navbar.classList.toggle('active');
    }
);


window.onscroll=()=>{
    navbar.classList.toggle('active');
}

document.querySelector('.search-icon-container').addEventListener('click',(event)=>{
    document.querySelector('#search-form').classList.toggle('active');
});


document.querySelector('.close-icon-container').addEventListener('click',(event)=>{
    document.querySelector('#search-form').classList.remove('active');
});

/*var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });*/

  