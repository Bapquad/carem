var Carem_Physics = function(sceneObject) 
{
	this.SceneObject = sceneObject;
	this.velocityX = 0;
	this.velocityY = 0;
	this.angleVelocity = 0;
	this.constantForceX = 0;
	this.constantForceY = 0;
	this.gravity = 1.0;
	this.gravityMode = false;
	
	this.enableGravity = function() 
	{
		this.gravityMode = true;
		return;
	};
	
	this.disableGravity = function() 
	{
		this.gravityMode = false;
		return;
	};
	
	this.setGravity = function(gravity) 
	{
		this.gravity = gravity;
		this.enableGravity();
		return;
	};
	
	this.addConstantForce = function(cfX, cfY) 
	{
		this.constantForceX += cfX;
		this.constantForceY += cfY;
		return;
	};
	
	this.addConstantForceX = function(value) 
	{
		this.constantForceX += value;
		return;
	};
	
	this.addConstantForceY = function(value) 
	{
		this.constantForceY += value;
		return;
	};
	
	this.setConstantForce = function(cfX, cfY) 
	{
		this.constantForceX = cfX;
		this.constantForceY = cfY;
		return;
	};
	
	this.setConstantForceX = function(value) 
	{
		this.constantForceX = value;
		return;
	};
	
	this.setConstantForceY = function(value) 
	{
		this.constantForceY = value;
		return;
	};
	
	this.setLinearVelocity = function(velocityX, velocityY) 
	{
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		return;
	};
	
	this.setLinearVelocityX = function(value) 
	{
		this.velocityX = value;
		return;
	};
	
	this.setLinearVelocityY = function(value) 
	{
		this.velocityY = value;
		return;
	};
	
	this.setAngularVelocity = function(value) 
	{
		this.angleVelocity = value;
		return;
	};
	
	this.forceGravity = function() 
	{
		if(this.gravityMode) 
		{
			this.SceneObject.y += this.gravity;
		} else return;
	};
	
	this.forceAccum = function() 
	{
		this.SceneObject.x += this.constantForceX;
		this.SceneObject.y += this.constantForceY;
		return;
	};
	
	this.linearVelocityX = function(velocity) 
	{
		if(velocity == undefined) 
			velocity = this.velocityX;
		this.SceneObject.x += velocity;
		return;
	};
	
	this.linearVelocityY = function(velocity) 
	{
		if(velocity == undefined) 
			velocity = this.velocityY;
		this.SceneObject.y += velocity;
		return;
	};
	
	this.angularVelocity = function(angle) 
	{
		if(angle == undefined)
			angle = this.angleVelocity;
		this.SceneObject.angle += angle;
		return;
	};
};

var Carem_WorldLimit = function(sceneObject) 
{
	this.SceneObject = sceneObject;
	this.boundMinX = 0;
	this.boundMinY = 0;
	this.boundMaxX = 0;
	this.boundMaxY = 0;
	this.Mode = CAREM_LIMIT_OFF;
	this.testCallback = 0;
	
	this.setMode = function(mode) 
	{
		this.Mode = mode;
		return;
	};
	
	this.setBound = function(minX, minY, maxX, maxY) 
	{
		this.boundMinX = minX;
		this.boundMinY = minY;
		this.boundMaxX = maxX;
		this.boundMaxY = maxY;
		return;
	};

	this.setCallback = function(callback) 
	{
		this.testCallback = callback;
		return;
	};
	
	this.test = function() 
	{
		var Limit = -1;
		if(this.SceneObject.x < this.boundMinX) 
		{
			Limit = CAREM_LIMIT_LEFT;
		} 
		else if(this.SceneObject.y < this.boundMinY) 
		{
			Limit = CAREM_LIMIT_TOP;
		} 
		else if(this.SceneObject.x > this.boundMaxX) 
		{
			Limit = CAREM_LIMIT_RIGHT;
		} 
		else if(this.SceneObject.y > this.boundMaxY) 
		{
			Limit = CAREM_LIMIT_BOTTOM;
		}
		if(Limit >= 0 && this.testCallback != 0)
			this.testCallback(Limit);
		return;
	};
	return;
};

var Carem_Collision = function(Source) 
{
	this.minX = -1;
	this.minY = -1;
	this.maxX = 0;
	this.maxY = 0;
	this.boundLeft = 0;
	this.boundTop = 0;
	this.boundRight = 0;
	this.boundBottom = 0;
	
	this.centerX = 0;
	this.centerY = 0;
	this.radius = 0;
	
	this.target = new Array();
	this.source = Source;
	this.mode = CAREM_COLLISION_RECT;
	
	this.setBox = function(left, top, width, height) 
	{
		this.minX = left;
		this.minY = top;
		this.maxX = left+width;
		this.maxY = top+height;
		setBound(this, this.source);
		this.mode = CAREM_COLLISION_RECT;
		return;
	};
	
	var setBound = function(Collision, Source) 
	{
		if(Source != undefined || Source != 0) 
		{
			Collision.boundLeft = Collision.minX + ((-1)*Source.orginNode.x) + Source.x;
			Collision.boundTop = Collision.minY + ((-1)*Source.orginNode.y) + Source.y;
			Collision.boundRight = Collision.boundLeft+Collision.maxX;
			Collision.boundBottom = Collision.boundTop+Collision.maxY;
		}
		return;
	};
	
	this.setRadius = function(centerX, centerY, radius) 
	{
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.mode = CAREM_COLLISION_RAD;
		return;
	};
	
	this.setMode = function(Mode) 
	{
		this.mode = Mode;
		return;
	};
	
	this.addTarget = function(Target, callback) 
	{
		Target.Collision.callback = callback;
		this.target.push(Target);
		return;
	};
	
	this.Test = function() 
	{
		var size = this.target.length;
		if(size >= 1) 
		{
			setBound(this, this.source);
			for(var i=0;i<size;i++) 
			{
				setBound(this.target[i].Collision, this.target[i].SceneObject);
				if(!(this.boundLeft > this.target[i].Collision.boundRight
				|| this.boundRight < this.target[i].Collision.boundLeft
				|| this.boundTop > this.target[i].Collision.boundBottom
				|| this.boundBottom < this.target[i].Collision.boundTop))
				{
					if(this.mode == CAREM_COLLISION_RECT 
					&& this.target[i].Collision) 
					{
						this.target[i].Collision.callback();
					}
				}
			}
		}
	};
};

