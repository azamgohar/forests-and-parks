
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');

const footerSearchBox = document.querySelector('.footer_search_box');
const footerSearchBtn = document.querySelector('.footer_search_btn');
const footerSearch = document.querySelector('.footer_search');
const footerCloseBtn = document.querySelector('.footer_close_btn');

const navMenu = document.querySelector('.nav_menu');
const menu = document.querySelector('.menu');
// const nav = document.querySelector('.nav');




searchBtn.addEventListener('click', function(){
    console.log(search.classList.contains('active'))
    if(search.classList.contains('active')){
        searchBox.value = ''
    }
    else{
        search.classList.add('active');
        searchBox.focus();
    }
})

closeBtn.addEventListener('click', function(){
    search.classList.remove('active');
    searchBox.value = '';
})

// searchBtn.addEventListener('click', function(){
//     menu.classList.remove('menu')
// })



// nav.addEventListener('scroll', () => {
//     const nav = document.querySelector('.nav');
//     if (window.scrollY > 0) {
//         nav.classList.add('scrolled')
//     }
//     else{
//         nav.classList.remove('acrolled');
//     }
// })



footerSearchBtn.addEventListener('click', function(){
    console.log(footerSearch.classList.contains('footer_active'))
    if(footerSearch.classList.contains('footer_active')){
        footerSearchBox.value = ''
    }
    else{
        footerSearch.classList.add('footer_active');
        footerSearchBox.focus();
    }
})

footerCloseBtn.addEventListener('click', function(){
    footerSearch.classList.remove('footer_active');
    footerSearchBox.value = '';
})



