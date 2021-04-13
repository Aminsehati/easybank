const btnBars = document.querySelector('.btn-bars');
const sidbar = document.querySelector('.sidbar');
const close = document.querySelector('.close');
btnBars.addEventListener('click',(e)=>{
    e.preventDefault();
    sidbar.classList.add('show');
});
close.addEventListener('click',(e)=>{
    e.preventDefault();
    sidbar.classList.remove('show');
});