let toggle = false;

function showinfo() {
  var height_input = document.getElementById("body-info");
  var topics = document.getElementById("topics")
  if (toggle === false) {
    toggle = true;
    height_input.style.display = "block";
    topics.style.display = "none"
  } 
}

function showmenu() {
  var mobilemenu = document.getElementById("mobilemenu");
  var links = document.getElementById("mobile-links");
  if (toggle === false) {
    toggle = true;
    mobilemenu.style.display = "block";
    links.style.display = "block"
  } 
}