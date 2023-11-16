define([
    "jquery",
    "infiniteAjaxScroll",
    'mage/translate'
], function ($, ias, $t) {
    "use strict";
    $('body').addClass('infinitescroll');
    $(window).on('infinitescrollready', function(){
        if(jQuery().ias) {
            $.ias('destroy');
        }

        var config = {
            container: window.plpisConfig.container,
            item: window.plpisConfig.item,
            paginator: window.plpisConfig.paginator,
            next: window.plpisConfig.next,
            delay: window.plpisConfig.delay
        };

        var plpis = $.ias({
            container: config.container,
            item: config.item,
            next: config.next,
            pagination: config.paginator,
            delay: config.delay
        });

        window.plpis = plpis;

        window.plpis.extension(new IASSpinnerExtension({
            html: '<div class="plpis-spinner"><span>' + $t("Loading") + '</span></div>'
        }));

        window.plpis.extension(new IASNoneLeftExtension({
            html: '<div class="plpis-noneleft">' + $t("End Page") + '</div>'
        }));

        window.plpis.on('rendered', function (items) {
            $('body').trigger('contentUpdated');
        });
    });

});