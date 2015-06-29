/*
  --------------
  FUNCOES EXTERNAS
  --------------
*/

var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

$(window).resize(function(){
  size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
});


$(document).ready(function(){


/*
  --------------
  DEFINICOES GERAIS
  --------------
*/

  
  // Telas pequenas
    /*
    if (size.indexOf("geral") !=-1) {

    }
    */

  // Telas médias
    /*
    if (size.indexOf("medium") !=-1) {

    }
    */

  // Telas Grandes
    /*
    if (size.indexOf("large") !=-1) {
      
    }
    */


});