
let today = dayjs();
let saveBtns = document.querySelectorAll('.saveBtn');
let timeBlock = document.querySelectorAll('.time-block');


$(function () {
  //Function to load the saved tasks back to the website on opening
  function loadingSavedTasks() {

    //Retrieving the items from localStorage
    let schedules = localStorage.getItem('savedItems');
    console.log(schedules);
    
    if (schedules) {
      //Parsing the array of savedItems
      schedules = JSON.parse(schedules) || [];

      //Repopulate to-do task to the appripriate hour that user has input
      for (let i = 0; i < schedules.length; i++) {
        console.log(schedules [i]); //Loggin each schedule item

        let hour = schedules[i].hour;
        let task = schedules[i].task; 

//select textArea to populate, first selecting the div
$('#' + schedules[i].hour + ' .description').val(schedules[i].task)
      }
  
    }
  }

//Adding click listener for each saveBtns
    for (let index = 0; index < saveBtns.length; index++) {
   saveBtns[index].addEventListener('click', saveItems)

    }


      //Saving each item typed in the 'time-block' to the designated hour
      function saveItems() {
        let saveButton = $(this);
        let writeBlock = saveButton.siblings('.description').val();
        let hour = saveButton.parent('.time-block').attr('id');
        let toDo = {
          task: writeBlock,
          hour: hour,
        };
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        savedItems.push(toDo);
        localStorage.setItem('savedItems', JSON.stringify(savedItems));

      }



      //loggin current hour
      let currentHour = dayjs().hour();
      console.log(currentHour);


      //displays current date
      $('#currentDay').text(today.format('MMM D, YYYY'));



      //function to change the color of the timeblocks based on comparing it to the currentHour
      function PastPresentOrFutre() {
        $(".time-block").each(function () {
          let timeBlock = parseInt(this.id);
          if
            (currentHour > timeBlock) {
            $(this).addClass('past');
          } if (currentHour === timeBlock) {
            $(this).addClass('present');
          } if (currentHour < timeBlock) {
            $(this).addClass('future');
          }
        });
      }


      //Calling functions
      PastPresentOrFutre();
     
      loadingSavedTasks();

    
  });






