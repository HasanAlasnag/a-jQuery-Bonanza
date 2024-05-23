$(document).ready(function () {
        $('#home-link').click(function () {
        $('#content').html('<h2>Welcome to our website!</h2><p id="intro">This is the homepage. Click the links above to navigate.</p>');
    });

    $('#about-link').click(function () {
        $('#content').html('<h2>About Us</h2><p>Learn more about us here.</p>');
    });

    $('#contact-link').click(function () {
        $('#content').html('<h2>Contact Us</h2><p>Get in touch with us through this page.</p>');
    });

    $('#toggle-sidebar').click(function () {
        if ($('#sidebar').hasClass('hidden')) {
            $('#sidebar').fadeIn().removeClass('hidden');
        } else {
            $('#sidebar').fadeOut().addClass('hidden');
        }
    });
    $('#about-link').click(function () {
        $('#content').addClass('about-section');
    });

    $('footer').append('<p>Additional footer information.</p>');

    $('#home-link').click(function () {
        $('#intro').text('Welcome back to the homepage!');
    });

    $('main').append('<input type="text" id="name-input" placeholder="Enter your name">');
    $('#name-input').blur(function () {
        let name = $(this).val();
        $('#content').append('<p>Hello, ' + name + '!</p>');
    });

    $('header').append('<button id="toggle-content">Toggle Content</button>');
    $('#toggle-content').click(function () {
        if ($('#content').is(':visible')) {
            $('#content').hide();
        } else {
            $('#content').show();
        }
    });

    $('aside').append('<button id="show-more">Show More</button>');
    $('aside').append('<div id="more-info" class="hidden"><p>Here is some more information.</p></div>');
    $('#show-more').click(function () {
        $('#more-info').slideDown().removeClass('hidden');
    });
});