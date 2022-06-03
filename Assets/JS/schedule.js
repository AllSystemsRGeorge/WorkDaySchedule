// The function for the current date
var currentDate = moment().format('dddd, MMMM Do');
$('#date').text(currentDate);

console.log(date);

// The function for the current time
var currentHour = moment().format('H');

console.log(currentHour);

// var backgroundColor = $('li').backgroundColor

listItems = $("#selectable").find("li").each(function(){
  var product = $(this);
  console.log(product);
});


// function changeBackground(color) {
//   var listItems = $("#selectable li");
//   listItems.each(function (idx, li) {
//     var product = $(li);
//     console.log(product.style.backgroundColor);
//   });
// };

// const rows = document.getElementById("#selectable");
// let currentHour = parseInt(moment().format('H'));

// Array.from(rows).forEach(row => {
//   console.log(row);
//   let
//     rowIdString = row.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
//     // Compares row id to current hour and sets color accordingly
//     if (currentHour === rowHour) {
//       setColor(row, "red");
//     } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//       setColor(row, "green");
//     } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//       setColor(row, "lightgrey");
//     } else {
//       setColor(row, "white");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }


