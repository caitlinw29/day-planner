//display current date in Weekday, Month Day format
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//color-code blocks with past, present, and future classes
var hour = parseInt(today.format("H"));

$("[data-hour]").filter(function() {
    return $(this).data("hour") < hour;
}).addClass("past");

$("[data-hour]").filter(function() {
    return $(this).data("hour") == hour;
}).addClass("present");

$("[data-hour]").filter(function() {
    return $(this).data("hour") > hour;
}).addClass("future");


//Save button saves entry to local storage


//Text stays on refresh


//Readjust file - vars on top, call functions, then function descriptions
//Add screenshot to images folder and doublecheck README image and link
//Check no errors in console, push final changes, deploy website
//submit two links for review