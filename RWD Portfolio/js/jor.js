// $(document).ready(function() {

//     $('.Navbtn').click(function(e){
//         console.log('clicked');

//         e.preventDefault();
//     });

// });


$(document).on('click', '.Navbtn', function (event) {
    event.preventDefault();
    const href = $(this).attr('href');


    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 400);
});