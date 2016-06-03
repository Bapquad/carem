/*-----------------------------------------------------------------
//	File: carem.js
//	Date: 10.09.2015
//	Description: A Library Of Javascript, Framework For Canvas
//	Author: Vu Huy Cuong - Email: vuhuycuong291987@gmail.com
//	Company: Bapquad Games.
//	Lisence: FFA lisence (Free For All).
-------------------------------------------------------------------*/
var CAREM_PATH_RECT = 1000; 
var CAREM_PATH_ROUND_RECT = 1001;
var	CAREM_PATH_CIRCLE = 1002;
var	CAREM_PATH_OVAL = 1003;
var CAREM_PATH_ARC = 1004;
var CAREM_PATH_POLYGON = 1005;
var CAREM_PATH_LINE = 1006;
var CAREM_PATH_SHAPE = 1007;
var CAREM_PATH_TEXT = 1008;
var CAREM_ALIGN_TOP = 0;
var CAREM_ALIGN_MIDDLE = "MIDDLE";
var CAREM_ALIGN_BOTTOM = "BOTTOM";
var CAREM_ALIGN_LEFT = 0;
var CAREM_ALIGN_CENTER = "CENTER";
var CAREM_ALIGN_RIGHT = "RIGHT";
var CAREM_ORDER_LEFT = 0;
var CAREM_ORDER_RIGHT = 1;
var CAREM_QUEUE_IMAGE = 0;
var CAREM_QUEUE_SOUND = 1;
var CAREM_LINE_CAP_DEFAULT = "butt";
var CAREM_LINE_CAP_ROUND = "round";
var CAREM_LINE_CAP_SQUARE = "square";
var CAREM_LINE_JOIN_DEFAULT = "miter";
var CAREM_LINE_JOIN_BEVEL = "bevel";
var CAREM_LINE_JOIN_ROUND = "round";
var CAREM_REPEAT = "repeat";
var CAREM_REPEAT_X = "repeat-x";
var CAREM_REPEAT_Y = "repeat-y";
var CAREM_NO_REPEAT = "no-repeat";
var CAREM_TEXT_BASELINE_TOP = "top";
var CAREM_TEXT_BASELINE_BOTTOM = "bottom";
var CAREM_TEXT_BASELINE_MIDDLE = "middle";
var CAREM_TEXT_BASELINE_ALPHABETIC = "alphabetic";
var CAREM_TEXT_BASELINE_HANGING = "hanging";
var CAREM_TEXT_ALIGN_START = "start";
var CAREM_TEXT_ALIGN_END = "end";
var CAREM_TEXT_ALIGN_LEFT = "left";
var CAREM_TEXT_ALIGN_CENTER = "center";
var CAREM_TEXT_ALIGN_RIGHT = "right";
var CAREM_GLOBAL_CO_SRCOVER = "source-over";
var CAREM_GLOBAL_CO_SRCATOP = "source-atop";
var CAREM_GLOBAL_CO_SRCIN = "source-in";
var CAREM_GLOBAL_CO_SRCOUT = "source-out";
var CAREM_GLOBAL_CO_DESTOVER = "destination-over";
var CAREM_GLOBAL_CO_DESTATOP = "destination-atop";
var CAREM_GLOBAL_CO_DESTIN = "destination-in";
var CAREM_GLOBAL_CO_DESTOUT = "destination-out";
var CAREM_GLOBAL_CO_LIGHTER = "lighter";
var CAREM_GLOBAL_CO_COPY = "copy";
var CAREM_GLOBAL_CO_XOR = "xor";
var CAREM_FLIP_HORIZONTAL = 0;
var CAREM_FLIP_VERTICLE = 1;
var CAREM_LIMIT_OFF = 0;
var CAREM_LIMIT_NULL = 1;
var CAREM_LIMIT_CLAMP = 2;
var CAREM_LIMIT_BOUNCE = 3;
var CAREM_LIMIT_STICKY = 4;
var CAREM_LIMIT_KILL = 5;
var CAREM_LIMIT_LEFT = 0;
var CAREM_LIMIT_TOP = 1;
var CAREM_LIMIT_RIGHT = 2;
var CAREM_LIMIT_BOTTOM = 3;
var CAREM_HORIZONTAL = 0;
var CAREM_VERTICLE = 1;
var CAREM_LOOP_KILL = 0;
var CAREM_LOOP_CYCLE = 1;
var CAREM_COLLISION_RECT = 0;
var CAREM_COLLISION_RAD = 1;

if (!window.Float32Array)
	Float32Array = Array;
	

var Carem = function(canvasId) {
	this.canvasID = document.getElementById(canvasId);
	this.context = this.canvasID.getContext("2d");
	this.x = 0;
	this.y = 0;
	this.width = this.canvasID.width;
	this.height = this.canvasID.height;
	this.childList = new Array();
	this.fillStyle = 0;
	
	this.getElement = function() {
		return this.canvasID;
	};
	
	this.getContext = function() {
		return this.context;
	};
	
	this.setClearColor = function(r, g, b, a) {
		this.fillStyle = "rgba("+r+", "+g+", "+b+", "+a+")";
		return;
	};
	
	this.setBackground = function(r, g, b, a) {
		this.fillStyle = "rgba("+r+", "+g+", "+b+", "+a+")";
		return;
	};
	
	this.clear = function() {
		this.context.setTransform(1, 0, 0, 1, 0, 0);
		this.context.fillStyle = this.fillStyle;
		this.context.fillRect(0, 0, this.width, this.height);
		return;
	};
	
	this.addChild = function(child) {
		this.childList.push(child);
	};
	
	this.Swap = function() {
		this.context.save();
		this.clear();
		var size = this.childList.length;
		for(var i=0;i<size;i++) {
			this.context.save();
			this.childList[i].Draw();
			this.context.restore();
		}
		this.context.restore();
		return;
	}
	
	/** Events */
	this.addEventListener = function(eventType, callback, track){
		this.canvasID.addEventListener(eventType, callback, track);
	};
};


var Carem_Math = function() {}
Carem_Math.Min = function(value1, value2) {
	return (value1 < value2) ? value1 : value2;
};
Carem_Math.Max = function(value1, value2) {
	return (value1 < value2) ? value2 : value1;
};
Carem_Math.RadianFromAngle = function(Angle) {
	return Angle/360*2*Math.PI;
};
Carem_Math.AngleFromRadian = function(Ridian) {
	return Radian/2/Math.PI*360;
};
Carem_Math.VectorFromAngle = function(Angle) {
	return {x:Math.cos(Carem_Math.RadianFromAngle(Angle)), y:Math.sin(Carem_Math.RadianFromAngle(Angle))};
};
Carem_Math.VectorFromRadian = function(Radian) {
	return {x:Math.cos(Radian), y:Math.sin(Radian)};
};
Carem_Math.Random = function(min, max) {
	if(min > max) {
		var mer = min;
		min = max;
		max = mer;
	}
	return min + Math.random()*(max-min+1);
};
Carem_Math.intRandom = function(min, max) {
	return Math.floor(Carem_Math.Random(min, max));
};


