// state
var events = [
  {
    id: 0,
    time: "9am",
    event: "",
  },

  {
    id: 1,
    time: "10am",
    event: "",
  },
  {
    id: 2,
    time: "11am",
    event: "",
  },
  {
    id: 3,
    time: "12pm",
    event: "",
  },
  {
    id: 4,
    time: "1pm",
    event: "",
  },
  {
    id: 5,
    time: "2pm",
    event: "",
  },
  {
    id: 6,
    time: "3pm",
    event: "",
  },
  {
    id: 7,
    time: "4pm",
    event: "",
  },
  {
    id: 8,
    time: "5pm",
    event: "",
  },
];

// getting date and time in the right formats from moment.js
var currentDateDisplay = moment().format("dddd Do MMMM YYYY");
var currentTime = moment().format("H");

// on page load
$("document").ready(function () {
  // get events from state
  var storedEvents = JSON.parse(localStorage.getItem("events"));
  if (storedEvents !== null) {
    events = storedEvents;
  }
  // render events and the date
  renderEvents(events);
  renderDate(currentDateDisplay);

  // get an array of al input elements
  let inputTdElements = document.querySelectorAll(".input-table-data");

  inputTdElements.forEach(function (element) {
    addColorClassToElement(element, currentTime);
  });
});

// event listener on all save buttons
$(document).on("click", ".saveBtn", function (ev) {
  ev.preventDefault();
  var formInput = $(this)[0].form.childNodes[1].value.trim();

  var inputId = parseInt($(this).attr("data-id"));
  var inputTime = parseInt($(this).attr("data-time"));
  addInputToEvents(formInput, inputId);
  addEventsToLocalStorage(events);
  renderEvents(events);
});

// helper functions
function renderEvents(eventsArray) {
  eventsArray.map((event) => {
    var strEventId = event.id.toString();
    $(`#${strEventId}`).val("");
    $(`#${strEventId}`).val(event.event);
    // console.log(event.id);
    console.log(strEventId);
    console.log(event.event);
  });
}

function renderDate(date) {
  $("#currentDay").text(date);
}
//function that will display and change color of each slot based on time comparison with current into grey, red or green
function addColorClassToElement(element, currentTime) {
  let slotTimeNumber = parseInt(element.attributes["data-time"].value);
  if (slotTimeNumber < currentTime) {
    element.classList.add("past");
  } else if (slotTimeNumber === currentTime) {
    element.classList.add("present");
  } else {
    element.classList.add("future");
  }
}

//
// function that adds input to events array
function addInputToEvents(inputVal, eventId) {
  events[eventId].event = inputVal;
}
// add localstorage to save areas
function addEventsToLocalStorage(eventsArray) {
  localStorage.setItem("events", JSON.stringify(eventsArray));
}
