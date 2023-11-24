// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let today =dayjs();
let saveBtn = document.querySelector('.saveBtn');
//items for appending color block change

function init() {
  let saveItems =JSON.parse(localStorage.getItem('savedItems'));{}
//do an if statment to check in saved items and if yes.. then update it. but then if not have something else just have zero items

saveBtn.addEventListener('click', saveItems)
}




//loggin current hour
let currentHour = dayjs().hour();
console.log('good morning');
console.log(currentHour);

//display hr of each division
let divId = document.getElementById('hr-9');
let idHr =  divId.dataset.time;
console.log(idHr);


//displays current date
$('#currentDay').text(today.format('MMM D, YYYY'));


//function to change block color to either past, present, or future
 let textArea = document.getElementsByClassName('col-8 col-md-10 description');
 
textArea.setAttribute("style", "background-color: #d3d3d3;");


$(function PastPresentOrFutre() {
  if ( idHr < currentHour) {

    //change class to past


  } else if (idHr === currentHour) {
    //set class to present

  }

  else {
    //set class to future
  }
  
});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