var Carem_Filter = function() {};
Carem_Filter.tmpCanvas = document.createElement('canvas');
Carem_Filter.tmpCtx = Carem_Filter.tmpCanvas.getContext('2d');
Carem_Filter.createImageData = function(w,h) {return this.tmpCtx.createImageData(w,h);};
Carem_Filter.getPixels = function(Image) {
	var virtualCanvas, virtualContext;
	if (Image.getContext) {
		virtualCanvas = Image;
		try { virtualContext = virtualCanvas.getContext('2d'); } catch(e) {}
	}
	if (!virtualContext) {
		virtualCanvas = this.getCanvas(Image.width, Image.height);
		virtualContext = virtualCanvas.getContext('2d');
		virtualContext.drawImage(Image, 0, 0);
	}
	return virtualContext.getImageData(0, 0, virtualCanvas.width, virtualCanvas.height);
};
Carem_Filter.getCanvas = function(Width, Height) {
	var virtualCanvas = document.createElement('canvas');
	virtualCanvas.width = Width;
	virtualCanvas.height = Height;
	return virtualCanvas;
};
Carem_Filter.FilterImage = function(Filter, image, var_args) {
	var args = [this.getPixels(image)];
	for (var i=2; i<arguments.length; i++) {
		args.push(arguments[i]);
	}
	return Filter.apply(null, args);
};
Carem_Filter.GrayScale = function(pixels) {
	var d = pixels.data;
	for (var i=0; i<d.length; i+=4) {
		var r = d[i];
		var g = d[i+1];
		var b = d[i+2];
		// CIE luminance for the RGB
		var v = 0.2126*r + 0.7152*g + 0.0722*b;
		d[i] = d[i+1] = d[i+2] = v
	}
	return pixels;
};
Carem_Filter.Brightness = function(pixels, amount) {
	var d = pixels.data;
	for (var i=0; i<d.length; i+=4) {
		d[i] += amount;
		d[i+1] += amount;
		d[i+2] += amount;
	}
	return pixels;
};
Carem_Filter.Threshold = function(pixels, amount) {
	var d = pixels.data;
	for (var i=0; i<d.length; i+=4) {
		var r = d[i];
		var g = d[i+1];
		var b = d[i+2];
		var v = (0.2126*r + 0.7152*g + 0.0722*b >= amount) ? 255 : 0;
		d[i] = d[i+1] = d[i+2] = v
	}
	return pixels;
};
Carem_Filter.Convolute = function(pixels, weights, opaque) {
	var side = Math.round(Math.sqrt(weights.length));
	var halfSide = Math.floor(side/2);

	var src = pixels.data;
	var sw = pixels.width;
	var sh = pixels.height;

	var w = sw;
	var h = sh;
	var output = Carem_Filter.createImageData(w, h);
	var dst = output.data;

	var alphaFac = opaque ? 1 : 0;

	for (var y=0; y<h; y++) {
		for (var x=0; x<w; x++) {
			var sy = y;
			var sx = x;
			var dstOff = (y*w+x)*4;
			var r=0, g=0, b=0, a=0;
			for (var cy=0; cy<side; cy++) {
				for (var cx=0; cx<side; cx++) {
					var scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
					var scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
					var srcOff = (scy*sw+scx)*4;
					var wt = weights[cy*side+cx];
					r += src[srcOff] * wt;
					g += src[srcOff+1] * wt;
					b += src[srcOff+2] * wt;
					a += src[srcOff+3] * wt;
				}
			}
			dst[dstOff] = r;
			dst[dstOff+1] = g;
			dst[dstOff+2] = b;
			dst[dstOff+3] = a + alphaFac*(255-a);
		}
	}
	return output;
};
Carem_Filter.ConvoluteFloat32 = function(pixels, weights, opaque) {
	var side = Math.round(Math.sqrt(weights.length));
	var halfSide = Math.floor(side/2);

	var src = pixels.data;
	var sw = pixels.width;
	var sh = pixels.height;

	var w = sw;
	var h = sh;
	var output = {
		width: w, height: h, data: new Float32Array(w*h*4)
	};
	var dst = output.data;

	var alphaFac = opaque ? 1 : 0;

	for (var y=0; y<h; y++) {
		for (var x=0; x<w; x++) {
			var sy = y;
			var sx = x;
			var dstOff = (y*w+x)*4;
			var r=0, g=0, b=0, a=0;
			for (var cy=0; cy<side; cy++) {
				for (var cx=0; cx<side; cx++) {
					var scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
					var scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
					var srcOff = (scy*sw+scx)*4;
					var wt = weights[cy*side+cx];
					r += src[srcOff] * wt;
					g += src[srcOff+1] * wt;
					b += src[srcOff+2] * wt;
					a += src[srcOff+3] * wt;
				}
			}
			dst[dstOff] = r;
			dst[dstOff+1] = g;
			dst[dstOff+2] = b;
			dst[dstOff+3] = a + alphaFac*(255-a);
		}
	}
	return output;
};


