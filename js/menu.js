$(document).ready(function () {   
    $('#menu ul li').hover(function () {
            // show submenu
            $( 'ul li a',this ).css( "visibility", "visible" );
        },
        function () {
            //hide submenu
            $( 'ul li a',this ).css( "visibility", "hidden" );
        })

});  //end of documentready


