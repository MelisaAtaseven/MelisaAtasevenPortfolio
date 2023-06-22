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


  document.addEventListener("DOMContentLoaded", function() {
    animateGallery();
  });
  
  function animateGallery() {
    var gallery = document.getElementById("gallery");
    gallery.style.opacity = 0;
    gallery.style.transform = "translateY(100px)";
    gallery.style.transition = "opacity 0.5s, transform 0.5s";
    
    setTimeout(function() {
      gallery.style.opacity = 1;
      gallery.style.transform = "translateY(0)";
    }, 500);
  }

  /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  