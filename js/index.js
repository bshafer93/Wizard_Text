var $ = require('jQuery');

$(document).ready(function() {

    //set user input width 




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