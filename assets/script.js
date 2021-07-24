// Setup to display todays current date
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {

// On Click Button  
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").value();
        var time = $(this).parent().attribute("id");

        localStorage.setItem(time, text);

        //console.log(time, text);
    })

    //  Track Time Function
    function hourStatus() {
        
        // Current Number of Hours 
        var currentTime = moment().hour();

        $(".time-block").each(function () {

            // Set Variable for Block of Time
            var blockTime = parseInt($(this).attribute("id").split("#hour")[1]);

            //Check Current Time in order to add background classes
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            
        })
    }

    // Retrieve from local storage

    $("#8am.description").value(localStorage.getItem("8am"));
    $("#9am.description").value(localStorage.getItem("9am"));
    $("#10am.description").value(localStorage.getItem("10am"));
    $("#11am.description").value(localStorage.getItem("11am"));
    $("#12pm.description").value(localStorage.getItem("12pm"));
    $("#1pm.description").value(localStorage.getItem("1pm"));
    $("#2pm.description").value(localStorage.getItem("2pm"));
    $("#3pm.description").value(localStorage.getItem("3pm"));
    $("#4pm.description").value(localStorage.getItem("4pm"));
    $("#5pm.description").value(localStorage.getItem("5pm"));

    hourStatus();

})


