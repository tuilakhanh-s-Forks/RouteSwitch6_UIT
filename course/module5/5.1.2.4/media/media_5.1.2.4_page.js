
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(_container,_id){
 	if(_id==2){
	 var ID_s2_txt01_id = getMediaText("ID_s2_txt01");
	 var ID_s2_txt02_id = getMediaText("ID_s2_txt02");
	 var ID_s2_txt03_id = getMediaText("ID_s2_txt03");
	 var ID_s2_txt04_id = getMediaText("ID_s2_txt04");
	 $("#ID_s2_txt01_id").append(ID_s2_txt01_id);
	 $("#ID_s2_txt02_id").append(ID_s2_txt02_id);
	 $("#ID_s2_txt03_id").append(ID_s2_txt03_id);
	 $("#ID_s2_txt04_id").append(ID_s2_txt04_id);	
	}
	if(_id==3){
	 var ID_s3_txt01_id = getMediaText("ID_s3_txt01");
	 $("#ID_s3_txt01_id").append(ID_s3_txt01_id);
	 
	}
});