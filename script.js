
var timeArray = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];
var militaryTime = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var getCurrentHour = moment().hour()
var currentDate = moment().format('dddd MMM Do')

// dicsplay the current date on top of the page
document.getElementById('currentDay').innerHTML = currentDate;

// for loop looping through the time
for (var i = 0; i < militaryTime.length; i++) {

    // gets item from local storage and displays on the page
    var localStorageValue = localStorage.getItem(i)
    $("#" + timeArray[i]).val(localStorageValue)

    // loops through time, compares to current time and is styled based off that
    if (getCurrentHour === militaryTime[i]){
        $("#" + timeArray[i]).addClass("present")
    } else if (getCurrentHour > militaryTime[i]) {
        $("#" + timeArray[i]).addClass("past")
    } else if (getCurrentHour < militaryTime[i]) {
        $("#" + timeArray[i]).addClass("future")
    }
};

// event listener when the save button is clicked its saved to local storage
$(".saveBtn").on("click", function() {
      var index = $(this).attr("data-id")

      console.log(timeArray[index])
      console.log($("#" + timeArray[index]).val())

      localStorage.setItem(index, $("#" + timeArray[index]).val())
});

 