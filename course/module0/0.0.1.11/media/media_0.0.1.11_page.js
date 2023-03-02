//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/js/greensock/TweenMax.min.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
     var template_type = "INTERACTIVEANIM";

	var slide_texts = {};
						
	
	var slides = {animId:0,
					texts:slide_texts};
	
	return {templateType:template_type,
	slideObject:slides};
	
}

(slideViewDidLoad = function(_container,_id){
	function animation()
	{  
		img1= $("#img1");	 
		img2= $("#img2");	 
		img3= $("#img3");	 	 
		img4= $("#img4");	 
		img5= $("#img5");	 
	  
	t_anim = new TimelineMax({repeat:-1});
	t_anim.to(img2,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4});
	t_anim.to(img3,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4}); 
	t_anim.to(img4,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4});
	t_anim.to(img5,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4}); 
	t_anim.play(); 
	
	   
} 
animation();
})

