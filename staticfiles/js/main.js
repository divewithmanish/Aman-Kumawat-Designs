(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    document.addEventListener("DOMContentLoaded", function () {
        const body = document.body;
        const themeSwitcher = document.getElementById('theme-switcher'); // Theme switcher button
        const themeIcon = document.getElementById('theme-icon'); // Icon inside the button

        // Check if theme switcher button is available
        if (!themeIcon) {
            console.error("Theme switcher button not found");
            return;
        }

        // Get saved theme from localStorage, or default to 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';

        // Set the default theme class on body
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');  // Apply dark theme class
            themeIcon.classList.add('fa-sun'); // Change icon to sun
            themeIcon.classList.remove('fa-moon'); // Remove moon icon
        } else {
            body.classList.add('light-theme'); // Apply light theme class (default)
            themeIcon.classList.add('fa-moon'); // Default icon is moon
            themeIcon.classList.remove('fa-sun');
        }

        // Add event listener to switch themes when the button is clicked
        themeSwitcher.addEventListener('click', function () {
            // Toggle between light and dark theme
            if (body.classList.contains('dark-theme')) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                themeIcon.classList.add('fa-moon'); // Switch to moon icon
                themeIcon.classList.remove('fa-sun');
                localStorage.setItem('theme', 'light');  // Save preference
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                themeIcon.classList.add('fa-sun'); // Switch to sun icon
                themeIcon.classList.remove('fa-moon');
                localStorage.setItem('theme', 'dark');   // Save preference
            }
        });
    });


})(jQuery);

