
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

    //callback
    $(".moreReviews").hide("slow", function(){
        console.log("The paragraph is now hidden");
    });

    $("#toggleReviews").click(function () {
        $(".moreReviews").slideToggle("slow", function () {
            var isVisible = $(".moreReviews").is(':visible');
            $("#toggleReviews").html(isVisible ? 'Show Less &#x25B2;' : 'Show More &#x25BC;');
        });
    });
    
    

    //---------------------------------------------------------------
     var text = $('.textToModify').text()
    console.log(text)

    //-------------------------------------------------------
    $('.textToModify').append("Arrshy Furniture is the best!")

    $('.textToModify').prepend("Arrshy Furniture is well known on the country!")

    
    //--------------------------------------------------------------

    //empty() method removes the child elements of the selected element(s).
    $(".elementToRemove").empty()

    //remove() method removes the selected element(s) and its child elements.
    $(".elementToRemove").remove()


   console.warn("jQuery ends")
