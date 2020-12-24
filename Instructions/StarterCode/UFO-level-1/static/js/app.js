
// from data.js
var tableData = data;
var tbody = d3.select("tbody")
 
// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputDate= inputElement.property("value");
    console.log(inputDate);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);
    console.log(filteredData);


    filteredData.forEach((sighting) => {
        var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key,value])=> {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 

};