var Carem_AssetManager = function(ImageExtensionDesc, SoundExtensionDesc) {
	this.QueueType = [
		{Desc : ImageExtensionDesc},
		{Desc : SoundExtensionDesc}
	];
	this.errorCount = 0;
	this.successCount = 0;
	
	this.AssetList = new Array();
	
	this.isComplete = function() {
		return this.AssetList.length == (this.errorCount+this.successCount);
	};
	
	this.getProgress = function() {
		return (this.errorCount+this.successCount)*100/this.AssetList.length;
	}
	
	this.getType = function(Path) {
		var ExtensionRegular = /(?:\.([^.]+))?$/;
		var ExtensionStr = ExtensionRegular.exec(Path)[1];
		var Extension = 0;
		for(var i=0;i<this.QueueType.length;i++) {
			if(this.QueueType[i].Desc.indexOf(ExtensionStr) != -1) {
				Extension = i;
				break;
			}
		}
		return Extension;
	};
	
	this.isQueued = function(Path) {
		var Size = this.AssetList.length;
		for(var i=0;i<Size;i++) {
			if(this.AssetList[i].Path == Path) {
				return i;
			}
		}
		return -1;
	};
	
	this.QueueFile = function(Path) {
		var isQueued = this.isQueued(Path);
		if(isQueued != -1)
			return;
		var FilePoint;
		var Type = this.getType(Path);
		switch(Type) {
			case CAREM_QUEUE_IMAGE:
				FilePoint = new Image();
				break;
			case CAREM_QUEUE_SOUND:
				FilePoint = new Audio();
				break;
			default:
				break;
		}
		this.AssetList.push({Path:Path, Asset:FilePoint, Type:Type, Ready:false});
		return;
	};
	
	this.QueueImageLoad = function(Index) {
		var File = this.AssetList[Index];
		var Manager = this;
		// Tracking Success State
		File.Asset.addEventListener("load", function(e) {
			File.Ready = true;
			Manager.successCount += 1;
		}, false);
		// Tracking Failure State;
		File.Asset.addEventListener("error", function(e) {
			File.Ready = false;
			Manager.errorCount += 1;
		}, false);
		File.Asset.src = File.Path;
		return;
	};
	
	this.QueueSoundLoad = function(Index) {
		this.errorCount += 1;
		return;
	}
	
	this.QueueDownloadFile = function(Index, Type) {		
		switch(Type) {
			case CAREM_QUEUE_IMAGE:
				this.QueueImageLoad(Index);
				break;
			case CAREM_QUEUE_SOUND:
				this.QueueSoundLoad(Index);
				break;
			default:
				break;
		}
		return;
	};
	
	this.QueueDownloadAll = function() {
		var Size = this.AssetList.length;
		for(var i=0;i<Size;i++) {
			switch(this.AssetList[i].Type) {
				case CAREM_QUEUE_IMAGE:
					this.QueueImageLoad(i);
					break;
				case CAREM_QUEUE_SOUND:
					this.QueueSoundLoad(i);
					break;
				default:
					break;
			}
		}
		return;
	};
	
	this.getAsset = function(Path) {
		var Index = this.isQueued(Path);
		if(Index != -1) 
			return this.AssetList[Index];
		else {
			this.QueueFile(Path);
			var Type = this.getType(Path);
			this.QueueDownloadFile(this.AssetList.length-1, Type);
			return this.getAsset(Path);
		}
	};
	
};


