// console.log("connected!");

// add day at top with moment.js

// from moment with current time iterate through rows and change color accordingly

// take text input from textareas (along with id ? )

var events = [
  {
    id: 1,
    time: "9am",
    event: "",
    color: "green",
  },

  {
    id: 2,
    time: "10am",
    event: "",
    color: "green",
  },
  {
    id: 3,
    time: "11am",
    event: "",
    color: "green",
  },
  {
    id: 4,
    time: "12pm",
    event: "",
    color: "green",
  },
  {
    id: 5,
    time: "1pm",
    event: "",
    color: "green",
  },
  {
    id: 6,
    time: "2pm",
    event: "",
    color: "green",
  },
  {
    id: 7,
    time: "3pm",
    event: "",
    color: "green",
  },
  {
    id: 8,
    time: "4pm",
    event: "",
    color: "green",
  },
  {
    id: 9,
    time: "5pm",
    event: "",
    color: "green",
  },
];

// function that adds input to events array
function addInputToEvents(inputVal, eventId) {
  events[eventId - 1].event = inputVal;
}

// add localstorage to save areas

$("document").ready(function () {
  // console.log("document is ready and jQuery is running!");

  $("#form-1").on("submit", function (ev) {
    ev.preventDefault();
    var textOneEl = $("#text-area-1").val();
    console.log(textOneEl);
    addInputToEvents(textOneEl, 1);
    console.log(events[0].event);
  });
});
