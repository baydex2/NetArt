

const print = document.querySelector(".print");
const sombras = document.querySelector(".sombras");
print.addEventListener('click',Rprint);
sombras.addEventListener('click',Rsombras);
constante = 15;


function Rprint(){
    window.location = "./print";
}
function Rsombras(){
    window.location = "./sombras";
}
function elemento(nombre){
    return document.querySelector(nombre)
}
var delay = 15
window.onload = function(){
    var texto1 = 'Microsof Windows [Versión 10.0.18363.836]$'+                   
    '(c) 2019 Microsoft Corporation. Todos los derechos reservados.$'+
    '$'+                                                                 
    'C:/Users/ale> Desliza tu dedo/mouse o da click en una opcion';
    texto2 = "pagina del print";
    texto3 = "Pagina de sombras";
    insertar(1, texto1);
    window.setTimeout(insertar, delay*texto1.length ,2 ,texto2);
    window.setTimeout(insertar, delay*(texto1.length+texto2.length), 3, texto3);        
}
function insertar(hijo, cadena){
    flag = 0
    for(i = 0; i < cadena.length; i++){
        window.setTimeout(
            function(numero){
                if(cadena[numero] == "$"){
                    elemento(".consola").children[hijo].innerHTML += "<br>";    
                }
                else{
                    elemento(".consola").children[hijo].innerHTML+=cadena[numero]
                }
            },
            flag, i
        );
        flag+=delay;
    }
}   

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
if(isMobile()){
    elemento(".consola").addEventListener("touchmove", handleMove, false);
}
else{
    // elemento(".consola").addEventListener('mouseover',function(){
    //     elemento("#siguerratones").style.display = "block";
    // });
    elemento(".consola").addEventListener('mousemove',seguir);
}

function seguir() {
    cuadro(parseInt(window.event.pageX), parseInt(window.event.pageY));
}
function handleMove(evt) {
    cuadro(evt["changedTouches"][0]["pageX"],evt["changedTouches"][0]["pageY"]);
    console.log(evt["changedTouches"][0]["pageX"]+"--"+evt["changedTouches"][0]["pageY"]);
}
function cuadro(x,y){
    radial = "radial-gradient(circle at "+x+"px "+y+"px, transparent, black 10%)";
    elemento(".consola").style.background = radial;
}