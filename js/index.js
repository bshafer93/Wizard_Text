var $ = require('jQuery');
var net = require('net');
$(document).ready(function() {

    var client = new net.Socket();
    client.connect(3333, '107.170.196.189', function() {

        console.log('Connected to the server!');
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
        addToChat(data);
    });




    client.on('close', function() {
        console.log('Connection closed');
        client.destroy();
    });

    client.on('connect', function() {
        console.log('Ready!');
    });

    sendMessage();


    function sendMessage() {
        $("#submitLine").keypress(function(e) {
            if (e.keyCode === 13) {
                var userMsg = $('#submitLine').text();
                console.log(userMsg);
                client.write("MIncoming" + "\n");
                client.write(userMsg + "\n");
                $('#submitLine').text('');
                document.execCommand('insertHTML', false, '');
                return false;

            }
        });

    }

    function addToChat(msg) {
        var charEscaped = JSON.stringify(msg)
        var content = "<div id=chatLogMsg>OtherUser>" + msg + "</div>";

        $("#messageField").prepend(content);


    }



});