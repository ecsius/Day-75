$(document).ready(function(){
    $('.marker').on('click', function() {
        $('.card').addClass('active');
        $('.marker').addClass('inactive');
    });
    
    $('.card').on('click', function() {
        $('.card').removeClass('active');
        $('.marker').removeClass('inactive');
    });
})