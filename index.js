
$(document).ready(function(){
  $("#newQuote").on("click", function(e){
  	e.preventDefault();
  	var wikiurl = "https://en.wikiquote.org/w/api.php?format=json";
    $.ajax( {
	    url: wikiurl,
	    data: queryData,
	    dataType: 'json',
	    type: 'GET',
	    headers: { 'Api-User-Agent': 'Example/1.0' },
	    success: function(data) {
	       // do something with data
	       $('blockquote').html(data);
	    }
	});

    }); //end of on click 

}); 