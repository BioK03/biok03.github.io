
$("#analyse").slideUp(1);
$("#infos").slideUp(1);
$("#results").slideUp(1);

$("#analyseLink").click(function(){
    $("#infos").slideUp();
	$("#results").slideUp();
	
    $("#analyse").slideDown();
	
    declareEvents();
});

$("#infosLink").click(function(){
    $("#analyse").slideUp();
	$("#results").slideUp();
	
    $("#infos").slideDown();
	
    declareEvents();
});

$("#resultsLink").click(function(){
    $("#analyse").slideUp();
	$("#infos").slideUp();
	
    $("#results").slideDown();
	
    declareEvents();
});

$("#mapLink").click(function(){
    $("#analyse").slideUp();
    $("#infos").slideUp();
	$("#results").slideUp();
});

function declareEvents(){
    $(".close").unbind('click').click(function(){
        $("#analyse").slideUp();
        $("#infos").slideUp();
		$("#results").slideUp();
    });
}

