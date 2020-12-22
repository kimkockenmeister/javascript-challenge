// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

//rest button
var resetbtn = d3.select("#reset-btn");


//make the table and display table by looping
function makeTable(data){
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

makeTable(tableData)


// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");
    var durationMinutesInput=d3.select("#durationMinutes");
    var commentsInput=d3.select("#comments");

    // Get the value property of the input element
    
    var datevalue= dateInput.property("value");
    var cityvalue=cityInput.property("value");
    var statevalue=stateInput.property("value");
    var countryvalue=countryInput.property("value");
    var shapevalue=shapeInput.property("value");
    var durationMinutesvalue=durationMinutesInput.property("value");
    var commentsValue=commentsInput.property("value");


    console.log(datevalue);
    console.log(cityvalue);
    console.log(statevalue);
    console.log(countryvalue);
    console.log(shapevalue);
    console.log(durationMinutesvalue);
    console.log(commentsValue);
    console.log(tableData);
    

    //make filter variable
    var filteredData = tableData.filter(sighting =>{
        return (sighting.datetime===dateInput.property("value") || !datevalue ) && 
                  (sighting.city===cityInput.property("value") || !cityvalue) &&
                  (sighting.state===stateInput.property("value") || !statevalue) &&
                  (sighting.country===countryInput.property("value") || !countryvalue) &&
                  (sighting.shape===shapeInput.property("value") || !shapevalue) &&
                  (sighting.shape===durationMinutesInput.property("value") || !durationMinutesvalue) &&
                  (sighting.shape===commentsInput.property("value") || !commentsValue) 

       })
    
   console.log(filteredData);
   //update table
   makeTable(filtered);
};






