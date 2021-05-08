// Make statements using moment to add today's date & time to top
var time = moment();
$("#today").text(`${time.format('dddd, MMMM Do YYYY')}`);
$("#today-time").text(`${time.format('hh:mm a')}`);

// Save textarea values in localStorage
$(".saveBtn").on("click", function() {
    var timeBlock = $(this).parent().attr("id");
    var plannerText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, plannerText);
    console.log(`Time: ${timeBlock}  |  Plans: ${plannerText}`);
})
// Scheduler function
saveScheduler = () => {
    // Look and set the vars as local values
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var text = localStorage.getItem(id);
        // Keeps info stored as long as it hasn't been saved over
        if (text !== null) {
            $(this).children(".description").val(text);
        }
    })
    
}
saveScheduler();

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
setColorTimer();