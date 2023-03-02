(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585,244);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,106);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
		this.text = new DOMObject({type:"TEXT",compId:"ID_table01_html",width:"600"});
	//this.text = new cjs.Text("ID_table01", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,19);




(lib.Symbol5 = function() {
        this.initialize();

        // Layer 1
		this.text = new DOMObject({type:"TEXT",compId:"ID_txt09",width:"81",expand:"up+down",align:"center"});
        //this.text = new cjs.Text("ID_txt09;w:81;a:c;e:u+d", "bold 11px 'Courier New'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 169;
        this.text.setTransform(0, 0);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 173, 16.5);


    (lib.Symbol4 = function() {
        this.initialize();

        // Layer 1
		this.text = new DOMObject({type:"TEXT",compId:"ID_txt11",width:"72.5",expand:"left",align:"right"});
        //this.text = new cjs.Text("ID_txt11;w:72.5;a:r;e:l", "bold 11px 'Courier New'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 169;
        this.text.setTransform(0, 0);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 173, 16.5);


    (lib.Symbol3 = function() {
        this.initialize();

        // Layer 1
		this.text = new DOMObject({type:"TEXT",compId:"ID_txt10",width:"72.5",expand:"left",align:"right"});
        //this.text = new cjs.Text("ID_txt10;w:72.5;a:r;e:l", "bold 11px 'Courier New'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 169;
        this.text.setTransform(0, 2);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 173, 16.5);


    (lib.Symbol2 = function() {
        this.initialize();

        // Layer 1
		this.text = new DOMObject({type:"TEXT",compId:"ID_txt08",width:"203",expand:"up",align:"center"});
        //this.text = new cjs.Text("ID_txt08;w:203;a:c;e:u", "bold 11px 'Courier New'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 169;
        this.text.setTransform(0, 0);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 173, 16.5);


    (lib.Symbol1 = function() {
        this.initialize();

        // Layer 1
		this.text = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"160",expand:"up",align:"center"});
        //this.text = new cjs.Text("ID_txt07;w:159.95;a:c;e:u", "bold 11px 'Courier New'");
        this.text.textAlign = "center";
        this.text.lineHeight = 13;
        this.text.lineWidth = 169;
        this.text.setTransform(0, 0);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 173, 16.5);

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


(lib.boxbrown = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E7E8").s().p("AnpDwIAAnfIPSAAIAAHfg");
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


(lib.movigtable2copy3 = function() {
	this.initialize();

	// static text
	this.text = new cjs.Text("DA", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(179.4,37.9);

	this.text_1 = new cjs.Text("SA", "bold 11px 'CiscoSans'", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(48.1,37.9);

	// table
	this.instance = new lib.boxteal();
	this.instance.setTransform(0.1,33,1.266,0.845);

	this.instance_1 = new lib.boxbrown();
	this.instance_1.setTransform(126.9,33,1.266,0.845);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF8F7").s().p("ABlAAIjFAAIgCAAIDVAAIgLAAIgDAAgAhyAAIAQAAIgCAAg");
	this.shape.setTransform(212.3,73.8);

	this.addChild(this.shape,this.instance_1,this.instance,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,31,263.8,52);


(lib.movigtable2copy = function() {
	this.initialize();

	// static text
	this.text = new cjs.Text("DA", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(179.4,37.9);

	this.text_1 = new cjs.Text("SA", "bold 11px 'CiscoSans'", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(48.1,37.9);

	this.text_2 = new cjs.Text("209.165.202.129:80", "11px 'CiscoSans'", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(189.5,53);

	this.text_3 = new cjs.Text("209.165.200.226:1331", "11px 'CiscoSans'", "#393536");
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(4,53);

	// table
	this.instance = new lib.boxteal();
	this.instance.setTransform(0.1,33,1.266,0.845);

	this.instance_1 = new lib.boxbrown();
	this.instance_1.setTransform(126.9,33,1.266,0.845);

	this.addChild(this.instance_1,this.instance,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,31,263.8,52);


(lib.movigtable2 = function() {
	this.initialize();

	// static text
	this.text = new cjs.Text("DA", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(179.4,37.9);

	this.text_1 = new cjs.Text("SA", "bold 11px 'CiscoSans'", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(48.1,37.9);

	this.text_2 = new cjs.Text("209.165.202.129:80", "11px 'CiscoSans'", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(190.5,53);

	this.text_3 = new cjs.Text("192.168.10.11:1331", "11px 'CiscoSans'", "#393536");
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(8.9,53);

	// table
	this.instance = new lib.boxteal();
	this.instance.setTransform(0.1,33,1.266,0.845);

	this.instance_1 = new lib.boxbrown();
	this.instance_1.setTransform(126.9,33,1.266,0.845);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF8F7").s().p("ABlAAIjFAAIgCAAIDVAAIgLAAIgDAAgAhyAAIAQAAIgCAAg");
	this.shape.setTransform(212.3,73.8);

	this.addChild(this.shape,this.instance_1,this.instance,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,31,263.8,52);


(lib.movigtable1copy3 = function() {
	this.initialize();

	// static text
	this.text = new cjs.Text("DA", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(179.4,37.9);

	this.text_1 = new cjs.Text("SA", "bold 11px 'CiscoSans'", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(48.1,37.9);

	// table
	this.instance = new lib.boxteal();
	this.instance.setTransform(0.1,33,1.266,0.845);

	this.instance_1 = new lib.boxbrown();
	this.instance_1.setTransform(126.9,33,1.266,0.845);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF8F7").s().p("ABlAAIjFAAIgCAAIDVAAIgLAAIgDAAgAhyAAIAQAAIgCAAg");
	this.shape.setTransform(212.3,73.8);

	this.addChild(this.shape,this.instance_1,this.instance,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,31,263.8,52);


(lib.movigtable1copy = function() {
	this.initialize();

	// static text
	this.text = new cjs.Text("DA", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(179.4,37.9);

	this.text_1 = new cjs.Text("SA", "bold 11px 'CiscoSans'", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(48.1,37.9);

	this.text_2 = new cjs.Text("209.165.201.1:80", "11px 'CiscoSans'", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(189.5,53);

	this.text_3 = new cjs.Text("209.165.200.226:1555", "11px 'CiscoSans'", "#393536");
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(3,53);

	// table
	this.instance = new lib.boxteal();
	this.instance.setTransform(0.1,33,1.266,0.845);

	this.instance_1 = new lib.boxbrown();
	this.instance_1.setTransform(126.9,33,1.266,0.845);

	this.addChild(this.instance_1,this.instance,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,31,263.8,52);


(lib.movigtable1 = function() {
	this.initialize();

	// static text
	this.text = new cjs.Text("DA", "bold 11px 'CiscoSans'", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(179.4,37.9);

	this.text_1 = new cjs.Text("SA", "bold 11px 'CiscoSans'", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(48.1,37.9);

	this.text_2 = new cjs.Text("209.165.201.1:80", "11px 'CiscoSans'", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(187.5,53);

	this.text_3 = new cjs.Text("192.168.10.10:1555", "11px 'CiscoSans'", "#393536");
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(8.9,53);

	// table
	this.instance = new lib.boxteal();
	this.instance.setTransform(0.1,33,1.266,0.845);

	this.instance_1 = new lib.boxbrown();
	this.instance_1.setTransform(126.9,33,1.266,0.845);

	this.addChild(this.instance_1,this.instance,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,31,263.8,52);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_378 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(378).call(this.frame_378).wait(1));

	// Table2
	this.instance = new lib.Symbol6();
	this.instance.setTransform(340,325.5,1,1,0,0,0,300,25);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205).to({alpha:1},0).wait(174));

	// Moving table1
	this.instance_1 = new lib.movigtable1();
	this.instance_1.setTransform(121.7,127.2,1,1,0,0,0,115.7,51.9);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.movigtable1copy3();
	this.instance_2.setTransform(404.4,149.2,1,1,0,0,0,115.7,51.9);

	this.instance_3 = new lib.movigtable1copy();
	this.instance_3.setTransform(404.4,149.2,1,1,0,0,0,115.7,51.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},42).to({state:[{t:this.instance_1}]},23).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},52).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_3}]},97).to({state:[{t:this.instance_3}]},37).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},22).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({alpha:1},10).wait(42).to({x:177.4},23).to({y:149.2},15).to({x:404.4},52).to({_off:true},19).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(178).to({_off:false},0).wait(97).to({x:515.7},37).to({y:101.2},16).to({x:531.4},20).wait(22).to({alpha:0},0).wait(9));

	// Moving table2
	this.instance_4 = new lib.movigtable2();
	this.instance_4.setTransform(121.7,228.6,1,1,0,0,0,115.7,51.9);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.movigtable2copy3();
	this.instance_5.setTransform(404.4,196.6,1,1,0,0,0,115.7,51.9);

	this.instance_6 = new lib.movigtable2copy();
	this.instance_6.setTransform(404.4,196.6,1,1,0,0,0,115.7,51.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_4}]},42).to({state:[{t:this.instance_4}]},23).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},52).to({state:[{t:this.instance_5}]},19).to({state:[{t:this.instance_6}]},12).to({state:[{t:this.instance_6}]},97).to({state:[{t:this.instance_6}]},37).to({state:[{t:this.instance_6}]},16).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_6}]},22).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({alpha:1},10).wait(42).to({x:122.4},0).to({x:177.4},23).to({y:196.6},15).to({x:404.4},52).to({_off:true},19).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(178).to({_off:false},0).wait(97).to({x:515.7},37).to({y:233.6},16).to({x:531.4},20).wait(22).to({alpha:0},0).wait(9));

	// cloudelabel
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(523.7,174.7,1,1,0,0,0,40.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({alpha:0},0).wait(166).to({alpha:1},0).wait(66));

	// arrows
	this.instance_8 = new lib.Bitmap2();
	this.instance_8.setTransform(382.6,191.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(205).to({_off:false},0).wait(174));

	// Texts
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(541,248,1,1,0,0,0,36.3,8.5);

	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(541,104.2,1,1,0,0,0,36.3,8.5);

	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(513.5,67.4,1,1,0,0,0,101.5,8.5);

	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(135.9,67.4,1,1,0,0,0,80,8.5);

	this.text = new cjs.Text(" 209.165.202.129", "11px 'CiscoSans'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(572.8,262);

	this.text_1 = new cjs.Text("209.165.201.1", "11px 'CiscoSans'", "#393536");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(579.3,130);

	this.text_2 = new cjs.Text("192.168.10.11", "11px 'CiscoSans'", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(113.7,257);

	this.text_3 = new cjs.Text("192.168.10.10", "11px 'CiscoSans'", "#393536");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(113.7,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:1}}]}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10,p:{alpha:0}},{t:this.instance_9,p:{alpha:0}}]},321).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:1}}]},49).wait(9));

	// topology
	this.instance_13 = new lib.Bitmap1();
	this.instance_13.setTransform(47,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(379));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,48.4,673.7,271.1);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,48.4,673.7,271.1);


// stage content:
(lib.media_9123A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(344,293.4,673.7,271.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;