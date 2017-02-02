



//========moving down main block =========================================
    function toggleNavbar(){
        var navbar = $("#myNavbar");

            if ( $(navbar).attr("aria-expanded") === "false") { 
              $(navbar).removeClass("collapse");
              $(navbar).attr("aria-expanded", "true");
              $(navbar).css({"width":"100%"});
              $("#whole-navbar-wrapper").css({"height" : "534px"});
              $("#myNavbar>ul").css({"margin-top" : "60px", "margin-left" : "10px", "font-size" : "21px" });
              $("#myNavbar>ul>li").css({"display" : "block", "width" : "100%" });
              //$(".phone.right").css({"width":"150px"});
              //$(".phone.right").parent().parent().css({"width":"170px"});
              $(".navbar-nav").css({"margin-top": "25px"});
              $(".nav-logo").css({"display":"none"});
              $("#nav-logo-li").css({"display":"none"});
               //$("main").css("paddingTop","385px");
            } else {
              $(navbar).addClass("collapse"); 
              $(navbar).attr("aria-expanded", "false");
              $("#whole-navbar-wrapper").css({"height" : "60px"});
              $("#myNavbar>ul").css({"margin-top" : "10px", "margin-left" : "10px", "font-size" : "21px" });
              $("#myNavbar>ul>li").css({"display" : "inline", "width" : "90px"});
              $(".navbar-nav").css({"margin-top": "0px"});

              //$("main").css("paddingTop","112px"); 
            }

       
       //$(navbar).toggleClass("collapse");     

      console.log($(navbar).attr("aria-expanded")  );      

}//======================================================================




//=== Заказать такси прямо сейчас ========================================
 function orderTaxiNow(){
     $('#ex2').modal();
 }
//======================================================================