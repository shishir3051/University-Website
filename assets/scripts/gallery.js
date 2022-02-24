// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "80%";  // IE10
    elements[i].style.flex = "80%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "40%";  // IE10
    elements[i].style.flex = "40%";
  }
}

// Four images side by side
function three() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "20%"; // IE10
        elements[i].style.flex = "20%";
    }
}

// Add active class to the current button (highlight it)
var heading = document.getElementById("myHeader");
var buttons = heading.getElementsByClassName("buttons");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



















// var elements = document.getElementsByClassName("column");

// var i;

// function one(){
//     for(i = 0; i<elements.length; i++){
//         elements[i].style.msFlex = "100%";
//         elements[i].style.flex = "100%";
//     }
// }
// function two(){
//     for(i = 0; i<elements.length; i++){
//         elements[i].style.msFlex = "50%";
//         elements[i].style.flex = "50%";
//     }
// }
// function three(){
//     for(i = 0; i<elements.length; i++){
//         elements[i].style.msFlex = "25%";
//         elements[i].style.flex = "25%";
//     }
// }

// var heading= document.getElementById("myHeader");
// var buttons = heading.getElementsByClassName("he-button");
// for(var i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active","");
//         this.className +="active";
//     });
// }
