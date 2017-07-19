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
    $("#not_know").click(function() {
        $("#resultss, #btn-backItUpTwo").fadeOut(500, function() {
            $("#not_sure, #btn-backItUpFour").fadeIn(500);
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
			quote: "For every 1,000 juvenile arrests in Illinois only 3 are expunged.",
			name:"Illinois Juvenile Justice Commission"
	    },
	    {
	    	quote:"APPROXIMATELY 1.8 million Number of juvenile arrests in Illinois 2004 – 2014",
	    	name:"Illinois Juvenile Justice Commission"
	    },
	    {
	    	quote:"'95.5%' - Percentage of juvenile arrests that are for nonviolent offenses nationwide",
	    	name:"Illinois Juvenile Justice Commission"
	    },
	    {
	    	quote:".0.29%' - Percentage of juvenile arrests expunged in Illinois 2004-2014 (one-third of one percent)",
	    	name:"Illinois Juvenile Justice Commission"
	    },
	    {
	    	quote:"'87%' - Percentage of counties in Illinois that averaged less than one juvenile expungement per year 2004-2014",
	    	name:"Illinois Juvenile Justice Commission"
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

		