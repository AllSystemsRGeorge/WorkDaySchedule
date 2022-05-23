var currentDate = moment().format('dddd', 'MM Do');
$('#date').text(currentDate);

$(function () {
    $("#selectable").selectable();
});
