document.getElementById("menyular").addEventListener("mouseover", mouseOver);
document.getElementById("menyular").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("menu-block").style.display = "block";
}   

function mouseOut() {
  document.getElementById("menu-block").style.display = "none";
}