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
        Ranking: "soon",
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
        Ranking: "#587",
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
        Map: "Takamori Natsumi, Sendai Eri, Asakawa Yuu, Tanezaki Atsumi - Ne! Ko! [Extra]",
        Star: 3.36,
        PP: 143,
        Rank: "SS",
        Ranking: "#82",
        Mod: "NM",
        Status: "FC"
    },{
        Map: "Yoshino Nanjo - Kimi o Sagashi ni [Mitsuketa]",
        Star: 3.60,
        PP: 130,
        Rank: "S",
        Ranking: "#13",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "CLIFF EDGE feat. Nakamura Maiko - The Distance [Master]",
        Star: 3.49,
        PP: "&hearts;",
        Rank: "S",
        Ranking: "#53",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Porter Robinson - Flicker [Worlds]",
        Star: 3.48,
        PP: 95,
        Rank: "S",
        Ranking: "#247",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "ChouCho - BLESS YoUr NAME [lfj's Insane] ",
        Star: 3.44,
        PP: 88,
        Rank: "S",
        Ranking: "#192",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Tamura Yukari, Kanai Mika & Horie Yui - Happy! Lucky! Dochy! [Collab]",
        Star: 3.38,
        PP: 75,
        Rank: "S",
        Ranking: "#102",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Mayama Rika - Liar Mask anime size [Insane]",
        Star: 3.38,
        PP: 78,
        Rank: "S",
        Ranking: "#24",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Tomita Miyu, Onishi Saori, Ohzora Naomi, Hanazawa Kana - Gabriel Drop Kick [Insane]",
        Star: 3.35,
        PP: 44,
        Rank: "S",
        Ranking: "#208",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "L.E.D.-G + Qrispy Joybox + ARM feat. Nanahira - Dokkin Summer Adventure [Lami's Another]",
        Star: 3.30,
        PP: 78,
        Rank: "S",
        Ranking: "#85",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "RADWIMPS - Yume Tourou [Your Name]",
        Star: 3.19,
        PP: 105,
        Rank: "S",
        Ranking: "#140",
        Mod: "NM",
        Status: "FC"
    },{
        Map: "Fujiwara Chika (CV: Kohara Konomi) - Chikatto Chika Chika (TV Size) [Amity's Insane]",
        Star: 3.05,
        PP: 62,
        Rank: "S",
        Ranking: "#248",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "FROZEN QUALIA - Kaleidoscope [Lasse's Petal]",
        Star: 3.00,
        PP: 33,
        Rank: "S",
        Ranking: "#9",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Nanahira - Youkoso Japari Park e [gary00737's Insane]",
        Star: 2.82,
        PP: 50,
        Rank: "S",
        Ranking: "#73",
        Mod: "NF",
        Status: "Pass"
    },{
        Map: "Katakiri Rekka & Suzuyu - Girl meets Love [Insane]",
        Star: 2.75,
        PP: 72,
        Rank: "SS",
        Ranking: "#276",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    }];
    for (index = 0; index < player.length; index++) {
       

        $("#tbNames tr:last").after("<tr><td style='width: 1px'> &#8226; </td> <td style='width: 500px'>" + player[index].Map + "</td> <td style='text-align: center'>" + player[index].Star + "</td> <td style='text-align: center'>" + player[index].PP + " </td> <td style='text-align: center'>" + player[index].Rank + " </td> <td style='text-align: center'>" + player[index].Ranking + " </td> <td style='width: 80px; text-align: center'>" + player[index].Mod + " </td> <td style='width: 80px; text-align: center'>" + player[index].Status + " </td> </tr>");
    }
    


}
