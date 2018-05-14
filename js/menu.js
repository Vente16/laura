$(document).ready(function(){


	var event = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    $(".fecha").append("<span class='fechaActual'>"+event.toLocaleDateString('es-ES', options)+"</span>");

    

   $("#botonMenu").click(function(){

      $(".menu").removeClass(".menu").addClass("menu-responsive");
      $(".menu ul").addClass("ul-responsive");
      $(".menu li").addClass("li-responsive");
      $(".menu a").addClass("menu-link-responsive");
      $(".menu li span").addClass("menu-span-responsive");
      $("#botonClose").show();
      $("#botonClose").addClass("btn-close-responsive");
      $(".menu").removeClass("menu");
      $(".cabecera").hidde();
      //$("aside").addClass("aside-responve"); 
       
      
   }); 

   $("#botonClose").click(function(){
       
       $(".aside").removeClass("aside-responve"); 
       $(".menu-responsive").addClass("menu");
       $(".menu-responsive").removeClass("menu-responsive");
       $("nav ul").removeClass();
       $("nav li").removeClass();
       $("nav li span").removeClass();
       $("#botonClose").removeClass("btn-close-responsive");
       $("#botonClose").css("display", "none");
       $(".cabecera").hidde();

 
   });

 



});