var $ = require("jquery");


$(document).ready(function() {
  console.log('app initialised');
  $('.splash_text_en').delay(2500).fadeOut(250);
  $('.english_about_click').click(function(){
    $('.about_text_en').fadeToggle('fast');
  });
  $('.about_he_click').click(function(){
    $('.about_text_he').fadeToggle('fast');
  });
  $('.swith_to_heb').click(function(){
    $('.about_text_en').fadeOut('fast');
    $('.about_en').replaceWith('<div class="about_en"><span class="about_he_click">אודות</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 2vh;"><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-envelope-o" aria-hidden="true"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="swith_to_en">A</span>&nbsp;&nbsp;<span style="color:rgb(0, 84, 255);">א</span></div>');
  });
  $('.swith_to_en').click(function(){
    $('.about_text_he').fadeOut('fast');
    $('.about_en').replaceWith('<div class="about_en"><span class="english_about_click">ABOUT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 2vh;"><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-envelope-o" aria-hidden="true"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:rgb(0, 84, 255);">A</span>&nbsp;&nbsp;<span class="swith_to_heb">א</span></div>');
  });
    //Keyboard Pressed
    var map = {
        88: false,
        77: false
    };
    $(document).keydown(function(keycombination) {
        if (keycombination.keyCode in map) {
            map[keycombination.keyCode] = true;
            if (map[88] && map[77]) {
                $('.sakanabg').css({'width': '50%'});
                $('.tzionibg').css({'width': '50%'});
            }
        }
    }).keyup(function(keycombination) {
        if (keycombination.keyCode in map) {
            map[keycombination.keyCode] = false;
            $('.sakanabg').css({'width': '100%'});
            $('.tzionibg').css({'width': '100%'});
        }
    });
    $(document).on("keydown", function(a) {
        if (a.which == 84) {
            if ($('#t').html() == "א") {
                $('#t').append('רץ ישראל');
            }
            if ($('#landofisrael').html() == "L") {
                $('#landofisrael').append('and of Israel').css('visibility', 'visible');
            }
            $('#israel').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 67) {
            if ($('#c').html() == "ב") {
                $('#c').append('טחון');
            }
            if ($('#securitytext').html() == "S") {
                $('#securitytext').append('ecurity').css('visibility', 'visible');
            }
            $('#security').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 68) {
            if ($('#d').html() == "ג") {
                $('#d').append('זע');
            }
            if ($('#racetext').html() == "R") {
                $('#racetext').append('ace').css('visibility', 'visible');
            }
            $('#race').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 83) {
            if ($('#s').html() == "ד") {
                $('#s').append('ת');
            }
            if ($('#religiontext').html() == "R") {
                $('#religiontext').append('eligon').css('visibility', 'visible');
            }
            $('#religion').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 86) {
            if ($('#v').html() == "ה") {
                $('#v').replaceWith('<div class="videolistitem_he" id="v">-ה</div>');
            }
            if ($('#the').html() == "T") {
                $('#the').append('he').css('visibility', 'visible');
            }
            $('#ha').show(0, function() {
                this.play();
                this.loop = true;
            })
            $('.veframe').show();
        } else if (a.which == 85) {
            if ($('#u').html() == "ו") {
                $('#u').replaceWith('<div class="videolistitem_he" id="u">-ו</div>');
            }
            if ($('#and').html() == "A") {
                $('#and').append('nd').css('visibility', 'visible');
            }
            $('#ve').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 90) {
            if ($('#z').html() == "ז") {
                $('#z').append('כות');
            }
            if ($('#right').html() == "R") {
                $('#right').append('ight').css('visibility', 'visible');
            }
            $('#zhoot').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 74) {
            if ($('#j').html() == "ח") {
                $('#j').append('ירות');
            }
            if ($('#freedom').html() == "F") {
                $('#freedom').append('reedom').css('visibility', 'visible');
            }
            $('#hiroot').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 89) {
            if ($('#y').html() == "ט") {
                $('#y').append('בח');
            }
            if ($('#massacre').html() == "M") {
                $('#massacre').append('assacre').css('visibility', 'visible');
            }
            $('#tevach').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 72) {
            if ($('#h').html() == "י") {
                $('#h').append('הודי');
            }
            if ($('#jewishtext').html() == "J") {
                $('#jewishtext').append('ewish').css('visibility', 'visible');
            }
            $('#jewishtop').show(0, function() {
                this.play();
                this.loop = true;
            })
            $('#jewishbot').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 70) {
            if ($('#f').html() == "כ") {
                $('#f').append('ל תושביה');
            }
            if ($('#inhabits').html() == "A") {
                $('#inhabits').append("ll it's inhabits").css('visibility', 'visible');
            }
            $('#kol').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 75) {
            if ($('#k').html() == "ל") {
                $('#k').append('אומי');
            }
            if ($('#nationaltext').html() == "N") {
                $('#nationaltext').append("ational").css('visibility', 'visible');
            }
            $('#national').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 78) {
            if ($('#n').html() == "מ") {
                $('#n').append('לחמת');
            }
            if ($('#wartext').html() == "W") {
                $('#wartext').append("ar").css('visibility', 'visible');
            }
            $('#war').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 66) {
            if ($('#b').html() == "נ") {
                $('#b').append('אצי');
            }
            if ($('#nazitext').html() == "N") {
                $('#nazitext').append("azi").css('visibility', 'visible');
            }
            $('#nazi').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 88) {
            if ($('#x').html() == "ס") {
                $('#x').append('כנה');
            }
            if ($('#dangertext').html() == "D") {
                $('#dangertext').append("anger").css('visibility', 'visible');
            }
            $('#sakana').show(0, function() {
                this.play();
                this.loop = true;
            })
            $('.sakanabg').show();

        } else if (a.which == 71) {
            if ($('#g').html() == "ע") {
                $('#g').append('ברית');
            }
            if ($('#hebrewtext').html() == "H") {
                $('#hebrewtext').append("ebrew").css('visibility', 'visible');
            }
            $('#ivrit').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 80) {
            if ($('#p').html() == "פ") {
                $('#p').append('תרון');
            }
            if ($('#solutiontext').html() == "S") {
                $('#solutiontext').append("olution").css('visibility', 'visible');
            }
            $('#pitaroon').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 77) {
            if ($('#m').html() == "צ") {
                $('#m').append('יוני');
            }
            if ($('#zionisttext').html() == "Z") {
                $('#zionisttext').append("ionist").css('visibility', 'visible');
            }
            $('#tzioni').show(0, function() {
                this.play();
                this.loop = true;
            })
            $('.tzionibg').show();
        } else if (a.which == 69) {
            if ($('#e').html() == "ק") {
                $('#e').append('דושים');
            }
            if ($('#holytext').html() == "H") {
                $('#holytext').append("oly").css('visibility', 'visible');
            }
            $('#kdoshim').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 82) {
            if ($('#r').html() == "ר") {
                $('#r').append('שע');
            }
            if ($('#eviltext').html() == "E") {
                $('#eviltext').append("vil").css('visibility', 'visible');
            }
            $('#evil').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 65) {
            if ($('#a').html() == "ש") {
                $('#a').append('לום');
            }
            if ($('#peacetext').html() == "P") {
                $('#peacetext').append("eace").css('visibility', 'visible');
            }
            $('#peace').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if (a.which == 188) {
            if ($('#texttkuma').html() == "ת") {
                $('#texttkuma').append('קומה');
            }
            if ($('#resurrection').html() == "R") {
                $('#resurrection').append("esurrection").css('visibility', 'visible');
            }
            $('#tkuma').show(0, function() {
                this.play();
                this.loop = true;
            })
        } else if(a.which == 32){
          console.log("congrats, it's a spacebar");
        }
    });
    //Keyboard Released
    $(document).on("keyup", function(b) {
        if (b.which == 84) {
            $('#t').replaceWith('<div class="videolistitem_he" id="t">א</div>');
            $('#landofisrael').replaceWith('<div class="videolistitem_en" id="landofisrael">L</div>');
            $('#israel').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 67) { // C Key
            $('#c').replaceWith('<div class="videolistitem_he" id="c">ב</div>');
            $('#securitytext').replaceWith('	<div class="videolistitem_en" id="securitytext">S</div>');
            $('#security').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 68) {
            $('#d').replaceWith('<div class="videolistitem_he" id="d">ג</div>');
            $('#racetext').replaceWith('<div class="videolistitem_en" id="racetext">R</div>');
            $('#race').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 83) {
            $('#s').replaceWith('<div class="videolistitem_he" id="s">ד</div>');
            $('#religiontext').replaceWith('<div class="videolistitem_en" id="religiontext">R</div>');
            $('#religion').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 86) {
            $('#v').replaceWith('<div class="videolistitem_he" id="v">ה</div>');
            $('#the').replaceWith('<div class="videolistitem_en" id="the">T</div>');
            $('#ha').hide(0, function() {
                this.pause();
                this.currentTime = 0;
            })
            $('.veframe').hide();
        } else if (b.which == 85) {
            $('#u').replaceWith('<div class="videolistitem_he" id="u">ו</div>');
            $('#and').replaceWith('<div class="videolistitem_en" id="and">A</div>');
            $('#ve').hide(0, function() {
                this.pause();
                this.currentTime = 0;
            })

        } else if (b.which == 90) {
            $('#z').replaceWith('<div class="videolistitem_he" id="z">ז</div>');
            $('#right').replaceWith('<div class="videolistitem_en" id="right">R</div>');
            $('#zhoot').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 74) {
            $('#j').replaceWith('<div class="videolistitem_he" id="j">ח</div>');
            $('#freedom').replaceWith('<div class="videolistitem_en" id="freedom">F</div>');
            $('#hiroot').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 89) {
            $('#y').replaceWith('<div class="videolistitem_he" id="y">ט</div>');
            $('#massacre').replaceWith('<div class="videolistitem_en" id="massacre">M</div>');
            $('#tevach').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 72) {
            $('#h').replaceWith('<div class="videolistitem_he" id="h">י</div>');
            $('#jewishtext').replaceWith('<div class="videolistitem_en" id="jewishtext">J</div>');
            $('#jewishtop').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
            $('#jewishbot').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 70) {
            $('#f').replaceWith('<div class="videolistitem_he" id="f">כ</div>');
            $('#inhabits').replaceWith('<div class="videolistitem_en" id="inhabits">A</div>');
            $('#kol').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 75) {
            $('#national').hide(0, function() {
                $('#k').replaceWith('<div class="videolistitem_he" id="k">ל</div>');
                $('#nationaltext').replaceWith('<div class="videolistitem_en" id="nationaltext">N</div>');
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 78) {
            $('#n').replaceWith('<div class="videolistitem_he" id="n">מ</div>');
            $('#wartext').replaceWith('<div class="videolistitem_en" id="wartext">W</div>');
            $('#war').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 66) {
            $('#b').replaceWith('<div class="videolistitem_he" id="b">נ</div>');
            $('#nazitext').replaceWith('<div class="videolistitem_en" id="nazitext">N</div>');
            $('#nazi').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 88) {
            $('#x').replaceWith('<div class="videolistitem_he" id="x">ס</div>');
            $('#dangertext').replaceWith('<div class="videolistitem_en" id="dangertext">D</div>');
            $('.sakanabg').hide();
            $('#sakana').hide(0, function() {
                this.pause();
                this.currentTime = 0;
            })
        } else if (b.which == 71) {
            $('#g').replaceWith('<div class="videolistitem_he" id="g">ע</div>');
            $('#hebrewtext').replaceWith('<div class="videolistitem_en" id="hebrewtext">H</div>');
            $('#ivrit').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 80) {
            $('#p').replaceWith('<div class="videolistitem_he" id="p">פ</div>');
            $('#solutiontext').replaceWith('<div class="videolistitem_en" id="solutiontext">S</div>');
            $('#pitaroon').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 77) {
            $('#m').replaceWith('<div class="videolistitem_he" id="m">צ</div>');
            $('#zionisttext').replaceWith('<div class="videolistitem_en" id="zionisttext">Z</div>');
            $('#tzioni').hide(0, function() {
                this.pause();
                this.currentTime = 0;
            })
            $('.tzionibg').hide();
        } else if (b.which == 69) {
            $('#e').replaceWith('<div class="videolistitem_he" id="e">ק</div>');
            $('#holytext').replaceWith('<div class="videolistitem_en" id="holytext">H</div>');
            $('#kdoshim').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 82) {
            $('#r').replaceWith('<div class="videolistitem_he" id="r">ר</div>');
            $('#eviltext').replaceWith('<div class="videolistitem_en" id="eviltext">E</div>');
            $('#evil').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 65) {
            $('#a').replaceWith('<div class="videolistitem_he" id="a">ש</div>');
            $('#peacetext').replaceWith('<div class="videolistitem_en" id="peacetext">P</div>');
            $('#peace').hide(0, function() {
                this.pause();
                this.currentTime = 0;

            })
        } else if (b.which == 188) {
            $('#texttkuma').replaceWith('<div class="videolistitem_he" id="texttkuma">ת</div>');
            $('#resurrection').replaceWith('<div class="videolistitem_en" id="resurrection">R</div>');
            $('#tkuma').hide(0, function() {
                this.pause();
                this.currentTime = 0;
            })
        }
    });

});
