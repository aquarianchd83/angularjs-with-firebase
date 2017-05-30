app.filter('range', function () {
    return function (input, start, end) {
        start = parseInt(start);
        end = parseInt(end);

        for (var i = start; i <= end; i++) {
            input.push(i);
        }

        return input;
    };
});

app.filter('rangeWithFraction', function () {
    return function (input, start, end, fraction, decimalPlaces) {
        start = parseInt(start);
        end = parseInt(end);

        for (var i = start; i <= end; i += fraction) {
            input.push(i.toFixed(decimalPlaces));
        }

        return input;
    };
});