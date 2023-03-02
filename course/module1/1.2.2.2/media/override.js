override.pageType = "text-on-right"; // "text-on-left", "text-on-right", "full-media"
override.pageSize="470*400";


var interval = setInterval(function(){
  if($('#media-container').find('#media').contents().find('#htmlMedia').find('canvas')){
  	 var can = $('#media-container').find('#media').contents().find('#htmlMedia').find('canvas').attr('height');
     if(can == 470){
     	var can = $('#media-container').find('#media').contents().find('#htmlMedia').find('canvas');
     	 $(can).attr({'height':'490'});
     	 window.clearInterval(interval);
     }
  }
}, 100);