var Carem_Graphics = function(context) {
	/** Receive the context */
	this.context = context;
	/** Color, Style, and Shadow Properties */
	this.patternFill = 0;
	this.gradientFill = 0;
	this.patternStroke = 0;
	this.gradientStroke = 0;
	this.fillStyle = 0;
	this.strokeStyle = 0;
	this.shadowColor = 0;
	this.shadowBlur = 0;
	this.shadowOffsetX = 0;
	this.shadowOffsetY = 0;
	/** Stroke Style, Stroke Properties */
	this.lineCap = 0;
	this.lineJoin = 0;
	this.strokeWidth = 0;
	/** Global Alpha Properties */
	this.alpha = 1.0;
	this.composite = CAREM_GLOBAL_CO_SRCOVER;
	this.clip = false;
	this.save = false;
	this.restore = false;
	
	
	this.setMask = function() {
	/**********************************************************
	 * function setMask();
	 * Description: This method used to create mask 
	 *				for current path.
	 * Parameters:	Void
	 **********************************************************/
		this.setSave(true);
		this.setClip(true);
		return;
	};
	
	
	this.clearMask = function() {
	/**********************************************************
	 * function clearMask();
	 * Description: This method used to destroy mask 
	 *				for current path.
	 * Parameters:	Void
	 **********************************************************/
		this.setSave(false);
		this.setClip(false);
		return;
	};
	
	
	this.endMask = function() {
	/**********************************************************
	 * function endMask();
	 * Description: This method used to set restore 
	 *				for restore current drawing.
	 * Parameters:	Void
	 **********************************************************/
		this.releaseMask();
		return;
	};
	
	
	this.releaseMask = function() {
	/**********************************************************
	 * function releaseMask();
	 * Description: This method used to set restore 
	 *				for restore current drawing.
	 * Parameters:	Void
	 **********************************************************/
		this.setRestore(true);
		return;
	};
	
	
	this.setSave  = function(state) {
	/**********************************************************
	 * function setSave();
	 * Description: This method used to set save 
	 *				for saving current drawing.
	 * Parameters:	1. state
	 **********************************************************/
		this.save = state;
		return;
	};
	
	
	this.setRestore = function(state) {
	/**********************************************************
	 * function setRestore();
	 * Description: This method used to set restore 
	 *				for restoring current drawing.
	 * Parameters:	1. state
	 **********************************************************/
		this.restore = state;
		return;
	};
	
	
	this.setClip = function(clip) {
	/**********************************************************
	 * function setClip();
	 * Description: This method used to set clip 
	 *				for current drawing.
	 * Parameters:	1. clip
	 **********************************************************/
		this.clip = clip;
		return;
	};
	
	
	this.drawImage = function(asset, x, y) {
	/**********************************************************
	 * function drawImage();
	 * Description: This method used to draw image
	 *				into current drawing.
	 * Parameters:	1. asset
	 *				2. x
	 *				3. y
	 **********************************************************/
		if(asset.Type != CAREM_QUEUE_IMAGE)
			return;
		this.context.drawImage(asset.Asset, x, y);
		return;
	};
	
	
	this.getImageData = function(imgData) {
	/**********************************************************
	 * function getImageData();
	 * Description: This method used to receive the 
	 *				info of image data.
	 * Parameters:	1. imgData
	 **********************************************************/
		return {
			Data : imageData.data,
			Width : imageData.width, 
			Height : imageData.height
		};
	};
	
	
	this.copyImageData = function(x, y, width, height) {
	/**********************************************************
	 * function pasteImageData();
	 * Description: This method used to paste the 
	 *				data of image to current drawing.
	 * Parameters:	1. x
	 *				2. y
	 *				3. width
	 *				4. height
	 **********************************************************/
		return this.context.getImageData(x, y, width, height);
	};
	
	
	this.pasteImageData = function(imgData, x, y) {
	/**********************************************************
	 * function pasteImageData();
	 * Description: This method used to paste the 
	 *				data of image to current drawing.
	 * Parameters:	1. width
	 *				2. height
	 **********************************************************/
		this.context.putImageData(imgData, x, y);
		return;
	};
	
	
	this.createBlankImage = function(width, height) {
	/**********************************************************
	 * function createBlankImage();
	 * Description: This method used to create the blank
	 *				data of image of current drawing.
	 * Parameters:	1. width
	 *				2. height
	 **********************************************************/
		return this.context.createImageData(width, height);
	};
	
	
	this.setComposite = function(Composite) {
	/**********************************************************
	 * function setComposite();
	 * Description: This method used to change the 
	 *				Composite Operation of current drawing.
	 * Parameters:	1. Composite
	 **********************************************************/
		this.composite = Composite;
		return;
	};
	
	
	this.setAlpha = function(alpha) {
	/**********************************************************
	 * function setAlpha();
	 * Description: This method used to change the 
	 *				alpha of current drawing.
	 * Parameters:	1. alpha
	 **********************************************************/
		this.alpha = alpha/100;
		return;
		
	};
	
	
	this.createPattern = function(asset, mode) {
	/**********************************************************
	 * function createPattern();
	 * Description: This method used to create a 
	 *				pattern for fill and stroke.
	 * Parameters:	1. asset
	 *				2. mode
	 **********************************************************/
		if(!asset.Ready && asset.Type != CAREM_QUEUE_IMAGE) 
			return 0;
		if(mode == undefined)
			mode = CAREM_REPEAT;
		return this.context.createPattern(asset.Asset, mode);
	};
	
	
	this.createLinearGradient = function(startPoint, endPoint, color) {
	/**********************************************************
	 * function createLinearGradient();
	 * Description: This method create a linear 
	 * 				gradient for fill and stroke.
	 * Parameters:	1. startPoint
	 *				2. endPoint
	 *				3. color
	 **********************************************************/
		var gradient = 0;
		if(startPoint == undefined && endPoint == undefined) {
			startPoint = {x:0,y:0};
			endPoint = {x:0, y:this.height};
		}
		gradient = this.context.createLinearGradient(
			startPoint.x, 
			startPoint.y, 
			endPoint.x, 
			endPoint.y
		);
		return addStopColor(gradient, color);
	};
	
	
	this.createRadialGradient = function(startPoint, endPoint, radius, color) {
	/**********************************************************
	 * function createRadialGradient();
	 * Description: This method create a radius 
	 * 				gradient for fill and stroke.
	 * Parameters:	1. startPoint
	 *				2. endPoint
	 *				3. radius
	 *				4. color
	 **********************************************************/
		var gradient = 0;
		gradient = this.context.createRadialGradient(
			startPoint.x, 
			startPoint.y, 
			radius[0], 
			endPoint.x, 
			endPoint.y, 
			radius[1]
		);
		return addStopColor(gradient, color);
	};
	
	
	var addStopColor = function(gradient, color) {
	/**********************************************************
	 * function addStopColor();
	 * Description: This method add stop color for
	 * 				gradient for fill and stroke. 
	 * Parameters:	1. gradient
	 *				2. color
	 **********************************************************/
		var size = color.length;
		for(var i=0;i<size;i++) {
			gradient.addColorStop(color[i].stop, "rgba("+color[i].r+", "+color[i].g+", "+color[i].b+", "+color[i].a+")");
		}
		return gradient;
	};
	
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
	/**********************************************************
	 * function setBackground();
	 * Description: This method apply gradient type
	 * 				for gradient for fill.
	 * Parameters:	1. color
	 *				2. startPoint
	 *				3. endPoint
	 *				4. radius
	 **********************************************************/
		if(color.length <= 1)
			this.fillStyle = "rgba("+color[0].r+", "+color[0].g+", "+color[0].b+", "+color[0].a+")";
		else if(radius == undefined)
			this.gradientFill = this.createLinearGradient(startPoint, endPoint, color);
		else 
			this.gradientFill = this.createRadialGradient(startPoint, endPoint, radius, color);
		return;
	};
	
	
	this.setPatternFill = function(asset, mode) {
	/**********************************************************
	 * function setPatternFill();
	 * Description: This method apply pattern type
	 * 				for pattern for fill.
	 * Parameters:	1. asset
	 *				2. mode
	 **********************************************************/
		this.patternFill = this.createPattern(asset, mode);
		return;
	};
	
	
	this.clearBackground = function() {
	/**********************************************************
	 * function clearBackground();
	 * Description: This method destroy current gradient 
	 * 				from fill.
	 * Parameters:	Undefine.
	 **********************************************************/
		this.fillStyle = 0;
		return;
	};
	
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
	/**********************************************************
	 * function setStrokeColor();
	 * Description: This method used to set current 
	 * 				color for path stroke.
	 * Parameters:	1. color
	 *				2. startPoint
	 *				3. endPoint
	 *				4. radius
	 **********************************************************/
		if(color.length <= 1) 
			this.strokeStyle = "rgba("+color[0].r+", "+color[0].g+", "+color[0].b+", "+color[0].a+")";
		else if(radius == undefined)
			this.gradientStroke = this.createLinearGradient(startPoint, endPoint, color);
		else 
			this.gradientStroke = this.createRadialGradient(startPoint, endPoint, radius, color);
		if(this.strokeWidth == 0)
			this.strokeWidth = 1;
		return;
	};
	
	
	this.setPatternStroke = function(asset, mode) {
	/**********************************************************
	 * function setPatternStroke();
	 * Description: This method used to set current 
	 * 				pattern for path stroke.
	 * Parameters:	1. asset
	 *				2. mode
	 **********************************************************/
		this.patternStroke = this.createPattern(asset, mode);
		return;
	};
	
	
	this.setStrokeShape = function(lineCap, lineJoin, strokeWidth) {
	/**********************************************************
	 * function setStrokeShape();
	 * Description: This method used to set current 
	 * 				shape for path stroke.
	 * Parameters:	1. lineCap
	 *				2. lineJoin
	 *				3. strokeWidth
	 **********************************************************/
		this.lineCap = lineCap;
		this.lineJoin = lineJoin;
		this.strokeWidth = strokeWidth;
		return;
	};
	
	
	this.setStrokeCap = function(Type) {
	/**********************************************************
	 * function setStrokeCap();
	 * Description: This method used to set current 
	 * 				line cap for path stroke.
	 * Parameters:	1. Type
	 **********************************************************/
		this.lineCap = Type;
		return;
	};
	
	
	this.setStrokeJoin = function(Type) {
	/**********************************************************
	 * function setStrokeJoin();
	 * Description: This method used to set current 
	 * 				line join for path stroke.
	 * Parameters:	1. Type
	 **********************************************************/
		this.lineJoin = Type;
		return;
	};
	
	
	this.setStrokeWidth = function(Width) {
	/**********************************************************
	 * function setStrokeWidth();
	 * Description: This method used to set current 
	 * 				line width for path stroke.
	 * Parameters:	1. Type
	 **********************************************************/
		this.strokeWidth = Width;
		return;
	};
	
	
	this.clearStroke = function() {
	/**********************************************************
	 * function clearStroke();
	 * Description: This method used to destroy current 
	 * 				stroke form path stroke.
	 * Parameters:	Undefine
	 **********************************************************/
		this.strokeStyle = 0;
		return;
	};
	
	
	this.setShadow = function(color, offset, blur) {
	/**********************************************************
	 * function setShadow();
	 * Description: This method used to setup shadow 
	 * 				for current shadow form path.
	 * Parameters:	1. color
	 *				2. offset
	 *				3. blur
	 **********************************************************/
		this.shadowColor = "rgba("+color.r+", "+color.g+", "+color.b+", "+color.a+")";;
		this.shadowBlur = blur;
		this.shadowOffsetX = offset.x;
		this.shadowOffsetY = offset.y;
		return;
	};
	
	
	this.showShadow = function(allow) {
	/**********************************************************
	 * function showShadow();
	 * Description: This method used to show shadow 
	 *				for current path.
	 * Parameters:	1. allow
	 **********************************************************/
		if(!allow) {
			this.hideShadow();
			return;
		}
		this.context.shadowColor = this.shadowColor;
		this.context.shadowBlur = this.shadowBlur;
		this.context.shadowOffsetX = this.shadowOffsetX;
		this.context.shadowOffsetY = this.shadowOffsetY;
		return;
	};
	
	
	this.hideShadow = function() {
	/**********************************************************
	 * function hideShadow();
	 * Description: This method used to hide shadow 
	 *				form current path.
	 * Parameters:	Undefine
	 **********************************************************/
		this.context.shadowColor = 0;
		this.context.shadowBlur = 0;
		this.context.shadowOffsetX = 0;
		this.context.shadowOffsetY = 0;
		return;
	};
	
	
	this.clearShadow = function() {
	/**********************************************************
	 * function clearShadow();
	 * Description: This method used to destroy shadow 
	 *				form current path.
	 * Parameters:	Undefine
	 **********************************************************/
		this.shadowColor = 0;
		this.shadowBlur = 0;
		this.shadowOffsetX = 0;
		this.shadowOffsetY = 0;
		return;
	};
	
	
	this.ShadowShape = function() {
	/**********************************************************
	 * function shadowShape();
	 * Description: This method used to calculate
	 *				shadow for current path.
	 * Parameters:	Undefine
	 **********************************************************/
		var useShadowStroke = true;
		this.showShadow(useShadowStroke);
		if(this.fillStyle != 0 || this.gradientFill != 0 || this.patternFill != 0) {
			this.context.fill();
			useShadowStroke = false;
		}
		this.showShadow(useShadowStroke);
		if(this.strokeStyle != 0 || this.gradientStroke != 0) {
			if(this.strokeWidth != 0) 
				this.context.stroke();
		}
		if(this.clip)
			this.context.clip();
		if(this.restore)
			this.context.restore();
	};
	
	
	this.ShadowText = function(textDoc) {
	/**********************************************************
	 * function shadowText();
	 * Description: This method used to calculate
	 *				shadow for current text.
	 * Parameters:	1. textDoc - array text and position
	 **********************************************************/
		var useShadowStroke = true;
		this.showShadow(useShadowStroke);
		if(this.fillStyle != 0 || this.gradientFill != 0 || this.patternFill != 0) {
			var Size = textDoc.length;
			for(var i=0;i<Size;i++)
				this.context.fillText(textDoc[i].Text, textDoc[i].x, textDoc[i].y);
			useShadowStroke = false;
		}
		this.showShadow(useShadowStroke);
		if(this.strokeStyle != 0 || this.gradientStroke != 0) {
			if(this.strokeWidth != 0) {
				var Size = textDoc.length;
				for(var i=0;i<Size;i++)
					this.context.strokeText(textDoc[i].Text, textDoc[i].x, textDoc[i].y);
			}
		}
		if(this.clip)
			this.context.clip();
		if(this.restore)
			this.context.restore();
	};
	
	
	this.UpdateParameter = function() {
	/**********************************************************
	 * function UpdateParameter();
	 * Description: This method used to calculate and
	 *				update style info for current graphics.
	 * Parameters:	Undefine
	 **********************************************************/
		if(this.save)
			this.context.save();
		this.context.globalAlpha = this.alpha;
		this.context.globalCompositeOperation= this.composite;
		if(this.fillStyle != 0)
			this.context.fillStyle=this.fillStyle;
		if(this.gradientFill != 0)
			this.context.fillStyle=this.gradientFill;
		if(this.patternFill != 0)
			this.context.fillStyle=this.patternFill;
		if(this.strokeStyle != 0)
			this.context.strokeStyle=this.strokeStyle;
		if(this.gradientStroke != 0)
			this.context.strokeStyle=this.gradientStroke;
		if(this.patternStroke != 0)
			this.context.strokeStyle=this.patternStroke;
		if(this.lineCap != 0)
			this.context.lineCap = this.lineCap;
		if(this.lineWidth != 0)
			this.context.lineWidth = this.strokeWidth;
		if(this.lineJoin != 0)
			this.context.lineJoin = this.lineJoin;
	};
};


