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

function showmenu() {
  var mobilemenu = document.getElementById("mobilemenu");
  var links = document.getElementById("mobile-links");
  var buttons = document.getElementsByClassName("buttons")
  if (toggle === false) {
    toggle = true;
    mobilemenu.style.display = "block";
    links.style.display = "block"
  } else {
    toggle = false;
    mobilemenu.style.display = "none";
    links.style.display = "none"
  } 
}