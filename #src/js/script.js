'use strict';

$('.specialities__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
  
  $('.slider__goods').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });




const burger = document.querySelector('.nav__burger'),
    close = document.querySelector('.nav__burger-close'),
    mobileNav = document.querySelector('.mobile__nav'),
    mobileNavItem = document.querySelectorAll('.mobile__nav-item');

function burgerOpen() {
    burger.addEventListener('click', () => {

        close.classList.add('show');
        mobileNav.classList.add('show-nav');
     
    });
}
function burgerClose(){
    close.addEventListener('click', () => {
        close.classList.remove('show');
        mobileNav.classList.remove('show-nav');
    });
    
 
}

mobileNavItem.forEach(item => {
    item.addEventListener('click', burgerClose =>{
        close.classList.remove('show');
        mobileNav.classList.remove('show-nav');
    });
});

burgerOpen();
burgerClose();


$(".select__list-default").click(function(){
    $(this).parent().toggleClass("choosen");
  })

  $(".select__list .select__list-item").click(function(){
    var currentElement = $(this).html();
    $(".select__list-default .select__list-item").html(currentElement);
    $(this).parents(".book__select").removeClass("choosen");
  });



const menuCategory = document.querySelectorAll(".menu__category"),
    menuTable = document.querySelectorAll(".menu__delicious"),
    menuCategoryParent = document.querySelector(".menu__categories-list");

function hideMenu() {
    menuTable.forEach(item => {
        item.classList.add("hide-tbl");
        item.classList.remove("show-tbl");
       

    });

    menuCategory.forEach(item => {
        item.classList.remove("active");
    });
}

function showMenu(i = 0) {

   
    menuTable[i].classList.remove("hide-tbl");
    menuTable[i].classList.add("show-tbl");
    menuCategory[i].classList.add("active");
}

hideMenu();
showMenu();


menuCategoryParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains("menu__category")) {
        menuCategory.forEach((item, i) => {
            if (target == item) {
                hideMenu();
                showMenu(i);
            }

        });
    }
});