var Carem_SceneObject = function(context) {
	/** Receive the context */
	this.context = context;
	/** Transform Properties */
	this.x = 0;
	this.y = 0;
	/** Align, Orgin Properties */
	this.orginNode = {x:0,y:0};
	/** Rotate Properties */
	this.angle = 0;
	/** Size, Width, Height, Scale Properties */
	this.width = 0;
	this.height = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	/** Visible Properties */
	this.layer = 0;
	this.group = 0;
	this.visible = true;
	this.lifeTime = -1;
	this.hScaleMode = 1;
	this.vScaleMode = 1;
	
	this.flip = function(mode) {
		switch(mode) {
			case CAREM_FLIP_HORIZONTAL:
				this.hScaleMode *= -1;
				break;
			case CAREM_FLIP_VERTICLE:
				this.vScaleMode *= -1;
				break;
			default:
				break;
		}
		return;
	};
	
	this.setFlip = function(mode) {
		switch(mode) {
			case CAREM_FLIP_HORIZONTAL:
				this.hScaleMode = -1;
				break;
			case CAREM_FLIP_VERTICLE:
				this.vScaleMode = -1;
				break;
			default:
				break;
		}
		return;
	};
	
	this.resetFlip = function(mode) {
		switch(mode) {
			case CAREM_FLIP_HORIZONTAL:
				this.hScaleMode = 1;
				break;
			case CAREM_FLIP_VERTICLE:
				this.vScaleMode = 1;
				break;
			default:
				break;
		}
		return;
	};
	
	this.setLifetime = function(time) {
		this.lifeTime = time;
		return;
	};
	
	this.setOrginNode = function(x, y) {
		this.orginNode.x = (-1)*x;
		this.orginNode.y = (-1)*y;
		return;
	};
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
		return;
	};
	
	this.setPositionX = function(value) {
		this.x = value;
		return;
	};
	
	this.setPositionY = function(value) {
		this.y = value;
		return;
	};
	
	this.setSize = function(width, height) {
		this.width = width;
		this.height = height;
		return;
	};
	
	this.setWidth = function(value) {
		this.width = value;
		return;
	};
	
	this.setHeight = function(value) {
		this.height = value;
		return;
	};
	
	this.setScale = function(scaleX, scaleY) {
		this.scaleX = scaleX;
		this.scaleY = scaleY;
		return;
	};
	
	this.setScaleX = function(value) {
		this.scaleX = value;
		return;
	};
	
	this.setScaleY = function(value) {
		this.scaleY = value;
		return;
	};
	
	this.setRotate = function(angle) {
		this.angle = 360-angle;
		this.angle = this.angle/360*2*3.14;
		return;
	};
	
	this.getScaleRatio = function() {
		var value = Carem_Math.Max(this.width, this.height);
		if(this.width==value) 
			this.context.scale(1, this.height/this.width);
		else
			this.context.scale(this.width/this.height, 1);
		return value;
	};
	
	this.createPattern = function(asset, mode) {
		if(!asset.Ready && asset.Type != CAREM_QUEUE_IMAGE) 
			return 0;
		if(mode == undefined)
			mode = CAREM_REPEAT;
		return this.context.createPattern(asset.Asset, mode);
	};
	
	this.createLinearGradient = function(startPoint, endPoint, color) {
		var gradient = 0;
		if(startPoint == undefined && endPoint == undefined) {
			startPoint = {x:0,y:0};
			endPoint = {x:0, y:this.height};
		}
		gradient = this.context.createLinearGradient(
			startPoint.x, 
			startPoint.y, 
			endPoint.x, 
			endPoint.y
		);
		return addStopColor(gradient, color);
	};
	
	this.createRadialGradient = function(startPoint, endPoint, radius, color) {
		var gradient = 0;
		gradient = this.context.createRadialGradient(
			startPoint.x, 
			startPoint.y, 
			radius[0], 
			endPoint.x, 
			endPoint.y, 
			radius[1]
		);
		return addStopColor(gradient, color);
	}
	
	var addStopColor = function(gradient, color) {
		var size = color.length;
		for(var i=0;i<size;i++) {
			gradient.addColorStop(color[i].stop, "rgba("+color[i].r+", "+color[i].g+", "+color[i].b+", "+color[i].a+")");
		}
		return gradient;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		if(color.length <= 1)
			this.fillStyle = "rgba("+color[0].r+", "+color[0].g+", "+color[0].b+", "+color[0].a+")";
		else if(radius == undefined)
			this.gradientFill = this.createLinearGradient(startPoint, endPoint, color);
		else 
			this.gradientFill = this.createRadialGradient(startPoint, endPoint, radius, color);
		return;
	};
	
	this.setPatternFill = function(asset, mode) {
		this.patternFill = this.createPattern(asset, mode);
		return;
	};
	
	this.clearBackground = function() {
		this.fillStyle = 0;
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		if(color.length <= 1) 
			this.strokeStyle = "rgba("+color[0].r+", "+color[0].g+", "+color[0].b+", "+color[0].a+")";
		else if(radius == undefined)
			this.gradientStroke = this.createLinearGradient(startPoint, endPoint, color);
		else 
			this.gradientStroke = this.createRadialGradient(startPoint, endPoint, radius, color);
		if(this.strokeWidth == 0)
			this.strokeWidth = 1;
		return;
	};
	
	this.setPatternStroke = function(asset, mode) {
		this.patternStroke = this.createPattern(asset, mode);
		return;
	};
	
	this.setStrokeShape = function(lineCap, lineJoin, strokeWidth) {
		this.lineCap = lineCap;
		this.lineJoin = lineJoin;
		this.strokeWidth = strokeWidth;
		return;
	};
	
	this.setStrokeCap = function(Type) {
		this.lineCap = Type;
		return;
	};
	
	this.setStrokeJoin = function(Type) {
		this.lineJoin = Type;
		return;
	};
	
	this.setStrokeWidth = function(Width) {
		this.strokeWidth = Width;
		return;
	};
	
	this.clearStroke = function() {
		this.strokeStyle = 0;
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.shadowColor = "rgba("+color.r+", "+color.g+", "+color.b+", "+color.a+")";;
		this.shadowBlur = blur;
		this.shadowOffsetX = offset.x;
		this.shadowOffsetY = offset.y;
		return;
	};
	
	this.clearShadow = function() {
		this.shadowColor = 0;
		this.shadowBlur = 0;
		this.shadowOffsetX = 0;
		this.shadowOffsetY = 0;
		return;
	};
	
	this.showShadow = function(allow) {
		if(!allow) {
			this.hideShadow();
			return;
		}
		this.context.shadowColor = this.shadowColor;
		this.context.shadowBlur = this.shadowBlur;
		this.context.shadowOffsetX = this.shadowOffsetX;
		this.context.shadowOffsetY = this.shadowOffsetY;
		return;
	};
	
	this.hideShadow = function() {
		this.context.shadowColor = 0;
		this.context.shadowBlur = 0;
		this.context.shadowOffsetX = 0;
		this.context.shadowOffsetY = 0;
		return;
	};
	
	this.shadowShape = function() {
		var useShadowStroke = true;
		this.showShadow(useShadowStroke);
		if(this.fillStyle != 0 || this.gradientFill != 0 || this.patternFill != 0) {
			this.context.fill();
			useShadowStroke = false;
		}
		this.showShadow(useShadowStroke);
		if(this.strokeStyle != 0 || this.gradientStroke != 0) {
			if(this.strokeWidth != 0) 
				this.context.stroke();
		}
	};
	
	this.shadowText = function(textDoc) {
		var useShadowStroke = true;
		this.showShadow(useShadowStroke);
		if(this.fillStyle != 0 || this.gradientFill != 0 || this.patternFill != 0) {
			this.context.fillText(textDoc[0].Text, textDoc[0].x, textDoc[0].y);
			useShadowStroke = false;
		}
		this.showShadow(useShadowStroke);
		if(this.strokeStyle != 0 || this.gradientStroke != 0) {
			if(this.strokeWidth != 0) 
				this.context.strokeText(textDoc[0].Text, textDoc[0].x, textDoc[0].y);
		}
	};
	
	this.UpdateParameter = function() {
		this.context.beginPath();
		/** Transform Objects */
		this.context.setTransform(this.scaleX*this.hScaleMode, 0, 0, this.scaleY*this.vScaleMode, this.x, this.y);
		this.context.rotate(this.angle);
		
		var translateX = (this.hScaleMode < 0) ? (-1)*(this.width+this.orginNode.x) : this.orginNode.x;
		var translateY = (this.vScaleMode < 0) ? (-1)*(this.height+this.orginNode.y) : this.orginNode.y;
		this.context.translate(translateX, translateY);
	};
	
	this.StyleUpdate = function() {
		/** Update Fill Style of Object */
		if(this.fillStyle != 0)
			this.context.fillStyle=this.fillStyle;
		if(this.gradientFill != 0)
			this.context.fillStyle=this.gradientFill;
		if(this.patternFill != 0)
			this.context.fillStyle=this.patternFill;
		if(this.strokeStyle != 0)
			this.context.strokeStyle=this.strokeStyle;
		if(this.gradientStroke != 0)
			this.context.strokeStyle=this.gradientStroke;
		if(this.patternStroke != 0)
			this.context.strokeStyle=this.patternStroke;
		if(this.lineCap != 0)
			this.context.lineCap = this.lineCap;
		if(this.lineWidth != 0)
			this.context.lineWidth = this.strokeWidth;
		if(this.lineJoin != 0)
			this.context.lineJoin = this.lineJoin;
	};
};


