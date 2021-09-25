//display current date in Weekday, Month Day format
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//color-code blocks with past, present, and future classes
//pull hour in 24H format to hour variable
var hour = parseInt(today.format("H"));

//add class of past if the hour assigned to the row is less than the current time
$("[data-hour]").filter(function() {
    return $(this).data("hour") < hour;
}).addClass("past");

//add class of present if the hour assigned to the row is the same as the current time
$("[data-hour]").filter(function() {
    return $(this).data("hour") == hour;
}).addClass("present");

//add class of future if the hour assigned to the row is greater than the current time
$("[data-hour]").filter(function() {
    return $(this).data("hour") > hour;
}).addClass("future");


//Save button saves entry to local storage


//Text stays on refresh


//Readjust file - vars on top, call functions, then function descriptions
//Add screenshot to images folder and doublecheck README image and link
//Check no errors in console, push final changes, deploy website
//submit two links for review