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

function mouseOut1() {
  document.getElementById("ftMenuBlock").style.display = "none";
}

function menuOpen(){
  document.getElementById('menu-wrapper').style.display = "block"
}

function exitMenu(){
  document.getElementById('menu-wrapper').style.display = "none"
}
function registratsiya(){
    document.getElementById('vxod').style.marginBottom = '0px';
    document.getElementById('vxod').style.background = '#f8f9fa'; 
    document.getElementById('vxod').style.color = 'black'; 
    document.getElementById('reg').classList.add('reg-active');
    document.getElementById('reg').style.background = '#fff';
    document.getElementById('form-signin').style.display = 'none';
    document.getElementById('form-signup').style.display = 'block';
    document.getElementById('login-wrap1').style.marginTop = '5vh'
}

function vxod(){
  document.getElementById('vxod').style.marginBottom = '-1px';
  document.getElementById('vxod').style.background = '#fff'; 
  document.getElementById('vxod').style.color = '#28a745'; 
  document.getElementById('reg').classList.remove('reg-active');
  document.getElementById('reg').style.background = '#f8f9fa';
  document.getElementById('form-signup').style.display = 'none';
  document.getElementById('form-signin').style.display = 'block';
  document.getElementById('login-wrap1').style.marginTop = '20vh'
}