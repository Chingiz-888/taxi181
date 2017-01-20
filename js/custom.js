$(document).ready(function() {
    
	var $carousel = $('.carousel');

    if($carousel.length > 0){
    	$($carousel).slick({
	    	dots: true
	    });
    }




 //------------------------------------------------------
 /*
  * Replace all SVG images with inline SVG
  */
$('#uslugi img.icon').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
//------------------------------------------------------



//------------------------------------------------------
// Hover эффект к иконкам
   $("#uslugi .item").hover(
		          function () {
		          	      var str_id = $(this).attr('id');
		          	      str_id = str_id.replace(/svg_item_/, "");
		          	      var img = $("#svg_icon_"+str_id+ " path");
		          	      //console.log(img);
		                  $(img).css({"fill":"#000"});
		                  $(img).css({"stroke-width":"2.0"});
		                  $(img).css({"stroke":"#000"});
		               }, 
						
		               function () {
		                  var str_id = $(this).attr('id');
		          	      str_id = str_id.replace(/svg_item_/, "");
		          	      var img = $("#svg_icon_"+str_id+ " path");
		                  $(img).css({"fill":"#F0C700"});

		                  $(img).css({"stroke-width":"0.75"});
		                  $(img).css({"stroke":"#F0C700"});
		               }
   );
//------------------------------------------------------


	
});

