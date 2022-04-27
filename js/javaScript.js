$('#picker').dateTimePicker();

$('#picker').dateTimePicker({
  dateFormat: "YYYY-MM-DD HH:mm"
});

$('#picker').dateTimePicker({
  locale: 'en'
});

$('#picker').dateTimePicker({
  showTime: true
});

$('#picker').dateTimePicker({
  selectData: "now",
  positionShift: { top: 20, left: 0},
  title: "Select Date and Time",
  buttonTitle: "Select"
});