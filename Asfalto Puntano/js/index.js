//carrousel de Fredy
const imagenesF = [ //arreglo con cada foto de Fredy
    '../images/fredy1.jpg',
    '../images/fredy2.jpg',
    '../images/fredy3.jpg',
    '../images/fredy4.jpg',
    '../images/fredy5.jpg'
  ];
  
//variables que se usaran para Fredy
let indexF = 0;
let imagenFredy = document.getElementById('imagenF');
let previoF = document.getElementById('prevF');
let siguienteF = document.getElementById('nextF');

function mostrarF() { //funcion que muestra la foto actual
  imagenFredy.src = imagenesF[indexF];
}

function prevImagenF() { //funcion para mostrar la foto anterior
    indexF--;
    if (indexF < 0) {
        indexF = imagenesF.length - 1;
    }
    mostrarF();
}

function nextImagenF() { //funcion para mostrar la foto siguiente
    indexF++;
  if (indexF >= imagenesF.length) {
    indexF = 0;
  }
  mostrarF();
}

//escuchadores para los botones
previoF.addEventListener('click', prevImagenF);
siguienteF.addEventListener('click', nextImagenF);

mostrarF(); //para mostrar la primer imagen al cargar la pagina

//sentencias para que vayan automaticamente hasta que toquen algun boton
let intervaloF = setInterval(nextImagenF, 3000);

function detenerF(){
    clearInterval(intervaloF);
}

document.querySelector(".prevF").addEventListener("click",detenerF);
document.querySelector(".nextF").addEventListener("click",detenerF);
//-------------------------------------------------------------------------

//carrousel de Vivi
const imagenesV = [ //arreglo con cada foto de Vivi
    '../images/vivi1.jpg',
    '../images/vivi2.jpg',
    '../images/vivi3.jpg',
    '../images/vivi4.jpg'
  ];
  
//variables que se usaran para Vivi
let indexV = 0;
let imagenVivi = document.getElementById('imagenV');
let previoV = document.getElementById('prevV');
let siguienteV = document.getElementById('nextV');

function mostrarV() { //funcion que muestra la foto actual
  imagenVivi.src = imagenesV[indexV];
}

function prevImagenV() { //funcion para mostrar la foto anterior
    indexV--;
    if (indexV < 0) {
        indexV = imagenesV.length - 1;
    }
    mostrarV();
}

function nextImagenV() { //funcion para mostrar la foto siguiente
    indexV++;
  if (indexV >= imagenesV.length) {
    indexV = 0;
  }
  mostrarV();
}

//escuchadores para los botones
previoV.addEventListener('click', prevImagenV);
siguienteV.addEventListener('click', nextImagenV);

mostrarV(); //para mostrar la primer imagen al cargar la pagina

//sentencias para que vayan automaticamente hasta que toquen algun boton
let intervaloV = setInterval(nextImagenV, 3000);

function detenerV(){
    clearInterval(intervaloV);
}

document.querySelector(".prevV").addEventListener("click",detenerV);
document.querySelector(".nextV").addEventListener("click",detenerV);
//----------------------------------------------------------------------
//carrousel de Sonia
const imagenesS = [ //arreglo con cada foto de Sonia
    '../images/sonia1.jpg',
    '../images/sonia2.jpg',
    '../images/sonia3.jpg',
    '../images/sonia4.jpg'
  ];
  
//variables que se usaran para Sonia
let indexS = 0;
let imagenSonia = document.getElementById('imagenS');
let previoS = document.getElementById('prevS');
let siguienteS = document.getElementById('nextS');

function mostrarS() { //funcion que muestra la foto actual
  imagenSonia.src = imagenesS[indexS];
}

function prevImagenS() { //funcion para mostrar la foto anterior
    indexS--;
    if (indexS < 0) {
        indexS = imagenesS.length - 1;
    }
    mostrarS();
}

function nextImagenS() { //funcion para mostrar la foto siguiente
    indexS++;
  if (indexS >= imagenesS.length) {
    indexS = 0;
  }
  mostrarS();
}

//escuchadores para los botones
previoS.addEventListener('click', prevImagenS);
siguienteS.addEventListener('click', nextImagenS);

mostrarS(); //para mostrar la primer imagen al cargar la pagina

//sentencias para que vayan automaticamente hasta que toquen algun boton
let intervaloS = setInterval(nextImagenS, 3000);

function detenerS(){
    clearInterval(intervaloS);
}

document.querySelector(".prevS").addEventListener("click",detenerS);
document.querySelector(".nextS").addEventListener("click",detenerS);
//------------------------------------------------------------------
//Dario
//carrousel de Dario
const imagenesD = [ //arreglo con cada foto de Dario
    '../images/dario1.jpg',
    '../images/dario2.jpg',
    '../images/dario3.jpg',
    '../images/dario4.jpg',
    '../images/dario5.jpg'
  ];
  
//variables que se usaran para Dario
let indexD = 0;
let imagenDario = document.getElementById('imagenD');
let previoD = document.getElementById('prevD');
let siguienteD = document.getElementById('nextD');

function mostrarD() { //funcion que muestra la foto actual
  imagenDario.src = imagenesD[indexD];
}

function prevImagenD() { //funcion para mostrar la foto anterior
    indexD--;
    if (indexD < 0) {
        indexD = imagenesD.length - 1;
    }
    mostrarD();
}

function nextImagenD() { //funcion para mostrar la foto siguiente
    indexD++;
  if (indexD >= imagenesD.length) {
    indexD = 0;
  }
  mostrarD();
}

//escuchadores para los botones
previoD.addEventListener('click', prevImagenD);
siguienteD.addEventListener('click', nextImagenD);

mostrarD(); //para mostrar la primer imagen al cargar la pagina

//sentencias para que vayan automaticamente hasta que toquen algun boton
let intervaloD = setInterval(nextImagenD, 3000);

function detenerD(){
    clearInterval(intervaloD);
}

document.querySelector(".prevD").addEventListener("click",detenerD);
document.querySelector(".nextD").addEventListener("click",detenerD);
//------------------------------------------------------------------
//Cuento
//carrousel de Cuento Corto
const imagenesC = [ //arreglo con cada foto de Cuento
    '../images/cuento1.jpg',
    '../images/cuento2.jpg',
    '../images/cuento3.jpg',
    '../images/cuento4.jpg',
    '../images/cuento5.jpg',
    '../images/cuento6.jpg'
  ];
  
//variables que se usaran para Cuento
let indexC = 0;
let imagenCuento = document.getElementById('imagenC');
let previoC = document.getElementById('prevC');
let siguienteC = document.getElementById('nextC');

function mostrarC() { //funcion que muestra la foto actual
  imagenCuento.src = imagenesC[indexC];
}

function prevImagenC() { //funcion para mostrar la foto anterior
    indexC--;
    if (indexC < 0) {
        indexC = imagenesC.length - 1;
    }
    mostrarC();
}

function nextImagenC() { //funcion para mostrar la foto siguiente
    indexC++;
  if (indexC >= imagenesC.length) {
    indexC = 0;
  }
  mostrarC();
}

//escuchadores para los botones
previoC.addEventListener('click', prevImagenC);
siguienteC.addEventListener('click', nextImagenC);

mostrarC(); //para mostrar la primer imagen al cargar la pagina

//sentencias para que vayan automaticamente hasta que toquen algun boton
let intervaloC = setInterval(nextImagenC, 3000);

function detenerC(){
    clearInterval(intervaloC);
}

document.querySelector(".prevC").addEventListener("click",detenerC);
document.querySelector(".nextC").addEventListener("click",detenerC);