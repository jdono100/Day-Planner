$(function() {
    // Write listener function for savebtn(s)
    $(".saveBtn").on("click", () => {
        var textValue = $(".saveBtn").siblings(".description").val();
        var timeValue = $(".saveBtn").parent().attr("id");
        console.log("Value:" ,textValue);
        console.log("Time:" ,timeValue);
    })

    
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
})