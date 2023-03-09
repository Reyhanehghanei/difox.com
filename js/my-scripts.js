
$(function () {

    $('.bxslider').bxSlider({
        mode : 'horizontal',
        speed : 2000,
        startSlide : 1,
      
       
    });
    
})
function show_hide() {
    if ( document.getElementById('main-menu').style.display == 'block' ){
        document.getElementById('main-menu').style.display = 'none'
    } else{
        document.getElementById('main-menu').style.display = 'block'
    }
 }