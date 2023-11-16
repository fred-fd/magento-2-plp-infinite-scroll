var config = {
    map: {
        '*': {
            plpinfinitescroll: 'Freddev_PlpInfiniteScroll/js/infinitescroll'
        }
    },
    paths: {
        'infiniteAjaxScroll': 'Freddev_PlpInfiniteScroll/js/iaslib.min'
    },
    shim : {
        infinitescroll: {
            deps: ['jquery']
        },
        infiniteAjaxScroll: {
            deps: ['jquery']
        }
    }
};