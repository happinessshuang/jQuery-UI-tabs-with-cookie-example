(function() {
    $(function($, window) {
        $('a.btn').button();
        $("#tabs").tabs({
            cookie: {
                name: 'my-unique-cookie',
                // store cookie for a day, without, it would be a session cookie
                expires: 1,
                path: '/tabs'
            }
        });
    });
})(jQuery, this);
