
    var content = $('.content');
    var toggleButton = $('#toggleButton');
    var showRow = $('#showRow');


    toggleButton.on('click', function () {
        if (content.is(':visible')) {
            content.hide();
            toggleButton.html('Show More &#x25BC;');
            showRow.insertBefore(content);
        } else {
            content.show();
            toggleButton.html('Show Less &#x25B2;');
            showRow.insertAfter(content);
        }
    });
