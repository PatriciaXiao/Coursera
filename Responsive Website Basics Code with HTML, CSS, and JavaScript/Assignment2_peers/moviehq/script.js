$(document).ready(function() {
    // when you mouse hover the casts, a popover will show the cast's photograph
    $('.myPopover').popover({
        placement : 'auto top',
        trigger : 'hover',
        html : true,
        content : function() {
            // get image based on element's text
            var cast = $(this).text();
            var filename = cast.replace(" ", "_");
            var data = "<img src='images/casts/" + filename + ".jpg'>";

            return data;
        }
    });
});