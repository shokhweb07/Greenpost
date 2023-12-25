document.getElementById("menyular").addEventListener("mouseover", mouseOver);
document.getElementById("menyular").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("menu-block").style.display = "block";
}   

function mouseOut() {
  document.getElementById("menu-block").style.display = "none";
}

document.getElementById("ftMenyular").addEventListener("mouseover", mouseOver1);
document.getElementById("ftMenyular").addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.getElementById("ftMenuBlock").style.display = "block";
}
function mouseOut() {
  document.getElementById("ftMenuBlock").style.display = "none";
}

function menuOpen(){
  document.getElementById('menu-wrapper').style.display = "block"
}
function exitMenu(){
  document.getElementById('menu-wrapper').style.display = "none"
}