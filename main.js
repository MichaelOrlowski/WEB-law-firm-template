/**
 * Created by orilo on 17.06.2019.
 */


jQuery(document).ready(function($) {
    $(".scrollto").click(function(event) {
        event.preventDefault();

        $("#mainmenu").collapse("hide");

        var defaultAnchorOffset = 0;

        var anchor = $(this).attr('data-attr-scroll');

        var anchorOffset = $(anchor).attr('data-scroll-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset;

        $('html,body').animate({
            scrollTop: $(anchor).offset().top - anchorOffset
        }, 500);
    });
});