var country = ["Norway", "Sweden", "Denmark"];
    var capital = ["Oslo", "Stockholm" , "Copenhagen"]

    var bodyString = '';
    $.each(country, function(index, ctry) {
        bodyString += ('<tr><td>'+ctry+'</td><td>'+capital[index]+'</td></tr>');
    });
    $('.countriesTable tbody').html(bodyString);