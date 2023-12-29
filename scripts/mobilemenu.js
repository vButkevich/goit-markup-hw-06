'use strict'
{
    let menu = document.querySelector('.mobile-menu');

    let menuBtnOpen = document.querySelector('.mobile-menu-open');
    menuBtnOpen.addEventListener('click', function () {
        mobileMenuToggle();
    })
    let menuBtnClose = document.querySelector('.mobile-menu-btn-close');
    menuBtnClose.addEventListener('click', function () {
        mobileMenuToggle();
    })

    function mobileMenuToggle() {
        menu.classList.toggle('active');
    }



    // function mobileMenuOpenClose() {
    //     menu.classList.toggle('active');
    //     // menu.classList.add('is-open');
    // }
}