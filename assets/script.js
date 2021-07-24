var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").value();
    var time = $(this).parent().attribute("id");

    localStorage.setItem(time, text);

    console.log(time, text);
})