var Carem_SymbolArc = function(Canvas) {
	Canvas.addChild(this);
	/** Get Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObject Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Symbol Arc Section */
	this.sliceAngleFrom = 0;
	this.sliceAngleTo = 0;
	this.sliceAngleFromDraw = 0;
	this.sliceAngleToDraw = 360;
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setSize = function(width, height) {
		this.SceneObject.setSize(width, height);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.setCircleSlice = function(startAngle, endAngle) {
		this.sliceAngleFrom = Carem_Math.RadianFromAngle(startAngle);
		this.sliceAngleTo = Carem_Math.RadianFromAngle(endAngle);
		this.sliceAngleFromDraw = Carem_Math.RadianFromAngle(360-startAngle);
		this.sliceAngleToDraw = Carem_Math.RadianFromAngle(360-endAngle);
		return;
	};
	
	this.setSlice = function(angleFrom, angleTo) {
		this.setCircleSlice(angleFrom, angleTo);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		var s = Carem_Math.VectorFromRadian(this.sliceAngleTo);
		radius = this.SceneObject.getScaleRatio()/2;
		this.context.moveTo((s.x.toFixed(2)*radius)+radius, ((-1)*(s.y.toFixed(2)*radius))+radius);
		this.context.lineTo(radius, radius);
		this.context.arc(radius,radius,radius,this.sliceAngleFromDraw, this.sliceAngleToDraw);
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolCircle = function(Canvas) {
	Canvas.addChild(this);
	/** Get Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObejct Seection */
	this.SceneObject = new Carem_SceneObject(this.context);
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
		
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setDistance = function(distance) {
		this.SceneObject.setSize(distance, distance);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.arc(
			this.SceneObject.width/2, 
			this.SceneObject.width/2, 
			this.SceneObject.width/2, 
			0, 2*Math.PI
		);
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolLine = function(Canvas) {
	Canvas.addChild(this);
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphic Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObject Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Line Section */
	this.pointArray = new Array();
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.pushPoint = function(Point) {
		this.pointArray.push(Point);
		return;
	};
	
	this.setStartPoint = function(x, y) {
		var Point = {x:x, y:y};
		this.pushPoint(Point);
		return;
	};
	
	this.setEndPoint = function(x, y) {
		var Point = {x:x, y:y};
		this.pushPoint(Point);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.moveTo(this.pointArray[0].x, this.pointArray[0].y);
		this.context.lineTo(this.pointArray[1].x, this.pointArray[1].y);
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolOval = function(Canvas) {
	Canvas.addChild(this);
	/** Get Context Section */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObject Sections */
	this.SceneObject = new Carem_SceneObject(this.context);
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setSize = function(width, height) {
		this.SceneObject.setSize(width, height);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		var value = this.SceneObject.getScaleRatio()/2;
		this.context.arc(value, value, value, 0, 2*Math.PI);
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolPolygon = function(Canvas) {
	Canvas.addChild(this);
	/** Get Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObject Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** SymbolPolygon Section */
	this.pointArray = new Array();
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
		
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setSize = function(width, height) {
		this.SceneObject.setSize(width, height);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.setSide = function(side) {
		var offset = 360/side;
		var point = 0;
		for(var i=0;i<side;i++) {
			if(i!=0)
				point += offset;
			var pointVector = Carem_Math.VectorFromAngle(point);
			this.pointArray.push(pointVector);
		}
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		var Size = this.pointArray.length;
		var Radius = this.SceneObject.getScaleRatio()/2;
		for(var i=Size;i>=0;i--) {
			if(i==Size) {
				this.context.moveTo(
					Radius+this.pointArray[0].x*Radius, 
					Radius+this.pointArray[0].y*Radius
				);
				continue;
			}
			this.context.lineTo(
				Radius+this.pointArray[i%Size].x*Radius, 
				Radius+this.pointArray[i%Size].y*Radius
			);
		}
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolRect = function(Canvas) {
	Canvas.addChild(this);
	/** Get Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObject Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setSize = function(width, height) {
		this.SceneObject.setSize(width, height);
		return;
	}
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setStrokeShape = function(lineJoin, width) {
		this.Graphics.setStrokeShape(0, lineJoin, width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.rect(0, 0, this.SceneObject.width, this.SceneObject.height);
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolRoundRect = function(Canvas) {
	Canvas.addChild(this);
	/** Get context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object Section */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Round Rect Section */
	this.radiusLeftTop = 0;
	this.radiusRightTop = 0;
	this.radiusRightBottom = 0;
	this.radiusLeftBottom = 0;
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	}
	
	this.setSize = function(width, height) {
		this.SceneObject.setSize(width, height);
		return;
	}
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setStrokeShape = function(lineJoin, width) {
		this.Graphics.setStrokeShape(0, lineJoin, width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.setRoundRadius = function(r1, r2, r3, r4) {
		this.radiusLeftTop = r1;
		this.radiusRightTop = r2;
		this.radiusRightBottom = r3;
		this.radiusLeftBottom = r4;
		return;
	};
	
	this.setRadius = function(radius) {
		this.setRoundRadius(radius, radius, radius, radius);
		return;
	};
	
	this.setRound = function(radiusLT, radiusRT, radiusRB, radiusLB) {
		this.setRoundRadius(radiusLT, radiusRT, radiusRB, radiusLB);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.moveTo(this.radiusLeftTop, 0);
		this.context.lineTo(this.SceneObject.width-this.radiusRightTop, 0);
		this.context.arcTo(this.SceneObject.width, 0, this.SceneObject.width, this.radiusRightTop, this.radiusRightTop);
		this.context.lineTo(this.SceneObject.width, this.SceneObject.height-this.radiusRightBottom);
		this.context.arcTo(this.SceneObject.width, this.SceneObject.height, this.SceneObject.width-this.radiusRightBottom, this.SceneObject.height, this.radiusRightBottom);
		this.context.lineTo(this.radiusLeftBottom, this.SceneObject.height);
		this.context.arcTo(0, this.SceneObject.height, 0, this.SceneObject.height-this.radiusLeftBottom, this.radiusLeftBottom);
		this.context.lineTo(0, this.radiusLeftTop);
		this.context.arcTo(0, 0, this.radiusLeftTop, 0, this.radiusLeftTop);
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_SymbolShape = function(Canvas) {
	Canvas.addChild(this);
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphics Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** SceneObject Section */
	this.SceneObject = new Carem_SceneObject(Canvas.getContext());
	/** Sumbol Shape Section */
	this.pointArray = new Array();
	this.openShape = 0;
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.startShape = function(point) {
		this.openShape = point;
		return;
	};
	
	this.startPoint = function(x, y) {
		this.startShape({x:x, y:y});
		return;
	};
	
	this.pushPoint = function(Point) {
		this.pointArray.push(Point);
		return;
	};
	
	this.addPoint = function(x, y, bX, bY, lX, lY) {
		this.pushPoint({x:x, y:y, bpX:bX, bpY:bY, lpX:lX, lpY:lY});
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.moveTo(this.openShape.x, this.openShape.y);
		var Size = this.pointArray.length;
		for(var i=0;i<Size;i++) {
			this.context.bezierCurveTo(
				this.pointArray[i].bpX, 
				this.pointArray[i].bpY, 
				this.pointArray[i].lpX, 
				this.pointArray[i].lpY, 
				this.pointArray[i].x, 
				this.pointArray[i].y
			);
		}
		if(this.pointArray[Size-1].x != this.openShape.x && this.pointArray[Size-1].y != this.openShape.y) {
			this.context.lineTo(this.openShape.x, this.openShape.y);
		}
		this.Graphics.ShadowShape();
		return;
	};
};


var Carem_Text = function(Canvas) {
	Canvas.addChild(this);
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphic Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Text Section */
	this.fontName = "Arial";
	this.fontSize = 12;
	this.textBaseline = CAREM_TEXT_BASELINE_ALPHABETIC;
	this.textAlign = CAREM_TEXT_ALIGN_START;
	this.textList = new Array();
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setBackgroundImage = function(asset, mode) {
		this.Graphics.setPatternFill(asset, mode);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width);
		return;
	};
	
	this.setStrokeShape = function(lineJoin, width) {
		this.Graphics.setStrokeShape(0, lineJoin, width);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.pushTextItem = function(textItem) {
		this.textList.push(textItem);
		return;
	};
	
	this.setTextFont = function(fontName) {
		this.fontName = fontName;
		return;
	};
	
	this.setTextSize = function(fontSize) {
		this.fontSize = fontSize;
		return;
	};
	
	this.setTextAlign = function(textAlign) {
		this.textAlign = textAlign;
		return;
	};
	
	this.setTextBaseLine = function(baseLine) {
		this.textBaseline = baseLine;
		return;
	};
	
	this.setFont = function(fontName) {
		this.setTextFont(fontName);
		return;
	};
	
	this.setSize = function(size) {
		this.setTextSize(size);
		return;
	};
	
	this.setBaseLine = function(baseLine) {
		this.setTextBaseLine(baseLine);
		return;
	};
	
	this.setAlign = function(align) {
		this.setTextAlign(align);
		return;
	};
	
	this.addText = function(Text, x, y, Width) {
		this.pushTextItem({Text:Text, x:x, y:y, width:Width});
		return;
	};
	
	this.setText = function(Text, x, y, Width) {
		this.textList = [{Text:Text, x:x, y:y, width:Width}];
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		this.context.font = this.fontSize+"px "+this.fontName;
		this.context.textAlign = this.textAlign;
		this.context.textBaseline = this.textBaseline;
		this.Graphics.ShadowText(this.textList);
		return;
	};
};


var Carem_Image = function(Canvas, Asset) {
	Canvas.addChild(this);
	/** Get Layer Context */
	this.context = Canvas.getContext();
	/** Graphic Section */
	this.Graphics = new Carem_Graphics(this.context);
	/** Scene Object */
	this.SceneObject = new Carem_SceneObject(this.context);
	/** Image Section */
	this.image = Asset.Asset;
	this.idata = 0;
	
	this.setLifetime = function(time) {
		this.SceneObject.setLeftime(time);
		return;
	};
	
	this.setOrgin = function(x, y) {
		this.SceneObject.setOrginNode(x, y);
		return;
	};
	
	this.setPosition = function(x, y) {
		this.SceneObject.setPosition(x, y);
		return;
	};
	
	this.setRotate = function(angle) {
		this.SceneObject.setRotate(angle);
		return;
	};
	
	this.setBackground = function(color, startPoint, endPoint, radius) {
		this.Graphics.setBackground(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeColor = function(color, startPoint, endPoint, radius) {
		this.Graphics.setStrokeColor(color, startPoint, endPoint, radius);
		return;
	};
	
	this.setStrokeImage = function(asset, mode) {
		this.Graphics.setPatternStroke(asset, mode);
		return;
	};
	
	this.setStrokeWidth = function(width) {
		this.Graphics.setStrokeWidth(width*2);
		return;
	};
	
	this.setStrokeShape = function(lineJoin, width) {
		this.Graphics.setStrokeShape(0, lineJoin, width*2);
		return;
	};
	
	this.setShadow = function(color, offset, blur) {
		this.Graphics.setShadow(color, offset, blur);
		return;
	};
	
	this.setFilter = function(Filter, Arg1, Arg2, Arg3) {
		this.idata = Carem_Filter.FilterImage(Filter, this.image, Arg1, Arg2, Arg3);
		return;
	};
	
	this.Draw = function() {
		this.SceneObject.UpdateParameter();
		this.Graphics.UpdateParameter();
		
		if(this.idata != 0)
			this.context.rect(0, 0, this.idata.width, this.idata.height);
		else 
			this.context.rect(0, 0, this.image.width, this.image.height);
		this.Graphics.ShadowShape();
		this.Graphics.showShadow(false);
		
		if(this.idata != 0)
			this.context.putImageData(this.idata, this.SceneObject.x, this.SceneObject.y);
		else
			this.context.drawImage(this.image, 0, 0);
		return;
	};
};