(function($) {
    skel.breakpoints({
        xlarge: "(max-width: 1680px)",
        large:  "(max-width: 1280px)",
        medium: "(max-width: 980px)",
        small:  "(max-width: 736px)",
        xsmall: "(max-width: 480px)"
    });
    skel.layout({
        grid: true
    });
    $(function() {
        var $window = $(window), $body = $('body'), page = $body.attr('class').split(' ')[0];
        if (skel.vars.mobile)
            //$body.addClass('is-touch');
            $body.addClass('is-loading');
            $window.on('load', function() {
            window.setTimeout(function() {
            $body.removeClass('is-loading');
            }, 0);
        });
    });
})(jQuery);
