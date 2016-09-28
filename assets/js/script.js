
$(document).ready(function () {
    $('#changeSection').load('./partials/home.html');

    $('#btMenu').click(function () {
            $(this).toggleClass('active');
            $('html').toggleClass('no-scroll');
            $('#menuMobile').toggleClass('hidden');
            $('#bgPage').toggleClass('visible');
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 460) {
            $('#navigation-bar').addClass('nav-stacked');
        } else {
            $('#navigation-bar').removeClass('nav-stacked');
        }
    });

    $('.nav-bar-menu li a').click(function(){
        $('.nav-bar-menu li a').removeClass('active');
        $(this).addClass('active');
    })

    $(document).on("click", '#ourFeatures ', function() {
        $('#ourFeaturesContent').toggleClass('is-visible');
    });

    $(document).on('click', '#latestProjects', function() {
        $('#lastProjectSection').toggleClass('is-visible');
    });

    $(document).on('click', '#clientTestimonials', function() {
        $('#sectionClientTestimonials').toggleClass('is-visible');
    })
});