(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,345);


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
	this.frame_307 = function() {
		/* stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(307).call(this.frame_307).wait(1));

	// env 13
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278).to({_off:false},0).to({x:396.2,y:321},26).to({_off:true},3).wait(1));

	// env 12
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(278).to({_off:false},0).to({x:308.2,y:326},26).to({_off:true},3).wait(1));

	// env 11
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278).to({_off:false},0).to({y:218},26).to({_off:true},3).wait(1));

	// env 10
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(278).to({_off:false},0).to({x:431.2},26).to({_off:true},3).wait(1));

	// env 9
	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(117.1,274.9,0.432,0.432,0,0,0,1.3,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).to({guide:{path:[117.3,274.9,235.9,163,347.1,276]}},88).to({x:270.2},26).to({_off:true},3).wait(1));

	// env 8
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(115.8,273.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165).to({_off:false},0).to({x:196.8},24).to({_off:true},1).wait(118));

	// env 7
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(115.8,273.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).to({x:34.8},24).to({_off:true},1).wait(118));

	// env 6
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(115.8,273.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(165).to({_off:false},0).to({x:161.8,y:320.4},24).to({_off:true},1).wait(118));

	// envelope5
	this.instance_8 = new lib.envelopeclosedstatic();
	this.instance_8.setTransform(115.8,215.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(135).to({_off:false},0).to({y:273.4},20).wait(10).to({x:72.8,y:319.4},24).to({_off:true},1).wait(118));

	// envelope4
	this.instance_9 = new lib.envelopeclosedstatic();
	this.instance_9.setTransform(115.8,101.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({x:197.8},45).wait(2).to({alpha:0},0).wait(217));

	// envelope3
	this.instance_10 = new lib.envelopeclosedstatic();
	this.instance_10.setTransform(115.8,101.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).to({x:36.8},45).wait(2).to({alpha:0},0).wait(217));

	// envelope2
	this.instance_11 = new lib.envelopeclosedstatic();
	this.instance_11.setTransform(115.8,101.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({x:157.8,y:161.4},45).wait(2).to({alpha:0},0).wait(217));

	// envelope1
	this.instance_12 = new lib.envelopeclosedstatic();
	this.instance_12.setTransform(115.8,40.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},5).to({y:101.4},30).wait(9).to({x:68.8,y:160.4},45).wait(2).to({alpha:0},0).wait(217));

	// icons
	this.instance_13 = new lib.Bitmap1();
	this.instance_13.setTransform(-0.9,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(308));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,21,474,345);


/*(lib.slide_1 = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(-12.6,-9);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,12,474,345);
*/

(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();
	//this.slide01 = new lib.slide_1();
	this.anim01.setTransform(302.5,180.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,12,474,345);


// stage content:
(lib.media_4222A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(102.3,34.1,1.109,1.109);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(427.3,292.4,525.6,382.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;