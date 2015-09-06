$(window).load(function(){$("#loading").fadeOut("slow")});

var $ = jQuery.noConflict();

$(function() {
    var wall = new freewall('#freewall');
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 295,
        cellH: 250,
        fixSize: 0,  
        gutterY: 0,  
        gutterX: 0,
        onResize: function() {
            wall.fitWidth();
        }
    });
    $('.filter-label').click(function() {
        $('.filter-label').removeClass('active');
        var filter = $(this).addClass('active').data('filter');
        if (filter) {
            wall.filter(filter);
        } else {
            wall.unFilter();
        }
    });
    wall.fitWidth();
    
    $('#top-nav').slimmenu({
        resizeWidth: '800',
        collapserTitle: 'Menu',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });

});

    



