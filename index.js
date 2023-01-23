$(document).ready(function () {
    var boxes = $('.box').get()
    for (let i = 0; i < boxes.length; i++) {
        $(boxes[i]).hover(function () {
                // over
                $(this).addClass("shake");
                $(this).addClass("shadow-" + i)
            }, function () {
                // out
                $(this).removeClass("shake");
                $(this).removeClass("shadow-" + i)
            }
        );
    }
});