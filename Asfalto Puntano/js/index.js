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