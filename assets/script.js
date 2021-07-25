// Setup to display todays current date
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {

    // On Click Button  
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, "id");
        localStorage.setItem(text, ".description")

        console.log(time, text);
    })

    //  Track Time Function
    function hourStatus() {
        
        // Current Number of Hours 
        var currentTime = moment().hour();

        console.log(currentTime);

        $(".time-block").each(function () {

            // Set Variable for Block of Time
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(currentTime, blockTime)

            //Check Current Time in order to add background classes
            if ( blockTime < currentTime ) {
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

    $("#hour8.description").val(localStorage.getItem("hour8"));
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14.description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17.description").val(localStorage.getItem("hour17"));

    hourStatus();
})


