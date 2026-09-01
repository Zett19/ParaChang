$(document).on("ready", main);
function main() {
    $("nav a").on("click", irA);
}

function irA() {
    var seccion = $(this).attr("href");
    $("body, html").animate({
        scrollTop: $(seccion).offset().top
    }, 500);
    return false;
}