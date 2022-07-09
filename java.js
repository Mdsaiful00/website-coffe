let searchBox = document.querySelector('.search-box');
document.querySelector('#search-btn').onclick = () => {
    searchBox.classList.toggle('active');
    icons.classList.remove('active');
    navbar.classList.remove('active');
    loginBox.classList.remove('active');
}
let loginBox = document.querySelector('.login-box');
document.querySelector('#user-btn').onclick = () => {
    loginBox.classList.toggle('active');
    icons.classList.remove('active');
    searchBox.classList.remove('active');
    navbar.classList.remove('active');
}
let containerListBox = document.querySelector('.container-list-box');
document.querySelector('#shopping-btn').onclick = () => {
    containerListBox.classList.toggle('active');
    searchBox.classList.remove('active');
    loginBox.classList.remove('active');
    navbar.classList.remove('active');
    icons.classList.remove('active');
}
let menu = document.querySelector('#bars-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchBox.classList.remove('active');
    containerListBox.classList.remove('active');
    loginBox.classList.remove('active');


}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--mian-color-2', color);
  }
});