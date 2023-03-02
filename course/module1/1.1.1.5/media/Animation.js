(function (lib, img, cjs) {

var p; // shortcut to reference prototypes




// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,50);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,52);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,61);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,39);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,155);

(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt07",width:"124",expand:"down",align:"left",class:"orangeCallOut"});
	//this.text = new cjs.Text("ID_txt07,w:124,a:l,e:d,ora", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,19);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt06",width:"134",expand:"down",align:"left",class:"orangeCallOut"});
	//this.text = new cjs.Text("ID_txt06,w:134,a:l,e:d,ora", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,19);

(lib.highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("A/8BRIAAiiMA/4AAAIAACig");
	this.shape.setTransform(204.5,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,409,16.4);


(lib.gradient = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-181.8,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-181.8,0,408,61);


(lib.outputBox_Black_DropShadow = function() {
	this.initialize();

	// output box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAhmAH0MhDLAAAIAAvnMBDLAAAg");
	this.shape.setTransform(219,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#393536"],[0,1],0.1,50,0,-49.9).s().p("EghlAHzIAAvmMBDKAAAIAAPmg");
	this.shape_1.setTransform(219,52);

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(78,76,77,0.839)").s().p("EghaAHyQgEAAgCgCQgDgDAAgEIAAvRQAAgEADgCQACgDAEAAMBC1AAAQAEAAADADQACACAAAEIAAPRQABAEgDADQgDACgEAAgEghggHuQgCACAAAEIAAPRQAAAEACACQACACAEAAMBC1AAAQAEAAADgCQABgCAAgEIAAvRQAAgEgBgCQgDgCgEAAMhC1AAAQgEAAgCACg");
	this.shape_2.setTransform(219,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(78,76,77,0.859)").s().p("EghaAHxQgEAAgCgCQgCgCAAgEIAAvRQAAgEACgCQACgCAEAAMBC1AAAQAEAAADACQABACAAAEIAAPRQAAAEgBACQgDACgEAAgEghggHuQgBACAAAEIAAPRQAAAEABACQACABAEAAMBC1AAAQAEAAACgBQACgCAAgEIAAvRQAAgEgCgCQgCgBgEAAMhC1AAAQgEAAgCABg");
	this.shape_3.setTransform(219,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(78,76,77,0.878)").s().p("EghaAHwQgEAAgCgBQgBgCAAgEIAAvRQAAgEABgCQACgBAEAAMBC1AAAQAEAAACABQACACAAAEIAAPRQAAAEgCACQgCABgEAAgEghfgHtQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAAPRQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAMBC1AAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAAvRQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAMhC1AAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(219,54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(78,76,77,0.816)").s().p("EghaAH0QgFgBgCgDQgDgCgBgFIAAvRQABgFADgCQACgDAFgBMBC1AAAQAEABAEADQACACAAAFIAAPRQAAAFgCACQgEADgEABgEghggHuQgDACAAAEIAAPRQAAAEADADQACACAEAAMBC1AAAQAEAAADgCQACgDAAgEIAAvRQABgEgDgCQgDgDgEAAMhC1AAAQgEAAgCADg");
	this.shape_5.setTransform(219,54);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(78,76,77,0.796)").s().p("EghaAH1QgFAAgDgEQgEgDAAgFIAAvRQAAgFAEgDQADgEAFAAMBC1AAAQAFAAADAEQADADAAAFIAAPRQAAAFgDADQgDAEgFAAgEghhgHvQgDACgBAFIAAPRQABAFADACQACADAFABMBC1AAAQAEgBAEgDQACgCAAgFIAAvRQAAgFgCgCQgEgDgEgBMhC1AAAQgFABgCADg");
	this.shape_6.setTransform(219,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(78,76,77,0.757)").s().p("EghaAH3QgGgBgDgDQgFgEAAgGIAAvRQAAgGAFgDQADgFAGAAMBC1AAAQAGAAAEAFQAEADAAAGIAAPRQAAAGgEAEQgEADgGABgEghjgHxQgDADgBAGIAAPRQABAGADADQADADAGABMBC1AAAQAFgBAEgDQADgDAAgGIAAvRQAAgGgDgDQgEgDgFgBMhC1AAAQgGABgDADg");
	this.shape_7.setTransform(219,54);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(78,76,77,0.737)").s().p("EghaAH4QgGAAgFgEQgDgFgBgGIAAvRQABgGADgFQAFgDAGgBMBC1AAAQAHABADADQAFAFAAAGIAAPRQAAAGgFAFQgDAEgHAAgEghjgHxQgFADAAAGIAAPRQAAAGAFAEQADADAGABMBC1AAAQAGgBAEgDQAEgEAAgGIAAvRQAAgGgEgDQgEgFgGAAMhC1AAAQgGAAgDAFg");
	this.shape_8.setTransform(219,54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(78,76,77,0.698)").s().p("EghaAH5QgHABgFgFQgEgFAAgHIAAvRQAAgHAEgFQAFgEAHAAMBC1AAAQAHAAAFAEQAEAFABAHIAAPRQgBAHgEAFQgFAFgHgBgEghlgHzQgEAEAAAHIAAPRQAAAHAEAEQAEAEAHAAMBC1AAAQAGAAAFgEQAEgEABgHIAAvRQgBgHgEgEQgFgEgGAAMhC1AAAQgHAAgEAEg");
	this.shape_9.setTransform(219,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(78,76,77,0.678)").s().p("EghaAH6QgHAAgGgEQgEgGAAgHIAAvRQAAgHAEgGQAGgEAHAAMBC1AAAQAIAAAEAEQAGAGgBAHIAAPRQABAHgGAGQgEAEgIAAgEghmgH0QgEAFAAAHIAAPRQAAAHAEAFQAFAFAHgBMBC1AAAQAHABAFgFQAEgFABgHIAAvRQgBgHgEgFQgFgEgHAAMhC1AAAQgHAAgFAEg");
	this.shape_10.setTransform(219,54);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(78,76,77,0.655)").s().p("EghaAH7QgIAAgFgEQgGgGABgIIAAvRQgBgIAGgFQAFgGAIABMBC1AAAQAIgBAGAGQAEAFAAAIIAAPRQAAAIgEAGQgGAEgIAAgEghngH1QgEAGAAAHIAAPRQAAAHAEAGQAGAEAHAAMBC1AAAQAIAAAEgEQAGgGgBgHIAAvRQABgHgGgGQgEgEgIAAMhC1AAAQgHAAgGAEg");
	this.shape_11.setTransform(219,54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(78,76,77,0.635)").s().p("EghaAH9QgJAAgFgGQgGgFAAgJIAAvRQAAgJAGgFQAFgGAJAAMBC1AAAQAJAAAFAGQAGAFgBAJIAAPRQABAJgGAFQgFAGgJAAgEghngH1QgGAFABAIIAAPRQgBAIAGAGQAFAEAIAAMBC1AAAQAIAAAGgEQAEgGAAgIIAAvRQAAgIgEgFQgGgGgIABMhC1AAAQgIgBgFAGg");
	this.shape_12.setTransform(219,54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(78,76,77,0.616)").s().p("EghaAH+QgJAAgGgGQgFgGgBgJIAAvRQABgJAFgGQAGgFAJgBMBC1AAAQAJABAGAFQAGAGgBAJIAAPRQABAJgGAGQgGAGgJAAgEghogH2QgGAFAAAJIAAPRQAAAJAGAFQAFAGAJAAMBC1AAAQAJAAAFgGQAGgFgBgJIAAvRQABgJgGgFQgFgGgJAAMhC1AAAQgJAAgFAGg");
	this.shape_13.setTransform(219,54);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(78,76,77,0.596)").s().p("EghaAH/QgJAAgGgHQgGgGgBgJIAAvRQABgJAGgGQAGgGAJgBMBC1AAAQAJABAHAGQAFAGAAAJIAAPRQAAAJgFAGQgHAHgJAAgEghpgH3QgFAGgBAJIAAPRQABAJAFAGQAGAGAJAAMBC1AAAQAJAAAGgGQAGgGgBgJIAAvRQABgJgGgGQgGgFgJgBMhC1AAAQgJABgGAFg");
	this.shape_14.setTransform(219,54);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(78,76,77,0.576)").s().p("EghaAIAQgJgBgHgGQgGgHgBgJIAAvRQABgJAGgHQAHgGAJgBMBC1AAAQAKABAGAGQAHAHAAAJIAAPRQAAAJgHAHQgGAGgKABgEghpgH3QgGAGgBAJIAAPRQABAJAGAGQAGAHAJAAMBC1AAAQAJAAAHgHQAFgGAAgJIAAvRQAAgJgFgGQgHgGgJgBMhC1AAAQgJABgGAGg");
	this.shape_15.setTransform(219,54);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(78,76,77,0.557)").s().p("EghaAIAQgKAAgGgGQgIgHABgKIAAvRQgBgKAIgGQAGgIAKABMBC1AAAQAKgBAHAIQAHAGAAAKIAAPRQAAAKgHAHQgHAGgKAAgEghqgH4QgGAHgBAJIAAPRQABAJAGAHQAHAGAJABMBC1AAAQAKgBAGgGQAHgHAAgJIAAvRQAAgJgHgHQgGgGgKgBMhC1AAAQgJABgHAGg");
	this.shape_16.setTransform(219,54);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(78,76,77,0.537)").s().p("EghaAIBQgLABgGgIQgIgGABgLIAAvRQgBgLAIgGQAGgIALABMBC1AAAQAKgBAHAIQAHAGABALIAAPRQgBALgHAGQgHAIgKgBgEghqgH4QgIAGABAKIAAPRQgBAKAIAHQAGAGAKAAMBC1AAAQAKAAAHgGQAHgHAAgKIAAvRQAAgKgHgGQgHgIgKABMhC1AAAQgKgBgGAIg");
	this.shape_17.setTransform(219,54);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(78,76,77,0.518)").s().p("EghaAICQgLABgHgIQgHgHAAgLIAAvRQAAgLAHgHQAHgHALAAMBC1AAAQALAAAHAHQAIAHAAALIAAPRQAAALgIAHQgHAIgLgBgEghrgH5QgIAGABALIAAPRQgBALAIAGQAGAIALgBMBC1AAAQAKABAHgIQAHgGABgLIAAvRQgBgLgHgGQgHgIgKABMhC1AAAQgLgBgGAIg");
	this.shape_18.setTransform(219,54);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(78,76,77,0.475)").s().p("EghaAIEQgLAAgJgHQgHgJAAgLIAAvRQAAgLAHgJQAJgHALAAMBC1AAAQAMAAAHAHQAJAJgBALIAAPRQABALgJAJQgHAHgMAAgEghtgH7QgIAIABALIAAPRQgBALAIAIQAIAIALgBMBC1AAAQALABAIgIQAHgIABgLIAAvRQgBgLgHgIQgIgIgLABMhC1AAAQgLgBgIAIg");
	this.shape_19.setTransform(219,54);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(78,76,77,0.455)").s().p("EghaAIGQgMgBgIgHQgJgJAAgMIAAvRQAAgMAJgIQAIgJAMAAMBC1AAAQAMAAAIAJQAJAIgBAMIAAPRQABAMgJAJQgIAHgMABgEghugH8QgHAJAAALIAAPRQAAALAHAJQAJAHALAAMBC1AAAQAMAAAHgHQAJgJgBgLIAAvRQABgLgJgJQgHgHgMAAMhC1AAAQgLAAgJAHg");
	this.shape_20.setTransform(219,54);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(78,76,77,0.435)").s().p("EghaAIHQgNAAgIgJQgJgIAAgNIAAvRQAAgNAJgIQAIgJANAAMBC1AAAQAMAAAJAJQAJAIgBANIAAPRQABANgJAIQgJAJgMAAgEghugH8QgJAIAAAMIAAPRQAAAMAJAJQAIAHAMABMBC1AAAQAMgBAIgHQAJgJgBgMIAAvRQABgMgJgIQgIgJgMAAMhC1AAAQgMAAgIAJg");
	this.shape_21.setTransform(219,54);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(78,76,77,0.416)").s().p("EghaAIIQgNAAgJgJQgIgJgBgNIAAvRQABgNAIgJQAJgIANgBMBC1AAAQANABAJAIQAJAJgBANIAAPRQABANgJAJQgJAJgNAAgEghvgH9QgJAIAAANIAAPRQAAANAJAIQAIAJANAAMBC1AAAQAMAAAJgJQAJgIgBgNIAAvRQABgNgJgIQgJgJgMAAMhC1AAAQgNAAgIAJg");
	this.shape_22.setTransform(219,54);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(78,76,77,0.396)").s().p("EghaAIJQgNAAgKgJQgJgKAAgNIAAvRQAAgNAJgKQAKgJANAAMBC1AAAQANAAAKAJQAIAKABANIAAPRQgBANgIAKQgKAJgNAAgEghwgH+QgIAJgBANIAAPRQABANAIAJQAJAJANAAMBC1AAAQANAAAJgJQAJgJgBgNIAAvRQABgNgJgJQgJgIgNgBMhC1AAAQgNABgJAIg");
	this.shape_23.setTransform(219,54);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(78,76,77,0.376)").s().p("EghaAIJQgOABgJgKQgKgJAAgOIAAvRQAAgOAKgJQAJgKAOAAMBC1AAAQAOAAAKAKQAIAJABAOIAAPRQgBAOgIAJQgKAKgOgBgEghxgH/QgJAKAAANIAAPRQAAANAJAKQAKAJANAAMBC1AAAQANAAAKgJQAIgKABgNIAAvRQgBgNgIgKQgKgJgNAAMhC1AAAQgNAAgKAJg");
	this.shape_24.setTransform(219,54);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(78,76,77,0.357)").s().p("EghaAIKQgOAAgJgJQgLgKABgOIAAvRQgBgOALgJQAJgLAOABMBC1AAAQAOgBAKALQAKAJAAAOIAAPRQAAAOgKAKQgKAJgOAAgEghxgH/QgKAJAAAOIAAPRQAAAOAKAJQAJAKAOgBMBC1AAAQAOABAKgKQAIgJABgOIAAvRQgBgOgIgJQgKgKgOAAMhC1AAAQgOAAgJAKg");
	this.shape_25.setTransform(219,54);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(78,76,77,0.337)").s().p("EghaAILQgOABgKgLQgLgKABgOIAAvRQgBgOALgKQAKgLAOABMBC1AAAQAOgBALALQAJAKABAOIAAPRQAAAOgKAKQgLALgOgBgEghxgH/QgLAJABAOIAAPRQgBAOALAKQAJAJAOAAMBC1AAAQAOAAAKgJQAKgKAAgOIAAvRQAAgOgKgJQgKgLgOABMhC1AAAQgOgBgJALg");
	this.shape_26.setTransform(219,54);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(78,76,77,0.314)").s().p("EghaAIMQgPAAgKgKQgKgKAAgPIAAvRQAAgPAKgKQAKgKAPAAMBC1AAAQAPAAALAKQAKAKAAAPIAAPRQAAAPgKAKQgLAKgPAAgEghygIAQgLAKABAOIAAPRQgBAOALAKQAKALAOgBMBC1AAAQAOABALgLQAJgKABgOIAAvRQAAgOgKgKQgLgLgOABMhC1AAAQgOgBgKALg");
	this.shape_27.setTransform(219,54);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(78,76,77,0.294)").s().p("EghaAINQgQABgKgLQgLgKABgQIAAvRQgBgQALgKQAKgLAQABMBC1AAAQAQgBAKALQAKAKAAAQIAAPRQAAAQgKAKQgKALgQgBgEghzgIBQgKAKAAAPIAAPRQAAAPAKAKQAKAKAPAAMBC1AAAQAPAAALgKQAKgKAAgPIAAvRQAAgPgKgKQgLgKgPAAMhC1AAAQgPAAgKAKg");
	this.shape_28.setTransform(219,54);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(78,76,77,0.255)").s().p("EghaAIQQgQAAgLgMQgMgLAAgQIAAvRQAAgQAMgLQALgMAQAAMBC1AAAQAQAAALAMQALALAAAQIAAPRQAAAQgLALQgLAMgQAAgEgh0gICQgMAKAAAQIAAPRQAAAQAMALQAKALAQAAMBC1AAAQAQAAALgLQAKgLAAgQIAAvRQAAgQgKgKQgLgMgQAAMhC1AAAQgQAAgKAMg");
	this.shape_29.setTransform(219,54);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(78,76,77,0.235)").s().p("EghaAIRQgRAAgLgMQgMgLAAgRIAAvRQAAgRAMgLQALgMARAAMBC1AAAQAQAAAMAMQAMALgBARIAAPRQABARgMALQgMAMgQAAgEgh1gIDQgMALAAAQIAAPRQAAAQAMALQALAMAQAAMBC1AAAQAQAAALgMQALgLAAgQIAAvRQAAgQgLgLQgLgMgQAAMhC1AAAQgQAAgLAMg");
	this.shape_30.setTransform(219,54);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(78,76,77,0.196)").s().p("EghaAISQgSABgMgMQgMgMAAgSIAAvRQAAgSAMgMQAMgMASAAMBC1AAAQARAAAMAMQANAMAAASIAAPRQAAASgNAMQgMAMgRgBgEgh3gIFQgLAMgBARIAAPRQABARALAMQAMAMARAAMBC1AAAQARAAAMgMQAMgMAAgRIAAvRQAAgRgMgMQgMgLgRgBMhC1AAAQgRABgMALg");
	this.shape_31.setTransform(219,54);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(78,76,77,0.016)").s().p("EghaAIcQgVAAgOgPQgPgPgBgVIAAvRQABgVAPgOQAOgPAVgBMBC1AAAQAVABAPAPQAPAOAAAVIAAPRQAAAVgPAPQgPAPgVAAgEgh9gILQgPAOAAAVIAAPRQAAAVAPAOQAOAOAVABMBC1AAAQAVgBAPgOQAOgOAAgVIAAvRQAAgVgOgOQgPgPgVAAMhC1AAAQgVAAgOAPg");
	this.shape_32.setTransform(219,54);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(78,76,77,0.035)").s().p("EghaAIbQgVgBgOgOQgPgOAAgVIAAvRQAAgVAPgOQAOgPAVAAMBC1AAAQAVAAAPAPQAOAOAAAVIAAPRQAAAVgOAOQgPAOgVABgEgh8gIKQgOANgBAVIAAPRQABAVAOANQANAOAVABMBC1AAAQAVgBAOgOQANgNAAgVIAAvRQAAgVgNgNQgOgOgVgBMhC1AAAQgVABgNAOg");
	this.shape_33.setTransform(219,54);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(78,76,77,0.055)").s().p("EghaAIaQgVgBgNgOQgOgNgBgVIAAvRQABgVAOgNQANgOAVgBMBC1AAAQAVABAOAOQANANAAAVIAAPRQAAAVgNANQgOAOgVABgEgh7gIJQgPANAAAUIAAPRQAAAUAPAOQANAOAUAAMBC1AAAQAUAAAOgOQANgOAAgUIAAvRQAAgUgNgNQgOgPgUAAMhC1AAAQgUAAgNAPg");
	this.shape_34.setTransform(219,54);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(78,76,77,0.075)").s().p("EghaAIZQgUAAgNgOQgPgOAAgUIAAvRQAAgUAPgNQANgPAUAAMBC1AAAQAUAAAOAPQANANAAAUIAAPRQAAAUgNAOQgOAOgUAAgEgh7gIJQgOANAAAUIAAPRQAAAUAOANQANAOAUAAMBC1AAAQAUAAANgOQANgNAAgUIAAvRQAAgUgNgNQgNgOgUAAMhC1AAAQgUAAgNAOg");
	this.shape_35.setTransform(219,54);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(78,76,77,0.094)").s().p("EghaAIYQgUAAgNgOQgOgNAAgUIAAvRQAAgUAOgNQANgOAUAAMBC1AAAQAUAAANAOQANANAAAUIAAPRQAAAUgNANQgNAOgUAAgEgh6gIIQgNANAAATIAAPRQAAATANANQANANATAAMBC1AAAQATAAAOgNQANgNgBgTIAAvRQABgTgNgNQgOgNgTAAMhC1AAAQgTAAgNANg");
	this.shape_36.setTransform(219,54);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(78,76,77,0.114)").s().p("EghaAIWQgTAAgNgNQgNgNAAgTIAAvRQAAgTANgNQANgNATAAMBC1AAAQATAAAOANQANANgBATIAAPRQABATgNANQgOANgTAAgEgh6gIIQgMANAAATIAAPRQAAATAMANQANAMATAAMBC1AAAQASAAAOgMQANgNgBgTIAAvRQABgTgNgNQgOgMgSAAMhC1AAAQgTAAgNAMg");
	this.shape_37.setTransform(219,54);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(78,76,77,0.133)").s().p("EghaAIVQgTAAgNgMQgMgNAAgTIAAvRQAAgTAMgNQANgMATAAMBC1AAAQASAAAOAMQANANgBATIAAPRQABATgNANQgOAMgSAAgEgh5gIHQgMAMAAATIAAPRQAAATAMAMQAMAMATAAMBC1AAAQASAAANgMQANgMAAgTIAAvRQAAgTgNgMQgNgMgSAAMhC1AAAQgTAAgMAMg");
	this.shape_38.setTransform(219,54);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(78,76,77,0.176)").s().p("EghaAITQgSABgMgMQgMgNAAgSIAAvRQAAgSAMgMQAMgMASAAMBC1AAAQASAAAMAMQAMAMABASIAAPRQgBASgMANQgMAMgSgBgEgh4gIGQgMAMAAASIAAPRQAAASAMAMQAMAMASgBMBC1AAAQARABAMgMQANgMAAgSIAAvRQAAgSgNgMQgMgMgRAAMhC1AAAQgSAAgMAMg");
	this.shape_39.setTransform(219,54);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(78,76,77,0.153)").s().p("EghaAIUQgTAAgMgMQgMgMAAgTIAAvRQAAgTAMgMQAMgMATAAMBC1AAAQASAAANAMQANAMAAATIAAPRQAAATgNAMQgNAMgSAAgEgh4gIGQgMAMAAASIAAPRQAAASAMANQAMAMASgBMBC1AAAQASABAMgMQAMgNABgSIAAvRQgBgSgMgMQgMgMgSAAMhC1AAAQgSAAgMAMg");
	this.shape_40.setTransform(219,54);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(78,76,77,0.898)").s().p("EghaAHvQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAvRQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAMBC1AAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIAAPRQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAgEghegHsQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBABIAAPRQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABMBC1AAAQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAvRQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBMhC1AAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_41.setTransform(219,54);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(78,76,77,0.918)").s().p("EghaAHvQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAvRQABgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBMBC1AAAQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAAPRQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABgEghdgHrQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAABIAAPRIACAEIADABMBC1AAAIADgBIACgEIAAvRIgCgDIgDgCMhC1AAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_42.setTransform(219,54);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(78,76,77,0.937)").s().p("EghaAHuIgDgBIgCgEIAAvRQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBABAAMBC1AAAIADACIACADIAAPRIgCAEIgDABgEghdgHrIgBADIAAPRIABADIADABMBC1AAAIACgBIABgDIAAvRIgBgDIgCgBMhC1AAAIgDABg");
	this.shape_43.setTransform(219,54);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(78,76,77,0.957)").s().p("EghaAHtIgDgBIgBgDIAAvRIABgDIADgBMBC1AAAIACABIABADIAAPRIgBADIgCABgEghcgHqIgBACIAAPRIABACIACABMBC1AAAIACgBIAAgCIAAvRIAAgCIgCgBMhC1AAAIgCABg");
	this.shape_44.setTransform(219,54);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(78,76,77,0.976)").s().p("EghaAHsIgCgBIgBgCIAAvRIABgCIACgBMBC1AAAIACABIAAACIAAPRIAAACIgCABgEghbgHpIgBABIAAPRIABACMBC2AAAIABAAIAAgCIAAvSIgBgBMhC1AAAIgBABg");
	this.shape_45.setTransform(219,54);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(78,76,77,0.718)").s().p("EghaAH4QgHAAgEgEQgEgEAAgHIAAvRQAAgHAEgEQAEgEAHAAMBC1AAAQAGAAAFAEQAEAEABAHIAAPRQgBAHgEAEQgFAEgGAAgEghlgHzQgDAFgBAGIAAPRQABAGADAFQAFAEAGAAMBC1AAAQAHAAADgEQAFgFAAgGIAAvRQAAgGgFgFQgDgDgHgBMhC1AAAQgGABgFADg");
	this.shape_46.setTransform(219,54);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(78,76,77,0.776)").s().p("EghaAH2QgGgBgDgDQgDgDgBgGIAAvRQABgGADgDQADgDAGgBMBC1AAAQAFABAEADQADADAAAGIAAPRQAAAGgDADQgEADgFABgEghigHwQgEADAAAFIAAPRQAAAFAEADQADAEAFAAMBC1AAAQAFAAADgEQADgDAAgFIAAvRQAAgFgDgDQgDgEgFAAMhC1AAAQgFAAgDAEg");
	this.shape_47.setTransform(219,54);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(78,76,77,0.216)").s().p("EghaAISQgRAAgMgMQgLgMgBgRIAAvRQABgRALgMQAMgLARgBMBC1AAAQARABAMALQAMAMAAARIAAPRQAAARgMAMQgMAMgRAAgEgh2gIEQgMALAAARIAAPRQAAARAMALQALAMARAAMBC1AAAQAQAAAMgMQAMgLgBgRIAAvRQABgRgMgLQgMgMgQAAMhC1AAAQgRAAgLAMg");
	this.shape_48.setTransform(219,54);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(78,76,77,0.275)").s().p("EghaAIPQgQAAgKgLQgMgLAAgQIAAvRQAAgQAMgKQAKgMAQAAMBC1AAAQAQAAALAMQAKAKAAAQIAAPRQAAAQgKALQgLALgQAAgEgh0gICQgLAKABAQIAAPRQgBAQALAKQAKALAQgBMBC1AAAQAQABAKgLQAKgKAAgQIAAvRQAAgQgKgKQgKgLgQABMhC1AAAQgQgBgKALg");
	this.shape_49.setTransform(219,54);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(78,76,77,0.498)").s().p("EghaAIDQgLABgIgIQgIgIABgLIAAvRQgBgLAIgIQAIgIALABMBC1AAAQALgBAIAIQAHAIABALIAAPRQgBALgHAIQgIAIgLgBgEghsgH6QgHAHAAALIAAPRQAAALAHAHQAHAIALgBMBC1AAAQALABAHgIQAIgHAAgLIAAvRQAAgLgIgHQgHgHgLAAMhC1AAAQgLAAgHAHg");
	this.shape_50.setTransform(219,54);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4E4C4D").s().p("EAhbAHrMhC2AAAIgBgCIAAvRIABgBIABgBMBC1AAAIABABIAAPSIAAACIgBAAg");
	this.shape_51.setTransform(219,54);

	this.addChild(this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,108);


(lib.questionMark_red = function() {
	this.initialize();

	// details
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-17.1,-25.5);

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.8,18.3,28.7,-9.3).s().p("AglC5QgNgMAAgXQAAgeAJgWQAKgWAPgPQAPgRAYgWIAggcQAKgKAHgMQAHgNAAgOQAAgdgVgSQgVgUghAAQglAAgSAUQgSATgNAmQgMAnghAAQgUAAgNgNQgOgOAAgQQAAghAVgjQAWgiApgWQApgXA1AAQAzAAAnATQAnASAVAhQAVAgAAAmQAAAegLAXQgNAUgQARIg8A3QgMAKgHAIQgIAJgDAHQgEAHgCAGIgGAYQgGAlghAAQgTAAgMgMg");
	this.shape.setTransform(0,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.4,-9.9,29.2,-37.5).s().p("AgjAnQgQgOAAgXIAAgCIAAgBQAAgVAOgOQAQgPAVAAQAWAAAPAPQAPAOAAAVIAAABIAAACQAAAXgPANQgQAOgVAAQgTAAgQgNg");
	this.shape_1.setTransform(-0.5,22);

	// mask
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E31C23").s().p("AgoD8QgQgOAAgZQAAgWAPgPQAQgPAWgBQAVABAPAPQAPAPAAAWQAAAYgQAOQgQAOgTABQgVAAgQgOgAglB0QgNgLAAgYQAAgdAJgWQAKgWAPgOQAPgRAYgWIAggdQAKgKAHgNQAHgNAAgOQAAgcgVgTQgVgUghABQglgBgSAUQgSAUgNAlQgMAoghAAQgUAAgNgOQgOgOAAgQQAAghAVgiQAWgjApgWQApgWA1AAQAzgBAnAUQAnASAVAgQAVAgAAAmQAAAegLAXQgNAWgQARIg8A1QgMAKgHAJQgIAJgDAGQgEAHgCAHIgGAYQgGAlghAAQgTAAgMgNg");
	this.shape_2.setTransform(0,0.7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.6,-25.9,35.2,53.2);


(lib.exclamation_red = function() {
	this.initialize();

	// details
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-1.5,-24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.502)","rgba(255,255,255,0.302)"],[0,1],0.4,21.2,0.1,-22.3).s().p("AgaDEIgLmHIAgAAIANAAIAQAAIAPAAIgCAGIgFAAIAAACIg+AAIALF6IgBAAIAAAEIAAABg");
	this.shape.setTransform(0.7,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.4)").s().p("AAcgHQgLgIgRAAQgPgBgKAIQgKAHgMAZIAAAAIAAgCQAAgUANgLQAPgOATAAQAUAAAPAOQANALABAUIAAACIAAAAQgKgYgLgHg");
	this.shape_1.setTransform(0.6,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.502)").s().p("AghAKQgOgKAAgWQANAYAKAGQALAGANAAQANAAAMgHQALgGANgXQgCAVgNALQgPANgTAAQgSAAgPgNg");
	this.shape_2.setTransform(0.6,24.6);

	// shading
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.353)","rgba(214,214,214,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.122)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],2.1,26.5,42.9,-23.3).s().p("AgbDGIgMmLIBPAAIgMGLg");
	this.shape_3.setTransform(0.6,-5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.4,-9.9,29.2,-37.5).s().p("AgjAnQgQgPAAgWIAAgCIAAgBQAAgUAOgPQAQgPAVAAQAWAAAPAPQAPAPAAAUIAAABIAAACQAAAWgPAOQgQAOgVAAQgTAAgQgNg");
	this.shape_4.setTransform(0.6,22);

	// mask
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E31C23").s().p("AgjD6QgQgOAAgaQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAWQAAAZgPAOQgQAOgVAAQgTAAgQgNgAgbCFIgMmLIBPAAIgMGLg");
	this.shape_5.setTransform(0.6,0.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-25.4,10.6,52.7);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap1();
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


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_554 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(554).call(this.frame_554).wait(1));

	// envelope
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(89.6,122.8,0.309,0.309,0,0,0,1.5,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.get(1)).to({regX:1.2,regY:0,x:146.3,y:100.8},15).to({regX:1.3,regY:0.1,x:271.7,y:162.6},30).wait(252).to({regY:0,x:387.7,y:162.5},21).wait(158).to({regX:1.5,x:387.8,y:162.3},0).to({regX:1.3,regY:0.1,x:520.7,y:100.8},32).to({regX:1.6,regY:0,x:574.5,y:77},21).to({alpha:0},12,cjs.Ease.get(1)).wait(4));

	// lazytext
	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(77,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(555));

	// orange textbox 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(119,224.5,1,1,0,0,0,62.2,6.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(381).to({alpha:1},0).wait(99).to({alpha:0},0).wait(75));

	// exclamation 2
	this.instance_3 = new lib.exclamation_red();
	this.instance_3.setTransform(387.8,134,0.618,0.618,0,0,0,0.6,0.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(391).to({_off:false},0).to({alpha:0},7).to({alpha:1},20).to({alpha:0},22).to({alpha:1},22).to({alpha:0},17).to({_off:true},1).wait(75));

	// question mark 2
	this.instance_4 = new lib.questionMark_red();
	this.instance_4.setTransform(387.8,132.7,0.618,0.618,0,0,0,0,-1.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(334).to({_off:false},0).to({alpha:1},7).to({alpha:0},12).to({alpha:1},14).to({alpha:0},14).to({_off:true},1).wait(173));

	// output text 2
	this.text = new cjs.Text("R2# show ip route \nCodes: \nC - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP\nD - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\nN1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\nE1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\ni - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2 \nia - IS-IS inter area, * - candidate default \nU - per-user static route, o - ODR\nP - periodic downloaded static route\n\nGateway of last resort is not set\n\nC    192.168.3.0/24 is directly connected, FastEthernet0/0\nC    192.168.2.0/24 is directly connected, Serial0/0/0\nS    192.168.1.0/24 [1/0] via 192.168.2.1", "10px 'Courier New'", "#FFFFFF");
	this.text.lineHeight = 9.1;
	this.text.lineWidth = 372;
	this.text.setTransform(201.1,203,1.235,1.235);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(381).to({_off:false},0).to({_off:true},99).wait(75));

	// highlight 2
	this.instance_5 = new lib.highlight();
	this.instance_5.setTransform(393.5,390.5,1.144,0.8,0,0,0,170.2,10);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(401).to({_off:false},0).to({alpha:1},16).to({_off:true},63).wait(75));

	// output box 2
	this.instance_6 = new lib.outputBox_Black_DropShadow();
	this.instance_6.setTransform(428.4,376.6,1.091,2.3,0,0,0,215,79.8);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(381).to({_off:false},0).to({_off:true},99).wait(75));

	// orange textbox 1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(576.8,229.3,1,1,0,0,0,66.9,6.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({alpha:1},0).wait(200).to({alpha:0},0).wait(258));

	// exclamation 1
	this.instance_8 = new lib.exclamation_red();
	this.instance_8.setTransform(271.7,133.8,0.618,0.618,0,0,0,0.5,0.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(106).to({_off:false},0).to({alpha:0},13).to({alpha:1},16).to({alpha:0},18).to({alpha:1},17).to({alpha:0},16).to({alpha:1},18).to({alpha:0},18).to({alpha:1},18).to({alpha:0},19).to({alpha:1},8).to({_off:true},30).wait(258));

	// question mark 1
	this.instance_9 = new lib.questionMark_red();
	this.instance_9.setTransform(271.8,132.7,0.618,0.618,0,0,0,0.1,-1.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55).to({_off:false},0).to({alpha:1},7).to({alpha:0},12).to({alpha:1},12).to({alpha:0},11).to({_off:true},1).wait(457));

	// output text 1
	this.text_1 = new cjs.Text("R1# show ip route \nCodes: \nC - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP\nD - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\nN1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\nE1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\ni - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2 \nia - IS-IS inter area, * - candidate default\nU - per-user static route, o - ODR\nP - periodic downloaded static route\n\nGateway of last resort is not set\n\nC    192.168.1.0/24 is directly connected, FastEthernet0/0\nC    192.168.2.0/24 is directly connected, Serial0/0/0\nS    192.168.3.0/24 [1/0] via 192.168.2.2", "10px 'Courier New'", "#FFFFFF");
	this.text_1.lineHeight = 10.4;
	this.text_1.lineWidth = 373;
	this.text_1.setTransform(34.2,203,1.235,1.235);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(97).to({_off:false},0).to({_off:true},200).wait(258));

	// highlight 1
	this.instance_10 = new lib.highlight();
	this.instance_10.setTransform(226.2,389.8,1.144,0.8,0,0,0,171.2,10);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(127).to({_off:false},0).to({alpha:1},16).wait(14).to({y:403.8},14).wait(13).to({y:417.3},14).wait(16).to({alpha:0},9).to({alpha:1},9).to({alpha:0},9).to({alpha:1},8).to({alpha:0},9).to({alpha:1},9).to({_off:true},30).wait(258));

	// output box 1
		this.instance_11 = new lib.outputBox_Black_DropShadow();
	this.instance_11.setTransform(259.9,376.6,1.091,2.3,0,0,0,215,79.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);
	this.instance_11._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({_off:true},200).wait(258));

	// gradient 2
	this.instance_12 = new lib.gradient("synched",0);
	this.instance_12.setTransform(387.8,160.3,0.189,0.194,0,0,180,21.9,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(366).to({_off:false},0).to({scaleX:0.78,scaleY:0.8,x:429.8},17,cjs.Ease.get(1)).to({_off:true},97).wait(75));

	// gradient 1
	this.instance_13 = new lib.gradient("synched",0);
	this.instance_13.setTransform(282.2,151.1,0.208,0.264,0,0,0,71.9,-2.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(79).to({_off:false},0).to({regX:71.6,scaleX:0.8,scaleY:0.8,x:268.9,y:160.4,alpha:1},18,cjs.Ease.get(1)).to({_off:true},200).wait(258));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.8,30.7,590.4,210.9);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(56.8,30.7,590.4,210.9);


// stage content:
(lib.media_1115 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(396.8,275.7,590.4,210.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;