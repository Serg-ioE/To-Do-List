// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Shows todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add a to do function
function addtoDo(toDo, id, done, trash){

  const item = `<li class="item">
      <i class="fa fa-check-circle co" job="complete" id="0"></i>
      <p class="text">${toDO}</p>
      <i class="fa fa-trash-o de" job="delete" id="0"></i>
      </li>
              `;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListner("keyup",function(even){
  if(event.keycode == 13){
    const toDo = input.value;

    // if the input isn't empty
    if(toDo){
      addToDo(toDo);
    }
  }
});
