

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
window.onload = function(){
    var texto1 = 'Microsof Windows [Versión 10.0.18363.836]'+                   
    '(c) 2019 Microsoft Corporation. Todos los derechos reservados.'+
    ' '+                                                                 
    'C:/Users/ale>';
    texto2 = "pagina del print";
    texto3 = "Pagina de sombras";
    flag = 0;
    for(var i=0;i< texto1.length;i++){

        window.setTimeout( 
            function(numero){
                    if (numero == 41 || numero == 73 || numero == 103 || numero == 104){
                        elemento(".consola").children[0].innerHTML += "<br>";    
                    }
                    elemento(".consola").children[0].innerHTML+=texto1[numero];
            }   ,flag,i);
        flag+=25 ;
    }
    window.setTimeout(
        function(){
            flag = 0
            for(i = 0; i<texto2.length; i++){
                window.setTimeout(
                    function(numero){
                        elemento(".consola").children[1].innerHTML+=texto2[numero];
                    },
                    flag,
                    i
                );
                flag+=25
            }    
            window.setTimeout(
                function(){
                    flag = 0
                    for(i = 0; i<texto2.length; i++){
                        window.setTimeout(
                            function(numero){
                                elemento(".consola").children[2].innerHTML+=texto3[numero];
                            },
                            flag,
                            i
                        );
                        flag+=25
                    }    
                }
                ,flag);
        }
        ,flag);

}
// function(){

// }


