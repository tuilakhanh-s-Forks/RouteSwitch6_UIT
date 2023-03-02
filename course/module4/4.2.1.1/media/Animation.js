(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,94);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	 this.text = new DOMObject({ type:"BUBBLE", compId:"ID_bubble03",  width:"115", height:"80", align:"left", tailPosition:"7", tailFlip:"1" });
	//this.text = new cjs.Text("ID_bubble03;w:115;h:80;a:l;tf;tp:7", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 169;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.7,16.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	 this.text = new DOMObject({ type:"BUBBLE", compId:"ID_bubble02",  width:"115", height:"80", align:"left", tailPosition:"7", tailFlip:"1" });
	//this.text = new cjs.Text("ID_bubble02;w:115;h:80;a:l;tf;tp:7", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 169;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.7,16.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	 this.text = new DOMObject({ type:"BUBBLE", compId:"ID_bubble01",  width:"115", height:"80", align:"left", tailPosition:"7", tailFlip:"1" });
	//this.text = new cjs.Text("ID_bubble01;w:115;h:80;a:l;tf;tp:7", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 169;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,172.7,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-39.6,-26.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82,52);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_649 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(649).call(this.frame_649).wait(1));

	// speech bubble 3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(294.2,61,1,1,0,0,0,57.5,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(490).to({alpha:1},0).wait(73).to({alpha:0},0).wait(87));

	// packet 3
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(243.7,50,0.525,0.525,0,0,0,1.5,0);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(440).to({_off:false},0).to({alpha:1},10).wait(14).to({y:117},21).wait(90).to({alpha:0},10).wait(5).to({x:438.8},0).to({alpha:1},10).wait(19).to({y:39.6,alpha:0},20).to({_off:true},1).wait(10));

	// speech bubble 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(425,61,1,1,0,0,0,57.5,40);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({alpha:1},0).wait(75).to({alpha:0},0).wait(300));

	// packet 2
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(373.7,50,0.525,0.525,0,0,0,1.5,0);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225).to({_off:false},0).to({alpha:1},10).wait(14).to({y:117},21).wait(90).to({alpha:0},10).wait(5).to({x:113.5},0).to({alpha:1},10).wait(19).to({y:49,alpha:0},20).to({_off:true},1).wait(225));

	// speech bubble 1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(165.2,61.4,1,1,0,0,0,57.5,40);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({alpha:1},0).wait(71).to({alpha:0},0).wait(515));

	// packet 1
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(113.6,50,0.525,0.525,0,0,0,1.4,0);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},10).wait(14).to({y:117},21).wait(90).to({alpha:0},10).wait(5).to({regX:1.5,x:308.6},0).to({alpha:1},10).wait(19).to({y:49,alpha:0},20).to({_off:true},1).wait(440));

	// static text
	this.instance_6 = new lib.Bitmap1();
	this.instance_6.setTransform(72.2,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(650));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.2,21,467.9,157);


(lib.Main = function() {
	this.initialize();

	// anim01
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(56.7,11);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(128.9,32,467.9,157);


// stage content:
(lib.media_4211A = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(468.9,277,467.9,157);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;