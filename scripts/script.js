
$("#analyse").slideUp(1);
$("#infos").slideUp(1);

$("#analyseLink").click(function(){
    $("#infos").slideUp();
    $("#analyse").slideDown();
    declareEvents();
});

$("#infosLink").click(function(){
    $("#analyse").slideUp();
    $("#infos").slideDown();
    declareEvents();
});

$("#mapLink").click(function(){
    $("#analyse").slideUp();
    $("#infos").slideUp();
});

function declareEvents(){
    $(".close").unbind('click').click(function(){
        $("#analyse").slideUp();
        $("#infos").slideUp();
    });
}