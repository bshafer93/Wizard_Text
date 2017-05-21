var $ = require('jQuery');
var net = require('net');
var tls = require('tls');
var flags = require('flags');
$(document).ready(function() {


    var client = new tls.TLSSocket();
    client.connect(3333, '192.168.0.25', function () {

        console.log('Connected to the server!');
        addToChat("You are now connected to the server! Welcome :)");
        addToChat("Please type /Register to make a account. or type /Login to Login:");
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

    client.on('error', (err) => {
        addToChat("Connection failed, restart the game please :)");
        console.error(err);
    });

    sendMessage();

    function sendMessage() {
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

    }

    function addToChat(msg) {
        var charEscaped = JSON.stringify(msg)
        var content = "<div id=chatLogMsg>OtherUser>" + msg + "</div>";

        $("#messageField").prepend(content);
    }

});