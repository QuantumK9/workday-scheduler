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

// from moment with current time iterate through rows and change color accordingly
var currentTime = 12; // temporary "time" for testing
// take text input from textareas (along with id ? )

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

$("document").ready(function () {
  // console.log("document is ready and jQuery is running!");
  var storedEvents = JSON.parse(localStorage.getItem("events"));
  if (storedEvents !== null) {
    events = storedEvents;
  }
  renderEvents(events);

  // let inputTdElements = $(".input-table-data");
  let inputTdElements = document.querySelectorAll(".input-table-data");

  // console.log(inputTdElements);

  inputTdElements.forEach(function (element) {
    addColorClassToElement(element, currentTime);
  });
});

$(document).on("click", ".saveBtn", function (ev) {
  ev.preventDefault();
  var formInput = $(this)[0].form.childNodes[1].value.trim();
  // console.log(formInput);
  var inputId = parseInt($(this).attr("data-id"));
  var inputTime = parseInt($(this).attr("data-time"));
  addInputToEvents(formInput, inputId);
  addEventsToLocalStorage(events);
  renderEvents(events);
  // console.log(`data-id: ${inputId} and ${typeof inputId}`);
  // console.log(`data-time: ${inputTime}`);
  // getCityForecastAndDisplay(city);
});

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
