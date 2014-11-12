// Fancy Stuff
$(document).ready(function () {
    $(".collapse").on('click', function () {
        console.log("hi");
        $(this).parent().find(".subitem").slideToggle();
    });
});