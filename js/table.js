$(document).ready(function () {
    arrayData();
});

function arrayData() {
    var index;
    var text = "<ul>";
    var htmlTable = '';
    var player = [];
    player = [{
        Map: "Mitani Nana - Chikyuu Saigo no Kokuhaku o [Collab] ",
        Star: 4.40,
        PP: 129,
        Rank: "S",
        Mod: "NM",
        Status: "Pass"
    }, {
        Map: "Sasaki Sayaka - Kiss no Hitotsu de [Serenade]",
        Star: 4.37,
        PP: 78,
        Rank: "S",
        Mod: "NM",
        Status: "Pass"
    }, {
        Map: "Thaehan - Help [Virtuosu!]",
        Star: 4.37,
        PP: 52,
        Rank: "S",
        Mod: "HD",
        Status: "Pass"
    }, {
        Map: "BABYMETAL - Road of Resistance [Rebellion]",
        Star: 5.29,
        PP: 37,
        Rank: "A",
        Mod: "NM",
        Status: "Pass"
    }];
    for (index = 0; index < player.length; index++) {
       

        $("#tbNames tr:last").after("<tr><td style='width: 1px'> &#8226; </td> <td style='width: 500px'>" + player[index].Map + "</td> <td style='text-align: center'>" + player[index].Star + "</td> <td style='text-align: center'>" + player[index].PP + " </td> <td style='text-align: center'>" + player[index].Rank + " </td> <td style='width: 80px; text-align: center'>" + player[index].Mod + " </td> <td style='width: 80px; text-align: center'>" + player[index].Status + " </td> </tr>");
    }
    


}