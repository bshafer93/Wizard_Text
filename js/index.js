var $ = require('jQuery');
var net = require('net');
$(document).ready(function() {

    var client = new net.Socket();
    client.connect(3333, '107.170.196.189', function() {
        console.log('Connected');
        client.write('Hello, server! Love, Client.');
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
        client.destroy(); // kill client after server's response
    });

    client.on('close', function() {
        console.log('Connection closed');
    });






    $("#submitLine").keypress(function(e) {
        if (e.keyCode === 13) {
            console.log('Ready!');
            // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
            var userMsg = $('#submitLine').text();
            console.log(userMsg);

            document.execCommand('insertHTML', false, '');
            return false;
        }
    });





});