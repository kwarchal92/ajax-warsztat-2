console.log('AJAX - warsztat - (jQuery) pobierz dane po kliknięciu przycisku');


$(document).ready(function(){

    //     $('#get-data').click(function(){
    //         $.get('https://akademia108.pl/api/ajax/get-post.php')
    //         .done(function(data){
                
    //             let pId = $('<p></p>').text(`Post Id: ${data.id}`);
    //             let pUserId = $('<p></p>').text(`Post Id: ${data.userId}`);
    //             let pTitle = $('<p></p>').text(`Post Id: ${data.title}`);
    //             let pBody = $('<p></p>').text(`Post Id: ${data.body}`);
    //             let hr =$ ('<hr/>');

    //             // console.log(pId);

    //             jqBody = $('body');
    //             jqBody.append(pId); //wysywlamy 'p' na koniec body
    //             jqBody.append(pUserId);
    //             jqBody.append(pTitle);
    //             jqBody.append(pBody);
    //             jqBody.append(hr);

    //         })
    //         .fail(function(error){//obsługa błędu
    //             console.error(error); 
    //         })
    //     }) 




    $('#get-data').click(function(){
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){
            
            let pId = $('<p></p>').text(`Post Id: ${data.id}`);
            let pUserId = $('<p></p>').text(`Post Id: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Post Id: ${data.title}`);
            let pBody = $('<p></p>').text(`Post Id: ${data.body}`);
            let hr =$ ('<hr/>');

            // console.log(pId);

            jqBody = $('body');
            jqBody.append(pId); //wysywlamy 'p' na koniec body
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);

        })
        .fail(function(error){//obsługa błędu
            console.error(error); 
        })
    }) 


})