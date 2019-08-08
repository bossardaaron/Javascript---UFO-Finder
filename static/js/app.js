// from data.js
var tbody = d3.select("tbody");

console.log(data)

 // Use d3 to update each cell's text with
 // reportings values (datetime, city, state, country, shape, durationMinutes, comments)
 data.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the reportings object
     var cell = row.append("td");
     cell.text(value);
   });
 });

// Assign the data from `data.js` to a descriptive variable
var reportings = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = reportings.filter(reportings => reportings.datetime === inputValue);

  console.log(filteredData);

  // Remove any reportings from the list to
   tbody.html("");


filteredData.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the reportings object
     var cell = row.append("td");
     cell.text(value);
   });
 });
});