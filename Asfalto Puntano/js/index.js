//Fredy
let intervalo = setInterval(nextF, 3000);

function prevF(){
    let imagen = document.getElementById("fotos1");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/fredy5.jpg";
            imagen.className = "foto5";
        break;
        case "foto2":
            imagen.src="../images/fredy1.jpg";
            imagen.className = "foto1";
        break;
        case "foto3":
            imagen.src="../images/fredy2.jpg";
            imagen.className = "foto2";
        break;
        case "foto4":
            imagen.src="../images/fredy3.jpg";
            imagen.className = "foto3";
        break;
        case "foto5":
            imagen.src="../images/fredy4.jpg";
            imagen.className = "foto4";
        break;
    }
}

function detener(){
    clearInterval(intervalo);
}

document.querySelector(".prev").addEventListener("click",detener);
document.querySelector(".next").addEventListener("click",detener);

function nextF(){
    let imagen = document.getElementById("fotos1");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/fredy2.jpg";
            imagen.className = "foto2";
        break;
        case "foto2":
            imagen.src="../images/fredy3.jpg";
            imagen.className = "foto3";
        break;
        case "foto3":
            imagen.src="../images/fredy4.jpg";
            imagen.className = "foto4";
        break;
        case "foto4":
            imagen.src="../images/fredy5.jpg";
            imagen.className = "foto5";
        break;
        case "foto5":
            imagen.src="../images/fredy1.jpg";
            imagen.className = "foto1";
        break;
    }
}

//Vivi
let intervaloV = setInterval(nextV, 3000);

function detenerV(){
    clearInterval(intervaloV);
}

document.querySelector(".prevV").addEventListener("click",detenerV);
document.querySelector(".nextV").addEventListener("click",detenerV);

function prevV(){
    let imagen = document.getElementById("fotos2");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/vivi4.jpg";
            imagen.className = "foto4";
        break;
        case "foto2":
            imagen.src="../images/vivi1.jpg";
            imagen.className = "foto1";
        break;
        case "foto3":
            imagen.src="../images/vivi2.jpg";
            imagen.className = "foto2";
        break;
        case "foto4":
            imagen.src="../images/vivi3.jpg";
            imagen.className = "foto3";
        break;
    }
}

function nextV(){
    let imagen = document.getElementById("fotos2");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/vivi2.jpg";
            imagen.className = "foto2";
        break;
        case "foto2":
            imagen.src="../images/vivi3.jpg";
            imagen.className = "foto3";
        break;
        case "foto3":
            imagen.src="../images/vivi4.jpg";
            imagen.className = "foto4";
        break;
        case "foto4":
            imagen.src="../images/vivi1.jpg";
            imagen.className = "foto1";
        break;
    }
}

//Sonia
let intervaloS = setInterval(nextS, 3000);

function detenerS(){
    clearInterval(intervaloS);
}

document.querySelector(".prevS").addEventListener("click",detenerS);
document.querySelector(".nextS").addEventListener("click",detenerS);

function prevS(){
    let imagen = document.getElementById("fotos6");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/sonia4.jpg";
            imagen.className = "foto4";
        break;
        case "foto2":
            imagen.src="../images/sonia1.jpg";
            imagen.className = "foto1";
        break;
        case "foto3":
            imagen.src="../images/sonia2.jpg";
            imagen.className = "foto2";
        break;
        case "foto4":
            imagen.src="../images/sonia3.jpg";
            imagen.className = "foto3";
        break;
    }
}

function nextS(){
    let imagen = document.getElementById("fotos6");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/sonia2.jpg";
            imagen.className = "foto2";
        break;
        case "foto2":
            imagen.src="../images/sonia3.jpg";
            imagen.className = "foto3";
        break;
        case "foto3":
            imagen.src="../images/sonia4.jpg";
            imagen.className = "foto4";
        break;
        case "foto4":
            imagen.src="../images/sonia1.jpg";
            imagen.className = "foto1";
        break;
    }
}

//Dario
let intervaloD = setInterval(nextD, 3000);

function prevD(){
    let imagen = document.getElementById("fotos7");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/dario5.jpg";
            imagen.className = "foto5";
        break;
        case "foto2":
            imagen.src="../images/dario1.jpg";
            imagen.className = "foto1";
        break;
        case "foto3":
            imagen.src="../images/dario2.jpg";
            imagen.className = "foto2";
        break;
        case "foto4":
            imagen.src="../images/dario3.jpg";
            imagen.className = "foto3";
        break;
        case "foto5":
            imagen.src="../images/dario4.jpg";
            imagen.className = "foto4";
        break;
    }
}

function detenerD(){
    clearInterval(intervaloD);
}

document.querySelector(".prevD").addEventListener("click",detenerD);
document.querySelector(".nextD").addEventListener("click",detenerD);

function nextD(){
    let imagen = document.getElementById("fotos7");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/dario2.jpg";
            imagen.className = "foto2";
        break;
        case "foto2":
            imagen.src="../images/dario3.jpg";
            imagen.className = "foto3";
        break;
        case "foto3":
            imagen.src="../images/dario4.jpg";
            imagen.className = "foto4";
        break;
        case "foto4":
            imagen.src="../images/dario5.jpg";
            imagen.className = "foto5";
        break;
        case "foto5":
            imagen.src="../images/dario1.jpg";
            imagen.className = "foto1";
        break;
    }
}

//Cuento
let intervaloC = setInterval(nextC, 3000);

function prevC(){
    let imagen = document.getElementById("fotos8");//quede acaxd
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/dario5.jpg";
            imagen.className = "foto5";
        break;
        case "foto2":
            imagen.src="../images/dario1.jpg";
            imagen.className = "foto1";
        break;
        case "foto3":
            imagen.src="../images/dario2.jpg";
            imagen.className = "foto2";
        break;
        case "foto4":
            imagen.src="../images/dario3.jpg";
            imagen.className = "foto3";
        break;
        case "foto5":
            imagen.src="../images/dario4.jpg";
            imagen.className = "foto4";
        break;
    }
}

function detenerD(){
    clearInterval(intervaloD);
}

document.querySelector(".prevD").addEventListener("click",detenerD);
document.querySelector(".nextD").addEventListener("click",detenerD);

function nextD(){
    let imagen = document.getElementById("fotos7");
    switch (imagen.className){
        case "foto1":
            imagen.src="../images/dario2.jpg";
            imagen.className = "foto2";
        break;
        case "foto2":
            imagen.src="../images/dario3.jpg";
            imagen.className = "foto3";
        break;
        case "foto3":
            imagen.src="../images/dario4.jpg";
            imagen.className = "foto4";
        break;
        case "foto4":
            imagen.src="../images/dario5.jpg";
            imagen.className = "foto5";
        break;
        case "foto5":
            imagen.src="../images/dario1.jpg";
            imagen.className = "foto1";
        break;
    }
}