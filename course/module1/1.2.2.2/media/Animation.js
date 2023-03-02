(function (lib, img, cjs) {

var p;

// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,63);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,303);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"104",expand:"right",align:"left"});
	//this.text = new cjs.Text("ID_txt02,W:104,A:left,E:right", "11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 136;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,36);


(lib.text2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"109",expand:"down",class:"orangeCallOut",align:"center"});
	//this.text = new cjs.Text("ID_txt03,W:109,A:c,E:down", "11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.label = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:'104',expand:"right",class:"orangeCallOut",align:"center"});
	//this.text = new cjs.Text("ID_txt01,W:105,A:c,E:right", "11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9A003").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
	this.shape.setTransform(1.4,0.1);

	// outer lines
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
	this.shape_1.setTransform(1.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000002").s().p("AmUEGQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAoAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIANAAIABAAIMOAAIABAAIAMAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAIAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAgAmPD8IAEAAIMWAAIAFAAIAAgQIAAnmIgEAAIgKAAIsDAAIgKAAIgEAAg");
	this.shape_2.setTransform(1.5,0);

	// color
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23.1,0.4,5.6).s().p("AmUEAIAAn/IMpAAIAAH/g");
	this.shape_3.setTransform(1.5,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);


(lib.envelope_closed_static = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-4.6,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-30.8,124.7,124.7);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_25 = function() {
		/* stop();*/
	}
	this.frame_403 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(378).call(this.frame_403).wait(1));

	// xml text
	this.instance = new lib.Symbol1();
	this.instance.setTransform(329.9,214.4,1,1,0,0,0,52,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(404));

	// helpcount2
	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(146,315.9,1.077,1,0,0,0,52,8.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(234).to({x:145.9,alpha:1},13).wait(145).to({alpha:0},11).wait(1));

	// helpcount
	this.instance_2 = new lib.label();
	this.instance_2.setTransform(292.4,155.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({y:155.4,alpha:1},13).wait(194).to({regX:52,regY:8.5,x:344.4,y:163.9},0).to({alpha:0},14).wait(173));

	// packet
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.setTransform(52.4,80.1);

	this.instance_4 = new lib.envelope_closed_static();
	this.instance_4.setTransform(80.3,97.8,0.285,0.285,0,0,0,44.6,31.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},30).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},37).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},29).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},16).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({alpha:1},13).wait(10).to({x:81.7,y:154.4},14).wait(1).to({x:206},30).wait(1).to({y:194},15).wait(1).to({x:319.1,y:270},37).wait(1).to({y:309.6},14).wait(1).to({x:462.1},29).wait(1).to({x:460.8,y:348.1},15).wait(6).to({alpha:0},16).wait(189));

	// packet
	this.instance_5 = new lib.envelope_closed_static();
	this.instance_5.setTransform(80.3,97.8,0.285,0.285,0,0,0,44.6,31.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},234).wait(1).to({_off:false},0).to({alpha:1},13).wait(10).to({x:80.8,y:155.2},13).wait(1).to({x:205.1},17).wait(1).to({y:195.9},6).wait(1).to({y:274},14).wait(1).to({x:319.5},17).wait(1).to({y:309.2},5).wait(1).to({x:461.4},27).wait(1).to({x:460.8,y:348.1},12).wait(6).to({alpha:0},16).wait(6));

	// icons
	this.instance_6 = new lib.Bitmap2();
	this.instance_6.setTransform(52.4,80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(404));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.4,80.1,443,303);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(65.3,-3.2);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(117.7,76.9,443,303);


// stage content:
(lib.media_1222 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(457.7,321.9,443,303);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;