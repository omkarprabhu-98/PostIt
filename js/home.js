/**
 * Created by Admin on 14-Jun-17.
 */
$(document).ready(
  function(){

  $("li").on("click",function(){

    if(!$(this).hasClass("active")){

      $("li.active").removeClass("active");
      $(this).addClass("active");


    }



  });


  }

);