(function (lib, img, cjs) {

var p; // shortcut to reference prototypes




// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,531,271);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


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
	this.frame_285 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(285).call(this.frame_285).wait(1));

	// Packets
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(103.8,327.7,0.41,0.41,0,0,0,1.5,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).to({x:288.2,y:327.8},34).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).wait(15).to({x:341.6,y:220.1},28).wait(1).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).wait(15).to({x:397.6,y:327.9},29).wait(15).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).to({x:582},29).wait(8).to({alpha:0},7).wait(2));

	// Static texts
	this.text = new cjs.Text(".1", "11px 'CiscoSans'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(429.2,326.7);

	this.text_1 = new cjs.Text(".1", "11px 'CiscoSans'", "#393536");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(393.3,292.1);

	this.text_2 = new cjs.Text(".1", "11px 'CiscoSans'", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(348.7,182.9);

	this.text_3 = new cjs.Text(".2", "11px 'CiscoSans'", "#393536");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(349.4,241.4);

	this.text_4 = new cjs.Text(".2", "11px 'CiscoSans'", "#393536");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(330,241.4);

	this.text_5 = new cjs.Text(".1", "11px 'CiscoSans'", "#393536");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(252.4,327);

	this.text_6 = new cjs.Text(".1", "11px 'CiscoSans'", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(287.7,292.1);

	this.text_7 = new cjs.Text("S0/0/0\n    DCE", "11px 'CiscoSans'", "#393536");
	this.text_7.lineHeight = 12;
	this.text_7.setTransform(300.3,297);

	this.text_8 = new cjs.Text("R2", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(340,221.4);

	this.text_9 = new cjs.Text("R1", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(285.8,329.2);

	this.text_10 = new cjs.Text("PC3", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(578.8,313.1);

	this.text_11 = new cjs.Text("PC1", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(101.3,313.1);

	this.text_12 = new cjs.Text("PC2", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 12;
	this.text_12.setTransform(338.3,87.2);

	this.text_13 = new cjs.Text("G0/0", "11px 'CiscoSans'", "#393536");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.setTransform(437.1,309.9);

	this.text_14 = new cjs.Text("G0/0", "11px 'CiscoSans'", "#393536");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 13;
	this.text_14.setTransform(244.5,310.7);

	this.text_15 = new cjs.Text("S0/0/1", "11px 'CiscoSans'", "#393536");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 13;
	this.text_15.setTransform(364.7,297.3);

	this.text_16 = new cjs.Text("S0/0/0", "11px 'CiscoSans'", "#393536");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 13;
	this.text_16.setTransform(302.3,234.2);

	this.text_17 = new cjs.Text("S0/0/1\nDCE", "11px 'CiscoSans'", "#393536");
	this.text_17.lineHeight = 12;
	this.text_17.setTransform(363.8,230);

	this.text_18 = new cjs.Text("G0/0", "11px 'CiscoSans'", "#393536");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 13;
	this.text_18.setTransform(322.6,183.5);

	this.text_19 = new cjs.Text("192.168.2.0/24", "bold 11px 'CiscoSans'", "#393536");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.setTransform(494.2,343.9);

	this.text_20 = new cjs.Text("172.16.3.0/24", "bold 11px 'CiscoSans'", "#393536");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(180.4,343.9);

	this.text_21 = new cjs.Text("192.168.1.0/24", "bold 11px 'CiscoSans'", "#393536");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 13;
	this.text_21.setTransform(434.8,250.5);

	this.text_22 = new cjs.Text("172.16.2.0/24", "bold 11px 'CiscoSans'", "#393536");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 13;
	this.text_22.setTransform(241.6,251.2);

	this.text_23 = new cjs.Text("172.16.1.0/24", "bold 11px 'CiscoSans'", "#393536");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 13;
	this.text_23.setTransform(263.2,153.2);

	this.text_24 = new cjs.Text("R3", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 13;
	this.text_24.setTransform(395.3,329.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(286));

	// Icons
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(78,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.2,80,531,283);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(80.2,80,531,283);


// stage content:
(lib.media_2311A = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(420.2,325,531,283);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;