var Carem_Button = function(Canvas, Asset, x, y, width, height) 
{
	Canvas.addButton(this);
	/** Get Canvas DOM */
	this.DOMCanvasElement = Canvas.getDOM();
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	this.SceneObject.setPosition(x, y);
	this.SceneObject.setSize(width, height);
	/** Button Section */
	this.image = Asset.Asset;
	this.mouseUpCallback = 0;
	this.mouseOverCallback = 0;
	this.clickCallback = 0;
	this.imagePositionX = 0;
	this.imagePositionY = 0;

	this.setAsset = function(Asset) 
	{
		this.image = Asset.Asset;
		return;
	};

	this.setImagePosition = function(x, y) 
	{
		this.imagePositionX = x;
		this.imagePositionY = y;
		return;
	};

	this.setImagePositionX = function(value) 
	{
		this.imagePositionX = value;
	};

	this.setImagePositionY = function(value) 
	{
		this.imagePositionY = value;
		return;
	};

	this.onClick = function(callback) 
	{
		this.clickCallback = callback;
		return;
	};

	this.onMouseOver = function(callback) 
	{
		this.mouseOverCallback = callback;
		return;
	};

	this.onMouseUp = function(callback) 
	{
		this.mouseUpCallback = callback;
		return;
	};

	this.getPosition = function() 
	{
		return this.SceneObject.getPosition();
	};

	this.setPosition = function(x, y) 
	{
		this.SceneObject.setPosition(x, y);
		return;
	};

	this.getPositionX = function() 
	{
		return this.SceneObject.getPositionX();
	};

	this.setPositionX = function(value) 
	{
		this.SceneObject.setPositionX(value);
		return;
	};

	this.getPositionY = function() 
	{
		return this.SceneObject.getPositionY();
	};

	this.setPositionY = function(value) 
	{
		this.SceneObject.setPositionY(value);
		return;
	};

	this.getSize = function() 
	{
		return this.SceneObject.getSize();
	};

	this.setSize = function(width, height) 
	{
		this.SceneObject.setSize(width, height);
		return;
	};

	this.getWidth = function() 
	{
		return this.SceneObject.getWidth();
	};

	this.setWidth = function(value) 
	{
		this.SceneObject.setWidth(value);
		return;
	};

	this.getHeight = function() 
	{
		return this.SceneObject.getHeight();
	};

	this.setHeight = function(value) 
	{
		this.SceneObject.setHeight(value);
		return;
	};

	this.getRotate = function() 
	{
		return this.SceneObject.getRotate();
	};

	this.setRotate = function(value) 
	{
		this.SceneObject.setRotate(value);
		return;
	};

	this.isDisable = function() 
	{
		return this.SceneObject.isDisable();
	};

	this.disable = function() 
	{
		this.SceneObject.disable();
		return;
	};

	this.isEnable = function() 
	{
		return this.SceneObject.isEnable();
	};

	this.enable = function() 
	{
		this.SceneObject.enable();
		return;
	};

	this.isHide = function() 
	{
		this.SceneObject.isHide();
		return;
	};

	this.hide = function() 
	{
		this.SceneObject.hide();
		return;
	};

	this.isShow = function() 
	{
		this.SceneObject.isShow();
		return;
	};

	this.show = function() 
	{
		this.SceneObject.show();
		return;
	};

	this.invisible = function() 
	{
		this.Graphics.setAlpha(0);
		return;
	};

	this.visible = function(percent) 
	{
		if(percent != undefined)
			this.Graphics.setAlpha(percent);
		else 
			this.Graphics.setAlpha(100);
		return;
	};

	this.setAlpha = function(percent) 
	{
		this.visible(percent);
		return;
	};

	this.Draw = function() 
	{
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.rect(0, 0, this.SceneObject.width, this.SceneObject.height);
		this.context.clip();
		this.context.drawImage(this.image, this.imagePositionX, this.imagePositionY);
		return;
	}
};

