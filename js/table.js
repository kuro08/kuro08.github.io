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
        Link: "https://osu.ppy.sh/beatmapsets/65491#fruits/191805",
        Star: 4.40,
        PP: 129,
        Rank: "S",
        Ranking: "#34",
        Mod: "NM",
        Ranking: "soon",
        Status: "Pass"
    }, {
        Map: "Sasaki Sayaka - Kiss no Hitotsu de [Serenade]",
        Link: "https://osu.ppy.sh/beatmapsets/613158#fruits/1293772",
        Star: 4.37,
        PP: 78,
        Rank: "S",
        Ranking: "#30",
        Mod: "NM",
        Status: "Pass"
    }, {
        Map: "Thaehan - Help [Virtuosu!]",
        Link: "https://osu.ppy.sh/beatmapsets/630407#fruits/1330828",
        Star: 4.37,
        PP: 52,
        Rank: "S",
        Ranking: "#43",
        Mod: "HD",
        Status: "Pass"
    }, {
        Map: "BABYMETAL - Road of Resistance [Rebellion]",
        Link: "https://osu.ppy.sh/beatmapsets/399372#fruits/869222",
        Star: 5.29,
        PP: 37,
        Rank: "A",
        Ranking: "#587",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "DJ Genki VS Camellia feat. moimoi - YELL! [Illumination]",
        Link: "https://osu.ppy.sh/beatmapsets/564539#fruits/1193468",
        Star: 5.33,
        PP: 98,
        Rank: "S",
        Ranking: "#49",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "MomoKuro-tei Ichimon - Nippon Egao Hyakkei (TV Size) [Extra]",
        Link: "https://osu.ppy.sh/beatmapsets/57368#fruits/175783",
        Star: 3.83,
        PP: 95,
        Rank: "S",
        Ranking: "#206",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: " IOSYS - Cirno no Perfect Sansuu Kyoushitsu [Perfect Freeze]",
        Link: "https://osu.ppy.sh/beatmapsets/392215#fruits/893739",
        Star: 3.82,
        PP: 53,
        Rank: "S",
        Ranking: "#105",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "TrySail - High Free Spirits -TV.Ver- [Extra]",
        Link: "https://osu.ppy.sh/beatmapsets/440706#fruits/948153",
        Star: 3.71,
        PP: 82,
        Rank: "S",
        Ranking: "#56",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Kani*Do-Luck! (TV Size) [A I U R A !]",
        Link: "https://osu.ppy.sh/beatmapsets/894883#fruits/1869933",
        Star: 4.48,
        PP: 175,
        Rank: "S",
        Ranking: "#6",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Halozy - Masshiro na Yuki [White Eternity]",
        Link: "https://osu.ppy.sh/b/1939883?m=2",
        Star: 4.78,
        PP: 34,
        Rank: "S",
        Ranking: "#6",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Hyadain - Hyadain no Joujou Yuujou (TV Size) [Collab]",
        Link: "https://osu.ppy.sh/b/119028?m=2",
        Star: 3.37,
        PP: 112,
        Rank: "S",
        Ranking: "#130",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Takamori Natsumi, Sendai Eri, Asakawa Yuu, Tanezaki Atsumi - Ne! Ko! [Extra]",
        Link: "https://osu.ppy.sh/b/1371450?m=2",
        Star: 3.36,
        PP: 143,
        Rank: "SS",
        Ranking: "#82",
        Mod: "NM",
        Status: "FC"
    },{
        Map: "Yoshino Nanjo - Kimi o Sagashi ni [Mitsuketa]",
        Link: "https://osu.ppy.sh/b/1013881?m=2",
        Star: 3.60,
        PP: 130,
        Rank: "S",
        Ranking: "#13",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "CLIFF EDGE feat. Nakamura Maiko - The Distance [Master]",
        Link: "https://osu.ppy.sh/b/1228840?m=2",
        Star: 3.49,
        PP: "&hearts;",
        Rank: "S",
        Ranking: "#53",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Porter Robinson - Flicker [Worlds]",
        Link: "https://osu.ppy.sh/b/495543?m=2",
        Star: 3.48,
        PP: 95,
        Rank: "S",
        Ranking: "#247",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "ChouCho - BLESS YoUr NAME [lfj's Insane] ",
        Link: "https://osu.ppy.sh/b/674197?m=2",
        Star: 3.44,
        PP: 88,
        Rank: "S",
        Ranking: "#192",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Tamura Yukari, Kanai Mika & Horie Yui - Happy! Lucky! Dochy! [Collab]",
        Link: "https://osu.ppy.sh/b/112624?m=2",
        Star: 3.38,
        PP: 75,
        Rank: "S",
        Ranking: "#102",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Mayama Rika - Liar Mask anime size [Insane]",
        Link: "https://osu.ppy.sh/b/528269?m=2",
        Star: 3.38,
        PP: 78,
        Rank: "S",
        Ranking: "#24",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "Tomita Miyu, Onishi Saori, Ohzora Naomi, Hanazawa Kana - Gabriel Drop Kick [Insane]",
        Link: "https://osu.ppy.sh/b/1177545?m=2",
        Star: 3.35,
        PP: 44,
        Rank: "S",
        Ranking: "#208",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "L.E.D.-G + Qrispy Joybox + ARM feat. Nanahira - Dokkin Summer Adventure [Lami's Another]",
        Link: "https://osu.ppy.sh/b/780917?m=2",
        Star: 3.30,
        PP: 78,
        Rank: "S",
        Ranking: "#85",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "RADWIMPS - Yume Tourou [Your Name]",
        Link: "https://osu.ppy.sh/b/1098527?m=2",
        Star: 3.19,
        PP: 105,
        Rank: "S",
        Ranking: "#140",
        Mod: "NM",
        Status: "FC"
    },{
        Map: "Fujiwara Chika (CV: Kohara Konomi) - Chikatto Chika Chika (TV Size) [Amity's Insane]",
        Link: "https://osu.ppy.sh/b/1917098?m=2",
        Star: 3.05,
        PP: 62,
        Rank: "S",
        Ranking: "#248",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Chimame-tai - Tokimeki Poporon [Crystal's Insane]",
        Link: "https://osu.ppy.sh/b/806162?m=2",
        Star: 3.09,
        PP: 54,
        Rank: "S",
        Ranking: "#109",
        Mod: "NM",
        Status: "Pass"
    },{
        Map: "FROZEN QUALIA - Kaleidoscope [Lasse's Petal]",
        Link: "https://osu.ppy.sh/b/1871298?m=2",
        Star: 3.00,
        PP: 33,
        Rank: "S",
        Ranking: "#9",
        Mod: "NF",
        Status: "Pass NF"
    },{
        Map: "Nanahira - Youkoso Japari Park e [gary00737's Insane]",
        Link: "https://osu.ppy.sh/b/1469039?m=2",
        Star: 2.82,
        PP: 50,
        Rank: "S",
        Ranking: "#73",
        Mod: "NF",
        Status: "Pass"
    },{
        Map: "Katakiri Rekka & Suzuyu - Girl meets Love [Insane]",
        Link: "https://osu.ppy.sh/b/741400?m=2",
        Star: 2.75,
        PP: 72,
        Rank: "SS",
        Ranking: "#276",
        Mod: "NF",
        Status: "FC"
    },{
        Map: "Shinra-Bansho - Kyoukyou no Fortunate Polka [Collab Insane]",
        Link: "https://osu.ppy.sh/b/1894320?m=2",
        Star: 2.73,
        PP: 80,
        Rank: "SS",
        Ranking: "#22",
        Mod: "NF",
        Status: "FC"
    },{
        Map: "Hello, Happy World! - Goka! Gokai!? Phantom Thief! [Hinsvar's Insane]",
        Link: "https://osu.ppy.sh/b/1655153?m=2",
        Star: 2.75,
        PP: 72,
        Rank: "SS",
        Ranking: "#40",
        Mod: "NF",
        Status: "FC"
    },{
        Map: "Sakakibara Yui - Love Comp! (Short Ver.) [Insane]",
        Link: "https://osu.ppy.sh/b/131369?m=2",
        Star: 2.69,
        PP: 91,
        Rank: "S",
        Ranking: "#226",
        Mod: "HDDT",
        Status: "Pass"
    },{
        Map: "Nishino Kana - Darling [Insane]",
        Link: "https://osu.ppy.sh/b/493755?m=2",
        Star: 3.09,
        PP: 54,
        Rank: "SS",
        Ranking: "#331",
        Mod: "NF",
        Status: "FC"
    },{
        Map: "ayase rie - yuima-ru*world [Real's Insane]",
        Link: "https://osu.ppy.sh/b/1255391?m=2",
        Star: 2.63,
        PP: 67,
        Rank: "SS",
        Ranking: "#200",
        Mod: "NF",
        Status: "FC"
    },{
        Map: "Camellia feat. Nanahira - Bassdrop Freaks (2018 'Redrop' ver.) [Hyper]",
        Link: "https://osu.ppy.sh/b/1694582?m=2",
        Star: 2.62,
        PP: 75,
        Rank: "SS",
        Ranking: "#152",
        Mod: "NF",
        Status: "FC"
    },{ 
        Map: "Ayase Rie - Yuima-ru*World TVver. [Insane]",
        Link: "https://osu.ppy.sh/b/983692?m=2",
        Star: 2.69,
        PP: 65,
        Rank: "S",
        Ranking: "#908",
        Mod: "NF",
        Status: "FC"
    }];
    for (index = 0; index < player.length; index++) {
       

        $("#tbNames tr:last").after("<tr><td style='width: 1px'> &#8226; </td> <td style='width: 500px'><a href="+ player[index].Link +">" + player[index].Map + "</a></td> <td style='text-align: center'>" + player[index].Star + "</td> <td style='text-align: center'>" + player[index].PP + " </td> <td style='text-align: center'>" + player[index].Rank + " </td> <td style='text-align: center'>" + player[index].Ranking + " </td> <td style='width: 80px; text-align: center'>" + player[index].Mod + " </td> <td style='width: 80px; text-align: center'>" + player[index].Status + " </td> </tr>");
    }
    


}
