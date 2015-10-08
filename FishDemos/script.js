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
	var Layer01 = new CanvasShaper("FishDemos");
	var Layer02 = new CanvasShaper("FishDemos");
	/** Settings Layer */
	Layer01.setBackground(255, 255, 255, 1);
	Layer02.setBackground(255, 150, 0, 1);
	/** Initialize the loading screen */
	Layer01.LoadingBar = new CanvasShaper_SymbolRect(Layer01);
	Layer01.LoadingBar.setPosition(480/2-160, 320/2-10);
	Layer01.LoadingBar.setSize(1, 10);
	Layer01.LoadingBar.setBackground([{r:255, g:138, b:0, a:1, stop:0}]);
	/** Import File into Asset List */
	var AssetManager = new CanvasShaper_AssetManager("jpg|gif|png", "wav|ogg|mp3");
	AssetManager.QueueFile("images/background.jpg");
	AssetManager.QueueFile("images/bubble.png");
	AssetManager.QueueFile("images/filter-sample.jpg");
	AssetManager.QueueFile("images/fish.png");
	AssetManager.QueueFile("images/fish1.png");
	AssetManager.QueueFile("images/ship.png");
	AssetManager.QueueFile("images/explode.png");
	AssetManager.QueueFile("images/wave.png");
	AssetManager.QueueDownloadAll();
	/** Progress Asset Loading */
	function ProgressAssetLoading() {
		Layer01.LoadingBar.setSize((AssetManager.getProgress()/100)*300, 2);
		Layer01.Swap();
		if(AssetManager.isComplete()) {
			UnTick();
			setTimeout(CreateFishLevel, 300);
			return;
		}
		TickGID = RequestAnimationFrame(ProgressAssetLoading);
		return;
	}
	var BoxCollision1, BoxCollision2;
	
	function CreateFishLevel() {
		/** Set Background For Level */
		Layer02.Background = new CanvasShaper_StaticSprite(Layer02, AssetManager.getAsset("images/background.jpg"), 0, 0, 480, 320);
		/** Create Scroller Wave */
		Layer02.Wave = new CanvasShaper_Scroller(Layer02, AssetManager.getAsset("images/wave.png"));
		Layer02.Wave.setAlpha(15);
		Layer02.Wave.setVelocity(0.12);
		Layer02.Wave.setPosition(0, 300);
		Layer02.Wave.setFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
		
		/** Create Static Fish */
		//Layer02.Fish01 = new CanvasShaper_StaticSprite(Layer02, AssetManager.getAsset("images/fish.png"), 21, 23, 175, 111);
		//Layer02.Fish01.setScale(.5, .5);
		Layer02.Fish02 = new CanvasShaper_StaticSprite(Layer02, AssetManager.getAsset("images/fish.png"), 228, 18, 198, 113);
		Layer02.Fish02.setPosition(30, 30);
		Layer02.Fish02.setScale(.5, .5);
		Layer02.Fish02.setVelocity(1, 0);
		Layer02.Fish02.setFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
		Layer02.Fish02.setWorldLimit(-100, -50, 530, 370);
		Layer02.Fish02.setHitPointEvent(function(){
			console.log("OK");
		});
		
		Layer02.Fish03 = new CanvasShaper_AnimeSprite(Layer02, AssetManager.getAsset("images/fish1.png"), 198, 114);
		Layer02.Fish03.setScale(.5, .5);
		Layer02.Fish03.setAction(1);
		Layer02.Fish03.setVelocity(1, 0);
		Layer02.Fish03.setWorldLimit(-100, -50, 530, 370);
		Layer02.Fish03.Actions = {
			Xuoi: 0, 
			Nguoc: 1
		};
		/** Create Bubble */
		Layer02.Bubble = new CanvasShaper_Particle(Layer02, AssetManager.getAsset("images/bubble.png"), 7);
		Layer02.Bubble.setAlphaBase(0.5);
		//Layer02.Bubble.setAlphaLife(1.0, 0.1);
		Layer02.Bubble.setScaleBase(0.3);
		//Layer02.Bubble.setScaleLife(0.01, 0.2);
		Layer02.Bubble.setLifeTime(50, 23);
		Layer02.Bubble.setPositionRandom(0, 480, 200, 300);
		//Layer02.Bubble.setRotation(45);
		Layer02.Bubble.setAngularSpeed(0);
		Layer02.Bubble.setWorldLimit(-10, -10, 480, 360);
		Layer02.Bubble.setEmittion(true);
		Layer02.Bubble.genParticle();
		/** Create Tile */
		Layer02.Tile = new CanvasShaper_Tile(Layer02);
		Layer02.Tile.setPosition(320, 0);
		Layer02.Tile.addCell(AssetManager.getAsset("images/bubble.png"), 0, 0);
		Layer02.Tile.addCell(AssetManager.getAsset("images/bubble.png"), 320, 0);
		Layer02.Tile.setVelocity(-1, 0);
		/** Create Box Collision */
		BoxCollision1 = new CanvasShaper_Collision();
		BoxCollision1.setBox(120, 120, 100, 50);
		BoxCollision2 = new CanvasShaper_Collision();
		BoxCollision2.setBox(150, 170, 100, 50);
		BoxCollision2.addTarget(BoxCollision1, function() {
			Layer02.Fish02.invisible();
		});
		/** Finish the creating game level */
		TickGID = RequestAnimationFrame(RunFishLevel);
		return;
	}
	
	function RunFishLevel() {
		BoxCollision2.test();
		Layer02.Tile.Physics.linearVelocityX();
		Layer02.Fish02.Physics.linearVelocityX();
		Layer02.Fish02.testHitPoint(100, 100);
		Layer02.Fish02.WorldLimit.Callback(function(limit){
			switch(limit) {
				case CANVAS_SHAPER_LIMIT_RIGHT:
					Layer02.Fish02.resetFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
					Layer02.Fish02.setVelocity(CanvasShaper_Math.intRandom(-1, -5), 0);
					Layer02.Fish02.setPositionY(CanvasShaper_Math.intRandom(25, 200));
					break;
				case CANVAS_SHAPER_LIMIT_LEFT:
					Layer02.Fish02.setFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
					Layer02.Fish02.setVelocity(CanvasShaper_Math.intRandom(1, 5), 0);
					Layer02.Fish02.setPositionY(CanvasShaper_Math.intRandom(25, 200));
					break;
			}
		});
		
		Layer02.Fish03.Physics.linearVelocityX();
		Layer02.Fish03.WorldLimit.Callback(function(Limit){
			switch(Limit) {
				case CANVAS_SHAPER_LIMIT_RIGHT:
					Layer02.Fish03.setAction(Layer02.Fish03.Actions.Xuoi);
					Layer02.Fish03.setVelocity(CanvasShaper_Math.intRandom(-1, -5), 0);
					Layer02.Fish03.setPositionY(CanvasShaper_Math.intRandom(25, 200));
					break;
				case CANVAS_SHAPER_LIMIT_LEFT:
					Layer02.Fish03.setAction(Layer02.Fish03.Actions.Nguoc);
					Layer02.Fish03.setVelocity(CanvasShaper_Math.intRandom(1, 5), 0);
					Layer02.Fish03.setPositionY(CanvasShaper_Math.intRandom(200, 400));
					break;
			}
		});
		/** Swap Layer Fish Graphics */
		Layer02.Swap();
		/** Request This Frame */
		TickGID = RequestAnimationFrame(RunFishLevel);
		return;
	}
	
	ProgressAssetLoading();
	return;
}

$(document).ready(function(e) {
	CyGame();
});

$(window).resize(function(e) {
	
});