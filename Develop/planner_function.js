// Make statements using moment to add today's date & time to top
var time = moment();
$("#today").text(`${time.format('dddd, MMMM Do YYYY')}`);
$("#today-time").text(`${time.format('hh:mm a')}`);

// Set global vars for the time blocks
var block9 = $("#9");
var block10 = $("#10");
var block11 = $("#11");
var block12 = $("#12");
var block13 = $("#13");
var block14 = $("#14");
var block15 = $("#15");
var block16 = $("#16");
var block17 = $("#17");


// Save textarea values in localStorage
$(".saveBtn").on("click", function() {
    var timeBlock = $(this).parent().attr("id");
    var plannerText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, plannerText);
})
saveScheduler = () => {
    // Look and set the vars as local values
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var text = localStorage.getItem(id);
        
        if (text !== null) {
            $(this).children(".description").val(text);
        }
    })
    
}

// Change time-block bg color depending on the time of day
setColorTimer = () => {
    // Set a var to the current hour
    var currentHour = time.toObject().hours;
    // Look through the time-block ids to find if the hour is less than greater than or equal to the currentHour
    $(".time-block").each(function() {
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour < currentHour) {
            $(this).addClass("past")
        } else if (thisHour === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        };
    })
}

saveScheduler();
setColorTimer();