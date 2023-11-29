var swiper = new swiper('.carousel',{
    navigation:{
        nextE1:'.swiper-button-next',
        prevE1:'.swiper-button-prrev',
    },
    pagination: {
        el: '.swiiper-pagination',
    },
})
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}