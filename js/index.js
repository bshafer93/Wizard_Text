var $ = require('jQuery');
var net = require('net');
$(document).ready(function() {

    var client = new net.Socket();
    client.connect(3333, '107.170.196.189', function() {

        console.log('Connected to the server!');
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
    });




    client.on('close', function() {
        console.log('Connection closed');
    });

    client.on('connect', function() {
        console.log('Ready!');
    });



    $("#submitLine").keypress(function(e) {
        if (e.keyCode === 13) {
            var userMsg = $('#submitLine').text();
            console.log(userMsg);
            client.write(userMsg + "\n");
            $('#submitLine').text('');
            document.execCommand('insertHTML', false, '');
            return false;

        }
    });


});