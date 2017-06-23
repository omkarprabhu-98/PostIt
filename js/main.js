/**
 * Created by Admin on 13-Jun-17.
 */

$(document).ready(function(){

    // tab navigation selection
    $(".col.s6").on("click",
        function () {

            if(!$(this).hasClass("active")){
                $(".col.s6.active").removeClass("active");

                $(".col.s6").children('.slider').removeClass("active");


                $(this).addClass("active");
                $(this).children('.slider').addClass("active");


            }


        }
    );





});