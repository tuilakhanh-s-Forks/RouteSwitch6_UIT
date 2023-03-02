
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(_container,_id){
 	if(_id==2){
	 var ID_s1_txt01 = getMediaText("ID_s1_txt01");
	 $("#ID_s1_txt01").append(ID_s1_txt01);	
	}
	
});