// Setup to display todays current date
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {

    // On Click Button  
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);

        //console.log(time, text);
    })

    //  Track Time Function
    function hourStatus() {
        
        // Current Number of Hours 
        var currentTime = moment().format('YYYY-MM-DD hh:mm');

        //console.log(currentTime);

        $(".time-block").each(function () {

            // Set Variable for Block of Time
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(currentTime, blockTime)

            //Check Current Time in order to add background classes
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } 
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            
        })
    }

    // Retrieve from local storage

    $("#eightAM.description").val(localStorage.getItem("eightAM"));
    $("#nineAM.description").val(localStorage.getItem("nineAM"));
    $("#tenAM.description").val(localStorage.getItem("tenAM"));
    $("#elevenAM.description").val(localStorage.getItem("elevenAM"));
    $("#twelvePM.description").val(localStorage.getItem("twelvePM"));
    $("#onePM.description").val(localStorage.getItem("onePM"));
    $("#twoPM.description").val(localStorage.getItem("twoPM"));
    $("#threePM.description").val(localStorage.getItem("threePM"));
    $("#fourPM.description").val(localStorage.getItem("fourPM"));
    $("#fivePM.description").val(localStorage.getItem("fivePM"));

    hourStatus();
})


