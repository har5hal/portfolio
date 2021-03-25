/*-----------------------------------------------------------------------------------*/
/*      * global $, jQuery, alert
/*-----------------------------------------------------------------------------------*/

(function ($) {

    'use strict';
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*-----------------------------------------------------------------------------------*/
    
    var win = $(window);
    
    win.on('load',function() {
        
        $('#loader').delay(1500).fadeOut(function(){
            
            $('#loader').remove();
                
                window.sr = ScrollReveal({ reset: true });
                sr.reveal('.anim');
                new WOW().init();
                $('.slideshow .slide-item .items-slide-cs h2').attr('id', 'loadtitle');

        });

        $('.grid').masonry({
            
          itemSelector: '.grid-item'
            
        });
        
    });

    $('.navbar-nav').on('click', function(e){
        var navHref = e.target.getAttribute('data-href');
        var Section = document.querySelectorAll('.section')
        Section.forEach(sect => {
            var sectId = sect.getAttribute('id');
            if (navHref === sectId) {
                var sectOffset = sect.offsetTop;
                window.scroll({
                    top: sectOffset,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });
        
        
    });


})(jQuery);

/*-----------------------------------------------------------------------------------*/
/*      * End
/*-----------------------------------------------------------------------------------*/