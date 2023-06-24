//   time message
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
  greet = 'Good Morning🔆';
else if (hrs >= 12 && hrs <= 20)
  greet = 'Good Afternoon☁️';
else if (hrs >= 11 && hrs <= 24)
  greet = 'Good Evening🌙   ';

document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';

///////////////////////

// scroll top button
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 3000){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},600);
  });
});

var lang = {
    "html": "",
    "css": "",
    "javascript": "",
    "bootstrap": "",
    "MsSQL": "",
    "c":"",
    "Wordpress":"",
    "Figma":""
   
  };
  
  var multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  });

/////////////////////
$( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.skills-section .skills-bar-container h1');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
    $(window).scroll( function(){
  
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      /* ##### ABOUT MYSELF SECTION #### */
      if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
        $('.about-myself .content h2').addClass('aboutTitleVisible');
      } 
    /* ##### EXPERIENCE SECTION #### */
  
        // Check the location of each element hidden */
        $('.experience .content .hidden').each( function(i){
  
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
  
              $(this).animate({
                'opacity':'1',
                'margin-left': '0'
              },600);
            }
        });
  
   

        
    }); // -- End window scroll --
  });

  // menu
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop
      });
    }
  }
// gallery 
document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll("nav ul li a");

  menuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      event.preventDefault(); // Sayfanın yenilenmesini engeller

      var target = this.getAttribute("href"); // Tıklanan öğenin hedef bağlantısını alır
      animateGallery(target); // Galeri animasyonunu başlatır
    });
  });
});

function animateGallery(target) {
  var gallery = document.getElementById("gallery");
  gallery.style.opacity = 0;
  gallery.style.transform = "translateY(100px)";
  gallery.style.transition = "opacity 0.5s, transform 0.5s";

  setTimeout(function() {
    gallery.style.opacity = 1;
    gallery.style.transform = "translateY(0)";
    window.location.href = target; 
  }, 700);
}



  /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
// contact
document.getElementById("mail-button").addEventListener("click", function() {
  window.location.href = "atasevenmelisa2@gmail.com";
});


