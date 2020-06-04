flag = false;
const link = document.querySelector('.link');
const bye = document.querySelector('.bye');
link.addEventListener("click",cambio);
bye.addEventListener("click",adios);

window.onscroll = function() {
    if((document.body.scrollHeight-window.innerHeight)<=window.scrollY){
        window.scrollTo(0,1);
    }
    else if(window.scrollY == 0){
        window.scrollTo(0,(document.body.scrollHeight-window.innerHeight)-1);
    }
    
  };
  function escalar(){
      document.querySelector(".top").style.height = document.querySelector(".print").getBoundingClientRect().top+"px";
      document.querySelector(".bot").style.height = ((document.body.scrollHeight-window.innerHeight)-(document.querySelector(".print").getBoundingClientRect().top + document.querySelector(".print").height)) + "px"
      document.querySelector(".bot").style.top = (document.querySelector(".print").height + document.querySelector(".print").getBoundingClientRect().top) + "px"
  }
  escalar();

function cambio(){
    escalar();
    flag = !flag;
    if(flag){
        document.styleSheets[0]["cssRules"][1].style["filter"] = "invert(100%)";
        document.styleSheets[0]["cssRules"][1].style["backgroundImage"] = "url(../img/print.png)";
        document.styleSheets[0]["cssRules"][1].style["backgroundSize"] = "100% 35%";
        document.querySelector(".print").style.display = "none";
        document.querySelector(".print2").style.display = "block";
        document.querySelector(".top").style.display = "block";
        document.querySelector(".bot").style.display = "block";
        document.querySelector(".bye").style.color = "white";
    }
    else{
        document.querySelector(".print").style.display = "block";
        document.querySelector(".print2").style.display = "none";
        document.querySelector(".top").style.display = "none";
        document.querySelector(".bot").style.display = "none";
        document.querySelector(".bye").style.color = "black";
        document.styleSheets[0]["cssRules"][1].style["backgroundImage"] = "url(../img/print.png)";
        document.styleSheets[0]["cssRules"][1].style["backgroundSize"] = "100% 35%";
        document.styleSheets[0]["cssRules"][1].style["filter"] = "invert(100%)";
    }
}



function adios(){
    window.location = "../";
}

window.onload = function(){
    $("html, body").animate({
        scrollTop: 800
    }, 2000);
    window.setTimeout(function(){
        elemento(".me").style.display = "block";
    },
    2000);
    window.setTimeout(function(){
        elemento(".me").style.display = "none";
    },
    4000);
}
function elemento(nombre){
    return document.querySelector(nombre)
}