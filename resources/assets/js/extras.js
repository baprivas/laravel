document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');

    var instances = M.Sidenav.init(elems );


  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');

    var instances = M.Dropdown.init(elems, {hover: true, constrainWidth: false});

  });

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger1');

    var instances = M.Dropdown.init(elems);

  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });



  function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
   
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
   
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
  }
   
  window.onload = function() {
    setInterval(muestraReloj, 1000);
  }