(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,303);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,50);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-38.6,-25.1);

	// outer lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
	this.shape.setTransform(1.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000002").s().p("AmUEGQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAoAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIANAAIABAAIMOAAIABAAIAMAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAIAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAgAmPD8IAEAAIMWAAIAFAAIAAgQIAAnmIgEAAIgKAAIsDAAIgKAAIgEAAg");
	this.shape_1.setTransform(1.5,0);

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23.1,0.4,5.6).s().p("AmUEAIAAn/IMpAAIAAH/g");
	this.shape_2.setTransform(1.5,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);


(lib.anim1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop()*/
	}
	this.frame_213 = function() {
		/* stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(213).call(this.frame_213).wait(1));

	// Packet4
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(41.6,98.2,0.301,0.301,0,0,0,1.7,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({alpha:1},10).to({y:154.9},18).to({x:165.5},20).to({y:192.7},14).to({x:278.9},23).to({y:276.7},16).to({y:308.2},11).to({x:422.8},24).to({y:348.1},13).to({regY:0,y:348,alpha:0},5).wait(10));

	// Packet3
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(41.6,98.2,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({alpha:1},9).to({y:154.9},12).to({x:165.5},20).to({y:192.7},10).to({y:273.5},17).to({x:281},16).to({y:308.2},11).to({x:422.8},21).to({y:348.1},12).to({regY:0,y:348,alpha:0},2).wait(47));

	// Packet2
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(41.6,98.2,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({alpha:1},9).to({y:154.9},14).to({x:165.5},19).to({y:192.7},8).to({x:278.9},23).to({y:276.7},20).to({y:309.2},8).to({x:422.8},21).to({y:348.1},13).to({regY:0,y:348,alpha:0},9).wait(47));

	// Packet1
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(41.6,98.2,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({alpha:1},9).to({y:154.9},12).to({x:165.5},21).to({y:192.7},10).to({y:273.5},15).to({x:281},24).to({y:308.2},7).to({x:423.8},25).to({y:348.1},13).to({regY:0,x:423.9,y:348,alpha:0},6).wait(65));

	// static text
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(12.5,80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.5,80.1,443,303);


(lib.Main = function() {
	this.initialize();

	// anim
	this.anim1 = new lib.anim1();
	this.anim1.setTransform(299,122,1,1,0,0,0,190.8,121.5);

	this.addChild(this.anim1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(120.7,80.6,443.1,303);


// stage content:
(lib.media_1223 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(460.7,325.6,443.1,303);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;