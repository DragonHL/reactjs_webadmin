// hide and show menu
// $(document).ready(function(){
//     $(".fa-bars").click(function(){
//       $(".side-bar").toggle(300);

//     });
//   });


$(function () {
    var menuVisible = false;
    $('.fa-bars').click(function () {
        if (menuVisible) {
            $('.side-bar').css({
                'display': 'none',
            });
            $('.container-body').css({
                'width': '100%',
            });

            $('.statistical_month_year').css({
            //     'width': '49%',
            'padding': '0 8%'
            });
            $('#curve_chart').css({
                //     'width': '49%',
                'text-align': '-webkit-right'
                });

            menuVisible = false;
            return;
        } else {
            $('.side-bar').css({
                'display': 'block',
                'animation': 'mymove 0.3s none',
            });

            // $('.container-body').css({
            //     'width': '82%',
            //     'float': 'right'
            // });

            menuVisible = true;
            return;
        }

    });

});


$(window).on("orientationchange load resize", function () {
    var width = $(document).width();
    if (width > 768) {
        // for show iamges
        $('.side-bar').show();
    }
});



$(document).ready(function () {
    $('#example').DataTable({
        language: {
            sLengthMenu: "Show _MENU_",
            "info": "Showing page _PAGE_ of _PAGES_"
        }
    });



});

