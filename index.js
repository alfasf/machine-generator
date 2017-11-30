
$(document).ready(function(){
  $("#newQuote").on("click", function(e){
  	e.preventDefault();
    $.ajax({
    	type: 'GET',
    	url: "https://cors.io/?http://quotesondesign.com/api/3.0/api-3.0.json?callback=my_function",
    	});

    });

}); 