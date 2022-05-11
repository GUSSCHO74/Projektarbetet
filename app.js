// show text on click --> https://html-shark.com/HTML/ShowHideSections.htm

let shit = false;

function showmyshit() {
  var height_input = document.getElementById("body-info");
  if (shit === false) {
    shit = true;
    height_input.style.display = "block";
  } else {
    height_input.style.display = "none";
    shit = false
  }
}
