let toggle = false;
function showinfo() {
  var height_input = document.getElementById("body-info");
  if (toggle === false) {
    toggle = true;
    height_input.style.display = "block";
  } else {
    height_input.style.display = "none";
    toggle = false;
  }
}

