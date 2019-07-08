// JavaScript Document
var TickGID;
var RequestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame || 
							function( callback ){
								return window.SetTimeout(callback, 1000 / 60);
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
	var Layer01 = new Carem.Layer("canvas_Slider");
	var Layer02 = new Carem.Layer("canvas_Slider");
	var Layer03 = new Carem.Layer("canvas_Slider2");
	var rot = 0.0;
	
	/** Set Layer */
	Layer01.SetBackground(255, 255, 255, 1);
	Layer02.SetBackground(255, 150, 0, 1);
	Layer03.SetBackground(255, 150, 0, 1);
	
	/** Initialize the loading screen */
	Layer01.OrganBar = new Carem.SymbolRect(Layer01);
	Layer01.OrganBar.SetPosition(10, 480/2-10);
	Layer01.OrganBar.SetSize(1, 10);
	Layer01.OrganBar.SetBackground([{r:255, g:138, b:0, a:1, stop:0}]);
	/** Queue File in Asset List */
	var canvasShaperAssetManager = new Carem.AssetManager("jpg|gif|png","wav|ogg|mp3");
	canvasShaperAssetManager.QueueFile("images/flower.jpg");
	canvasShaperAssetManager.QueueFile("images/load_bar.png");
	canvasShaperAssetManager.QueueFile("images/img_lamp.jpg");
	canvasShaperAssetManager.QueueFile("images/filter-sample.jpg");
	canvasShaperAssetManager.QueueDownloadAll();
	
	function RunGameLevel() {
		Layer02.Swap();
		Layer03.Swap();
		TickGID = RequestAnimationFrame(RunGameLevel);
	}
	
	function CreateGameLevel() {
		Layer02.addEventListener("click", function(){}, false);
		Layer02.Flower1 = new Carem.SymbolRect(Layer02);
		// Layer02.Flower1.SetRotate(25);
		Layer02.Flower1.SetPosition(60, 50);
		Layer02.Flower1.SetSize(120, 20);
		Layer02.Flower1.SetOrgin(30, 25);
		Layer02.Flower1.SetStrokeColor([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Flower1.SetMask();
		
		Layer02.RoundRect = new Carem.SymbolRoundRect(Layer02);
		Layer02.RoundRect.SetPosition(30, 30);
		Layer02.RoundRect.SetSize(120, 35);
		Layer02.RoundRect.SetRadius(5);
		Layer02.RoundRect.SetStrokeColor([{r:128, g:128, b:128, a:1, stop:0}]);
		
		Layer02.RoundRect2 = new Carem.SymbolRoundRect(Layer02);
		Layer02.RoundRect2.SetPosition(60, 10);
		Layer02.RoundRect2.SetSize(150, 35);
		Layer02.RoundRect2.SetRound(5, 10, 15, 20);
		Layer02.RoundRect2.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.RoundRect2.SetBackground([{r:255, g:255, b:255, a:0.5, stop:0}]);
		Layer02.RoundRect2.EndMask();
		
		Layer02.Circle = new Carem.SymbolCircle(Layer02);
		Layer02.Circle.SetPosition(220, 15);
		Layer02.Circle.SetDistance(30);
		Layer02.Circle.SetStrokeWidth(3);
		Layer02.Circle.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Circle.SetBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		
		Layer02.Oval = new Carem.SymbolOval(Layer02);
		Layer02.Oval.SetPosition(255, 20);
		Layer02.Oval.SetSize(20, 50);
		Layer02.Oval.SetRotate(45);
		Layer02.Oval.SetBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Oval.SetShadow({r:0,g:0,b:0,a:1}, {x:0,y:0}, 20);
		
		Layer02.SliceOval = new Carem.SymbolArc(Layer02);
		Layer02.SliceOval.SetPosition(10, 50);
		Layer02.SliceOval.SetSize(30, 30);
		Layer02.SliceOval.SetSlice(270, 120);
		Layer02.SliceOval.SetBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.SliceOval.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.SliceOval.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 10);
		
		Layer02.Polygon = new Carem.SymbolPolygon(Layer02);
		Layer02.Polygon.SetPosition(40, 50);
		Layer02.Polygon.SetSize(30, 30);
		Layer02.Polygon.SetSide(6);
		Layer02.Polygon.SetBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Polygon.SetShadow({r:0, g:0, b:0, a:.5}, {x:0, y:0}, 10);
		Layer02.Polygon.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		
		Layer02.Line = new Carem.SymbolLine(Layer02);
		Layer02.Line.SetPosition(80, 65);
		Layer02.Line.SetStartPoint(0, 0);
		Layer02.Line.SetEndPoint(100, 0);
		Layer02.Line.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Line.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Line.SetStrokeWidth(2);
		
		Layer02.Shape = new Carem.SymbolShape(Layer02);
		Layer02.Shape.SetPosition(160, 50);
		Layer02.Shape.StartPoint(20, 20);
		Layer02.Shape.AddPoint(100, 20, 20, 50, 100, 50);
		Layer02.Shape.AddPoint(30, 30, 100, -10, 20, -10);
		Layer02.Shape.SetShadow({r:0, g:0, b:0, a:.51}, {x:0, y:0}, 20);
		Layer02.Shape.SetBackground([{r:255, g:0, b:0, a:1, stop:0}]);
		Layer02.Shape.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		
		Layer02.OrganBarStroke = new Carem.SymbolRect(Layer02);
		Layer02.OrganBarStroke.SetPosition(330, 154);
		Layer02.OrganBarStroke.SetSize(300, 30);
		Layer02.OrganBarStroke.SetBackground([{r:128, g:128, b:128, a:1, stop:0}]);
		Layer02.OrganBarStroke.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.OrganBarStroke.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.OrganBarStroke.SetStrokeImage(canvasShaperAssetManager.GetAsset("images/img_lamp.jpg"));
		
		Layer02.Text = new Carem.SymbolText(Layer02);
		Layer02.Text.SetPosition(0, 0);
		Layer02.Text.SetOrgin(0, 0);
		Layer02.Text.SetRotate(0);
		Layer02.Text.SetFont("Arial");
		Layer02.Text.SetSize(12);
		Layer02.Text.SetBaseLine(CAREM_TEXT_BASELINE_TOP);
		Layer02.Text.SetAlign("left");
		Layer02.Text.AddText("Normal", 30, 185);
		Layer02.Text.AddText("GrayScale", 180, 185);
		Layer02.Text.AddText("Brightness", 30, 300);
		Layer02.Text.AddText("Threshold", 180, 300);
		Layer02.Text.AddText("Sharpen", 30, 415);
		Layer02.Text.AddText("Blur", 180, 415);
		Layer02.Text.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
		//Layer02.Text.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Text.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Text.hitPoint = function(x, y){
			console.log("In Me");
		};
		/** Non-Filter Image */
		Layer02.Image00 = new Carem.SymbolImage(
			Layer02, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer02.Image00.SetPosition(30, 100);
		Layer02.Image00.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.Image00.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image00.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image00.SetStrokeWidth(6);
		/** GrayScale-Filter Image */
		Layer02.Image01 = new Carem.SymbolImage(
			Layer02, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer02.Image01.SetPosition(180, 100);
		Layer02.Image01.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.Image01.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image01.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image01.SetFilter(Carem.Filter.GrayScale);
		Layer02.Image01.SetStrokeWidth(6);
		/** Brightness-Filter Image */
		Layer02.Image02 = new Carem.SymbolImage(
			Layer02, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer02.Image02.SetPosition(30, 215);
		Layer02.Image02.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.Image02.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image02.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image02.SetFilter(Carem.Filter.Brightness, 100);
		Layer02.Image02.SetStrokeWidth(6);
		/** Threshold-Filter Image */
		Layer02.Image03 = new Carem.SymbolImage(
			Layer02, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer02.Image03.SetPosition(180, 215);
		Layer02.Image03.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.Image03.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image03.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image03.SetFilter(Carem.Filter.Threshold, 100);
		Layer02.Image03.SetStrokeWidth(6);
		/** Sharpen with Convolute-Filter Image */
		Layer02.Image04 = new Carem.SymbolImage(
			Layer02, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer02.Image04.SetPosition(30, 330);
		Layer02.Image04.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.Image04.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image04.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image04.SetFilter(
			Carem.Filter.Convolute, 
			[ 0, -1,  0,
			 -1,  5, -1,
             0, -1,  0]
		);
		Layer02.Image04.SetStrokeWidth(6);
		/** Blur with Convolute-Filter Image */
		Layer02.Image05 = new Carem.SymbolImage(
			Layer02, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer02.Image05.SetPosition(180, 330);
		Layer02.Image05.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer02.Image05.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer02.Image05.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer02.Image05.SetFilter(
			Carem.Filter.Convolute, 
			[1/9, 1/9, 1/9, 
			 1/9, 1/9, 1/9, 
			 1/9, 1/9, 1/9]
		);
		Layer02.Image04.SetStrokeWidth(6);
		
		
		/** Create Static Text For Layer 03 */
		Layer03.Text = new Carem.SymbolText(Layer03);
		Layer03.Text.SetPosition(0, 0);
		Layer03.Text.SetOrgin(0, 0);
		Layer03.Text.SetRotate(0);
		Layer03.Text.SetFont("Arial");
		Layer03.Text.SetSize(12);
		Layer03.Text.SetBaseLine(CAREM_TEXT_BASELINE_TOP);
		Layer03.Text.SetAlign("left");
		Layer03.Text.AddText("Sobel", 30, 115);
		Layer03.Text.AddText("Custom", 180, 115);
		Layer03.Text.SetBackground([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer03.Text.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer03.Text.hitPoint = function(x, y){
			console.log("In Me");
		};
		/** Sobel with Convolute-Filter Image */
		Layer03.Image01 = new Carem.SymbolImage(
			Layer03, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer03.Image01.SetPosition(30, 30);
		Layer03.Image01.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer03.Image01.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer03.Image01.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer03.Image01.SetFilter(function(px) {
			px = Carem.Filter.GrayScale(px);
			var vertical = Carem.Filter.ConvoluteFloat32(
				px,
				[-1,-2,-1,
				0, 0, 0,
				1, 2, 1]
			);
			var horizontal = Carem.Filter.ConvoluteFloat32(
				px,
				[-1,0,1,
				-2,0,2,
				-1,0,1]
			);
			var id = Carem.Filter.CreateImageData(vertical.width, vertical.height);
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
		Layer03.Image01.SetStrokeWidth(6);
		/** Custom with Convolute-Filter */
		Layer03.Image02 = new Carem.SymbolImage(
			Layer03, 
			canvasShaperAssetManager.GetAsset("images/filter-sample.jpg")
		);
		Layer03.Image02.SetPosition(180, 30);
		Layer03.Image02.SetStrokeShape(CAREM_LINE_JOIN_ROUND, 5);
		Layer03.Image02.SetStrokeColor([{r:255, g:255, b:255, a:1, stop:0}]);
		Layer03.Image02.SetShadow({r:0, g:0, b:0, a:1}, {x:0, y:0}, 20);
		Layer03.Image02.SetFilter(
			Carem.Filter.Convolute, 
			[-1,-1,-1,
			  0, 0, 0,
			  1, 1, 1], 
			true
		);
		Layer03.Image02.SetStrokeWidth(6);
		
		TickGID = RequestAnimationFrame(RunGameLevel);		
	}
	
	function LoadAssetProgress() {
		Layer01.OrganBar.SetSize((canvasShaperAssetManager.GetProgress()/100)*300, 2);
		Layer01.Swap();
		if(canvasShaperAssetManager.IsComplete()) {
			UnTick();
			setTimeout(CreateGameLevel, 300);
			return;
		}
		TickGID = RequestAnimationFrame(LoadAssetProgress);
	}
	TickGID = LoadAssetProgress();
}

window.addEventListener( 'DOMContentLoaded' , function( e ) {
	CyGame();
});
