jQuery(document).ready(function() {
    // Exibe ou oculta o botão
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.volteaotopo').fadeIn(200);
        } else {
            jQuery('.volteaotopo').fadeOut(200);
        }
    });

    // Faz animação para subir
    jQuery('.volteaotopo').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, 300);
    })
});