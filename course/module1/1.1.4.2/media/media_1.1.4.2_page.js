function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);


(slideViewDidLoad = function(_container,_id)
{
       if(_id == 1)
       {              
               
	       var _txt_05 = getMediaText("ID_s5_txt01");           
	       
	       $("#ID_s5_txt01").append(_txt_05);

       }
});