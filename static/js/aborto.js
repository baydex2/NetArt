var loaddate = new Date();
var humanos = 7788980150;
humanos = parseInt(humanos)
function updateCounter() {
    //create jvascrpt date object
    var now = new Date();
    


    // unixt at time of page load
    var unixt = loaddate.getTime();
    //hour at time of page load
    var loadhour = loaddate.getHours();
    //minute at time of page load
    var loadminute = loaddate.getMinutes();
    //second at time of page load
    var loadsecond = loaddate.getSeconds();
    
    
    
    //set time variables
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var monthnumber = now.getMonth();
    var monthday = now.getDate();
    var year = now.getYear();
    var unixtNow = now.getTime();
    unixtNow = unixtNow / 1000
    
    
    //calc here - tbd 

    
    unixt = unixt / 1000
    
    // sincePageLoad 	= ((minute * 60) + second) - ((loadminute * 60) + loadsecond);
    
    //var staticseconds 	=  (loadhour * 3600) + (loadminute * 60) 
    //var newseconds 	= (hour * 3600) + (minute * 60) + (second)
    
    var diffseconds = unixtNow - unixt
    
    var ABsUSlastYr = 862320;
    
    
    var ABsPP1970thru2005 = 4068749;
    var ABsPP2006 = 289750;
    var ABsPP2007 = 305310;
    var ABsPP2008 = 324008;
    var ABsPP2009 = 331796;
    var ABsPP2010 = 329445;
    var ABsPP2011 = 333964;
    var ABsPP2012 = 327166;
    var ABsPP2013 = 327166;
    var ABsPP2014 = 323999;
    var ABsPP2015 = 328348;
    var ABsPP2016 = 321384;
    var ABsPP2017 = 332757;
    var ABsPP2018 = 345672;
    var ABsPP2019 = ABsPP2018 * 1.035;

    var ABsPPthru2010 = ABsPP1970thru2005 + ABsPP2006 + ABsPP2007 + ABsPP2008 + ABsPP2009 + ABsPP2010;
    var ABsPPthru2011 = ABsPPthru2010 + ABsPP2011;
    var ABsPPthru2012 = ABsPPthru2011 + ABsPP2012;
    var ABsPPthru2013 = ABsPPthru2012 + ABsPP2013;
    var ABsPPthru2014 = ABsPPthru2013 + ABsPP2014;
    var ABsPPthru2015 = ABsPPthru2014 + ABsPP2015;
    var ABsPPthru2016 = ABsPPthru2015 + ABsPP2016;
    var ABsPPthru2017 = ABsPPthru2016 + ABsPP2017;
    var ABsPPthru2018 = ABsPPthru2017 + ABsPP2018;
    var ABsPPthru2019 = ABsPPthru2018 + ABsPP2019;
    var PPPercent = ABsPP2019 / ABsUSlastYr;


    var ABsperdy = ABsUSlastYr / 365;

    var ABsperhr = ABsUSlastYr / (24 * 365);

    var ABspermn = ABsUSlastYr / (24 * 365 * 60);

    var ABspersc = ABsUSlastYr / (24 * 365 * 60 * 60);
    //document.write('<p>monthnumber: ' + monthnumber + '<br>monthday: ' + monthday + '</p>');
    var dayinyear = (monthnumber) * 30.42 + monthday;

    //if (monthnumber = 12) this if needs to be cleaned up
    //	{
    //		dayinyear = 334 + monthday;
    //	}


    var ABsthisYrTD = ABsUSlastYr * (dayinyear - 1) / 365;

    //document.write('<p>dayinyear: ' + dayinyear + '<br>ABsthisYrTD: ' + ABsthisYrTD + '</p>');
    var ABstoday1 = (hour) * ABsperhr + (minute) * ABspermn + (second) * ABspersc + 0.3;
    var ABstoday = formatNumber(ABstoday1, 1, ',', '.', '', '', '-', '');



    var ABsinceRvWthru15 = 58586255;
    var ABsinceRvWthru16 = 59115995;
    var ABsinceRvWthru17 = 60069971;
    var ABsinceRvWthru18 = 60942033;
    var ABsinceRvWthru19 = 61628584;

    var totalABsinUSsinceRvW1 = ABsinceRvWthru19 + ABsthisYrTD + ABstoday1;
    var totalABsinUSsinceRvW = formatNumber(totalABsinUSsinceRvW1, 1, ',', '.', '', '', '-', '');



    var ABsinUSthisYr1 = ABsthisYrTD + ABstoday1;
    var ABsinUSthisYr = formatNumber(ABsinUSthisYr1, 1, ',', '.', '', '', '-', '');

    var PPthisYR1 = PPPercent * ABsinUSthisYr1;
    var PPthisYR = formatNumber(PPthisYR1, 1, ',', '.', '', '', '-', '');

    var ABsPPsince1970thrutoday1 = PPthisYR1 + ABsPPthru2019;
    var ABsPPsince1970thrutoday = formatNumber(ABsPPsince1970thrutoday1, 1, ',', '.', '', '', '-', '');
    
    var ABsdueRapeIncest = ABsinUSthisYr1 * (0.0097)
    ABsdueRapeIncest = formatNumber(ABsdueRapeIncest, 1, ',', '.', '', '', '-', '');
    // add calc for bb
    var ABsthisyearblackbbabies = ABsinUSthisYr1 * (0.3)
    ABsthisyearblackbbabies = formatNumber(ABsthisyearblackbbabies, 1, ',', '.', '', '', '-', '');
    
    var ABsSince73ofBlackbabies = totalABsinUSsinceRvW1 * (0.3)
    ABsSince73ofBlackbabies = formatNumber(ABsSince73ofBlackbabies, 1, ',', '.', '', '', '-', '');
    //document.write('<p>bb this year: ' + ABsthisyearblackbbabies + '<br>bb sinc73: ' + ABsSince73ofBlackbabies + '</p>');			

    var ABsthisYrafter16weeks1 = ABsinUSthisYr1 * (0.048);
    var ABsthisYrafter16weeks = formatNumber(ABsthisYrafter16weeks1, 1, ',', '.', '', '', '-', '');


    

var ABsWWlastYr = 40000000;

var ABsperdyWW = ABsWWlastYr / 365;

var ABsperhrWW = ABsWWlastYr / (24 * 365);

var ABspermnWW = ABsWWlastYr / (24 * 365 * 60);

var ABsperscWW = ABsWWlastYr / (24 * 365 * 60 * 60);

var sincePageLoad = diffseconds * ABsperscWW;

sincePageLoad = formatNumber(sincePageLoad, 0, ',', ' ', '', '', '-', '');

    var ABsthisYrTDWW = ABsWWlastYr * (dayinyear - 1) / 365;

    var ABstodayWW = (hour) * ABsperhrWW + (minute) * ABspermnWW + (second) * ABsperscWW;
    ABstodayWW1 = formatNumber(ABstodayWW, 0, ',', ' ', '', '', '-', '');

    var ABsince1980thru09 = 1160000000;
    var ABsince1980thru10 = ABsince1980thru09 + ABsWWlastYr
    var ABsince1980thru11 = ABsince1980thru10 + ABsWWlastYr
    var ABsince1980thru12 = ABsince1980thru11 + ABsWWlastYr
    var ABsince1980thru13 = ABsince1980thru12 + ABsWWlastYr
    var ABsince1980thru18 = (2018 - 1980) * ABsWWlastYr
    var ABsince1980thru19 = (2019 - 1980) * ABsWWlastYr

    var totalABsWWsince1980 = ABsince1980thru19 + ABsthisYrTDWW + ABstodayWW;


    totalABsWWsince1980 = formatNumber(totalABsWWsince1980, 0, ',', ' ', '', '', '-', '');

    var ABsWWthisYear = ABsthisYrTDWW * 1.012 + ABstodayWW + 7.3;


    ABsWWthisYear = formatNumber(ABsWWthisYear, 0, ',', ' ', '', '', '-', '');






    //write dynamic info to html using id to reference
    // 
    // document.getElementById("counter_a").firstChild.nodeValue = ABstoday;
    // document.getElementById("counter_b").firstChild.nodeValue = totalABsinUSsinceRvW;
    // document.getElementById("counter_c").firstChild.nodeValue = ABsinUSthisYr;
    // document.getElementById("counter_d").firstChild.nodeValue = ABsthisYrafter16weeks;
    // document.getElementById("counter_i").firstChild.nodeValue = ABsdueRapeIncest;
    // document.getElementById("counter_j").firstChild.nodeValue = ABsPPsince1970thrutoday;
    // document.getElementById("counter_k").firstChild.nodeValue = PPthisYR;
    // document.getElementById("counter_l").firstChild.nodeValue = ABsSince73ofBlackbabies;
    
    // document.getElementById("counter_e").firstChild.nodeValue = totalABsWWsince1980;
    // document.getElementById("counter_g").firstChild.nodeValue = sincePageLoad;
    // document.getElementById("counter_h").firstChild.nodeValue = ABstodayWW1;
    
    

    elemento(".a").textContent = totalABsWWsince1980;
    elemento(".b").textContent = ABsWWthisYear;
    elemento(".c").textContent = sincePageLoad;
    elemento(".d").textContent = ABstodayWW1;
    lista = totalABsWWsince1980.split(",");
    abortos = parseInt(((lista[0] * 1000000) + (lista[1] * 1000) + (lista[2] * 1) + (lista[3])));
    total = humanos + abortos;
    porcentajeHum = humanos * 100 / total;
    porcentajeAbo = abortos * 100 / total;
    // console.log(porcentajeHum);
    elemento(".fondo").style.background = "linear-gradient(black "+porcentajeHum +"%, white)";
}


function elemento(nombre){
    return document.querySelector(nombre)
}
function formatNumber(num,dec,thou,pnt,curr1,curr2,n1,n2) 
{
		var x = Math.round(num * Math.pow(10,dec));
		if (x >= 0) {n1=n2='';}
		var y = (''+Math.abs(x)).split('');
		var z = y.length - dec; if (z<0) z--; 
		for(var i = z; i < 0; i++) y.unshift('0'); 
		if (z<0) z = 1; y.splice(z, 0, pnt); 
		if(y[0] == pnt) y.unshift('0');
		while (z > 3) {z-=3; y.splice(z,0,thou);}
		var r = curr1+n1+y.join('')+n2+curr2;return r;
}