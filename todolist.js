//this can be solved with two solutions : arrays and the normal method.
/*var tasks = [];

function addtask2(){
    var output = "";
    tasks[tasks.length] = document.getElementById('task').value;
    
    for (var j = 0; j < tasks.length ; j++) {
        output += "<p>"+ tasks[j] +"</p>";
    }
    document.getElementById('tablelist').innerHTML = output;
}*/

function addtask() {
    var inputvalue = document.getElementById('task').value;
    document.getElementById('tablelist').innerHTML = document.getElementById('tablelist').innerHTML + ".<br>" + inputvalue;
    document.getElementById('task').value = "";
}

document.addEventListener('DOMContentLoaded', (event) => {
// Get the input field
var input = document.getElementById("task");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addtask();
  }
});  })

