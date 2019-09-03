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
        Ranking: "#34",
        Mod: "NM",
        Status: "Pass"
    }, {
        Map: "Sasaki Sayaka - Kiss no Hitotsu de [Serenade]",
        Star: 4.37,
        PP: 78,
        Rank: "S",
        Ranking: "#30",
        Mod: "NM",
        Status: "Pass"
    }, {
        Map: "Thaehan - Help [Virtuosu!]",
        Star: 4.37,
        PP: 52,
        Rank: "S",
        Ranking: "#43",
        Mod: "HD",
        Status: "Pass"
    }, {
        Map: "BABYMETAL - Road of Resistance [Rebellion]",
        Star: 5.29,
        PP: 37,
        Rank: "A",
        Ranking: "soon",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "DJ Genki VS Camellia feat. moimoi - YELL! [Illumination]",
        Star: 5.33,
        PP: 98,
        Rank: "S",
        Ranking: "#49",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "TrySail - High Free Spirits -TV.Ver- [Extra]",
        Star: 3.71,
        PP: 82,
        Rank: "S",
        Ranking: "#56",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Kani*Do-Luck! (TV Size) [A I U R A !]",
        Star: 4.48,
        PP: 175,
        Rank: "S",
        Ranking: "#6",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Halozy - Masshiro na Yuki [White Eternity]",
        Star: 4.78,
        PP: 34,
        Rank: "S",
        Ranking: "#6",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: " Takamori Natsumi, Sendai Eri, Asakawa Yuu, Tanezaki Atsumi - Ne! Ko! [Extra]",
        Star: 3.36,
        PP: 143,
        Rank: "S",
        Ranking: "#82",
        Mod: "NM",
        Status: "FC"
    },{
        Map: " Yoshino Nanjo - Kimi o Sagashi ni [Mitsuketa]",
        Star: 3.60,
        PP: 130,
        Rank: "S",
        Ranking: "#13",
        Mod: "NM",
        Status: "Pass"
    },
             
             ];
    for (index = 0; index < player.length; index++) {
       

        $("#tbNames tr:last").after("<tr><td style='width: 1px'> &#8226; </td> <td style='width: 500px'>" + player[index].Map + "</td> <td style='text-align: center'>" + player[index].Star + "</td> <td style='text-align: center'>" + player[index].PP + " </td> <td style='text-align: center'>" + player[index].Rank + " </td> <td style='text-align: center'>" + player[index].Ranking + " </td> <td style='width: 80px; text-align: center'>" + player[index].Mod + " </td> <td style='width: 80px; text-align: center'>" + player[index].Status + " </td> </tr>");
    }
    


}
