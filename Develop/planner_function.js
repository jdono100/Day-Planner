var plannerElement = $("#planner");
// Make functions using moment to add today's date & time to top
var timer = function(){
    var today = today = moment();
    $('#today').text(today.format('dddd, MMMM Do YYYY'));
};
setInterval(timer, 1000);
var timerTime = function() {
    var todayTime = todayTime = moment();
    $('#today-time').text(todayTime.format('hh:mm A'));
}
setInterval(timerTime, 1000);


// Set a var for the planner div

// Write function to add text fields
function writePlanner() {
    for (i = 0; i < 9; i++) {
        var row = $("<div>").addClass("row time-block");
        var label = $("<span>").addClass("col-1 span7 pl-0 pt-4");
        var input = $("<textarea class='span7 col-10 hour' rows='2' required></textarea>").attr('index', i);
        var saveBtn = $("<button class='btn btn-primary col-1 saveBtn'>Save</button>").attr('index', i);
        if (i <= 2) {
            label.text((i + 9) + " am")
        } else if (i == 3) {
            label.text("12 pm")
        } else {
            label.text((i - 3) + " pm")
        }
        plannerElement.append(row);
        row.append(label);
        row.append(input);
        row.append(saveBtn);
    }
}

writePlanner();