

const print = document.querySelector(".print");
const sombras = document.querySelector(".sombras");
print.addEventListener('click',Rprint);
sombras.addEventListener('click',Rsombras);

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
    'C:/Users/ale> Click an option';
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


