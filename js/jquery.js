
   console.warn("jQuery starts")
   
   var content = $('.content');
    var toggleButton = $('#toggleButton');
    var showRow = $('#showRow');


    toggleButton.on('click', function () {
        if (content.is(':visible')) {
            content.fadeOut("slow");
            toggleButton.html('Show More &#x25BC;');
            showRow.insertBefore(content);
        } else {
            content.fadeIn("slow");
            toggleButton.html('Show Less &#x25B2;');
            showRow.insertAfter(content);
        }
    });
    


    //----------------------------------------------------------------

    $(".moreReviews").hide();

    $("#toggleReviews").click(function () {
        $(".moreReviews").slideToggle("slow", function () {
            var isVisible = $(".moreReviews").is(':visible');
            $("#toggleReviews").html(isVisible ? 'Show Less &#x25B2;' : 'Show More &#x25BC;');
        });
    });
    
    




   console.warn("jQuery ends")
