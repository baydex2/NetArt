const bye = document.querySelector(".bye");
bye.addEventListener("click",adios);


function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}
function elemento(nombre){
    return document.querySelector(nombre)
}

// for(var i = 0; i<1000;i++){
//     window.setTimeout(hola,5000)
// }
function proceso () {
    recursivomen();
}
function recursivomas(){
    // flag = Math.floor(Math.random() * (8 - 0)) + 0
    flag2 = 0
    for(j = 7; j >= 0; j--){
        window.setTimeout(limpiar,flag2,j);
        flag2 += 100;
        console.log(j);
        if (j == 0) {
            window.setTimeout(recursivomen,flag2+100)
        }
    }
}
function recursivomen(){
    flag2 = 0
    for(j = 0; j <= 7; j++){
        window.setTimeout(limpiar,flag2,j);
        flag2 += 100;
        console.log(j);
        if(j == 7){
            window.setTimeout(recursivomas,flag2+100)
        }
    }
}
function limpiar(numero){
    for(var i = 0; i < 8; i++){
        if (numero != i){
            document.querySelector("#a"+i).style.display = "none";
        }else{
            document.querySelector("#a"+i).style.display = "block";
            
        }
    }
}
window.onload = function() {
    window.setTimeout(function(){Concurrent.Thread.create(proceso)},300);
}



function adios(){
    window.location = "../";
}