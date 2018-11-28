/*$(function () {
    $(".dropdown-toggle").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).parent('li').toggleClass('open');
            // $('b', this).toggleClass("caret caret-up");                
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).parent('li').toggleClass('open');
            //$('b', this).toggleClass("caret caret-up");                
        });
});*/
$('.selectpicker').selectpicker();

function pageRedirect() {
    window.location.replace("home.html");
}