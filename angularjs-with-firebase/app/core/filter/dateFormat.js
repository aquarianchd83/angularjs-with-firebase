app.filter('dateFormat', function () {
    return function (input, format) {

        if (format == 'yy') {
            return input.toString().substr(2);
        }

        return input;
    };
});