const menu=document.querySelector('header .bars');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',(event)=>{
    navbar.classList.toggle('active');
    }
);



document.querySelector('.search-icon-container').addEventListener('click',(event)=>{
    document.querySelector('#search-form').classList.toggle('active');
});


document.querySelector('.close-icon-container').addEventListener('click',(event)=>{
    document.querySelector('#search-form').classList.remove('active');
});
