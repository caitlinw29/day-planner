//display current date in Weekday, Month Day format
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//color-code blocks with past, present, and future classes
//first assign hour in 24H format to hour variable
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


//SAVE TO LOCAL STORAGE
//onclick for each button in html will launch save function
//Pull the key from the html based on which button was clicked
function save(key) {
    //text will be the text that the user inputs
    var text = getText(key);
    //save to local storage
    localStorage.setItem(key, text);
}

//Get the value of the text area with the provided key
function getText(key) {
    return $("[data-key]").filter(function() {
        return $(this).data("key") == key;
    }).val();
}

//Set the text to pull from localStorage on page reload - text will stay on the page
//For each text area...
$("[data-key]").each(function() {
    //set key to be the key for the current iteration in 'each'
    var key = $(this).data("key");
    //pull key text from localStorage
    var savedText = localStorage.getItem(key);
    //set the value to be the savedText for the current key
    $(this).val(savedText);
})

