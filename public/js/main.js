// btn lainnya
document.getElementById('tampilkanElemen').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('elemenBaru').classList.remove('hidden');
  });
  
  // article
  $(window).on('scroll', function(){
    var scrollPos = $(this).scrollTop();
    var distance = $('.wrapper').offset().top;
    var $left = $('.left');
    var $right = $('.right');
    
    var posBotLeft = $left.offset().top + $left.height();
    var posBotRight = $right.offset().top + $right.height();
  
        if ( $(window).scrollTop() >= distance && posBotRight > posBotLeft) {
          
          $('.right').css('transform', 'translateY(' + -(scrollPos - distance)/2.5 + 'px)')
        }
  });

  // scroll to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
