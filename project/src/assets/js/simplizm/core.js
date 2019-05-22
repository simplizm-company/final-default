;(function($){
    'use strict';

    var SPZM = window.SPZM = {};

    SPZM.touchAndMouseEvents = (function () {
        var eventType = {
            clickstart: 'ontouchstart' in document ? 'touchstart' : 'mousedown',
            clickmove: 'ontouchmove' in document ? 'touchmove' : 'mousemove',
            clickend: 'ontouchend' in document ? 'touchend' : 'mouseup'
        }
    
        $.event.special.clickstart = {
            setup: function() {
                $(this).on(eventType.clickstart + '.clickstart', function (e) {
                    e.type = 'clickstart';
                    e.pageX = e.pageX || e.originalEvent.touches[0].pageX;
                    e.pageY = e.pageY || e.originalEvent.touches[0].pageY;
                    ($.event.dispatch||$.event.handle).call(this, e);
                });
            },
            teardown: function() {
                $(this).off('.clickstart');
            }
        };
    
        $.event.special.clickmove = {
            setup: function() {
                $(this).on(eventType.clickmove + '.clickmove', function (e) {
                    e.type = 'clickmove';
                    e.pageX = e.pageX || e.originalEvent.touches[0].pageX;
                    e.pageY = e.pageY || e.originalEvent.touches[0].pageY;
                    ($.event.dispatch||$.event.handle).call(this, e);
                });
            },
            teardown: function() {
                $(this).off('.clickmove');
            }
        };
    
        $.event.special.clickend = {
            setup: function() {
                $(this).on(eventType.clickend + '.clickend', function (e) {
                    e.type = 'clickend';
                    ($.event.dispatch||$.event.handle).call(this, e);
                });
            },
            teardown: function() {
                $(this).off('.clickend');
            }
        };
    })();

    SPZM.getWindowInfo = (function () {
        var r = {};

        $(window).on('load scroll', function () {
            r.scrollTop = $(window).scrollTop();
            r.scrollLeft = $(window).scrollLeft();
        });

        $(window).on('load resize', function () {
            r.width = $(window).outerWidth();
            r.height = $(window).outerHeight();
        });

        return r;
    })();
}(jQuery));