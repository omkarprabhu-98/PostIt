/**
 * Created by Admin on 14-Jun-17.
 */
$(document).ready(
  function(){

  //  tab navigation selection
  $("li").on("click",function(){

    if(!$(this).hasClass("active")){

      $("li.active").removeClass("active");

        $("li").children('.slider').removeClass("active");
      $(this).addClass("active");
        $(this).children('.slider').addClass("active");



    }



  });






  }

);

