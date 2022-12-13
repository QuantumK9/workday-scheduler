// console.log("connected!");

// select all forms
var form1El = $("#form-1");
var form2El = $("#form-2");
var form3El = $("#form-3");
var form4El = $("#form-4");
var form5El = $("#form-5");
var form6El = $("#form-6");
var form7El = $("#form-7");
var form8El = $("#form-8");
var form9El = $("#form-9");
// add day at top with moment.js

// from moment with current time iterate through rows and change color accordingly
var currentTime = 12; // temporary "time" for testing
// take text input from textareas (along with id ? )

var events = [
  {
    id: 1,
    time: "9am",
    event: "",
  },

  {
    id: 2,
    time: "10am",
    event: "",
  },
  {
    id: 3,
    time: "11am",
    event: "",
  },
  {
    id: 4,
    time: "12pm",
    event: "",
  },
  {
    id: 5,
    time: "1pm",
    event: "",
  },
  {
    id: 6,
    time: "2pm",
    event: "",
  },
  {
    id: 7,
    time: "3pm",
    event: "",
  },
  {
    id: 8,
    time: "4pm",
    event: "",
  },
  {
    id: 9,
    time: "5pm",
    event: "",
  },
];

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

// function that takes input from form and adds it to events array

function addingFormInputToEvents(formId, eventsId) {
  textEl = $(formId).val().trim();
  console.log(textEl);
  addInputToEvents(textEl, eventsId);
  console.log(events[eventsId - 1]);
}

// function that adds input to events array
function addInputToEvents(inputVal, eventId) {
  events[eventId - 1].event = inputVal;
}
// add localstorage to save areas

$("document").ready(function () {
  // console.log("document is ready and jQuery is running!");
  // let inputTdElements = $(".input-table-data");
  let inputTdElements = document.querySelectorAll(".input-table-data");

  // console.log(inputTdElements);

  inputTdElements.forEach(function (element) {
    addColorClassToElement(element, currentTime);
  });

  form1El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-1", 1);
  });
  form2El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-2", 2);
  });
  form3El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-3", 3);
  });
  form4El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-4", 4);
  });
  form5El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-5", 5);
  });
  form6El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-6", 6);
  });
  form7El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-7", 7);
  });
  form8El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-8", 8);
  });
  form9El.on("submit", function (ev) {
    ev.preventDefault();
    addingFormInputToEvents("#text-area-9", 9);
  });
});
