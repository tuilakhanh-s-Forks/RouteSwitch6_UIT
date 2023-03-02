	loadScript("../../../common/scripts/templates/RootContainer.js");
		
	var url=location.href;
	url=url.split("/")
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';

	function init(){
		
		if(!swfobject.hasFlashPlayerVersion("1")){
			createjs.Ticker.addListener(this);
			$.ajax({
				type: "GET",
				crossDomain:false, //edit 24/01 : this property must be set to false
				url: xmlFile,
				dataType: "xml",
				success: initTemplate,
				error: erFun
			});
		}
	}
		
	function initTemplate(data)
	{		
		var dataObject = getData();
		var _slide;
		
		var canvas = document.getElementById("canvas");
		var stage = new createjs.Stage(canvas);	
		var rootContainer = new RootContainer();	
		stage.addChild(rootContainer);
		
		switch(dataObject.templateType)
		{  		
			case "IMAGE":
					_slide = new ImageSlideNew(data, dataObject.slideObject);	
					rootContainer.addChild(_slide);					
				break;
				
			case "MULTI_BUTTON":		
					stage.enableMouseOver();		
					_slide = new MultiButtonSlide(data,dataObject);					
					rootContainer.addChild(_slide);
				break;
				
			case "MULTI_BAR":		
					stage.enableMouseOver();		
					_slide = new MultiBarSlide(data,dataObject);					
					rootContainer.addChild(_slide);
				break;
				
			case "TABLE":	
					_slide = new TableSlideNew(data,dataObject);
					rootContainer.addChild(_slide);
				break;
			
			case "DESCRIPTION":				
					_slide = new DescriptionSlide(data,dataObject);	
					rootContainer.addChild(_slide);
				break;
			
			case "ANIMATION":	
					_slide = new AnimationSlide(data,dataObject);	
					rootContainer.addChild(_slide);
				break;
			
			case "INTERACTIVE":	
					
				break;
			
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;	
		}
	}

 function erFun(e){
        alert("Error"+e);
    }
