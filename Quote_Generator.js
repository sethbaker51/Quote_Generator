$(document).ready(function() {
	var errorMessage= {message:"Somebody done broked it!"};
	function getQuote(){
		$.ajax({
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type:'POST',
			dataType:'json',
			success:function(data){
				$("#quote").html('"'+data.quote+'"');
				$("#author").html(data.author);

			},
			error:function(error){
				$("#quote").html(errorMessage.message);

			},
			beforeSend:function(xhr){
				xhr.setRequestHeader("X-Mashape-Authorization", "en2Cm7P3VumshDUfjzwcsKaDA34Gp1UPUmJjsnDJIDEe7LjMuN");
			}
		});
	}
	getQuote();
	$("#new").click(function() {
		getQuote();
	});
    $("h1").addClass("animated bounce");
  $(".container").addClass("animated shake");
});

var colours = ['#DB3F3F', '#99FF66', '#FFE166', '#66CCFF', '#66FFE1', '#FF66FF', '#A466FF', '#66FFC3','#FF9A66','#E82E1A'];

function changeColours (){
    var index = Math.floor(Math.random()*(colours.length));

    document.getElementById('colour-change').style.backgroundColor = colours[index];
  };
