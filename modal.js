// this is the example from W3 schools is a little bit too much of code
// for what we reallly need, i think we can do it with CSS3 easy peasy :D



// Get the modal
var modal = document.getElementById("mymodal");
var boton = document.getElementById("boton");


boton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}