var Carem_StaticSprite = function(Canvas, Asset, x, y, width, height) 
{
	Canvas.addChild(this);
	/** get Canvas DOM */
	this.DOMCanvasElement = Canvas.getDOM();
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object */
	this.SceneObject = new Carem_SceneObject(this.context);
	this.SceneObject.setSize(width, height);
	/** Physics Section */
	this.Physics = new Carem_Physics(this.SceneObject);
	this.WorldLimit = 0;
	this.Collision = 0;
	/** Static Sprite Section */
	this.image = Asset.Asset;
	this.cropX = x;
	this.cropY = y;
	
	this.setOrgin = function(x, y) 
	{
		this.SceneObject.setOrginNode(x, y);
		return;
	};

	this.resetOrgin = function() 
	{
		this.SceneObject.resetOrginNode();
		return;
	};

	this.getPosition = function() 
	{
		return this.SceneObject.getPosition();
	};
	
	this.setPosition = function(x, y) 
	{
		this.SceneObject.setPosition(x, y);
		return;
	};

	this.getPositionX = function() {
		return this.SceneObject.x;
	};
	
	this.setPositionX = function(value) 
	{
		this.SceneObject.setPositionX(value);
		return;
	};

	this.getPositionY = function() {
		return this.SceneObject.y;
	};
	
	this.setPositionY = function(value) 
	{
		this.SceneObject.setPositionY(value);
		return;
	};

	this.getSize = function() 
	{
		return this.SceneObject.getSize();
	};
	
	this.setSize = function(width, height) 
	{
		this.SceneObject.setSize(width, height);
		return;
	};

	this.getWidth = function() {
		return this.SceneObject.width;
	};
	
	this.setWidth = function(value) 
	{
		this.SceneObject.setWidth(value);
		return;
	};

	this.getHeight = function() {
		return this.SceneObject.height;
	};
	
	this.setHeight = function(value) 
	{
		this.SceneObject.setHeight(value);
		return;
	};

	this.getScale = function() 
	{
		return this.SceneObject.getScale();
	};
	
	this.setScale = function(scaleX, scaleY) 
	{
		this.SceneObject.setScale(scaleX, scaleY);
		return;
	};

	this.getScaleX = function() 
	{
		return this.SceneObject.getScaleX();
	};
	
	this.setScaleX = function(value) 
	{
		this.SceneObject.setScaleX(value);
		return;
	};

	this.getScaleY = function() 
	{
		return this.SceneObject.getScaleY();
	};
	
	this.setScaleY = function(value) 
	{
		this.SceneObject.setScaleY(value);
		return;
	};

	this.getRotate = function() 
	{
		return this.SceneObject.getRotate();
	};
	
	this.setRotate = function(angle) 
	{
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.toggleFlip = function(flipMode) 
	{
		this.SceneObject.flip(flipMode);
		return;
	};
	
	this.setFlip = function(flipMode) 
	{
		this.SceneObject.setFlip(flipMode);
		return;
	};
	
	this.resetFlip = function(flipMode) 
	{
		this.SceneObject.resetFlip(flipMode);
		return;
	};
	
	this.hitPoint = function(x, y, callback) 
	{
		this.SceneObject.hitPoint(x, y, callback);
		return;
	};
	
	this.setHitPointTest = function(callback) 
	{
		this.SceneObject.setHitPointTest(callback);
		return;
	};
	
	this.setHitPoint = function(x, y) 
	{
		this.SceneObject.setHitPoint(x, y);
		return;
	};

	this.resetHitPoint = function() 
	{
		this.SceneObject.resetHitPoint();
		return;
	};

	this.isDisable = function() 
	{
		return this.SceneObject.isDisable();
	};

	this.disable = function() 
	{
		this.SceneObject.disable();
		return;
	};

	this.isEnable = function() 
	{
		return this.SceneObject.isEnable();
	};

	this.enable = function() 
	{
		this.SceneObject.enable();
		return;
	};
	
	this.isHide = function() 
	{
		return this.SceneObject.isHide();
	};

	this.hide = function() 
	{
		this.SceneObject.hide();
		return;
	};

	this.isShow = function() 
	{
		return this.SceneObject.isShow();
	};

	this.show = function() 
	{
		this.SceneObject.show();
		return;
	};
	
	this.invisible = function() 
	{
		this.Graphics.setAlpha(0);
		return;
	};
	
	this.visible = function(percent) 
	{
		if(percent != undefined)
			this.Graphics.setAlpha(percent);
		else 
			this.Graphics.setAlpha(100);
		return;
	};

	this.setAlpha = function(percent) 
	{
		this.visible(percent);
		return;
	};
	
	/** Physics Settings */
	this.setGravity = function(constant) 
	{
		this.Physics.setGravity(constant);
		return;
	};
	
	this.disableGravity = function() 
	{
		this.Physics.disableGravity();
		return;
	};
	
	this.enableGravity = function() 
	{
		this.Physics.enableGravity();
	};
	
	this.setLinearVelocity = function(x, y) 
	{
		this.Physics.setLinearVelocity(x, y);
		return;
	};
	
	this.setLinearVelocityX = function(value) 
	{
		this.Physics.setLinearVelocityX(value);
		return;
	};
	
	this.setLinearVelocityY = function(value) 
	{
		this.Physics.setLinearVelocityY(value);
		return;
	};
	
	this.setAngularVelocity = function(angle) 
	{
		this.Physics.setAngularVelocity(angle);
		return;
	};
	
	this.forceGravity = function() 
	{
		this.Physics.forceGravity();
		return;
	};
	
	this.forceAccum = function() 
	{
		this.Physics.forceAccum();
		return;
	};
	
	this.linearVelocityY = function() 
	{
		this.Physics.linearVelocityY();
		return;
	};
	
	this.linearVelocityX = function() 
	{
		this.Physics.linearVelocityX();
		return;
	};
	
	this.angularVelocity = function() 
	{
		this.Physics.angularVelocity();
		return;
	};
	
	/** Collision Settings */
	this.setCollisionBound = function(left, top, width, height) 
	{
		if(this.Collision == 0)
			this.Collision = new Carem_Collision(this.SceneObject);
		this.Collision.setBox(left, top, width, height);
		return;
	};
	
	this.addCollisionTarget = function(Target, Callback) 
	{
		this.Collision.addTarget(Target, Callback);
		return;
	};
	
	/** WorldLimit Settings */
	this.setWorldLimit = function(minX, minY, maxX, maxY) 
	{
		if(this.WorldLimit == 0)
			this.WorldLimit = new Carem_WorldLimit(this.SceneObject);
		this.WorldLimit.setBound(minX, minY, maxX, maxY);
		return;
	};

	this.setWorldLimitTest = function(callback) 
	{
		if(this.WorldLimit == 0)
			this.WorldLimit = new Carem_WorldLimit(this.SceneObject);
		this.WorldLimit.setCallback(callback);
		return;
	};

	this.testWorldLimit = function() 
	{
		if(this.WorldLimit == 0)
			return;
		this.WorldLimit.test();
		return;
	};
	
	/** Graphics Property Settings */
	this.Draw = function() 
	{
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		if(this.Collision != 0)
			this.Collision.Test();
		this.context.rect(0, 0, this.SceneObject.width, this.SceneObject.height);
		this.SceneObject.testHitPoint();
		this.context.clip();
		this.context.drawImage(this.image, -this.cropX, -this.cropY);
	};
};


var Carem_AnimeSprite = function(Canvas, Asset, Width, Height) 
{
	Canvas.addChild(this);
	/** get Canvas DOM */
	this.DOMCanvasElement = Canvas.getDOM();
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object */
	this.SceneObject = new Carem_SceneObject(this.context);
	this.SceneObject.setSize(Width, Height);
	/** Physics Section */
	this.Physics = new Carem_Physics(this.SceneObject);
	this.WorldLimit = 0;
	this.Collision = 0;
	/** Scroller Section */
	this.image = Asset.Asset;
	this.cropX = 0;
	this.cropY = 0;
	this.currFrame = 0;
	this.currAction = 0;
	this.Timer = 0;
	this.offsetTime = 4;
	this.Actions = 0;
	
	this.setAction = function(value) 
	{
		this.currAction = value;
		return;
	};

	this.setOrgin = function(x, y) 
	{
		this.SceneObject.setOrginNode(x, y);
		return;
	};

	this.resetOrgin = function() 
	{
		this.SceneObject.resetOrginNode();
		return;
	};

	this.getPosition = function() 
	{
		return this.SceneObject.getPosition();
	};
	
	this.setPosition = function(x, y) 
	{
		this.SceneObject.setPosition(x, y);
		return;
	};

	this.getPositionX = function() {
		return this.SceneObject.x;
	};
	
	this.setPositionX = function(value) 
	{
		this.SceneObject.setPositionX(value);
		return;
	};

	this.getPositionY = function() {
		return this.SceneObject.y;
	};
	
	this.setPositionY = function(value) 
	{
		this.SceneObject.setPositionY(value);
		return;
	};

	this.getSize = function() 
	{
		return this.SceneObject.getSize();
	};
	
	this.setSize = function(Width, Height) 
	{
		this.SceneObject.setSize(Width, Height);
		return;
	};

	this.getWidth = function() 
	{
		return this.SceneObject.getWidth();
	};

	this.setWidth = function(value) 
	{
		this.SceneObject.setWidth(value);
		return;
	};

	this.getHeight = function() 
	{
		return this.SceneObject.getHeight();
	};

	this.setHeight = function(value) 
	{
		this.SceneObject.setHeight(value);
		return;
	};

	this.getScale = function() 
	{
		return this.SceneObject.getScale();
	};
	
	this.setScale = function(scaleX, scaleY) 
	{
		this.SceneObject.setScale(scaleX, scaleY);
		return;
	};

	this.getScaleX = function() 
	{
		return this.SceneObject.getScaleX();
	};
	
	this.setScaleX = function(value) 
	{
		this.SceneObject.setScaleX(value);
		return;
	};

	this.getScaleY = function() 
	{
		return this.SceneObject.getScaleY();
	};
	
	this.setScaleY = function(value) 
	{
		this.SceneObject.setScaleY(value);
		return;
	};

	this.getRotate = function() 
	{
		return this.SceneObject.getRotate();
	};

	this.setRotate = function(angle) 
	{
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.hitPoint = function(x, y, callback) 
	{
		this.SceneObject.hitPoint(x, y, callback);
		return;
	};
	
	this.setHitPointTest = function(callback) 
	{
		this.SceneObject.setHitPointTest(callback);
		return;
	};
	
	this.setHitPoint = function(x, y) 
	{
		this.SceneObject.setHitPoint(x, y);
		return;
	};

	this.resetHitPoint = function() 
	{
		this.SceneObject.resetHitPoint();
		return;
	};

	this.isDisable = function() 
	{
		return this.SceneObject.isDisable();
	};

	this.disable = function() 
	{
		this.SceneObject.disable();
		return;
	};

	this.isEnable = function() 
	{
		return this.SceneObject.isEnable();
	};

	this.enable = function() 
	{
		this.SceneObject.enable();
		return;
	};

	this.isHide = function() 
	{
		return this.SceneObject.isHide();
	};

	this.hide = function() 
	{
		this.SceneObject.hide();
		return;
	};

	this.isShow = function() 
	{
		return this.SceneObject.isShow();
	};

	this.show = function() 
	{
		this.SceneObject.show();
		return;
	};

	this.invisible = function() 
	{
		this.Graphics.setAlpha(0);
		return;
	};

	this.visible = function(percent) 
	{
		if(percent != undefined)
			this.Graphics.setAlpha(percent);
		else 
			this.Graphics.setAlpha(100);
		return;
	};

	this.setAlpha = function(percent) 
	{
		this.visible(percent);
		return;
	};
	
	/** Physics Settings */
	this.setGravity = function(constant) 
	{
		this.Physics.setGravity(constant);
		return;
	};
	
	this.disableGravity = function() 
	{
		this.Physics.disableGravity();
		return;
	};
	
	this.enableGravity = function() 
	{
		this.Physics.enableGravity();
		return;
	};
	
	this.setLinearVelocity = function(x, y) 
	{
		this.Physics.setLinearVelocity(x, y);
		return;
	};
	
	this.setLinearVelocityX = function(value) 
	{
		this.Physics.setLinearVelocityX(value);
		return;
	};
	
	this.setLinearVelocityY = function(value) 
	{
		this.Physics.setLinearVelocityY(value);
		return;
	};
	
	this.setAngularVelocity = function(angle) 
	{
		this.Physics.setAngularVelocity(angle);
		return;
	};
	
	this.forceGravity = function() 
	{
		this.Physics.forceGravity();
		return;
	};
	
	this.forceAccum = function() 
	{
		this.Physics.forceAccum();
		return;
	};
	
	this.linearVelocityY = function() 
	{
		this.Physics.linearVelocityY();
		return;
	};
	
	this.linearVelocityX = function() 
	{
		this.Physics.linearVelocityX();
		return;
	};
	
	this.angularVelocity = function() 
	{
		this.Physics.angularVelocity();
		return;
	};
	
	/** Collision Settings */
	this.setCollisionBound = function(left, top, width, height) 
	{
		if(this.Collision == 0)
			this.Collision = new Carem_Collision(this.SceneObject);
		this.Collision.setBox(left, top, width, height);
		return;
	};
	
	this.addCollisionTarget = function(Target, Callback) 
	{
		this.Collision.addTarget(Target, Callback);
		return;
	};
	
	/** WorldLimit Settings */
	this.setWorldLimit = function(minX, minY, maxX, maxY) 
	{
		if(this.WorldLimit == 0)
			this.WorldLimit = new Carem_WorldLimit(this.SceneObject);
		this.WorldLimit.setBound(minX, minY, maxX, maxY);
		return;
	};

	this.setWorldLimitTest = function(callback) 
	{
		if(this.WorldLimit == 0)
			this.WorldLimit = new Carem_WorldLimit(this.SceneObject);
		this.WorldLimit.setCallback(callback);
		return;
	};

	this.testWorldLimit = function() 
	{
		if(this.WorldLimit == 0)
			return;
		this.WorldLimit.test();
		return;
	};

	
	this.Draw = function() 
	{
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		if(this.Collision != 0)
			this.Collision.Test();
		this.context.rect(0, 0, this.SceneObject.width, this.SceneObject.height);
		this.SceneObject.testHitPoint();
		this.context.clip();
		var maxCol = this.image.width/this.SceneObject.width-1;
		this.Timer += 1;
		if(this.Timer%this.offsetTime == 0) 
		{
			if(this.currFrame >= maxCol)
				this.currFrame = 0
			else 
				this.currFrame+=1;
		}
		
		var maxRow =  this.image.height/this.SceneObject.height-1;
		if(maxRow <= this.currAction)
			this.currAction = maxRow;
		this.cropX = this.SceneObject.width*this.currFrame;
		this.cropY = this.SceneObject.height*this.currAction;
		this.context.drawImage(this.image, -this.cropX, -this.cropY);
		return;
	};
};


var Carem_Scroller = function(Canvas, Asset) 
{
	Canvas.addChild(this);
	/** get Canvas DOM */
	this.DOMCanvasElement = Canvas.getDOM();
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scroller Section */
	this.image = Asset.Asset;
	this.direct = {x:1,y:0};
	this.scrollPositionX = 0;
	this.scrollPositionY = 0;
	this.scrollVelocity = 0;
	/** Scene Object */
	this.SceneObject = new Carem_SceneObject(this.context);
	this.SceneObject.setSize(this.image.width, this.image.height);
	
	this.setVelocity = function(value) 
	{
		this.scrollVelocity = value;
		return;
	};
	
	this.setDirect = function(dimension) 
	{
		if(dimension == CAREM_HORIZONTAL)
			this.direct = {x:1,y:0};
		else 
			this.direct = {x:0,y:1};
		return;
	};

	this.getPosition = function() 
	{
		return this.SceneObject.getPosition();
	};

	this.setPosition = function(x, y) 
	{
		this.SceneObject.setPosition(x, y);
		return;
	};

	this.getPositionX = function() 
	{
		return this.SceneObject.x;
	};

	this.setPositionX = function(value) 
	{
		this.SceneObject.setPositionX(value);
		return;
	};

	this.getPositionY = function() 
	{
		return this.SceneObject.y;
	};

	this.setPositionY = function(value) 
	{
		this.SceneObject.setPositionY(value);
		return;
	};

	this.getSize = function() 
	{
		return this.SceneObject.getSize();
	};
	
	this.setSize = function(width, height) 
	{
		this.SceneObject.setSize(width, height);
		return;
	};

	this.getWidth = function() 
	{
		return this.SceneObject.width;
	};

	this.setWidth = function(value) 
	{
		this.SceneObject.setWidth(value);
		return;
	};

	this.getHeight = function() 
	{
		return this.SceneObject.height;
	};

	this.setHeight = function(value) 
	{
		this.SceneObject.setHeight(value);
		return;
	};
	
	this.toggleFlip = function(flipMode) 
	{
		this.SceneObject.flip(flipMode);
		return;
	};
	
	this.setFlip = function(flipMode) 
	{
		this.SceneObject.setFlip(flipMode);
		return;
	};
	
	this.resetFlip = function(flipMode) 
	{
		this.SceneObject.resetFlip(flipMode);
		return;
	};

	this.hitPoint = function(x, y, callback) 
	{
		this.SceneObject.hitPoint(x, y, callback);
		return;
	};
	
	this.setHitPointTest = function(callback) 
	{
		this.SceneObject.setHitPointTest(callback);
		return;
	};
	
	this.setHitPoint = function(x, y) 
	{
		this.SceneObject.setHitPoint(x, y);
		return;
	};

	this.resetHitPoint = function() 
	{
		this.SceneObject.resetHitPoint();
		return;
	};

	this.isDisable = function() 
	{
		return this.SceneObject.isDisable();
	};

	this.disable = function() 
	{
		this.SceneObject.disable();
		return;
	};

	this.isEnable = function() 
	{
		return this.SceneObject.isEnable();
	};

	this.enable = function() 
	{
		this.SceneObject.enable();
		return;
	};

	this.isHide = function() 
	{
		return this.SceneObject.isHide();
	};

	this.hide = function() 
	{
		this.SceneObject.hide();
		return;
	};

	this.isShow = function() 
	{
		return this.SceneObject.isShow();
	};

	this.show = function() 
	{
		this.SceneObject.show();
		return;
	};

	this.invisible = function() 
	{
		this.Graphics.setAlpha(0);
		return;
	};

	this.visible = function(percent) 
	{
		if(percent != undefined)
			this.Graphics.setAlpha(percent);
		else 
			this.Graphics.setAlpha(100);
		return;
	};
	
	this.setAlpha = function(value) 
	{
		this.Graphics.setAlpha(value);
		return;
	};
	
	this.Draw = function() 
	{
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.rect(0, 0, this.image.width, this.image.height);
		this.SceneObject.testHitPoint();
		this.context.clip();
		this.scrollPositionX += this.scrollVelocity*this.direct.x;
		this.scrollPositionY += this.scrollVelocity*this.direct.y;
		if(this.scrollPositionX >= this.image.width)
			this.scrollPositionX = 0;
		if(this.scrollPositionY >= this.image.height)
			this.scrollPositionY = 0;
		this.context.drawImage(
			this.image, 
			this.scrollPositionX, 
			this.scrollPositionY
		);
		this.context.drawImage(
			this.image, 
			this.direct.x*((-1)*(this.image.width-this.scrollPositionX)), 
			this.direct.y*((-1)*(this.image.height-this.scrollPositionY))
		);
		return;
	};
};


var Carem_Particle = function(Canvas, Asset, Density) 
{
	Canvas.addChild(this);
	/** get Canvas DOM */
	this.DOMCanvasElement = Canvas.getDOM();
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Scroller Section */
	this.image = Asset.Asset;
	this.density = Density;
	this.particle = new Array();
	this.loopMode = CAREM_LOOP_CYCLE;
	this.alphaBase = false;
	this.alphaLife = false;
	this.scaleXBase = false;
	this.scaleXLife = false;
	this.scaleYBase = false;
	this.scaleYLife = false;
	this.emittion = false;
	this.rotation = false;
	this.angularSpeed = 0;
	this.positionXMin = 0;
	this.positionXMax = 320;
	this.positionYMin = 0;
	this.positionYMax = 480;
	this.LifeMin = 100;
	this.LifeMax = 800;
	this.boundMinX = 0;
	this.boundMinY = 0;
	this.boundMaxX = 0;
	this.boundMaxY = 0;
	
	this.setEmittion = function(value) 
	{
		this.emittion = value;
		return;
	};
	
	this.setLifeTime = function(minTime, maxTime) 
	{
		this.LifeMin = minTime;
		this.LifeMax = maxTime;
		return;
	};
	
	this.setPositionRandom = function(minX, maxX, minY, maxY) 
	{
		this.positionXMin = minX;
		this.positionXMax = maxX;
		this.positionYMin = minY;
		this.positionYMax = maxY;
		return;
	};
	
	this.setDensity = function(value) 
	{
		this.density = value;
		return;
	};
	
	this.setAlphaBase = function(value) 
	{
		this.alphaBase = value;
		return;
	};
	
	this.setAlphaLife = function(baseVal, endVal) 
	{
		this.alphaBase = baseVal;
		this.alphaLife = endVal;
		return;
	};
	
	this.setScaleBase = function(value) 
	{
		this.scaleXBase = value;
		this.scaleYBase = value;
		return;
	};
	
	this.setScaleXBase = function(value) 
	{
		this.scaleXBase = value;
		return;
	};
	
	this.setScaleYBase = function(value) 
	{
		this.scaleYBase = value;
		return;
	};
	
	this.setScaleLife = function(baseVal, endVal) 
	{
		this.setScaleBase(baseVal);
		this.scaleXLife = endVal;
		this.scaleYLife = endVal;
		return;
	};
	
	this.setScaleXLife = function(baseVal, endVal) 
	{
		this.scaleXBase = baseVal;
		this.scaleXLife = endVal;
		return;
	};
	
	this.setScaleYLife = function(baseVal, endVal) 
	{
		this.scaleYBase = baseVal;
		this.scaleYLife = endVal;
		return;
	};
	
	this.setRotation = function(angle) 
	{
		this.rotation = Carem_Math.RadianFromAngle(angle);
		return;
	};
	
	this.setAngularSpeed = function(value) 
	{
		this.angularSpeed = value;
		return;
	};
	
	this.setWorldLimit = function(boundMinX, boundMinY, boundMaxX, boundMaxY) 
	{
		this.boundMinX = boundMinX;
		this.boundMinY = boundMinY;
		this.boundMaxX = boundMaxX;
		this.boundMaxY = boundMaxY;
		return;
	};
	
	this.genParticle = function() 
	{
		for(var i=0; i<this.density; i++) 
		{
			var lifeTime = Carem_Math.intRandom(this.LifeMin, this.LifeMax);
			
			/** Calculate the Position of Particles. */
			var positionX = Carem_Math.intRandom(this.positionXMin, this.positionXMax);
			var positionY = Carem_Math.intRandom(this.positionYMin, this.positionYMax);
			
			/** Calculate the Alpha of Particles. */
			if(!this.alphaBase)
				this.alphaBase = Carem_Math.intRandom(1, 100)/100;
			if(this.alphaLife)
				var deltaAlpha = this.alphaLife-this.alphaBase;
			else 
				var deltaAlpha = 0;
			
			/** Calculate the Scale X-Asis of Particles. */
			if(!this.scaleXBase)
				this.scaleXBase = Carem_Math.intRandom(1, 100)/100;
			if(this.scaleXLife) 
				var deltaScaleX = this.scaleXLife-this.scaleXBase;
			else
				var deltaScaleX = 0;
			
			/** Calculate the Scale Y-Asis of Particles. */
			if(!this.scaleYBase)
				this.scaleYBase = Carem_Math.intRandom(1, 100)/100;
			if(this.scaleYLife) 
				var deltaScaleY = this.scaleYLife-this.scaleYBase;
			else
				var deltaScaleY = 0;
				
			/** Calculate the Speed of Rotation of particles */
			var angularSpeed = Carem_Math.intRandom(0, this.angularSpeed);
			angularSpeed = Carem_Math.RadianFromAngle(angularSpeed);
			
			/** Calculator the PositionLife X */
			var deltaPosX = Carem_Math.intRandom(this.boundMinX, this.boundMaxX);
			deltaPosX = deltaPosX-positionX;
			var deltaPosY = Carem_Math.intRandom(this.boundMinY, this.boundMaxY);
			deltaPosY = deltaPosY-positionY;
			
			this.particle.push({
				x: positionX, 
				deltaPosX: deltaPosX, 
				y: positionY, 
				deltaPosY: deltaPosY,
				scaleX: this.scaleXBase, 
				deltaScaleX: deltaScaleX, 
				scaleY: this.scaleYBase, 
				deltaScaleY: deltaScaleY, 
				angle: this.rotation, 
				speedRotate: angularSpeed, 
				alpha: this.alphaBase, 
				deltaAlpha: deltaAlpha,
				Lifetime: lifeTime, 
				Life: 0
			});
		}
		return;
	};
	
	this.Draw = function() 
	{
		//this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		
		for(var i=0; i<this.density; i++) 
		{
			this.context.save();
			var alpha;
			var scaleX;
			var scaleY;
			var angle;
			var positionX;
			var positionY;
			
			this.particle[i].Life += 1;
			var life = (this.particle[i].Life%this.particle[i].Lifetime);
			life = life/this.particle[i].Lifetime;
			life = life.toFixed(3);
			var iLife = 1-life;
			iLife = iLife.toFixed(3);
			
			if(this.loopMode == CAREM_LOOP_CYCLE 
			|| this.particle[i].Life < this.particle[i].Lifetime) 
			{
				/** process for alpha */
				if(this.particle[i].deltaAlpha < 0) 
					alpha = this.alphaLife+(iLife*Math.abs(this.particle[i].deltaAlpha));
				else
					alpha = this.particle[i].alpha+(life*this.particle[i].deltaAlpha);
				/** process for scaleX */
				if(this.particle[i].deltaScaleX < 0) 
					scaleX = this.scaleXLife+(iLife*Math.abs(this.particle[i].deltaScaleX));
				else
					scaleX = this.particle[i].scaleX+(life*this.particle[i].deltaScaleX);
				/** process for scaleY */
				if(this.particle[i].deltaScaleY < 0) 
					scaleY = this.scaleYLife+(iLife*Math.abs(this.particle[i].deltaScaleY));
				else
					scaleY = this.particle[i].scaleY+(life*this.particle[i].deltaScaleY);
				/** process for rotation */
				this.particle[i].angle += this.particle[i].speedRotate;
				angle = this.particle[i].angle;
				/** process for movement X */
				/* if(this.particle[i].deltaPosX < 0) 
					positionX = this.scaleYLife+(iLife*Math.abs(this.particle[i].deltaScaleY));
				else
					scaleY = this.particle[i].scaleY+(life*this.particle[i].deltaScaleY); */
				if(this.emittion) {
					if(this.particle[i].x < this.boundMinX 
					|| this.particle[i].x > this.boundMaxX
					|| this.particle[i].y < this.boundMinY
					|| this.particle[i].y > this.boundMaxY) 
					{
						var resetPosX = Carem_Math.intRandom(this.positionXMin, this.positionXMax);
						var resetPosY = Carem_Math.intRandom(this.positionYMin, this.positionYMax);
						this.particle[i].x = resetPosX;
						positionX = this.particle[i].x;
						this.particle[i].y = resetPosY;
						positionY = this.particle[i].y;
					} 
					else 
					{
						var moveX = Carem_Math.intRandom(-5, 5);
						moveX = moveX/10;
						this.particle[i].x += moveX;
						positionX = this.particle[i].x;
						var moveY = Carem_Math.intRandom(-30, 0);
						moveY = moveY/10;
						this.particle[i].y += moveY;
						positionY = this.particle[i].y;
					}
				} 
				else 
				{
					positionX = this.particle[i].x;
					positionY = this.particle[i].y;
				}
				
				this.context.globalAlpha = alpha;
			} 
			else
			{
				this.context.globalAlpha = 0;
			}
			
			this.context.setTransform(
				scaleX, 
				0, 0, 
				scaleY, 
				positionX, 
				positionY
			);
			this.context.rotate(angle);
			this.context.translate(this.image.width*0.5*(-1), this.image.height*0.5*(-1));
			this.context.drawImage(this.image, 0, 0);
			this.context.restore();
		}
	};
};

var Carem_Tile = function(Canvas) 
{
	Canvas.addChild(this);
	/** get Canvas DOM */
	this.DOMCanvasElement = Canvas.getDOM();
	/** Get context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Physic Section */
	this.Physics = new Carem_Physics(this.SceneObject);
	this.WorldLimit = 0;
	/** Tile Section */
	this.align = CAREM_ALIGN_BOTTOM;
	this.order = CAREM_ORDER_LEFT;
	this.tiles = new Array();
	
	this.addCell = function(Asset, x, y) 
	{
		var tile = new Object;
		tile.image = Asset.Asset;
		tile.x = x;
		tile.y = y;
		this.tiles.push(tile);
		return;
	};

	this.getPosition = function() 
	{
		return this.SceneObject.getPosition();
	};
	
	this.setPosition = function(x, y) 
	{
		this.SceneObject.setPosition(x, y);
		return;
	};

	this.getPositionX = function() 
	{
		return this.SceneObject.x;
	};
	
	this.setPositionX = function(value) 
	{
		this.SceneObject.setPositionX(value);
		return;
	};

	this.getPositionY = function() 
	{
		return this.SceneObject.y;
	}
	
	this.setPositionY = function(value) 
	{
		this.SceneObject.setPositionY(value);
		return;
	};

	this.isDisable = function() 
	{
		return this.SceneObject.isDisable();
	};

	this.disable = function() 
	{
		this.SceneObject.disable();
		return;
	};

	this.isEnable = function() 
	{
		return this.SceneObject.isEnable();
	};

	this.enable = function() 
	{
		this.SceneObject.enable();
		return;
	};

	this.isHide = function() 
	{
		return this.SceneObject.isHide();
	};

	this.hide = function() 
	{
		this.SceneObject.hide();
		return;
	};

	this.isShow = function() 
	{
		return this.SceneObject.isShow();
	};

	this.show = function() 
	{
		this.SceneObject.show();
		return;
	};

	this.invisible = function() 
	{
		this.Graphics.setAlpha(0);
		return;
	};

	this.visible = function(percent) 
	{
		if(percent != undefined)
			this.Graphics.setAlpha(percent);
		else 
			this.Graphics.setAlpha(100);
		return;
	};

	this.setAlpha = function(percent) 
	{
		this.visible(percent);
		return;
	};

	/** Physics Settings */
	this.setLinearVelocity = function(x, y) 
	{
		this.Physics.setLinearVelocity(x, y);
		return;
	};
	
	this.setLinearVelocityX = function(value) 
	{
		this.Physics.setLinearVelocityX(value);
		return;
	};
	
	this.setLinearVelocityY = function(value) 
	{
		this.Physics.setLinearVelocityY(value);
		return;
	};
	
	this.setAngularVelocity = function(angle) 
	{
		this.Physics.setAngularVelocity(angle);
		return;
	};

	this.linearVelocityY = function() 
	{
		this.Physics.linearVelocityY();
		return;
	};
	
	this.linearVelocityX = function() 
	{
		this.Physics.linearVelocityX();
		return;
	};
	
	this.angularVelocity = function() 
	{
		this.Physics.angularVelocity();
		return;
	};
	
	/** WorldLimit Settings */
	this.setWorldLimit = function(minX, minY, maxX, maxY) 
	{
		if(this.WorldLimit == 0)
			this.WorldLimit = new Carem_WorldLimit(this.SceneObject);
		this.WorldLimit.setBound(minX, minY, maxX, maxY);
		return;
	};

	this.setWorldLimitTest = function(callback) 
	{
		if(this.WorldLimit == 0)
			this.WorldLimit = new Carem_WorldLimit(this.SceneObject);
		this.WorldLimit.setCallback(callback);
		return;
	};

	this.testWorldLimit = function() 
	{
		if(this.WorldLimit == 0)
			return;
		this.WorldLimit.test();
		return;
	};
	
	this.Draw = function() 
	{
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		var size = this.tiles.length;
		for(var i=0;i<size;i++) 
		{
			this.context.drawImage(
				this.tiles[i].image, 
				this.tiles[i].x, 
				this.tiles[i].y
			);
		}
		return;
	};
};