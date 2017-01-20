







//========moving down main block =========================================
    function toggleNavbar(){
        var navbar = $("#myNavbar");

            if ( $(navbar).attr("aria-expanded") === "false") { 
              $(navbar).removeClass("collapse");
              $(navbar).attr("aria-expanded", "true");
              $("#whole-navbar-wrapper").css({"height" : "500px"});
              $("#myNavbar>ul>li").css({"display" : "block", "width" : "50%" });
              $(".phone.right").css({"width":"150px"});
              $(".phone.right").parent().parent().css({"width":"170px"});
              $(".navbar-nav").css({"margin-top": "25px"});

               //$("main").css("paddingTop","385px");
            } else {
              $(navbar).addClass("collapse"); 
              $(navbar).attr("aria-expanded", "false");
              $("#whole-navbar-wrapper").css({"height" : "73px"});
              $("#myNavbar>ul>li").css({"display" : "inline"});
              $(".navbar-nav").css({"margin-top": "0px"});

              //$("main").css("paddingTop","112px"); 
            }

       
       //$(navbar).toggleClass("collapse");     

      console.log($(navbar).attr("aria-expanded")  );      

}//======================================================================


