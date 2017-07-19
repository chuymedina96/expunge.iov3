/*global $*/
! function(a) {
    "use strict";
    a(".page-scroll a").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), b.preventDefault();
    }); 
    a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    });
a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click();
    });
a("#mainNav").affix({
        offset: {
            top: 100
        }
    });
}(jQuery);

$(document).ready(function() {
    $(".plusminus").parent().parent().click(function() {
        $(this).hasClass("collapsed") ? $(this).find("i").removeClass("fa-chevron-circle-right").addClass("fa-chevron-circle-down") : $(this).find("i").removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-right");
    });
    
    $("#btn").click(function() {
        $("#fancy, #btn").fadeOut(500, function() {
            $("#bank, #btn-bk").fadeIn(500);
        });
    });
    
    $("#btn-bk").click(function() {
        $("#bank, #btn-bk").fadeOut(500, function() {
            $("#fancy, #btn").fadeIn(500);
        });
    });

    $("#understand").click(function() {
        $("#btn-bk, #bank").fadeOut(500, function() {
            $("#btn-back").fadeIn(500), $("#container").fadeIn(500);
        });
    });
    
    $("#btn-back").click(function() {
        $("#container, #btn-back").fadeOut(500, function() {
            $("#bank, #btn-bk").fadeIn(500);
        });
    });
    
    $("#sixteen").click(function() {
        $("#container, #btn-back").fadeOut(500, function() {
            $("#results, #btn-backItUp").fadeIn(500);
        });
    });
    
    $("#btn-backItUp").click(function() {
        $("#results, #btn-backItUp").fadeOut(500, function() {
            $("#container, #btn-back").fadeIn(500);
        });
    });
    
     $("#seventeen").click(function() {
        $("#container, #btn-back").fadeOut(500, function() {
            $("#resultss, #btn-backItUpTwo").fadeIn(500);
        });
    });
    $("#btn-backItUpTwo").click(function() {
        $("#resultss, #btn-backItUpTwo").fadeOut(500, function() {
            $("#container, #btn-back").fadeIn(500);
        });
    });
    $("#2014").click(function() {
        $("#resultss, #btn-backItUpTwo").fadeOut(500, function() {
            $("#results, #btn-backItUp").fadeIn(500);
        });
    });
    //WITH BACKITUPTHREE BUTTON
    $("#eighteen").click(function() {
        $("#container, #btn-back").fadeOut(500, function() {
            $("#adult, #btn-backItUpThree").fadeIn(500);
        });
    });
    $("#btn-backItUpThree").click(function() {
        $("#adult, #btn-backItUpThree").fadeOut(500, function() {
            $("#container, #btn-back").fadeIn(500);
        });
    });
    //WITH BACKITUPFOUR BUTTON
    $("#idk").click(function() {
        $("#container, #btn-back").fadeOut(500, function() {
            $("#not_sure, #btn-backItUpFour").fadeIn(500);
        });
    });
    $("#btn-backItUpFour").click(function(){
    	$("#not_sure, #btn-backItUpFour").fadeOut(500, function() {
            $("#container, #btn-back").fadeIn(500);
        });
    });
    
    var quoteSource=[
		{
			quote: "Start by doing what's necessary, then do what's possible, and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock, do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself, everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }

	];
	$('#quoteButton').click(function(evt){
		//define the containers of the info we target
		var quote = $('#quoteContainerr p').text();
		var quoteGenius = $('#quoteGenius').text();
		//prevent browser's default action
		evt.preventDefault();
		//getting a new random number to attach to a quote and setting a limit
		var sourceLength = quoteSource.length;
		var randomNumber= Math.floor(Math.random()*sourceLength);
		//set a new quote
		for(i=0;i<=sourceLength;i+=1){
		var newQuoteText = quoteSource[randomNumber].quote;
		var newQuoteGenius = quoteSource[randomNumber].name;
		//console.log(newQuoteText,newQuoteGenius);
        var timeAnimation = 600;
        var quoteContainerr = $('#quoteContainerr');
          //fade out animation with callback
          quoteContainerr.fadeOut(timeAnimation, function(){
            quoteContainerr.html('');
    				quoteContainerr.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-'+newQuoteGenius+'</p>');
            
            //fadein animation.
            quoteContainerr.fadeIn(timeAnimation);
	}); 
    function setRandomQuote() {
		$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+ "'" + newQuoteText + "'" + " - " + newQuoteGenius ).attr('target', '_blank');
		}
	setRandomQuote();
			break;
		}//end for loop
	});//end quoteButton function
});
//end document ready
// Or, to start a slideshow, just pass in an array of images
/*backstretch-overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background-image: repeating-linear-gradient(
        0deg, 
        transparent, 
        transparent
        2px, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 3px
    );
} 
$("header").css(header);
$("header").backstretch([
    "../img/chitowncity.jpg",
    "../img/moon.jpg"
], {duration: 5000});
*/

		