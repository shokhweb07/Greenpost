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