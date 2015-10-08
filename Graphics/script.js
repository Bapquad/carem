// JavaScript Document
var TickGID;
var RequestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame || 
							function( callback ){
								return window.setTimeout(callback, 1000 / 60);
							};
var cancelAnimationFrame = window.cancelAnimationFrame || 
							function(animId) {
								return window.clearTimeout(animId);
							};
function UnTick() {
	cancelAnimationFrame(TickGID);	
}

function CyGame() {
	/** Create Layer */
	var Layer01 = new CanvasShaper("canvas_Slider");
	var Layer02 = new CanvasShaper("canvas_Slider");
	var Layer03 = new CanvasShaper("canvas_Slider2");
	var rot = 0.0;
	
	/** Set Layer */
	Layer01.setBackground(255, 255, 255, 1);
	Layer02.setBackground(255, 150, 0, 1);
	Layer03.setBackground(255, 150, 0, 1);
	
	/** Initialize the loading screen */
	Layer01.OrganBar = new CanvasShaper_SymbolRect(Layer01);
	Layer01.OrganBar.setPosition(10, 480/2-10);
	Layer01.OrganBar.setSize(1, 10);
	Layer01.OrganBar.setBackground([{r:255, g:138, b:0, a:1, stop:0}]);
	/** Queue File in Asset List */
	var canvasShaperAssetManager = new CanvasShaper_AssetManager("jpg|gif|png","wav|ogg|mp3");
	canvasShaperAssetManager.QueueFile("images/flower.jpg");
	canvasShaperAssetManager.QueueFile("images/load_bar.png");
	canvasShaperAssetManager.QueueFile("images/heavy-sample.gif");
	canvasShaperAssetManager.QueueFile("images/img_lamp.jpg");
	canvasShaperAssetManager.QueueFile("images/filter-sample.jpg");
	canvasShaperAssetManager.QueueDownloadAll();
	
	function RunGameLevel() {
		Layer02.Flower1.setRotate(rot+=0.1);
		Layer02.Swap();
		Layer03.Swap();
		TickGID = RequestAnimationFrame(RunGameLevel);
	}
	
	function CreateGameLevel() {
		Layer02.addEventListener("click", function(){}, false);
		Layer02.Flower1 = new CanvasShaper_SymbolRect(Layer02);
		Layer02.Flower1.setPosition(60, 50);
		Layer02.Flower1.setSize(120, 20);
		Layer02.Flower1.setOrgin(30, 25);
		Layer02.Flower1.setStrokeColor([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Flower1.Graphics.setMask();
		
		Layer02.RoundRect = new CanvasShaper_SymbolRoundRect(Layer02);
		Layer02.RoundRect.setPosition(30, 30);
		Layer02.RoundRect.setSize(120, 35);
		Layer02.RoundRect.setRadius(5);
		Layer02.RoundRect.setStrokeColor([{r:128, g:128, b:128, a:1, stop:0}]);
		Layer02.RoundRect.Graphics.endMask();
		
		Layer02.RoundRect2 = new CanvasShaper_SymbolRoundRect(Layer02);
		Layer02.RoundRect2.setPosition(60, 10);
		Layer02.RoundRect2.setSize(150, 35);
		Layer02.RoundRect2.setRound(5, 10, 15, 20);
		Layer02.RoundRect2.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.RoundRect2.setBackground([{r:255, g:255, b:255, a:0.5, stop:0}]);
		
		Layer02.Circle = new CanvasShaper_SymbolCircle(Layer02);
		Layer02.Circle.setPosition(220, 15);
		Layer02.Circle.setDistance(30);
		Layer02.Circle.setStrokeWidth(3);
		Layer02.Circle.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Circle.setBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		
		Layer02.Oval = new CanvasShaper_SymbolOval(Layer02);
		Layer02.Oval.setPosition(255, 20);
		Layer02.Oval.setSize(20, 50);
		Layer02.Oval.setRotate(45);
		Layer02.Oval.setBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Oval.setShadow({r:0,g:0,b:0,a:1}, {x:0,y:0}, 20);
		
		Layer02.SliceOval = new CanvasShaper_SymbolArc(Layer02);
		Layer02.SliceOval.setPosition(10, 50);
		Layer02.SliceOval.setSize(30, 30);
		Layer02.SliceOval.setSlice(270, 120);
		Layer02.SliceOval.setBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.SliceOval.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.SliceOval.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 10);
		
		Layer02.Polygon = new CanvasShaper_SymbolPolygon(Layer02);
		Layer02.Polygon.setPosition(40, 50);
		Layer02.Polygon.setSize(30, 30);
		Layer02.Polygon.setSide(6);
		Layer02.Polygon.setBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Polygon.setShadow({r:0, g:0, b:0, a:.5}, {x:0, y:0}, 10);
		Layer02.Polygon.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		
		Layer02.Line = new CanvasShaper_SymbolLine(Layer02);
		Layer02.Line.setPosition(80, 65);
		Layer02.Line.setStartPoint(0, 0);
		Layer02.Line.setEndPoint(100, 0);
		Layer02.Line.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Line.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Line.setStrokeWidth(2);
		
		Layer02.Shape = new CanvasShaper_SymbolShape(Layer02);
		Layer02.Shape.setPosition(160, 50);
		Layer02.Shape.startPoint(20, 20);
		Layer02.Shape.addPoint(100, 20, 20, 50, 100, 50);
		Layer02.Shape.addPoint(30, 30, 100, -10, 20, -10);
		Layer02.Shape.setShadow({r:0, g:0, b:0, a:.51}, {x:0, y:0}, 20);
		Layer02.Shape.setBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Shape.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		
		Layer02.OrganBarStroke = new CanvasShaper_SymbolRect(Layer02);
		Layer02.OrganBarStroke.setPosition(330, 154);
		Layer02.OrganBarStroke.setSize(300, 30);
		Layer02.OrganBarStroke.setBackground([{r:128, g:128, b:128, a:1, stop:0}]);
		Layer02.OrganBarStroke.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.OrganBarStroke.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.OrganBarStroke.setStrokeImage(canvasShaperAssetManager.getAsset("images/img_lamp.jpg"));
		
		Layer02.Text = new CanvasShaper_Text(Layer02);
		Layer02.Text.setPosition(0, 0);
		Layer02.Text.setOrgin(0, 0);
		Layer02.Text.setRotate(0);
		Layer02.Text.setFont("Arial");
		Layer02.Text.setSize(12);
		Layer02.Text.setBaseLine(CANVAS_SHAPER_TEXT_BASELINE_TOP);
		Layer02.Text.setAlign("left");
		Layer02.Text.addText("Normal", 30, 185);
		Layer02.Text.addText("GrayScale", 180, 185);
		Layer02.Text.addText("Brightness", 30, 300);
		Layer02.Text.addText("Threshold", 180, 300);
		Layer02.Text.addText("Sharpen", 30, 415);
		Layer02.Text.addText("Blur", 180, 415);
		Layer02.Text.setBackground([{r:255, g:255, b:255, a:1, stop:0}]);
		//Layer02.Text.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Text.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Text.hitPoint = function(x, y){
			console.log("In Me");
		};
		/** Non-Filter Image */
		Layer02.Image00 = new CanvasShaper_Image(
			Layer02, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer02.Image00.setPosition(30, 100);
		Layer02.Image00.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.Image00.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image00.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image00.setStrokeWidth(6);
		/** GrayScale-Filter Image */
		Layer02.Image01 = new CanvasShaper_Image(
			Layer02, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer02.Image01.setPosition(180, 100);
		Layer02.Image01.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.Image01.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image01.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image01.setFilter(CanvasShaper_Filter.GrayScale);
		Layer02.Image01.setStrokeWidth(6);
		/** Brightness-Filter Image */
		Layer02.Image02 = new CanvasShaper_Image(
			Layer02, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer02.Image02.setPosition(30, 215);
		Layer02.Image02.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.Image02.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image02.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image02.setFilter(CanvasShaper_Filter.Brightness, 100);
		Layer02.Image02.setStrokeWidth(6);
		/** Threshold-Filter Image */
		Layer02.Image03 = new CanvasShaper_Image(
			Layer02, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer02.Image03.setPosition(180, 215);
		Layer02.Image03.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.Image03.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image03.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image03.setFilter(CanvasShaper_Filter.Threshold, 100);
		Layer02.Image03.setStrokeWidth(6);
		/** Sharpen with Convolute-Filter Image */
		Layer02.Image04 = new CanvasShaper_Image(
			Layer02, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer02.Image04.setPosition(30, 330);
		Layer02.Image04.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.Image04.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image04.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image04.setFilter(
			CanvasShaper_Filter.Convolute, 
			[ 0, -1,  0,
			 -1,  5, -1,
             0, -1,  0]
		);
		Layer02.Image04.setStrokeWidth(6);
		/** Blur with Convolute-Filter Image */
		Layer02.Image05 = new CanvasShaper_Image(
			Layer02, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer02.Image05.setPosition(180, 330);
		Layer02.Image05.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer02.Image05.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image05.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image05.setFilter(
			CanvasShaper_Filter.Convolute, 
			[1/9, 1/9, 1/9, 
			 1/9, 1/9, 1/9, 
			 1/9, 1/9, 1/9]
		);
		Layer02.Image04.setStrokeWidth(6);
		/** Create Static Text For Layer 03 */
		Layer03.Text = new CanvasShaper_Text(Layer03);
		Layer03.Text.setPosition(0, 0);
		Layer03.Text.setOrgin(0, 0);
		Layer03.Text.setRotate(0);
		Layer03.Text.setFont("Arial");
		Layer03.Text.setSize(12);
		Layer03.Text.setBaseLine(CANVAS_SHAPER_TEXT_BASELINE_TOP);
		Layer03.Text.setAlign("left");
		Layer03.Text.addText("Sobel", 30, 115);
		Layer03.Text.addText("Custom", 180, 115);
		Layer03.Text.setBackground([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer03.Text.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer03.Text.hitPoint = function(x, y){
			console.log("In Me");
		};
		/** Sobel with Convolute-Filter Image */
		Layer03.Image01 = new CanvasShaper_Image(
			Layer03, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer03.Image01.setPosition(30, 30);
		Layer03.Image01.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer03.Image01.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer03.Image01.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer03.Image01.setFilter(function(px) {
			px = CanvasShaper_Filter.GrayScale(px);
			var vertical = CanvasShaper_Filter.ConvoluteFloat32(
				px,
				[-1,-2,-1,
				0, 0, 0,
				1, 2, 1]
			);
			var horizontal = CanvasShaper_Filter.ConvoluteFloat32(
				px,
				[-1,0,1,
				-2,0,2,
				-1,0,1]
			);
			var id = CanvasShaper_Filter.createImageData(vertical.width, vertical.height);
			for (var i=0; i<id.data.length; i+=4) {
				var v = Math.abs(vertical.data[i]);
				id.data[i] = v;
				var h = Math.abs(horizontal.data[i]);
				id.data[i+1] = h
				id.data[i+2] = (v+h)/4;
				id.data[i+3] = 255;
			}
			return id;
		});
		Layer03.Image01.setStrokeWidth(6);
		/** Custom with Convolute-Filter */
		Layer03.Image02 = new CanvasShaper_Image(
			Layer03, 
			canvasShaperAssetManager.getAsset("images/filter-sample.jpg")
		);
		Layer03.Image02.setPosition(180, 30);
		Layer03.Image02.setStrokeShape(CANVAS_SHAPER_LINE_JOIN_ROUND, 5);
		Layer03.Image02.setStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer03.Image02.setShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer03.Image02.setFilter(
			CanvasShaper_Filter.Convolute, 
			[-1,-1,-1,
			  0, 0, 0,
			  1, 1, 1], 
			true
		);
		Layer03.Image02.setStrokeWidth(6);
		
		TickGID = RequestAnimationFrame(RunGameLevel);		
	}
	
	function LoadAssetProgress() {
		Layer01.OrganBar.setSize((canvasShaperAssetManager.getProgress()/100)*300, 2);
		Layer01.Swap();
		if(canvasShaperAssetManager.isComplete()) {
			UnTick();
			setTimeout(CreateGameLevel, 300);
			return;
		}
		TickGID = RequestAnimationFrame(LoadAssetProgress);
	}
	TickGID = LoadAssetProgress();
}

$(document).ready(function(e) {
	CyGame();
});

$(window).resize(function(e) {
	
});