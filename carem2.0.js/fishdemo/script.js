// JavaScript Document
var TickGID;
var RequestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame || 
							function( callback ) 
							{
								return window.SetTimeout(callback, 1000 / 60);
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
	var Layer01 = new Carem.Layer("FishDemos");
	var Layer02 = new Carem.Layer("FishDemos");
	/** Settings Layer */
	Layer01.SetBackground(255, 255, 255, 1);
	Layer02.SetBackground(255, 150, 0, 1);
	/** Initialize the loading screen */
	Layer01.LoadingBar = new Carem.SymbolRect(Layer01);
	Layer01.LoadingBar.SetPosition(480/2-160, 320/2-10);
	Layer01.LoadingBar.SetSize(1, 10);
	Layer01.LoadingBar.SetBackground([{r:255, g:138, b:0, a:1, stop:0}]);
	/** Import File into Asset List */
	var AssetManager = new Carem.AssetManager("jpg|gif|png", "wav|ogg|mp3");
	AssetManager.QueueFile("images/background.jpg");
	AssetManager.QueueFile("images/bubble.png");
	AssetManager.QueueFile("images/fish.png");
	AssetManager.QueueFile("images/fish1.png");
	AssetManager.QueueFile("images/explode.png");
	AssetManager.QueueFile("images/wave.png");
	AssetManager.QueueFile("images/play.png");
	AssetManager.QueueDownloadAll();
	/** Progress Asset Loading */
	function ProgressAssetLoading() 
	{
		Layer01.LoadingBar.SetSize((AssetManager.GetProgress()/100)*300, 2);
		Layer01.Swap();
		if(AssetManager.IsComplete()) {
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
		Layer02.Background = new Carem.StaticSprite(
			Layer02, 
			AssetManager.GetAsset("images/background.jpg"), 
			0, 0, 480, 320
		);
		/** Create Scroller Wave */
		Layer02.Wave = new Carem.Scroller(Layer02, AssetManager.GetAsset("images/wave.png"));
		Layer02.Wave.SetAlpha(15);
		Layer02.Wave.SetVelocity(0.32);
		Layer02.Wave.SetPosition(0, 200);
		Layer02.Wave.SetFlip(CAREM_FLIP_HORIZONTAL);
		/** Create Play Button */
		Layer02.PlayButton = new Carem.Button(Layer02, AssetManager.GetAsset("images/play.png"), 0, 0, 76, 32);
		Layer02.PlayButton.SetPosition(100, 200);
		Layer02.PlayButton.onClick(function(e) {
			Layer02.Player.Game_Over = 0;
			Layer02.Player.Game_Streng = 10;
			Layer02.Player.SetScale(Layer02.Player.Game_Streng/100, Layer02.Player.Game_Streng/100);
			Layer02.Player.SetCollisionBound(0, 0, 198*Layer02.Player.Game_Streng/100, 114*Layer02.Player.Game_Streng/100);
			Layer02.Player.SetPositionY(150);
			Layer02.PlayButton.Hide();
		});
		/** Create Static Fish */
		Layer02.Fish01 = new Carem.StaticSprite(Layer02, AssetManager.GetAsset("images/fish.png"), 228, 18, 198, 114);
		Layer02.Fish01.Game_Streng = Carem.Math.IntRandom(5, 30);
		Layer02.Fish01.SetPosition(30, 30);
		Layer02.Fish01.SetScale(Layer02.Fish01.Game_Streng/100, Layer02.Fish01.Game_Streng/100);
		Layer02.Fish01.SetLinearVelocityX(1.0);
		Layer02.Fish01.SetFlip(CAREM_FLIP_HORIZONTAL);
		Layer02.Fish01.SetOrgin(10, -10);
		Layer02.Fish01.SetCollisionBound(0, 0, 198*Layer02.Fish01.Game_Streng/100, 114*Layer02.Fish01.Game_Streng/100);
		Layer02.Fish01.SetWorldLimit(-100, -50, 530, 370);
		Layer02.Fish01.SetWorldLimitTest(function(limit) 
		{
			Layer02.Fish01.Game_Streng = Carem.Math.IntRandom(5, 30);
			Layer02.Fish01.SetScale(Layer02.Fish01.Game_Streng/100, Layer02.Fish01.Game_Streng/100);
			Layer02.Fish01.SetCollisionBound(0, 0, 198*Layer02.Fish01.Game_Streng/100, 114*Layer02.Fish01.Game_Streng/100);
			Layer02.Fish01.SetPositionY(Carem.Math.IntRandom(25, 200));
			switch(limit) 
			{
				case CAREM_LIMIT_RIGHT:
					Layer02.Fish01.ResetFlip(CAREM_FLIP_HORIZONTAL);
					Layer02.Fish01.SetLinearVelocityX(Carem.Math.IntRandom(-1, -5));
					break;
				case CAREM_LIMIT_LEFT:
					Layer02.Fish01.SetFlip(CAREM_FLIP_HORIZONTAL);
					Layer02.Fish01.SetLinearVelocityX(Carem.Math.IntRandom(1, 5));
					break;
			}
		});
		/** Create Animate Fish */
		Layer02.Fish02 = new Carem.AnimeSprite(Layer02, AssetManager.GetAsset("images/fish1.png"), 198, 114);
		Layer02.Fish02.Game_Streng = Carem.Math.IntRandom(5, 30);
		Layer02.Fish02.SetPosition(100, 200);
		Layer02.Fish02.SetScale(Layer02.Fish02.Game_Streng/100, Layer02.Fish02.Game_Streng/100);
		Layer02.Fish02.SetAction(1);
		Layer02.Fish02.SetLinearVelocityX(1.0);
		Layer02.Fish02.Actions = {Xuoi: 0, Nguoc: 1};
		Layer02.Fish02.SetCollisionBound(0, 0, 198*Layer02.Fish02.Game_Streng/100, 114*Layer02.Fish02.Game_Streng/100);
		Layer02.Fish02.SetHitPointTest(function(){console.log("Hit Point!");});
		Layer02.Fish02.SetHitPoint(155, 202);
		Layer02.Fish02.SetWorldLimit(-100, -50, 530, 370);
		Layer02.Fish02.SetWorldLimitTest(function(Limit) 
		{
			Layer02.Fish02.Game_Streng = Carem.Math.IntRandom(5, 30);
			Layer02.Fish02.SetScale(Layer02.Fish02.Game_Streng/100, Layer02.Fish02.Game_Streng/100);
			Layer02.Fish02.SetCollisionBound(0, 0, 198*Layer02.Fish02.Game_Streng/100, 114*Layer02.Fish02.Game_Streng/100);
			Layer02.Fish02.SetPositionY(Carem.Math.IntRandom(25, 200));
			switch(Limit) 
			{
				case CAREM_LIMIT_RIGHT:
					Layer02.Fish02.SetAction(Layer02.Fish02.Actions.Xuoi);
					Layer02.Fish02.SetLinearVelocityX(Carem.Math.IntRandom(-1, -5));
					break;
				case CAREM_LIMIT_LEFT:
					Layer02.Fish02.SetAction(Layer02.Fish02.Actions.Nguoc);
					Layer02.Fish02.SetLinearVelocityX(Carem.Math.IntRandom(1, 5));
					break;
			}
		});
		/** Create Player Fish */
		Layer02.Player = new Carem.AnimeSprite(Layer02, AssetManager.GetAsset("images/fish1.png"), 198, 114);
		Layer02.Player.Game_Streng = 10;		// Dynamic Field (Free in Javascript) 
		Layer02.Player.Game_Over = 0;
		Layer02.Player.SetPosition(200, 100);
		Layer02.Player.SetScale(Layer02.Player.Game_Streng/100, Layer02.Player.Game_Streng/100);
		Layer02.Player.SetGravity(2.0);
		Layer02.Player.SetLinearVelocityX(1);
		Layer02.Player.Actions = {Xuoi: 0, Nguoc: 1};
		Layer02.Player.SetAction(Layer02.Player.Actions.Nguoc);
		Layer02.Player.SetCollisionBound(0, 0, 198*Layer02.Player.Game_Streng/100, 114*Layer02.Player.Game_Streng/100);
		Layer02.Player.SetWorldLimit(-100, -50, 530, 370);
		Layer02.Player.SetWorldLimitTest(function(limit) 
		{
			if(limit == CAREM_LIMIT_BOTTOM)
				Layer02.Player.DisableGravity();
			else if(limit == CAREM_LIMIT_TOP) 
			{
				Layer02.Player.mouseDown = false;
				Layer02.Player.EnableGravity();
			}
		});
		Layer02.Player.AddCollisionTarget(Layer02.Fish01, function() 
		{
			if(Layer02.Fish01.Game_Streng < Layer02.Player.Game_Streng) 
			{
				Layer02.Player.Game_Streng += 1;
				Layer02.Player.SetScale(
					Layer02.Player.Game_Streng/100, 
					Layer02.Player.Game_Streng/100
				);
				Layer02.Fish01.SetPosition(-100, Carem.Math.IntRandom(0, 240));
			}
			else 
			{
				Layer02.Player.Game_Over = 1;
			}
		});
		Layer02.Player.AddCollisionTarget(Layer02.Fish02, function() 
		{
			if(Layer02.Fish02.Game_Streng < Layer02.Player.Game_Streng) 
			{
				Layer02.Player.Game_Streng += 1;
				Layer02.Player.SetScale(
					Layer02.Player.Game_Streng/100, 
					Layer02.Player.Game_Streng/100
				);
				Layer02.Fish02.SetPosition(-100, Carem.Math.IntRandom(0, 240));
			}
			else 
			{
				Layer02.Player.Game_Over = 1;
			}
		});
		/** Create Bubbles Paricle */
		Layer02.Bubble = new Carem.Particle(Layer02, AssetManager.GetAsset("images/bubble.png"), 7);
		Layer02.Bubble.SetAlphaBase(0.5);
		Layer02.Bubble.SetScaleBase(0.3);
		Layer02.Bubble.SetLifeTime(50, 23);
		Layer02.Bubble.SetPositionRandom(0, 480, 200, 300);
		Layer02.Bubble.SetAngularSpeed(0);
		Layer02.Bubble.SetWorldLimit(-10, -10, 480, 360);
		Layer02.Bubble.SetEmittion(true);
		Layer02.Bubble.GenParticle();
		/** Create Tile */
		Layer02.Tile = new Carem.Tile(Layer02);
		Layer02.Tile.SetPosition(320, 280);
		Layer02.Tile.AddCell(AssetManager.GetAsset("images/bubble.png"), 0, 0);
		Layer02.Tile.AddCell(AssetManager.GetAsset("images/bubble.png"), 320, 0);
		Layer02.Tile.SetLinearVelocityX(-1.0);
		/** Create Event for Layer */
		function overInteract() 
		{
			Layer02.Player.mouseDown = false;
			Layer02.Player.EnableGravity();
			Layer02.Player.SetLinearVelocityY(0.0);
			return;
		}
		function enterInteract(Event) 
		{
			if(Layer02.Player.mouseDown || Layer02.Player.Game_Over)
				return true;
			if(Event.pageX > Layer02.Player.GetPositionX()) 
			{
				Layer02.Player.SetAction(Layer02.Player.Actions.Nguoc);
			}
			else 
			{
				Layer02.Player.SetAction(Layer02.Player.Actions.Xuoi);
			}
			Layer02.Player.DisableGravity();
			Layer02.Player.SetLinearVelocityY(-3.0);
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
		Layer02.Tile.LinearVelocityX();
		/** Play Player Actions */
		Layer02.Player.LinearVelocityY();
		Layer02.Player.ForceGravity();
		Layer02.Player.TestWorldLimit();
		/** Play Fish Actions */
		Layer02.Fish01.LinearVelocityX();
		Layer02.Fish01.TestWorldLimit();
		/** Play Fish Actions */
		Layer02.Fish02.LinearVelocityX();
		Layer02.Fish02.TestWorldLimit();
		/** Swap To New View For Player */
		Layer02.Swap();
		/** Request This Frame */
		TickGID = RequestAnimationFrame(PlayFishLevel);
		return;
	}
	
	ProgressAssetLoading();
	return;
}

window.addEventListener( 'DOMContentLoaded' , function( e ) {
	CyGame();
});
