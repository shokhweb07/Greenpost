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

// admin panel
function hideMenu(){
  document.querySelector('.asosiy').classList.toggle('hide-active')
}

function a1(){
  document.getElementById('asosiy').style.display = 'none'
}

// function phone(){
//   document.querySelector('.phoneright').classList.toggle('hide-active')
// }



// tovari 

function kuplenniye(){
  document.getElementById('__BVID__46').style.display = 'block';
  document.getElementById('__BVID__48').style.display = 'none';

  var BVID46 = document.getElementById('__BVID__46___BV_tab_button__')
  var BVID48 = document.getElementById('__BVID__48___BV_tab_button__')

  BVID48.style.background = '#f8f9fa'
  BVID46.style.background = '#fff'
}

function nacklade(){
  document.getElementById('__BVID__48').style.display = 'block';
  document.getElementById('__BVID__46').style.display = 'none';

  var BVID48 = document.getElementById('__BVID__48___BV_tab_button__')
  var BVID46 = document.getElementById('__BVID__46___BV_tab_button__')

  BVID46.style.background = '#f8f9fa'
  BVID48.style.background = '#fff'
}

// posilki 

function obrabotke(){
  document.getElementById('__BVID__194').style.display = 'block';
  document.getElementById('__BVID__196').style.display = 'none';

  var BVID194 = document.getElementById('__BVID__194___BV_tab_button__')
  var BVID196 = document.getElementById('__BVID__196___BV_tab_button__')

  BVID194.style.background = '#fff'
  BVID196.style.background = '#f8f9fa'
}

function dostavke(){
  document.getElementById('__BVID__194').style.display = 'none';
  document.getElementById('__BVID__196').style.display = 'block';

  var BVID194 = document.getElementById('__BVID__194___BV_tab_button__')
  var BVID196 = document.getElementById('__BVID__196___BV_tab_button__')

  BVID194.style.background = '#f8f9fa'
  BVID196.style.background = '#fff'
}

