function getApiServiceBaseUri() {
    var baseUrl = "";

    if (window.location.hostname == "localhost") {
        baseUrl = "http://localhost:38272/";
    }
    else {
        baseUrl = "http://api.flixover.com/";
    }

    return baseUrl;
}

function getDomainName() {
    return "http://" + window.location.hostname + ":" + window.location.port;
}

function getParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}

function isIEBrowser() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    return msie > 0
}

function isFirefoxBrowser() {
    f = navigator.userAgent.search("Firefox");
    return f > -1;
}

function ajaxIndicatorStart() {
    $("#preloader").show();
    $('#spinner').show();
}

function ajaxIndicatorStop() {
    $("#preloader").hide();
}

function uploadHugeFileIntoSmallChunks(file, postUrl, parameters, token, completed, failed, warning) {
    // create array to store the buffer chunks
    var FileChunk = [];
    // set up other initial vars
    var MaxFileSizeMB = 1;
    var BufferChunkSize = MaxFileSizeMB * (1024 * 1024);
    var ReadBuffer_Size = 1024;
    var FileStreamPos = 0;
    // set the initial chunk length
    var EndPos = BufferChunkSize;
    var Size = file.size;

    var sizeInMegaBytes = eval((Size / 1024) / 1024);

    if (sizeInMegaBytes > 20) {
        warning("File (" + file.name + ") is not uploadable as its size is greater than 20MB");
        return false;
    }

    // add to the FileChunk array until we get to the end of the file
    while (FileStreamPos < Size) {
        // "slice" the file from the starting position/offset, to  the required length
        FileChunk.push(file.slice(FileStreamPos, EndPos));
        FileStreamPos = EndPos; // jump by the amount read
        EndPos = FileStreamPos + BufferChunkSize; // set next chunk length
    }
    // get total number of "files" we will be sending
    var TotalParts = FileChunk.length;
    var PartCount = 0;

    var filenameWithExt = guid() + "." + file.name.split('.').pop();

    // loop through, pulling the first item from the array each time and sending it
    while (chunk = FileChunk.shift()) {
        ajaxIndicatorStart();

        PartCount++;

        // file name convention
        var FilePartName = filenameWithExt + ".part_" + PartCount + "." + TotalParts;

        //  send the file
        var data = new FormData();

        data.append('file', chunk, FilePartName);
        data.append('originalFileName', file.name);

        parameters.forEach(function (item, index) {
            data.append(item.key, item.value);
        });

        $.ajax({
            type: "POST",
            url: postUrl,
            headers: {
                "Authorization": "Bearer " + token,
            },
            contentType: false,
            processData: false,
            data: data
        }).done(function (response) {
            completed(response);
        }).fail(function (error) {
            failed(error);
        }).always(function () {
            // ajaxIndicatorStop();
        });
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function currentDate() {
    var today = new Date();
    var dd = addZero(today.getDate());
    var mm = addZero(today.getMonth() + 1); //January is 0!
    var yyyy = today.getFullYear();
    var h = addZero(today.getHours());
    var m = addZero(today.getMinutes());
    var s = addZero(today.getSeconds());

    return dd + '/' + mm + '/' + yyyy + "  " + h + ":" + m + ":" + s;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function logInfo(message) {
    console.info(message + " at " + currentDate());
}

function stringToBoolean(string) {
    switch (string.toLowerCase()) {
        case "false":
        case "no":
        case "0":
        case "":
            return false;

        default: return true;
    }
}