(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 680,
	height: 490,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,206);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.Symbol1 = function(compId) {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:compId,width:"65",expand:"up+down",align:"center"});
	//this.text = new cjs.Text("ID_txt02;w:64.25,a:c;e:u+d", "11px 'Courier New'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,29.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-39.6,-26.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82,52);


(lib.EnvelopeStatic2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(33.6,21.6,0.819,0.819,0,0,0,1.4,0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.1,42.6);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_210 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(210).call(this.frame_210).wait(1));

	// text2
	this.instance = new lib.Symbol1("ID_txt02");
	this.instance.setTransform(266.8,295.8,1,1,0,0,0,32.1,8.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Symbol1("ID_txt02a");
	this.instance_1.setTransform(431.8,295.8,1,1,0,0,0,32.1,8.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance}]},31).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1},{t:this.instance}]},20).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},32).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},18).to({x:431.8},31).to({alpha:0},9).wait(20).to({x:378.8,y:125.8,alpha:1},0).wait(16).to({x:436.8,y:292.8},32).wait(9).to({alpha:0},0).wait(19).to({x:477.8,y:296.8,alpha:1},0).wait(15).to({x:338.8,y:126.8},29).to({alpha:0},6).wait(6));

	// text1
	this.instance_2 = new lib.Symbol1("ID_txt02b");
	this.instance_2.setTransform(197.8,295.8,1,1,0,0,0,32.1,8.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol1("ID_txt02c");
	this.instance_3.setTransform(342.3,126.8,1,1,0,0,0,32.1,8.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},31).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3},{t:this.instance_2}]},20).to({state:[{t:this.instance_2}]},16).to({state:[{t:this.instance_2}]},32).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.instance_2}]},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:1},18).to({x:342.3,y:126.8},31).to({alpha:0},9).wait(20).to({x:302.3,alpha:1},0).wait(16).to({x:224.3,y:292.8},32).wait(9).to({alpha:0},0).wait(19).to({x:402.3,y:296.8,alpha:1},0).wait(15).to({x:233.3,y:291.8},29).to({alpha:0},6).wait(6));

	// envelope2
	this.instance_4 = new lib.EnvelopeStatic2();
	this.instance_4.setTransform(196.2,296,1,1,0,0,0,30.8,19.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({alpha:1},18).to({x:341,y:131},31).to({alpha:0},9).wait(20).to({x:300.3,alpha:1},0).wait(16).to({x:222.9,y:297.1},32).wait(9).to({alpha:0},0).wait(19).to({x:401.3,y:299.2,alpha:1},0).wait(15).to({x:231.9,y:296},29).to({alpha:0},6).wait(6));

	// envelope1
	this.instance_5 = new lib.EnvelopeStatic2();
	this.instance_5.setTransform(269.2,296,1,1,0,0,0,30.8,19.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({alpha:1},18).to({x:429.5},31).to({alpha:0},9).wait(20).to({x:375.5,y:131.1,alpha:1},0).wait(16).to({x:435.1,y:297.1},32).wait(9).to({alpha:0},0).wait(19).to({x:474.4,y:299.2,alpha:1},0).wait(15).to({x:336.8,y:131.2},29).to({alpha:0},6).wait(6));

	// icons
	this.instance_6 = new lib.Bitmap1();
	this.instance_6.setTransform(206,112.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206,112.4,260,206);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0,0,1.001,1);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(206.2,112.4,260.3,206);


// stage content:
(lib.media_3112A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(546.2,357.4,260.3,206);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;