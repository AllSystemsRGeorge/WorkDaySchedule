// The function for the current date
var currentDate = moment().format('dddd, MMMM Do');
$('#date').text(currentDate);

// The function for the current time
var currentHour = moment().format('h');
// $('.time').text(currentHour);



var listItems = $("#selectable").find("li");
var i, len, item;

for (i = 0, len = listItems.length; i < len; i++) {
  item = $(listItems[i]);
  console.log(i);
  console.log(item);
  var modifier = 0
  let currentTime = moment(parseInt(currentHour)).isBetween(i + modifier, i + 2 + modifier);
  var past = moment(parseInt(currentHour)).isBefore(i + modifier);
  var future = moment(parseInt(currentHour)).isAfter(i + modifier);
  console.log(currentTime);
  console.log(currentHour);
  if (currentHour) {
    // Compares id to current hour and sets color accordingly
    if (currentTime) {
      item.css("background-color", "red");
    }
    if (future) {
      item.css("background-color", "green");
    }
    if (past) {
      item.css("background-color", "grey");
    }
  }
};

var tasks = $('input');
var lockBtn = $('.fa fa-lock');

lockBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  var dailyTasks = {
    tasks: tasks.value.trim()
  };
  
  localStorage.setItem('dailyTasks', JSON.stringify(dailyTasks));
 });