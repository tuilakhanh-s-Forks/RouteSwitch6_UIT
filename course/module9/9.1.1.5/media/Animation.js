(function (lib, img, cjs) {

var p; // shortcut to reference prototypes





// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,52);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,180);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,57);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-5,-26.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-26.6,10,52);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
 	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04",  width:"123", expand:"up+down", size:"11"}); 
	//this.text = new cjs.Text("ID_txt04,W:123,E:u+d,A:center", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
 	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03",  width:"123", expand:"up+down", size:"11"}); 
	//this.text = new cjs.Text("ID_txt03,W:123,A:center,E:U+D", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
 	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02",  width:"123", expand:"up+down", size:"11"}); 
	//this.text = new cjs.Text("ID_txt02,W:123,A:center,E:U+D", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
 	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01",  width:"123", expand:"up+down", size:"11"}); 
	//this.text = new cjs.Text("ID_txt01,A:Center,E:u+d,W:123", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;
	this.text.setTransform(0,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT", subType:"TABLE", compId:"ID_table_html",  width:"560"}); 
	this.text.setTransform(0,0);
	this.text.lineHeight = 10;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,19);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("209.165.201.1", "11px 'CiscoSans'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(38.1,8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,19);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("192.168.10.10", "11px 'CiscoSans'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(38.1,8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,19);


(lib.slide_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.boxshadowclip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzEEQgEAAgDgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAn3QAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQADgCAEgBIPmAAQAEABADACQADAEAAADIAAHzQAAADgDADQgDAEgEAAg");
	this.shape.setTransform(51,26);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,52);


(lib.boxteal = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D1D2").s().p("AnpDwIAAnfIPSAAIAAHfg");
	this.shape.setTransform(51,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnzEEQgEgBgDgDQgCgCgBgEIAAnzQABgEACgDQADgCAEgBIPmAAQAFABACACQADADAAAEIAAHzQAAAEgDACQgCADgFABgAnpDwIPSAAIAAnfIvSAAg");
	this.shape_1.setTransform(51,26);

	// drop shadow box
	this.instance = new lib.boxshadowclip();
	this.instance.setTransform(50,25,1,1,0,0,0,50,25);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,109,60);


(lib.packet4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(66.4,22.4,1,1,0,0,0,61.5,8.5);

	// Layer 2
	this.instance_1 = new lib.boxteal();
	this.instance_1.setTransform(0,0,1.314,0.845);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,141,51.9);


(lib.packet3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(66.4,22.4,1,1,0,0,0,61.5,8.5);

	// Layer 2
	this.instance_1 = new lib.boxteal();
	this.instance_1.setTransform(0,0,1.314,0.845);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,141,51.9);


(lib.packet2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(66.4,22.4,1,1,0,0,0,61.5,8.5);

	// Layer 2
	this.instance_1 = new lib.boxteal();
	this.instance_1.setTransform(0,0,1.314,0.845);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,141,51.9);


(lib.packet = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(66.4,22.4,1,1,0,0,0,61.5,8.5);

	// Layer 2
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-5,-3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-3,147,57);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_478 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(478).call(this.frame_478).wait(1));

	// table
	this.instance = new lib.Symbol3();
	this.instance.setTransform(340,104.4,1,1,0,0,0,280,33);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({alpha:1},0).wait(390));
	// packet4
	this.instance_1 = new lib.packet4();
	this.instance_1.setTransform(346.3,204.1,1,1,0,0,0,73.2,19.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(368).to({alpha:1},9).to({x:165.1},36).wait(3).to({y:322.1},33).to({alpha:0},18).wait(12));

	// packet3
	this.instance_2 = new lib.packet3();
	this.instance_2.setTransform(520.8,318.1,1,1,0,0,0,73.2,19.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(255).to({alpha:1},9).to({y:204.1},26).wait(13).to({x:346.3},34).to({alpha:0},11).wait(131));

	// packet2
	this.instance_3 = new lib.packet2();
	this.instance_3.setTransform(346.3,204.1,1,1,0,0,0,73.2,19.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121).to({alpha:1},8).to({x:520.8},34).wait(7).to({y:318.1},38).wait(8).to({alpha:0},6).wait(257));

	// packet1
	this.instance_4 = new lib.packet();
	this.instance_4.setTransform(165.1,322.1,1,1,0,0,0,73.2,19.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({alpha:1},1).to({y:204.1},26).wait(10).to({x:346.3},34).to({alpha:0},7).wait(398));

	// topology
	this.instance_5 = new lib.Bitmap2();
	this.instance_5.setTransform(129.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(479));

	// arrow
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.setTransform(340.4,201.3,1,1,180);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(82).to({alpha:1},0).to({y:171.3},6).wait(391));

	// Texts
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(514.9,361.8,1,1,0,0,0,40.1,9.5);

	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(153.8,361.5,1,1,0,0,0,40.1,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(479));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.9,170.5,500.7,200.8);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(86.9,170.5,500.7,200.8);


// stage content:
(lib.media_9115 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(340,121.1,1,1,0,0,0,340,121.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(426.9,415.5,500.7,200.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;