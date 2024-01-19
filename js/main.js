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

function hideMenu(){
  document.querySelector('.asosiy').classList.toggle('hide-active')
}

function saveModal(){
  var inp1 = document.getElementById('fio')
  var inp2 = document.getElementById('tel-nomer')
  var inp3 = document.getElementById('region')
  var inp4 = document.getElementById('rayon')
  var inp5 = document.getElementById('pinfl')
  var inp6 = document.getElementById('ulitsa')
  var inp7 = document.getElementById('dom')
  var inp8 = document.getElementById('kvartira')
  var trs = document.getElementById('trs')
  var tr = document.createElement('tr')
  var th1 = document.createElement('th')
  var th2 = document.createElement('th')
  var th3 = document.createElement('th')
  var th4 = document.createElement('th')
  var th5 = document.createElement('th')
  var th6 = document.createElement('th')
  var th7 = document.createElement('th')
  var th8 = document.createElement('th')
  var th9 = document.createElement('th')
  var hisob = 0

  tr.style.width = '100%'
  tr.style.display = 'grid'
  tr.style.gridTemplateColumns = '1.35fr 2.58fr 6.65fr 3.3fr 5.7fr 7.25fr 3fr 5.85fr 5fr'


  th9.innerText = hisob + 1
  th1.innerText = inp1.value
  th2.innerText = inp2.value
  th3.innerText = inp3.value
  th4.innerText = inp4.value
  th5.innerText = inp5.value
  th6.innerText = inp6.value
  th7.innerText = inp7.value + '/' + inp8.value
  th8.innerText = 'upravlenie'
  trs.appendChild(tr)
  
  tr.appendChild(th9)
  tr.appendChild(th1)
  tr.appendChild(th2)
  tr.appendChild(th3)
  tr.appendChild(th4)
  tr.appendChild(th5)
  tr.appendChild(th6)
  tr.appendChild(th7)
  tr.appendChild(th8)
}

function openMain2(){
  document.getElementById('main').style.display = 'none'
  document.getElementById('main2').style.display = 'block'
}

function exitMain2(){
  document.getElementById('main2').style.display = 'none'
  document.getElementById('main').style.display = 'block'
}

function Andijon(){
  document.getElementById('toshkent').style.display = 'none'
  document.getElementById('andijon').style.display = 'block'
}

function onEmpty(){
  document.getElementById('asosiy').style.left = '-200px'
  document.getElementById('empty-qism').style.display = 'none'
}

function onBurger(){
  document.getElementById('asosiy').style.left = '0'
  document.getElementById('empty-qism').style.display = 'block'
}

function contactOn(){
  document.getElementById('kontakti').style.display = 'block'
  document.getElementById('kontakti').style.marginRight = '0'
  document.getElementById('empty-qism1').style.display = 'block'
}

function contactOff(){
  document.getElementById('kontakti').style.display = 'none'
  document.getElementById('kontakti').style.marginRight = '-270px'
  document.getElementById('empty-qism1').style.display = 'none'
}

// admin panel
function hideMenu1(){
  document.querySelector('.asosiy').classList.toggle('hide-active')
}

function hideMenu2(){
  document.getElementById('asosiy').style.display = 'block'
  document.getElementById('asosiy').style.left = '0px'
  document.getElementById('b-sidebar-backdrop').style.display = 'block'
}

function sidebar_backdrop(){
  document.querySelector('.asosiy').style.display = 'none'
  document.getElementById('b-sidebar-backdrop').style.display = 'none'
}

function uslugi1() {
  document.getElementById('services').style.display = 'block'
}

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