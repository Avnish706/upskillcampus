// Custom JavaScript for Cart, Back to Top, etc.

$(document).ready(function () {
    // Toggle cart visibility
    $('#shopping-cart').click(function () {
        $('#cart-content').slideToggle(300);
    });

    // Delete cart item
    $('.btn-delete').click(function (e) {
        e.preventDefault();
        $(this).closest('tr').fadeOut(300, function () {
            $(this).remove();
        });
    });

    // Show "back to top" button on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Scroll to top smoothly
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
