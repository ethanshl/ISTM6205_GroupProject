
var garage;

function storeTimeGarage() {
    garage = document.getElementById("garageSelect").value;
	var dateString = document.getElementById("startTime").value;
	var dateString2 = document.getElementById("endTime").value;

	var DateStart = new Date(dateString);
	var DateEnd = new Date(dateString2);
	var startDate =  DateStart.toLocaleDateString();
	var startTime =  DateStart.toLocaleTimeString();
	var endDate =  DateEnd.toLocaleDateString();
	var endTime =  DateEnd.toLocaleTimeString();

	
};

function checkDate() {
	var dateString = document.getElementById("startTime").value;
	var dateString2 = document.getElementById("endTime").value;
	var DateStart = new Date(dateString);
	var DateEnd = new Date(dateString2);
  if (DateEnd < DateStart) {
    alert("End date cannot be less than Start date.");
    return false;
  }
  return true;
}