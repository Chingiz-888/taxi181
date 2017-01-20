$(document).ready(function() {



 //resize_func();

 //------------------------------------------------------
 //  Изменение размеров блока
$(window).resize(function() {
   // resize_func();
});

 //------------------------------------------------------
});




function resize_func() {
	 var div = document.getElementById("license_first_row");
	 var div2 = document.getElementById("license_text");
	 var div3 = document.getElementById("license_announce");

	 //второй уже ряд
	 var row2_div1 = document.getElementById("license_second_row_announcement");

	 // Получаем div нужный нам
	 var width = div.offsetWidth;
	 var height = div.offsetHeight;
	 // Ширина и высота div'a

	 //  1316 - ширина блока полупрозрачного при 1920
	 //  658 - половинка
	 //  изменяеем жти величины пропорционально

	 var left1 = width * 0.5 - 658*(width/1920.0) - 20;
	 var top1 = height - 130*(width/1920.0) + 23;

	 var left2 = 396*(width/1920.0);
	 var top2 = 120*(width/1920.0);



	 $(div2).offset({top: top1+30, left: left1});
	 $(div3).offset({top: top2, left: left1});
	 //--- второй ряд ------------------
	 //--- 680 пикселей - смещение на высоту первого row
	 var top_delta = 680 * (width/1920.0);
	 $(row2_div1).offset({top: top_delta+top2, left: left1});
	
	 if ( width/1920.0 > 1.0 ) {
	 	  $(div2).height( 100 );
	 	   console.log("Ширина = " + width + "   " + width/1920.0);
	 } else {
	     $(div2).height( 130*(width/1920.0) );
	 }
	 $(div2).width( 1316*(width/1920.0) );
	 //div2.style.top = 130;
	 console.log(div2);
}





