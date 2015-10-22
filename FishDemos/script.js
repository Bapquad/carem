// JavaScript Document
var TickGID;
var RequestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame || 
							function( callback ) 
							{
								return window.setTimeout(callback, 1000 / 60);
							};
var cancelAnimationFrame = window.cancelAnimationFrame || 
							function(animId) 
							{
								return window.clearTimeout(animId);
							};
function UnTick() 
{
	cancelAnimationFrame(TickGID);	
}

function CyGame() 
{
	/** Create Layer */
	var Layer01 = new CanvasShaper_Layer("FishDemos");
	var Layer02 = new CanvasShaper_Layer("FishDemos");
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
	AssetManager.QueueFile("images/explode.png");
	AssetManager.QueueFile("images/wave.png");
	AssetManager.QueueFile("images/play.png");
	AssetManager.QueueDownloadAll();
	/** Progress Asset Loading */
	function ProgressAssetLoading() 
	{
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
	
	function CreateFishLevel() 
	{
		/** Set Background For Level */
		Layer02.Background = new CanvasShaper_StaticSprite(
			Layer02, 
			AssetManager.getAsset("images/background.jpg"), 
			0, 0, 480, 320
		);
		/** Create Scroller Wave */
		Layer02.Wave = new CanvasShaper_Scroller(Layer02, AssetManager.getAsset("images/wave.png"));
		Layer02.Wave.setAlpha(15);
		Layer02.Wave.setVelocity(0.32);
		Layer02.Wave.setPosition(0, 200);
		Layer02.Wave.setFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
		/** Create Play Button */
		Layer02.PlayButton = new CanvasShaper_Button(Layer02, AssetManager.getAsset("images/play.png"), 0, 0, 76, 32);
		Layer02.PlayButton.setPosition(100, 200);
		Layer02.PlayButton.onClick(function(e) {
			Layer02.Player.Game_Over = 0;
			Layer02.Player.Game_Streng = 10;
			Layer02.Player.setScale(Layer02.Player.Game_Streng/100, Layer02.Player.Game_Streng/100);
			Layer02.Player.setCollisionBound(0, 0, 198*Layer02.Player.Game_Streng/100, 114*Layer02.Player.Game_Streng/100);
			Layer02.Player.setPositionY(150);
			Layer02.PlayButton.hide();
		});
		/** Create Static Fish */
		Layer02.Fish01 = new CanvasShaper_StaticSprite(Layer02, AssetManager.getAsset("images/fish.png"), 228, 18, 198, 114);
		Layer02.Fish01.Game_Streng = CanvasShaper_Math.intRandom(5, 30);
		Layer02.Fish01.setPosition(30, 30);
		Layer02.Fish01.setScale(Layer02.Fish01.Game_Streng/100, Layer02.Fish01.Game_Streng/100);
		Layer02.Fish01.setLinearVelocityX(1.0);
		Layer02.Fish01.setFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
		Layer02.Fish01.setOrgin(10, -10);
		Layer02.Fish01.setCollisionBound(0, 0, 198*Layer02.Fish01.Game_Streng/100, 114*Layer02.Fish01.Game_Streng/100);
		Layer02.Fish01.setWorldLimit(-100, -50, 530, 370);
		Layer02.Fish01.setWorldLimitTest(function(limit) 
		{
			Layer02.Fish01.Game_Streng = CanvasShaper_Math.intRandom(5, 30);
			Layer02.Fish01.setScale(Layer02.Fish01.Game_Streng/100, Layer02.Fish01.Game_Streng/100);
			Layer02.Fish01.setCollisionBound(0, 0, 198*Layer02.Fish01.Game_Streng/100, 114*Layer02.Fish01.Game_Streng/100);
			Layer02.Fish01.setPositionY(CanvasShaper_Math.intRandom(25, 200));
			switch(limit) 
			{
				case CANVAS_SHAPER_LIMIT_RIGHT:
					Layer02.Fish01.resetFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
					Layer02.Fish01.setLinearVelocityX(CanvasShaper_Math.intRandom(-1, -5));
					break;
				case CANVAS_SHAPER_LIMIT_LEFT:
					Layer02.Fish01.setFlip(CANVAS_SHAPER_FLIP_HORIZONTAL);
					Layer02.Fish01.setLinearVelocityX(CanvasShaper_Math.intRandom(1, 5));
					break;
			}
		});
		/** Create Animate Fish */
		Layer02.Fish02 = new CanvasShaper_AnimeSprite(Layer02, AssetManager.getAsset("images/fish1.png"), 198, 114);
		Layer02.Fish02.Game_Streng = CanvasShaper_Math.intRandom(5, 30);
		Layer02.Fish02.setPosition(100, 200);
		Layer02.Fish02.setScale(Layer02.Fish02.Game_Streng/100, Layer02.Fish02.Game_Streng/100);
		Layer02.Fish02.setAction(1);
		Layer02.Fish02.setLinearVelocityX(1.0);
		Layer02.Fish02.Actions = {Xuoi: 0, Nguoc: 1};
		Layer02.Fish02.setCollisionBound(0, 0, 198*Layer02.Fish02.Game_Streng/100, 114*Layer02.Fish02.Game_Streng/100);
		Layer02.Fish02.setHitPointTest(function(){console.log("Hit Point!");});
		Layer02.Fish02.setHitPoint(155, 202);
		Layer02.Fish02.setWorldLimit(-100, -50, 530, 370);
		Layer02.Fish02.setWorldLimitTest(function(Limit) 
		{
			Layer02.Fish02.Game_Streng = CanvasShaper_Math.intRandom(5, 30);
			Layer02.Fish02.setScale(Layer02.Fish02.Game_Streng/100, Layer02.Fish02.Game_Streng/100);
			Layer02.Fish02.setCollisionBound(0, 0, 198*Layer02.Fish02.Game_Streng/100, 114*Layer02.Fish02.Game_Streng/100);
			Layer02.Fish02.setPositionY(CanvasShaper_Math.intRandom(25, 200));
			switch(Limit) 
			{
				case CANVAS_SHAPER_LIMIT_RIGHT:
					Layer02.Fish02.setAction(Layer02.Fish02.Actions.Xuoi);
					Layer02.Fish02.setLinearVelocityX(CanvasShaper_Math.intRandom(-1, -5));
					break;
				case CANVAS_SHAPER_LIMIT_LEFT:
					Layer02.Fish02.setAction(Layer02.Fish02.Actions.Nguoc);
					Layer02.Fish02.setLinearVelocityX(CanvasShaper_Math.intRandom(1, 5));
					break;
			}
		});
		/** Create Player Fish */
		Layer02.Player = new CanvasShaper_AnimeSprite(Layer02, AssetManager.getAsset("images/fish1.png"), 198, 114);
		Layer02.Player.Game_Streng = 10;		// Dynamic Field (Free in Javascript) 
		Layer02.Player.Game_Over = 0;
		Layer02.Player.setPosition(200, 100);
		Layer02.Player.setScale(Layer02.Player.Game_Streng/100, Layer02.Player.Game_Streng/100);
		Layer02.Player.setGravity(2.0);
		Layer02.Player.setLinearVelocityX(1);
		Layer02.Player.Actions = {Xuoi: 0, Nguoc: 1};
		Layer02.Player.setAction(Layer02.Player.Actions.Nguoc);
		Layer02.Player.setCollisionBound(0, 0, 198*Layer02.Player.Game_Streng/100, 114*Layer02.Player.Game_Streng/100);
		Layer02.Player.setWorldLimit(-100, -50, 530, 370);
		Layer02.Player.setWorldLimitTest(function(limit) 
		{
			if(limit == CANVAS_SHAPER_LIMIT_BOTTOM)
				Layer02.Player.disableGravity();
			else if(limit == CANVAS_SHAPER_LIMIT_TOP) 
			{
				Layer02.Player.mouseDown = false;
				Layer02.Player.enableGravity();
			}
		});
		Layer02.Player.addCollisionTarget(Layer02.Fish01, function() 
		{
			if(Layer02.Fish01.Game_Streng < Layer02.Player.Game_Streng) 
			{
				Layer02.Player.Game_Streng += 1;
				Layer02.Player.setScale(
					Layer02.Player.Game_Streng/100, 
					Layer02.Player.Game_Streng/100
				);
				Layer02.Fish01.setPosition(-100, CanvasShaper_Math.intRandom(0, 240));
			}
			else 
			{
				Layer02.Player.Game_Over = 1;
			}
		});
		Layer02.Player.addCollisionTarget(Layer02.Fish02, function() 
		{
			if(Layer02.Fish02.Game_Streng < Layer02.Player.Game_Streng) 
			{
				Layer02.Player.Game_Streng += 1;
				Layer02.Player.setScale(
					Layer02.Player.Game_Streng/100, 
					Layer02.Player.Game_Streng/100
				);
				Layer02.Fish02.setPosition(-100, CanvasShaper_Math.intRandom(0, 240));
			}
			else 
			{
				Layer02.Player.Game_Over = 1;
			}
		});
		/** Create Bubbles Paricle */
		Layer02.Bubble = new CanvasShaper_Particle(Layer02, AssetManager.getAsset("images/bubble.png"), 7);
		Layer02.Bubble.setAlphaBase(0.5);
		Layer02.Bubble.setScaleBase(0.3);
		Layer02.Bubble.setLifeTime(50, 23);
		Layer02.Bubble.setPositionRandom(0, 480, 200, 300);
		Layer02.Bubble.setAngularSpeed(0);
		Layer02.Bubble.setWorldLimit(-10, -10, 480, 360);
		Layer02.Bubble.setEmittion(true);
		Layer02.Bubble.genParticle();
		/** Create Tile */
		Layer02.Tile = new CanvasShaper_Tile(Layer02);
		Layer02.Tile.setPosition(320, 280);
		Layer02.Tile.addCell(AssetManager.getAsset("images/bubble.png"), 0, 0);
		Layer02.Tile.addCell(AssetManager.getAsset("images/bubble.png"), 320, 0);
		Layer02.Tile.setLinearVelocityX(-1.0);
		/** Create Event for Layer */
		function overInteract() 
		{
			Layer02.Player.mouseDown = false;
			Layer02.Player.enableGravity();
			Layer02.Player.setLinearVelocityY(0.0);
			return;
		}
		function enterInteract(Event) 
		{
			if(Layer02.Player.mouseDown || Layer02.Player.Game_Over)
				return true;
			if(Event.pageX > Layer02.Player.getPositionX()) 
			{
				Layer02.Player.setAction(Layer02.Player.Actions.Nguoc);
			}
			else 
			{
				Layer02.Player.setAction(Layer02.Player.Actions.Xuoi);
			}
			Layer02.Player.disableGravity();
			Layer02.Player.setLinearVelocityY(-3.0);
			Layer02.Player.mouseDown = true;
			return false;
		}
		Layer02.addEventListener("click", function(e) 
		{
			if(enterInteract(e))
				return;
			setTimeout(overInteract, 200);
		}, false);
		/** Finish the creating game level */
		TickGID = RequestAnimationFrame(PlayFishLevel);
		return;
	}
	
	function PlayFishLevel() 
	{
		/** Play Tile Actions */
		Layer02.Tile.linearVelocityX();
		/** Play Player Actions */
		Layer02.Player.linearVelocityY();
		Layer02.Player.forceGravity();
		Layer02.Player.testWorldLimit();
		/** Play Fish Actions */
		Layer02.Fish01.linearVelocityX();
		Layer02.Fish01.testWorldLimit();
		/** Play Fish Actions */
		Layer02.Fish02.linearVelocityX();
		Layer02.Fish02.testWorldLimit();
		/** Swap To New View For Player */
		Layer02.Swap();
		/** Request This Frame */
		TickGID = RequestAnimationFrame(PlayFishLevel);
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