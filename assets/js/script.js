
$(document).ready(function () {
    $('#changeSection').load('./partials/home.html');

    $('#btMenu').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('html').removeClass('no-scroll');
            $('#menuMobile').addClass('hidden');
            $('#bgPage').removeClass('visible');
        }else{
            $(this).addClass("active");
            $('html').addClass('no-scroll');
            $('#menuMobile').removeClass('hidden');
            $('#bgPage').addClass('visible');
        }   
    });
});