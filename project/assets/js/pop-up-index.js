// Get the modal
var modalForm = document.getElementById("modal-success");

// Get the button that opens the modal
var btnForm = document.getElementById("button-form");

// Get the <span> element that closes the modal
var closeForm = document.getElementById("close-success");

// When the user clicks on the button, open the modal
btnForm.onclick = function() {
    modalForm.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeForm.onclick = function() {
    modalForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalForm) {
//     modalForm.style.display = "none";
//   }
// }

// Get the modal
var modalSuccess = document.getElementById("modal-success");

// Get the <span> element that closes the modal
var closeSuccess = document.getElementById("close-success");

// When the user clicks on the button, open the modal
questionForm.onsubmit = function() {
    modalSuccess.style.display = "block";
    modalForm.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeSuccess.onclick = function() {
    modalSuccess.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalSuccess) {
//     modalSuccess.style.display = "none";
//   }
// }