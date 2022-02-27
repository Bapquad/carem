/*-----------------------------------------------------------------
 *	File: Carem.js
 *	Date: 10.09.2015
 *	Description: A Library Of Javascript, Framework For Canvas
 *	Company: Bapquad Games.
 *	Lisence: FFA lisence (Free For All).
 *-----------------------------------------------------------------*/
export { Carem }
export const CAREM_PATH_RECT = 1000; 
export const CAREM_PATH_ROUND_RECT = 1001;
export const CAREM_PATH_CIRCLE = 1002;
export const CAREM_PATH_OVAL = 1003;
export const CAREM_PATH_ARC = 1004;
export const CAREM_PATH_POLYGON = 1005;
export const CAREM_PATH_LINE = 1006;
export const CAREM_PATH_SHAPE = 1007;
export const CAREM_PATH_TEXT = 1008;
export const CAREM_ALIGN_TOP = "TOP";
export const CAREM_ALIGN_MIDDLE = "MIDDLE";
export const CAREM_ALIGN_BOTTOM = "BOTTOM";
export const CAREM_ALIGN_LEFT = "LEFT";
export const CAREM_ALIGN_CENTER = "CENTER";
export const CAREM_ALIGN_RIGHT = "RIGHT";
export const CAREM_ORDER_LEFT = 0;
export const CAREM_ORDER_RIGHT = 1;
export const CAREM_QUEUE_IMAGE = 0;
export const CAREM_QUEUE_SOUND = 1;
export const CAREM_QUEUE_FONT = 2;
export const CAREM_LINE_CAP_DEFAULT = "butt";
export const CAREM_LINE_CAP_BUTT = "butt";
export const CAREM_LINE_CAP_ROUND = "round";
export const CAREM_LINE_CAP_SQUARE = "square";
export const CAREM_LINE_JOIN_DEFAULT = "miter";
export const CAREM_LINE_JOIN_MITER = "miter";
export const CAREM_LINE_JOIN_BEVEL = "bevel";
export const CAREM_LINE_JOIN_ROUND = "round";
export const CAREM_REPEAT = "repeat";
export const CAREM_REPEAT_X = "repeat-x";
export const CAREM_REPEAT_Y = "repeat-y";
export const CAREM_NO_REPEAT = "no-repeat";
export const CAREM_TEXT_BASELINE_TOP = "top";
export const CAREM_TEXT_BASELINE_BOTTOM = "bottom";
export const CAREM_TEXT_BASELINE_MIDDLE = "middle";
export const CAREM_TEXT_BASELINE_ALPHABETIC = "alphabetic";
export const CAREM_TEXT_BASELINE_HANGING = "hanging";
export const CAREM_TEXT_ALIGN_START = "start";
export const CAREM_TEXT_ALIGN_END = "end";
export const CAREM_TEXT_ALIGN_LEFT = "left";
export const CAREM_TEXT_ALIGN_CENTER = "center";
export const CAREM_TEXT_ALIGN_RIGHT = "right";
export const CAREM_GLOBAL_CO_SRCOVER = "source-over";
export const CAREM_GLOBAL_CO_SRCATOP = "source-atop";
export const CAREM_GLOBAL_CO_SRCIN = "source-in";
export const CAREM_GLOBAL_CO_SRCOUT = "source-out";
export const CAREM_GLOBAL_CO_DESTOVER = "destination-over";
export const CAREM_GLOBAL_CO_DESTATOP = "destination-atop";
export const CAREM_GLOBAL_CO_DESTIN = "destination-in";
export const CAREM_GLOBAL_CO_DESTOUT = "destination-out";
export const CAREM_GLOBAL_CO_LIGHTER = "lighter";
export const CAREM_GLOBAL_CO_COPY = "copy";
export const CAREM_GLOBAL_CO_XOR = "xor";
export const CAREM_FLIP_HORIZONTAL = 0;
export const CAREM_FLIP_VERTICLE = 1;
export const CAREM_LIMIT_OFF = 0;
export const CAREM_LIMIT_NULL = 1;
export const CAREM_LIMIT_CLAMP = 2;
export const CAREM_LIMIT_BOUNCE = 3;
export const CAREM_LIMIT_STICKY = 4;
export const CAREM_LIMIT_KILL = 5;
export const CAREM_LIMIT_LEFT = 0;
export const CAREM_LIMIT_TOP = 1;
export const CAREM_LIMIT_RIGHT = 2;
export const CAREM_LIMIT_BOTTOM = 3;
export const CAREM_HORIZONTAL = 0;
export const CAREM_VERTICLE = 1;
export const CAREM_LOOP_KILL = 0;
export const CAREM_LOOP_CYCLE = 1;
export const CAREM_COLLISION_RECT = 0;
export const CAREM_COLLISION_RAD = 1;
export const CAREM_ACTX = 0;
export function Tick( callback ) 
{
	if(window.requestAnimationFrame) 
	{
		return window.requestAnimationFrame(callback);
	} 
	else if(window.mozRequestAnimationFrame) 
	{
		return window.mozRequestAnimationFrame(callback);
	} 
	else if(window.webkitRequestAnimationFrame) 
	{
		return window.webkitRequestAnimationFrame(callback);
	} 
	else if(window.msRequestAnimationFrame) 
	{
		return window.msRequestAnimationFrame(callback);
	}
	else 
	{
		return window.SetTimeout(callback, 1000 / 60);
	}
} 
export function UnTick(tickID) 
{
	if(window.cancelAnimationFrame) 
	{
		return window.cancelAnimationFrame(tickID); 
	} 
	else 
	{
		return window.clearTimeout(tickID);
	}
}

if (!window.Float32Array)
	Float32Array = Array; 

/** Global Audio Context */
window.AudioContext = window.AudioContext||window.webkitAudioContext;
	
/**
 * Object Extends Functions
 */
Object.appendChain = function( oChain, oProto ) 
{
	if( arguments.length < 2 ) 
	{ 
		throw new TypeError( 'Object.appendChain - Not enough arguments' );
	} 
	
	if(typeof oProto === 'number' || typeof oProto === 'boolean') 
	{
		return;
	}

	var oNewProto = oProto,
		oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

	for(var o1st = this.getPrototypeOf( o2nd ); o1st !== Object.prototype && o1st !== Function.prototype; o1st = this.getPrototypeOf( o2nd ) ) 
	{
		o2nd = o1st;
	}

	if(oProto.constructor === String) 
	{
		oNewProto = Function.prototype;
		oReturn = Function.apply( null, Array.prototype.slice.call( arguments, 1 ) );
		this.setPrototypeOf( oReturn, oLast );
	}

	this.setPrototypeOf( o2nd, oNewProto );
	return oReturn;
}; 

Object.prototype.extends = function( proto ) 
{
	Object.appendChain( this, proto );
	return;
};


/*------------------------------------------------------------------
 *
 * NAMESPACE <Carem>
 * Defines the namespace Carem js.
 *
 *-----------------------------------------------------------------*/
var Carem = function() 
{
	this.name = "@bapquad/carem";
	this.description = "An open source Javascript library for 2D graphics programing";
	this.version = "1.x";
}; 

/*------------------------------------------------------------------
 *
 * CLASS <Camel::Layer>
 * Defines the class layer for carem js
 *
 *-----------------------------------------------------------------*/
Carem.Layer = function( canvasId ) 
{
	var LAYRoot = this;
	if(typeof canvasId==="string")
		this.DOMElement = document.getElementById(canvasId);
	else
		this.DOMElement = canvasId;
	this.context = this.DOMElement.getContext("2d");
	this.width = this.DOMElement.width;
	this.height = this.DOMElement.height;
	this.x = 0;
	this.y = 0;
	this.childList = new Array();
	this.buttonList = new Array();
	this.fillStyle = 0;
	this.ratio = 1.0;

	if(this.DOMElement.CaremSDK==undefined) 
	{
		this.DOMElement.CaremSDK = {
			"layers": [LAYRoot], 
		};

		this.DOMElement.addEventListener("mousedown", function(e)
		{
			var DOMElement = e.target;
			var mpx = (e.layerX||e.clientX)/(DOMElement.clientWidth/DOMElement.width);
			var mpy = (e.layerY||e.clientY)/(DOMElement.clientHeight/DOMElement.height);
			var len = DOMElement.CaremSDK.layers.length;
			for(var i=0; i<len; i++) 
			{
				var layer = DOMElement.CaremSDK.layers[i];
				var buttonLen = layer.buttonList.length;
				for(var k=0;k<buttonLen;k++) 
				{
					if(layer.buttonList[k].mouseDownCallback) 
					{
						let btn = layer.buttonList[k];
						let minX = btn.x+btn.orginNode.x*btn.scaleX;
						let minY = btn.y+btn.orginNode.y*btn.scaleY;
						let maxX = minX+btn.width*btn.scaleX;
						let maxY = minY+btn.height*btn.scaleY;
						if(mpx > minX && mpx < maxX && mpy > minY && mpy < maxY && btn.enable) 
						{
							btn.mouseDownCallback.apply(null, e);
						}
					}
				}
			}
		});
		this.DOMElement.addEventListener("mouseup", function(e) {
			var DOMElement = e.target;
			var mpx = (e.layerX||e.clientX)/(DOMElement.clientWidth/DOMElement.width);
			var mpy = (e.layerY||e.clientY)/(DOMElement.clientHeight/DOMElement.height);
			var len = DOMElement.CaremSDK.layers.length;
			for(var i=0; i<len; i++) 
			{
				var layer = DOMElement.CaremSDK.layers[i];
				var buttonLen = layer.buttonList.length;
				for(var k=0;k<buttonLen;k++) 
				{
					if(layer.buttonList[k].mouseUpCallback) 
					{
						let btn = layer.buttonList[k];
						let minX = btn.x+btn.orginNode.x*btn.scaleX;
						let minY = btn.y+btn.orginNode.y*btn.scaleY;
						let maxX = minX+btn.width*btn.scaleX;
						let maxY = minY+btn.height*btn.scaleY;
						if(mpx > minX && mpx < maxX && mpy > minY && mpy < maxY && btn.enable) 
						{
							btn.mouseUpCallback.apply(null, e);
						}
					}
				}
			}
		});
		this.DOMElement.addEventListener("mousemove", function(e) {
			var DOMElement = e.target;
			var mpx = (e.layerX||e.clientX)/(DOMElement.clientWidth/DOMElement.width);
			var mpy = (e.layerY||e.clientY)/(DOMElement.clientHeight/DOMElement.height);
			var len = DOMElement.CaremSDK.layers.length;
			for(var i=0; i<len; i++) 
			{
				var layer = DOMElement.CaremSDK.layers[i];
				var buttonLen = layer.buttonList.length;
				for(var k=0;k<buttonLen;k++) 
				{
					if(layer.buttonList[k].mouseMoveCallback) 
					{
						let btn = layer.buttonList[k];
						let minX = btn.x+btn.orginNode.x*btn.scaleX;
						let minY = btn.y+btn.orginNode.y*btn.scaleY;
						let maxX = minX+btn.width*btn.scaleX;
						let maxY = minY+btn.height*btn.scaleY;
						if(mpx > minX && mpx < maxX && mpy > minY && mpy < maxY && btn.enable) 
						{
							btn.mouseMoveCallback.apply(null, e);
						}
					}
				}
			}
		});
	} 
	else 
	{
		this.DOMElement.CaremSDK["layers"].push(LAYRoot);
	} 

	this.GetChilds		= function() { return this.childList; };
	this.GetButtons		= function() { return this.buttonList; };
	this.GetDOM 		= function() { return this.GetElement(); };
	this.GetElement 	= function() { return this.DOMElement; };
	this.GetWidth 		= function() { return this.DOMElement.width; };
	this.GetHeight 		= function() { return this.DOMElement.height; };
	this.GetPositionX 	= function() { return this.x; };
	this.GetPositionY 	= function() { return this.y; };
	this.GetContext 	= function() { return this.context; };
	
	this.SetWidth = function( value )  
	{
		this.width = value;
		return this;
	};
	
	this.SetHeight = function( value ) 
	{
		this.height = value;
		return this;
	};
	
	this.SetSize = function( width, height ) 
	{
		this.width = width;
		this.height = height;
		return this;
	};

	this.SetPosition = function( x, y ) 
	{
		this.x = x;
		this.y = y;
		return this;
	};
	
	this.SetPositionX = function( value ) 
	{
		this.x = value;
		return this;
	};
	
	this.SetPositionY = function( value ) 
	{
		this.y = value;
		return this;
	};
	
	this.AddPosition = function( x, y ) 
	{
		this.x += x;
		this.y += y;
		return this;
	};
	
	this.AddPositionX = function( value ) 
	{
		this.x += value;
		return this;
	};
	
	this.AddPositionY = function( value ) 
	{
		this.y += value;
		return this;
	};
	
	this.SetClearColor = function( r, g, b, a ) 
	{
		this.fillStyle = "rgba("+r+", "+g+", "+b+", "+a+")";
		return this;
	};
	
	this.SetBackground = function( r, g, b, a ) 
	{
		this.fillStyle = "rgba("+r+", "+g+", "+b+", "+a+")";
		return this;
	};
	
	this.Add = function( child ) 
	{
		child.DOMCanvasElement = this.DOMElement;
		child.context = this.context;
		this.childList.push(child);
		if(undefined!=child.button) 
		{ 
			if(child.button===1) 
			{
				this.buttonList.push(child);
			}
		}
		return this;
	};
	
	this.AddChild = function( child ) 
	{
		return this.Add(child);
	};

	this.AddButton = function( child ) 
	{
		return this.Add(child);
	};
	
	this.Fill = function() 
	{
		this.context.setTransform(1, 0, 0, 1, this.x, this.y);
		this.context.fillStyle = this.fillStyle;
		this.context.fillRect(0, 0, this.DOMElement.width, this.DOMElement.height);
		return this;
	};
	
	this.Clear = function() 
	{
		this.context.clearRect(0, 0, this.DOMElement.width, this.DOMElement.height);
		return this;
	};

	this.Remove = function( child ) 
	{
		child.delFlag = true;
		var childs = this.childList;
		var len = childs.length;
		for(var i=0;i<len;i++) 
		{
			if( childs[i].delFlag ) 
			{
				delete childs[i];
				childs.splice( i, 1 );
				break;
			}
		} 
		return this;
	};
	
	this.Zoom = function( percent ) 
	{
		this.ratio = percent/100;
		return this;
	};
	
	this.Swap = function() 
	{
		this.context.save();
		this.Fill();
		var lim = this.childList.length;
		for(var i=0;i<lim;i++) 
		{
			var childNode = this.childList[i];
			if(!childNode.visible||childNode.delFlag)
				continue;
			this.context.save();
			childNode.Draw(this.ratio, this.x, this.y);
			this.context.restore();
			childNode.UpdateMask();
		}
		this.context.restore();
	}

	/** Events */
	this.addEventListener = function( e, c, t ) 
	{
		this.DOMElement.addEventListener( e, c, t );
	};
};

Carem.Math 		= function() {}
Carem.Math.Min	= function( value1, value2 ) { return (value1 < value2) ? value1 : value2; };
Carem.Math.Max	= function( value1, value2 ) { return (value1 < value2) ? value2 : value1; };
Carem.Math.RadianFromAngle	= function( angle ) { return angle/360*2*Math.PI; };
Carem.Math.AngleFromRadian	= function( radian ) { return radian/2/Math.PI*360; };
Carem.Math.VectorFromAngle	= function( angle ) { return {x:Math.cos(Carem.Math.RadianFromAngle( angle )), y:Math.sin(Carem.Math.RadianFromAngle( angle ))}; };
Carem.Math.VectorFromRadian = function( radian ) { return {x:Math.cos( radian ), y:Math.sin( radian )}; };
Carem.Math.Random 			= function( min, max ) 
{
	if(min > max) {
		var mer = min;
		min = max;
		max = mer;
	}
	return min + Math.random()*(max-min+1);
};
Carem.Math.IntRandom = function( min, max ) { return Math.floor(Carem.Math.Random(min, max)); };

Carem.Filter = function() {};
Carem.Filter.tmpCanvas = document.createElement('canvas');
Carem.Filter.tmpCtx = Carem.Filter.tmpCanvas.getContext('2d');
Carem.Filter.CreateImageData = function( w,h ) { return this.tmpCtx.createImageData(w,h); };
Carem.Filter.GetPixels = function( img ) 
{
	var virtualCanvas, virtualContext;
	if (img.GetContext) 
	{
		virtualCanvas = img;
		try { virtualContext = virtualCanvas.getContext('2d'); } catch(e) {}
	}
	if (!virtualContext) 
	{
		virtualCanvas = this.GetCanvas(img.width, img.height);
		virtualContext = virtualCanvas.getContext('2d');
		virtualContext.drawImage(img, 0, 0);
	}
	return virtualContext.getImageData(0, 0, virtualCanvas.width, virtualCanvas.height);
};

Carem.Filter.GetCanvas = function( w, h ) 
{
	var virtualCanvas = document.createElement('canvas');
	virtualCanvas.width = w;
	virtualCanvas.height = h;
	return virtualCanvas;
};

Carem.Filter.FilterImage = function( filter, img, var_args ) 
{
	var args = [this.GetPixels( img )];
	for (var i=2; i<arguments.length; i++) 
	{
		args.push(arguments[i]);
	}
	return filter.apply(null, args);
};

Carem.Filter.GrayScale = function( pixels ) 
{
	var d = pixels.data;
	for (var i=0; i<d.length; i+=4) 
	{
		var r = d[i];
		var g = d[i+1];
		var b = d[i+2];
		// CIE luminance for the RGB
		var v = 0.2126*r + 0.7152*g + 0.0722*b;
		d[i] = d[i+1] = d[i+2] = v
	}
	return pixels;
};

Carem.Filter.Brightness = function( pixels, amount ) 
{
	var d = pixels.data;
	for (var i=0; i<d.length; i+=4) 
	{
		d[i] += amount;
		d[i+1] += amount;
		d[i+2] += amount;
	}
	return pixels;
};

Carem.Filter.Threshold = function( pixels, amount ) 
{
	var d = pixels.data;
	for (var i=0; i<d.length; i+=4) 
	{
		var r = d[i];
		var g = d[i+1];
		var b = d[i+2];
		var v = (0.2126*r + 0.7152*g + 0.0722*b >= amount) ? 255 : 0;
		d[i] = d[i+1] = d[i+2] = v
	}
	return pixels;
};

Carem.Filter.Convolute = function( pixels, weights, opaque ) 
{
	var side = Math.round(Math.sqrt(weights.length));
	var halfSide = Math.floor(side/2);

	var src = pixels.data;
	var sw = pixels.width;
	var sh = pixels.height;

	var w = sw;
	var h = sh;
	var output = Carem.Filter.CreateImageData(w, h);
	var dst = output.data;

	var alphaFac = opaque ? 1 : 0;

	for (var y=0; y<h; y++) 
	{
		for (var x=0; x<w; x++) 
		{
			var sy = y;
			var sx = x;
			var dstOff = (y*w+x)*4;
			var r=0, g=0, b=0, a=0;
			for (var cy=0; cy<side; cy++) 
			{
				for (var cx=0; cx<side; cx++) 
				{
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

Carem.Filter.ConvoluteFloat32 = function( pixels, weights, opaque ) 
{
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

	for (var y=0; y<h; y++) 
	{
		for (var x=0; x<w; x++) 
		{
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

Carem.AssetManager = function( imgExtDesc, sndExtDesc, fntExtDesc ) 
{
	this.queueType = [ {desc : imgExtDesc}, {desc : sndExtDesc}, {desc : fntExtDesc} ];
	this.errorCount = 0;
	this.successCount = 0;
	this.assetList = new Array();

	this.GetErrorNumber		= function() { return this.errorCount; };
	this.GetSuccessNumber	= function() { return this.successCount; };
	this.GetAssetList		= function() { return this.assetList; };
	this.IsComplete			= function() { return this.assetList.length == (this.errorCount+this.successCount); };
	this.GetProgress		= function() { return (this.errorCount+this.successCount)*100/this.assetList.length; }
	
	this.GetType = function( p ) 
	{
		var extReg = /(?:\.([^.]+))?$/;
		var extStr = extReg.exec(p)[1];
		var ext = 0;
		for(var i=0;i<this.queueType.length;i++) {
			if(this.queueType[i].desc.indexOf(extStr) != -1) {
				ext = i;
				break;
			}
		}
		return ext;
	};
	
	this.IsQueued = function( p ) 
	{
		var len = this.assetList.length;
		for(var i=0; i<len; i++) 
		{
			if(this.assetList[i].path == p) 
			{
				return i;
			}
		}
		return -1;
	};
	
	this.QueueFile = function( p ) 
	{
		var isQueued = this.IsQueued( p );
		
		if(isQueued != -1)
		{
			return;
		}
		
		var file;
		var type = this.GetType( p );
		var obj = {
			path:p, 
			type:type, 
			ready:false, 
		};
		switch(type) {
			case CAREM_QUEUE_FONT:
				file = new FontFace(p, 'url('+p+')');
				break;
			case CAREM_QUEUE_IMAGE:
				file = new Image();
				break;
			case CAREM_QUEUE_SOUND:
				file = new Audio();
				obj["Play"] = function(loop) 
				{
					if(CAREM_ACTX) 
					{
						var source = CAREM_ACTX.createBufferSource();
						if(loop) source.loop = true;
						source.buffer = obj["buffer"];
						source.connect(CAREM_ACTX.destination);
						source.start(); 
						return source;
					}
					return;
				};
				obj["Loop"] = function(flag) 
				{
					var loop = flag || true;
					obj["asset"].loop = loop;
				};
				obj["Mute"] = function(flag) 
				{
					var mute = flag || true;
					obj["asset"].muted = mute;
				};
				obj["Volume"] = function(value) 
				{
					var volume = (value/100).toFixed(0) || 0;
					obj["asset"].volume = volume;
				};
			default:
				break;
		} 
		obj["asset"] = file;
		this.assetList.push(obj);
	};
	
	this.QueueDownloadFile = function( index, type ) 
	{
		var file = this.assetList[index];
		var mgr = this;
		var compFlg = "load", errFlg = "error";
		
		if( type == CAREM_QUEUE_FONT ) 
		{ 
			file.asset.load().then( function(font)
			{
				// Add font to document
				document.fonts.add(font);
				// Enable font with CSS class
				document.body.classList.add('fonts-loaded');

				file.ready = true;
				mgr.successCount += 1;
			});
		}
		else if( type == CAREM_QUEUE_SOUND )
		{
			var request = new XMLHttpRequest();
			request.open("GET", file.path, true); 
			request.responseType = "arraybuffer";
			// Tracking Success State
			request.addEventListener( compFlg, function() 
			{
				file.ready = true;
				mgr.successCount += 1;
				if( CAREM_ACTX ) 
				{
					CAREM_ACTX.decodeAudioData(request.response, function(buffer)
					{
						if(!buffer) 
						{
							console.error('error decode file data: ' + file.path);
						} 
						else 
						{
							file["buffer"] = buffer;
						}
					}, function(error)
					{
						console.error('RAMEM_ACTX.decodeAudioData error', error);
					});
				}
			}, false); 
			// Tracking Failure State
			request.addEventListener( errFlg, function() 
			{
				file.ready = false;
				mgr.errorCount += 1;
			}, false);
			request.send(); 
		}
		else 
		{
			// Tracking Success State
			file.asset.addEventListener( compFlg, function() 
			{
				file.ready = true;
				mgr.successCount += 1;
			}, false);
			
			// Tracking Failure State
			file.asset.addEventListener( errFlg, function() 
			{
				file.ready = false;
				mgr.errorCount += 1;
			}, false);
			
			file.asset.src = file.path;
		}
		
		return this;
	};
	
	this.QueueDownloadAll = function() 
	{
		var len = this.assetList.length;
		
		for(var i=0; i<len; i++) 
		{
			this.QueueDownloadFile( i, this.assetList[i].type );
		}
		return this;
	};
	
	this.GetAsset = function( p ) 
	{
		var idx = this.IsQueued( p );
		if( idx != -1 ) 
			return this.assetList[ idx ];
		else 
		{
			this.QueueFile( p );
			var type = this.GetType( p );
			this.QueueDownloadFile( this.assetList.length-1, type );
			return this.GetAsset( p );
		}
	};
};

Carem.Graphics = function( context ) 
{
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
	this.unclip = false;
	
	this.UpdateMask = function() 
	{
		if(this.clip) 
		{
			this.context.save();
			this.context.clip();
		}
		if(this.unclip) 
			this.context.restore();
	};
	
	/**********************************************************
	 * function SetMask();
	 * Description: This method used to create mask 
	 *				for current path.
	 * Parameters:	Void
	 **********************************************************/
	this.SetMask = function() 
	{
		this.clip = true;
		return this;
	};	
	
	/**********************************************************
	 * function ClearMask();
	 * Description: This method used to destroy mask 
	 *				for current path.
	 * Parameters:	Void
	 **********************************************************/
	this.ClearMask = function() 
	{
		this.clip = false;
		this.unclip = false;
		return this;
	};
	
		/**********************************************************
	 * function EndMask();
	 * Description: This method used to set restore 
	 *				for restore current drawing.
	 * Parameters:	Void
	 **********************************************************/
	this.EndMask = function() 
	{
		return this.ReleaseMask();
	};	
	
	/**********************************************************
	 * function ReleaseMask();
	 * Description: This method used to set restore 
	 *				for restore current drawing.
	 * Parameters:	Void
	 **********************************************************/
	this.ReleaseMask = function() 
	{
		this.unclip = true;
		return this;
	};
		
	/**********************************************************
	 * function SetClip();
	 * Description: This method used to set clip 
	 *				for current drawing.
	 * Parameters:	1. clip
	 **********************************************************/
	this.SetClip = function( clip ) 
	{
		if(clip)
		{
			this.clip = true;
			this.unclip = false;
		}
		else 
		{
			this.clip = false;
			this.unclip = true;
		}
		return this;
	};
		
	/**********************************************************
	 * function DrawImage();
	 * Description: This method used to draw image
	 *				into current drawing.
	 * Parameters:	1. asset
	 *				2. x
	 *				3. y
	 **********************************************************/
	this.DrawImage = function( asset, x, y ) 
	{
		if(asset.type != CAREM_QUEUE_IMAGE)
			return;
		this.context.drawImage(asset.Asset, x, y);
		return this;
	};
	
	/**********************************************************
	 * function GetImageData();
	 * Description: This method used to receive the 
	 *				info of image data.
	 * Parameters:	1. imgData
	 **********************************************************/
	this.GetImageData = function(imgData) 
	{
		return {
			Data : imgData.data,
			Width : imgData.width, 
			Height : imgData.height
		};
	};
	
	/**********************************************************
	 * function CopyImageData();
	 * Description: This method used to paste the 
	 *				data of image to current drawing.
	 * Parameters:	1. x
	 *				2. y
	 *				3. w
	 *				4. h
	 **********************************************************/
	this.CopyImageData = function( x, y, w, h ) 
	{
		return this.context.getImageData( x, y, w, h );
	};
	
	/**********************************************************
	 * function PasteImageData();
	 * Description: This method used to paste the 
	 *				data of image to current drawing.
	 * Parameters:	1. imgData
	 *				2. x
	 *				3. y
	 **********************************************************/
	this.PasteImageData = function( imgData, x, y ) 
	{
		this.context.putImageData( imgData, x, y );
		return this;
	};
	
	/**********************************************************
	 * function CreateBlankImage();
	 * Description: This method used to create the blank
	 *				data of image of current drawing.
	 * Parameters:	1. width
	 *				2. height
	 **********************************************************/
	this.CreateBlankImage = function( w, h ) 
	{
		return this.context.createImageData( w, h );
	};
	
	/**********************************************************
	 * function SetComposite();
	 * Description: This method used to change the 
	 *				Composite Operation of current drawing.
	 * Parameters:	1. Composite
	 **********************************************************/
	this.SetComposite = function( composite ) 
	{
		this.composite = composite;
		return this;
	};
	
	/**********************************************************
	 * function SetAlpha();
	 * Description: This method used to change the 
	 *				alpha of current drawing.
	 * Parameters:	1. value
	 **********************************************************/
	this.SetAlpha = function( value ) 
	{
		this.alpha = value/100;
		return this;
	};

	this.Invisible = function() 
	{
		this.SetAlpha(0);
		return this;
	};

	this.Visible = function( percent ) 
	{
		if(percent != undefined)
			this.SetAlpha(percent);
		else 
			this.SetAlpha(100);
		return this;
	};
	
	/**********************************************************
	 * function CreatePattern();
	 * Description: This method used to create a 
	 *				pattern for Fill and stroke.
	 * Parameters:	1. asset
	 *				2. mode
	 **********************************************************/
	this.CreatePattern = function( asset, mode ) 
	{
		if( !asset.ready && asset.type != CAREM_QUEUE_IMAGE ) 
		{
			return 0;
		}
		
		if( mode == undefined ) 
		{
			mode = CAREM_REPEAT;
		}
		
		return this.context.createPattern( asset.asset, mode );
	};
	
	/**********************************************************
	 * function CreateLinearGradient();
	 * Description: This method create a linear 
	 * 				gradient for Fill and stroke.
	 * Parameters:	1. startPoint
	 *				2. endPoint
	 *				3. color
	 **********************************************************/
	this.CreateLinearGradient = function( startPoint, endPoint, color ) 
	{
		var gradient = 0;
		if(startPoint == undefined && endPoint == undefined) 
		{
			startPoint = {x:0,y:0};
			endPoint = {x:0, y:this.height};
		}
		gradient = this.context.createLinearGradient(
			startPoint.x, 
			startPoint.y, 
			endPoint.x, 
			endPoint.y
		);
		return AddStopColor(gradient, color);
	};
	
	/**********************************************************
	 * function CreateRadialGradient();
	 * Description: This method create a radius 
	 * 				gradient for Fill and stroke.
	 * Parameters:	1. startPoint
	 *				2. endPoint
	 *				3. radius
	 *				4. color
	 **********************************************************/
	this.CreateRadialGradient = function( startPoint, endPoint, radius, color ) 
	{
		var gradient = 0;
		gradient = this.context.createRadialGradient(
			startPoint.x, 
			startPoint.y, 
			radius[0], 
			endPoint.x, 
			endPoint.y, 
			radius[1]
		);
		return AddStopColor(gradient, color);
	};
	
	/**********************************************************
	 * function AddStopColor();
	 * Description: This method add stop color for
	 * 				gradient for Fill and stroke. 
	 * Parameters:	1. gradient
	 *				2. color
	 **********************************************************/
	var AddStopColor = function( gradient, color ) 
	{
		var len = color.length;
		for(var i=0; i<len; i++) 
		{
			gradient.addColorStop( color[i].stop, "rgba("+color[i].r+", "+color[i].g+", "+color[i].b+", "+color[i].a+")" );
		}
		return gradient;
	};
	
	/**********************************************************
	 * function SetBackground();
	 * Description: This method apply gradient type
	 * 				for gradient for Fill.
	 * Parameters:	1. color
	 *				2. startPoint
	 *				3. endPoint
	 *				4. radius
	 **********************************************************/
	this.SetBackground = function( color, startPoint, endPoint, radius ) 
	{
		if(color.length <= 1)
			this.fillStyle = "rgba("+color[0].r+", "+color[0].g+", "+color[0].b+", "+color[0].a+")";
		else if(radius == undefined)
			this.gradientFill = this.CreateLinearGradient(startPoint, endPoint, color);
		else 
			this.gradientFill = this.CreateRadialGradient(startPoint, endPoint, radius, color);
		return this;
	};
	
	/**********************************************************
	 * function SetPatternFill();
	 * Description: This method apply pattern type
	 * 				for pattern for Fill.
	 * Parameters:	1. asset
	 *				2. mode
	 **********************************************************/
	this.SetPatternFill = function( asset, mode ) 
	{
		this.patternFill = this.createPattern(asset, mode);
		return this;
	};
	
	/**********************************************************
	 * function ClearBackground();
	 * Description: This method destroy current gradient 
	 * 				from Fill.
	 * Parameters:	Undefine.
	 **********************************************************/
	this.ClearBackground = function() 
	{
		this.fillStyle = 0;
		return this;
	};
	
	/**********************************************************
	 * function SetStrokeColor();
	 * Description: This method used to set current 
	 * 				color for path stroke.
	 * Parameters:	1. color
	 *				2. startPoint
	 *				3. endPoint
	 *				4. radius
	 **********************************************************/
	this.SetStrokeColor = function( color, startPoint, endPoint, radius ) 
	{
		if(color.length <= 1) 
			this.strokeStyle = "rgba("+color[0].r+", "+color[0].g+", "+color[0].b+", "+color[0].a+")";
		else if(radius == undefined)
			this.gradientStroke = this.CreateLinearGradient(startPoint, endPoint, color);
		else 
			this.gradientStroke = this.CreateRadialGradient(startPoint, endPoint, radius, color);
		if(this.strokeWidth == 0)
			this.strokeWidth = 1;
		return this;
	};
	
	/**********************************************************
	 * function SetPatternStroke();
	 * Description: This method used to set current 
	 * 				pattern for path stroke.
	 * Parameters:	1. asset
	 *				2. mode
	 **********************************************************/
	this.SetPatternStroke = function( asset, mode ) 
	{
		this.patternStroke = this.CreatePattern(asset, mode);
		return this;
	};
	
	/**********************************************************
	 * function SetStrokeShape();
	 * Description: This method used to set current 
	 * 				shape for path stroke.
	 * Parameters:	1. lineCap
	 *				2. lineJoin
	 *				3. strokeWidth
	 **********************************************************/
	this.SetStrokeShape = function( lineCap, lineJoin, strokeWidth ) 
	{
		this.lineCap = lineCap;
		this.lineJoin = lineJoin;
		this.strokeWidth = strokeWidth;
		return this;
	};
	
	/**********************************************************
	 * function SetStrokeCap();
	 * Description: This method used to set current 
	 * 				line cap for path stroke.
	 * Parameters:	1. Type
	 **********************************************************/
	this.SetStrokeCap = function( type ) 
	{
		this.lineCap = type;
		return this;
	};
	
	/**********************************************************
	 * function SetStrokeJoin();
	 * Description: This method used to set current 
	 * 				line join for path stroke.
	 * Parameters:	1. Type
	 **********************************************************/
	this.SetStrokeJoin = function( type ) 
	{
		this.lineJoin = type;
		return this;
	};
	
	/**********************************************************
	 * function SetStrokeWidth();
	 * Description: This method used to set current 
	 * 				line width for path stroke.
	 * Parameters:	1. Type
	 **********************************************************/
	this.SetStrokeWidth = function( value ) 
	{
		this.strokeWidth = value;
		return this;
	};
	
	/**********************************************************
	 * function ClearStroke();
	 * Description: This method used to destroy current 
	 * 				stroke form path stroke.
	 * Parameters:	Undefine
	 **********************************************************/
	this.ClearStroke = function() 
	{
		this.strokeStyle = 0;
		return this;
	};
	
	/**********************************************************
	 * function SetShadow();
	 * Description: This method used to setup shadow 
	 * 				for current shadow form path.
	 * Parameters:	1. color
	 *				2. offset
	 *				3. blur
	 **********************************************************/
	this.SetShadow = function( color, offset, blur ) 
	{
		this.shadowColor = "rgba("+color.r+", "+color.g+", "+color.b+", "+color.a+")";;
		this.shadowBlur = blur;
		this.shadowOffsetX = offset.x;
		this.shadowOffsetY = offset.y;
		return this;
	};
	
	/**********************************************************
	 * function ShowShadow();
	 * Description: This method used to show shadow 
	 *				for current path.
	 * Parameters:	1. flag
	 **********************************************************/
	this.ShowShadow = function( flag ) 
	{
		if( flag == undefined ) 
		{
			flag = true;
		}
		
		if(!flag) 
		{
			this.HideShadow();
			return;
		}
		
		this.context.shadowColor = this.shadowColor;
		this.context.shadowBlur = this.shadowBlur;
		this.context.shadowOffsetX = this.shadowOffsetX;
		this.context.shadowOffsetY = this.shadowOffsetY;
	};
	
	/**********************************************************
	 * function HideShadow();
	 * Description: This method used to hide shadow 
	 *				form current path.
	 * Parameters:	Undefine
	 **********************************************************/
	this.HideShadow = function() 
	{
		this.context.shadowColor = 0;
		this.context.shadowBlur = 0;
		this.context.shadowOffsetX = 0;
		this.context.shadowOffsetY = 0;
	};
	
	/**********************************************************
	 * function ClearShadow();
	 * Description: This method used to destroy shadow 
	 *				form current path.
	 * Parameters:	Undefine
	 **********************************************************/
	this.ClearShadow = function() 
	{
		this.shadowColor = 0;
		this.shadowBlur = 0;
		this.shadowOffsetX = 0;
		this.shadowOffsetY = 0;
	};
	
	/**********************************************************
	 * function ShadowShape();
	 * Description: This method used to calculate
	 *				shadow for current path.
	 * Parameters:	Undefine
	 **********************************************************/
	this.ShadowShape = function() 
	{
		var useShadowStroke = true;
		
		this.ShowShadow(useShadowStroke);
		
		if(this.fillStyle != 0 || this.gradientFill != 0 || this.patternFill != 0) 
		{
			this.context.fill();
			useShadowStroke = false;
		}
		
		this.ShowShadow(useShadowStroke);
		
		if(this.strokeStyle != 0 || this.gradientStroke != 0) 
		{
			if(this.strokeWidth != 0) 
				this.context.stroke();
		}
	};
	
	/**********************************************************
	 * function ShadowText();
	 * Description: This method used to calculate
	 *				shadow for current text.
	 * Parameters:	1. textDoc - array text and position
	 **********************************************************/
	this.ShadowText = function( textDoc ) 
	{
		var useShadowStroke = true;
		
		this.ShowShadow(useShadowStroke);
		
		if(this.fillStyle != 0 || this.gradientFill != 0 || this.patternFill != 0) 
		{
			var Size = textDoc.length;
			for(var i=0;i<Size;i++)
				this.context.fillText(textDoc[i].text, textDoc[i].x, textDoc[i].y);
			useShadowStroke = false;
		}
		
		this.ShowShadow(useShadowStroke);
		
		if(this.strokeStyle != 0 || this.gradientStroke != 0) 
		{
			if(this.strokeWidth != 0) 
			{
				var Size = textDoc.length;
				for(var i=0;i<Size;i++)
					this.context.strokeText(textDoc[i].text, textDoc[i].x, textDoc[i].y);
			}
		}
	};
	
	/**********************************************************
	 * function UpdateGraphics();
	 * Description: This method used to calculate and
	 *				update style info for current graphics.
	 * Parameters:	Undefine
	 **********************************************************/
	this.UpdateGraphics = function() 
	{
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


Carem.SceneObject = function(context) 
{
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
	this.enable = true;
	this.delFlag = false;
	this.hScaleMode = 1;
	this.vScaleMode = 1;
	this.hitPointX = -9999;
	this.hitPointY = -9999;
	this.hitPointCallback = 0;

	this.GetOrginNode 	= function() { return this.orginNode; };
	this.GetOrginNodeX 	= function() { return this.orginNode.x; };
	this.GetOrginNodeY 	= function() { return this.orginNode.y; };
	
	this.SetOrgin = function( x, y ) 
	{
		this.orginNode.x = (-1)*x;
		this.orginNode.y = (-1)*y;
		return this;
	};

	this.ResetOrgin = function() 
	{
		this.orginNode.x = 0;
		this.orginNode.y = 0;
		return this;
	};

	this.GetPosition 	= function() { return { x: this.x, y: this.y }; };
	this.GetPositionX 	= function() { return this.x; };
	this.GetPositionY	= function() { return this.y; };
	
	this.SetPosition = function( x, y ) 
	{
		this.x = x;
		this.y = y;
		return this;
	};

	this.SetPositionX = function( value ) 
	{
		this.x = value;
		return this;
	};
	
	this.SetPositionY = function( value ) 
	{
		this.y = value;
		return this;
	};

	this.AddPosition = function( x, y ) 
	{
		this.y += y;
		this.x += x;
		return this;
	}; 

	this.AddPositionX = function( value ) 
	{
		this.x += value;
		return this;
	};

	this.AddPositionY = function( value ) 
	{
		this.y += value;
		return this;
	};

	this.GetSize 	= function() { return { width: this.width, height: this.height }; };
	this.GetWidth 	= function() { return this.width; };
	this.GetHeight 	= function() { return this.height; };
	
	this.SetSize = function( w, h ) 
	{
		this.width = w;
		this.height = h;
		return this;
	};

	this.SetWidth = function( value ) 
	{
		this.width = value;
		return this;
	};

	this.SetHeight = function( value ) 
	{
		this.height = value;
		return this;
	};

	this.GetRotate = function() { return this.angle; };
	
	this.SetRotate = function( angle ) 
	{
		this.angle = 360-angle;
		this.angle = this.angle/360*2*3.14;
		return this;
	};

	this.GetScale 	= function() { return { x: this.scaleX, y: this.scaleY }; };
	this.GetScaleX 	= function() { return this.scaleX; };
	this.GetScaleY 	= function() { return this.scaleY; };
	
	this.SetScale = function( scaleX, scaleY ) 
	{
		this.scaleX = scaleX;
		this.scaleY = scaleY;
		return this;
	};

	this.SetScaleX = function( value ) 
	{
		this.scaleX = value;
		return this;
	};

	this.SetScaleY = function( value ) 
	{
		this.scaleY = value;
		return this;
	};
	
	this.GetScaleRatio = function() 
	{
		var value = Carem.Math.Max(this.width, this.height);
		if(this.width==value) 
		{
			this.context.scale(1, this.height/this.width);	
		}
		else 
		{
			this.context.scale(this.width/this.height, 1);
		}
		return value;
	};

	this.Flip = function( mode ) 
	{
		switch(mode) 
		{
			case CAREM_FLIP_HORIZONTAL:
				this.hScaleMode *= -1;
				break;
			case CAREM_FLIP_VERTICLE:
				this.vScaleMode *= -1;
				break;
			default:
				break;
		}
		return this;
	};

	this.HorizontalFlip = function() 
	{
		this.hScaleMode *= -1;
		return this;
	};

	this.VerticalFlip = function() 
	{
		this.vScaleMode *= -1;
		return this;
	};
	
	this.SetFlip = function( mode ) 
	{
		switch(mode) 
		{
			case CAREM_FLIP_HORIZONTAL:
				this.hScaleMode = -1;
				break;
			case CAREM_FLIP_VERTICLE:
				this.vScaleMode = -1;
				break;
			default:
				break;
		}
	};

	this.SetHorizontalFlip = function() 
	{
		this.hScaleMode = -1;
		return this;
	};

	this.SetVerticalFlip = function() 
	{
		this.vScaleMode = -1;
		return this;
	};
	
	this.ResetFlip = function( mode ) 
	{
		if(mode == undefined) 
		{
			this.hScaleMode = 1;
			this.vScaleMode = 1;
			return;
		}
		switch(mode) 
		{
			case CAREM_FLIP_HORIZONTAL:
				this.hScaleMode = 1;
				break;
			case CAREM_FLIP_VERTICLE:
				this.vScaleMode = 1;
				break;
			default:
				break;
		}
		return this;
	};

	this.ResetBothFlip = function() 
	{
		this.hScaleMode = 1;
		this.vScaleMode = 1;
		return this;
	};

	this.ResetHorizontalFlip = function() 
	{
		this.hScaleMode = 1;
		return this;
	};

	this.ResetVerticalFlip = function() 
	{
		this.vScaleMode = 1;
		return this;
	};

	this.HitPoint = function( x, y, c ) 
	{
		this.hitPointX = x;
		this.hitPointY = y;
		this.hitPointCallback = c;
		return this;
	};
	
	this.SetHitPointTest = function( c ) 
	{
		this.hitPointCallback = c;
		return this;
	};
	
	this.SetHitPoint = function( x, y ) 
	{
		this.hitPointX = x;
		this.hitPointY = y;
		return this;
	};
	
	this.ResetHitPoint = function() 
	{
		this.hitPointX = -9999;
		this.hitPointY = -9999;
		this.hitPointCallback = 0;
		return this;
	};

	this.TestHitPoint = function() 
	{
		if(this.hitPointCallback == 0 || !this.enable)
			return;
		if (this.context.isPointInPath(this.hitPointX, this.hitPointY)) 
		{
			this.hitPointCallback();
		};
	};

	this.IsHide 	= function() { return !(this.visible && this.enable); };
	this.IsShow 	= function() { return (this.visible && this.enable); };
	this.IsEnable 	= function() { return this.enable; };
	this.IsDisable 	= function() { return !(this.enable); };
	
	this.Hide = function() 
	{
		this.visible = false;
		this.enable = false;
		return this;
	};

	this.Show = function() 
	{
		this.visible = true;
		this.enable = true;
		return this;
	};

	this.Enable = function() 
	{
		this.enable = true;
		return this;
	};

	this.Disable = function() 
	{
		this.enable = false;
		return this;
	};

	this.UpdateScene = function( ratio, layerX, layerY ) 
	{
		ratio = ratio || 1.0;
		layerX = layerX || 0;
		layerY = layerY || 0;
		this.context.beginPath();
		/** Transform Objects */
		this.context.setTransform(this.scaleX*this.hScaleMode*ratio, 0, 0, this.scaleY*this.vScaleMode*ratio, parseInt((this.x+layerX)*ratio)+.5, parseInt((this.y+layerY)*ratio)+.5);
		this.context.rotate(this.angle);
		var translateX = (this.hScaleMode < 0) ? (-1)*(this.width+this.orginNode.x) : this.orginNode.x;
		var translateY = (this.vScaleMode < 0) ? (-1)*(this.height+this.orginNode.y) : this.orginNode.y;
		this.context.translate(translateX, translateY);
	};
};


Carem.SymbolArc = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Symbol Arc Section */
	this.sliceAngleFrom = 0;
	this.sliceAngleTo = 0;
	this.sliceAngleFromDraw = 0;
	this.sliceAngleToDraw = 360;
	
	this.SetCircleSlice = function( startAngle, endAngle ) 
	{
		this.sliceAngleFrom = Carem.Math.RadianFromAngle(startAngle);
		this.sliceAngleTo = Carem.Math.RadianFromAngle(endAngle);
		this.sliceAngleFromDraw = Carem.Math.RadianFromAngle(360-startAngle);
		this.sliceAngleToDraw = Carem.Math.RadianFromAngle(360-endAngle);
		return this;
	};
	
	this.SetSlice = function( angleFrom, angleTo ) 
	{
		this.SetCircleSlice(angleFrom, angleTo);
		return this;
	};
	
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};

	this.SetStrokeShape = function( join, thick ) 
	{
		this.__proto__.SetStrokeShape(0, join, thick);
		return this;
	};

	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		var s = Carem.Math.VectorFromRadian(this.sliceAngleTo);
		var r = this.GetScaleRatio()/2;
		
		this.context.moveTo((s.x.toFixed(2)*r)+r, ((-1)*(s.y.toFixed(2)*r))+r);
		this.context.lineTo(r, r);
		this.context.arc(r,r,r,this.sliceAngleFromDraw, this.sliceAngleToDraw);
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};

Carem.SymbolCircle = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	
	this.SetDistance = function( d ) 
	{
		this.SetSize( d, d );
		return this;
	};
	
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.arc(
			this.width/2, 
			this.width/2, 
			this.width/2, 
			0, 2*Math.PI
		);
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolLine = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Line Section */
	this.pointArray = new Array();
	
	this.PushPoint = function( p ) 
	{
		this.pointArray.push( p );
		return this;
	};
	
	this.SetStartPoint = function( x, y ) 
	{
		var p = new Object();
		p.x = x;
		p.y = y;
		this.pointArray[0] = p;
		return this;
	};
	
	this.SetEndPoint = function( x, y ) 
	{
		var p = new Object();
		p.x = x;
		p.y = y;
		this.pointArray[1] = p;
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.moveTo(this.pointArray[0].x, this.pointArray[0].y);
		this.context.lineTo(this.pointArray[1].x, this.pointArray[1].y);
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolOval = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();

	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		var value = this.GetScaleRatio()/2;
		this.context.arc(value, value, value, 0, 2*Math.PI);
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolPolygon = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** SymbolPolygon Section */
	this.pointArray = new Array();
	
	this.SetSide = function( side ) 
	{
		var offset = 360/side;
		var point = 0;
		for(var i=0;i<side;i++) 
		{
			if(i!=0)
				point += offset;
			var pointVector = Carem.Math.VectorFromAngle(point);
			this.pointArray.push(pointVector);
		}
		return this;
	};
	
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};

	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		var len = this.pointArray.length;
		var r = this.GetScaleRatio()/2;
		for(var i=len;i>=0;i--) 
		{
			if(i==len) 
			{
				this.context.moveTo(
					r+this.pointArray[0].x*r, 
					r+this.pointArray[0].y*r
				);
				continue;
			}
			this.context.lineTo(
				r+this.pointArray[i%len].x*r, 
				r+this.pointArray[i%len].y*r
			);
		}
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolRect = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};

	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.rect(0, 0, this.width, this.height);
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolRoundRect = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Round Rect Section */
	this.radiusLeftTop = 0;
	this.radiusRightTop = 0;
	this.radiusRightBottom = 0;
	this.radiusLeftBottom = 0;
	
	this.SetRoundRadius = function( r1, r2, r3, r4 ) 
	{
		this.radiusLeftTop = r1;
		this.radiusRightTop = r2;
		this.radiusRightBottom = r3;
		this.radiusLeftBottom = r4;
		return this;
	};
	
	this.SetRound = function( r1, r2, r3, r4 ) 
	{
		this.SetRoundRadius( r1, r2, r3, r4 );
		return this;
	};
	
	this.SetRadius = function( radius ) 
	{
		this.SetRoundRadius(radius, radius, radius, radius);
		return this;
	};
		
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.moveTo(this.radiusLeftTop, 0);
		this.context.lineTo(this.width-this.radiusRightTop, 0);
		this.context.arcTo(this.width, 0, this.width, this.radiusRightTop, this.radiusRightTop);
		this.context.lineTo(this.width, this.height-this.radiusRightBottom);
		this.context.arcTo(this.width, this.height, this.width-this.radiusRightBottom, this.height, this.radiusRightBottom);
		this.context.lineTo(this.radiusLeftBottom, this.height);
		this.context.arcTo(0, this.height, 0, this.height-this.radiusLeftBottom, this.radiusLeftBottom);
		this.context.lineTo(0, this.radiusLeftTop);
		this.context.arcTo(0, 0, this.radiusLeftTop, 0, this.radiusLeftTop);
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolShape = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Sumbol Shape Section */
	this.pointArray = new Array();
	this.openShape = {};
	
	this.StartShape = function( p ) 
	{
		this.openShape = p;
		return this;
	};
	
	this.PushPoint = function( p ) 
	{
		this.pointArray.push( p );
		return this;
	};
	
	this.StartPoint = function( x, y ) 
	{
		this.StartShape({x:x, y:y});
		return this;
	};
	
	this.AddPoint = function( x, y, bX, bY, lX, lY ) 
	{
		this.PushPoint({x: x, y: y, bpX: bX, bpY: bY, lpX: lX, lpY: lY});
		return this;
	};
	
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};

	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		var len = this.pointArray.length;
		this.context.moveTo(this.openShape.x, this.openShape.y);		
		for(var i=0;i<len;i++) 
		{
			this.context.bezierCurveTo(
				this.pointArray[i].bpX, 
				this.pointArray[i].bpY, 
				this.pointArray[i].lpX, 
				this.pointArray[i].lpY, 
				this.pointArray[i].x, 
				this.pointArray[i].y
			);
		}
		if(this.pointArray[len-1].x != this.openShape.x 
		&& this.pointArray[len-1].y != this.openShape.y) 
		{
			this.context.lineTo(this.openShape.x, this.openShape.y);
		}
		
		this.TestHitPoint();
		this.ShadowShape();
	};
};


Carem.SymbolText = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Text Section */
	this.fontName = "Arial";
	this.fontSize = 12;
	this.textBaseline = CAREM_TEXT_BASELINE_ALPHABETIC;
	this.textAlign = CAREM_TEXT_ALIGN_START;
	this.textList = new Array();
	
	this.PushTextItem = function( textItem ) 
	{
		this.textList.push(textItem);
		return this;
	};
	
	this.SetTextFont = function( fontName ) 
	{
		this.fontName = fontName;
		return this;
	};
	
	this.SetTextSize = function( fontSize ) 
	{
		this.fontSize = fontSize;
		return this;
	};
	
	this.SetTextAlign = function( textAlign ) 
	{
		this.textAlign = textAlign;
		return this;
	};
	
	this.SetTextBaseline = function( baseline ) 
	{
		this.textBaseline = baseline;
		return this;
	};
	
	this.SetFont = function( fontName ) 
	{
		this.SetTextFont(fontName);
		return this;
	};
	
	this.SetSize = function( size ) 
	{
		this.SetTextSize(size);
		return this;
	};
	
	this.SetAlign = function( align ) 
	{
		this.SetTextAlign(align);
		return this;
	};
	
	this.SetBaseline = function( baseline ) 
	{
		this.SetTextBaseLine(baseline);
		return this;
	};
	
	this.AddText = function( txt, x, y, textWidth ) 
	{
		this.PushTextItem({text:txt, x:x, y:y, width:textWidth});
		return this;
	};
	
	this.SetText = function( txt, x, y, textWidth ) 
	{
		this.textList = [{text:txt, x:x, y:y, width:textWidth}];
		return this;
	};
	
	this.SetBackgroundImage = function( asset, mode ) 
	{
		this.SetPatternFill(asset, mode);
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.font = this.fontSize+'px "'+this.fontName+'"';
		this.context.textAlign = this.textAlign;
		this.context.textBaseline = this.textBaseline;
		
		this.ShadowText(this.textList);
	};
};


Carem.SymbolImage = function( asset, canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Image Section */
	this.image = asset.asset;
	this.idata = 0;
	
	this.SetFilter = function( filter, arg1, arg2, arg3 ) 
	{
		this.idata = Carem.Filter.FilterImage( filter, this.image, arg1, arg2, arg3 );
		return this;
	};
	
	this.SetStrokeImage = function( asset, mode ) 
	{
		this.SetPatternStroke(asset, mode);
		return this;
	};
	
	this.SetStrokeShape = function( lineJoin, width ) 
	{
		this.__proto__.SetStrokeShape(0, lineJoin, width*2);
		return this;
	};

	this.SetStrokeWidth = function( value ) 
	{
		this.__proto__.SetStrokeWidth(value*2);
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		if(this.idata != 0)
			this.context.rect(0, 0, this.idata.width, this.idata.height);
		else 
			this.context.rect(0, 0, this.image.width, this.image.height);
		
		this.TestHitPoint();
		this.ShadowShape();
		this.ShowShadow(false);
		
		if(this.idata != 0)
		{
			this.context.putImageData(this.idata, this.x + this.orginNode.x, this.y + this.orginNode.y);
		}
		else
		{
			this.context.drawImage(this.image, 0, 0);
		}
	};
};

Carem.Physics = function( sceneObject ) 
{
	this.sceneObject = sceneObject;
	this.velocityX = 0;
	this.velocityY = 0;
	this.angleVelocity = 0;
	this.constantForceX = 0;
	this.constantForceY = 0;
	this.gravity = 1.0;
	this.gravityMode = false;
	
	this.EnableGravity = function() 
	{
		this.gravityMode = true;
		return this;
	};
	
	this.DisableGravity = function() 
	{
		this.gravityMode = false;
		return this;
	};
	
	this.SetGravity = function( gravity ) 
	{
		this.gravity = gravity;
		this.EnableGravity();
		return this;
	};
	
	this.AddConstantForce = function( cfX, cfY ) 
	{
		this.constantForceX += cfX;
		this.constantForceY += cfY;
		return this;
	};
	
	this.AddConstantForceX = function( value ) 
	{
		this.constantForceX += value;
		return this;
	};
	
	this.AddConstantForceY = function( value ) 
	{
		this.constantForceY += value;
		return this;
	};
	
	this.SetConstantForce = function( cfX, cfY ) 
	{
		this.constantForceX = cfX;
		this.constantForceY = cfY;
		return this;
	};
	
	this.SetConstantForceX = function( value ) 
	{
		this.constantForceX = value;
		return this;
	};
	
	this.SetConstantForceY = function( value ) 
	{
		this.constantForceY = value;
		return this;
	};
	
	this.SetLinearVelocity = function( velX, velY ) 
	{
		this.velocityX = velX;
		this.velocityY = velY;
		return this;
	};
	
	this.SetLinearVelocityX = function( value ) 
	{
		this.velocityX = value;
		return this;
	};
	
	this.SetLinearVelocityY = function( value ) 
	{
		this.velocityY = value;
		return this;
	};
	
	this.SetAngularVelocity = function( value ) 
	{
		this.angleVelocity = value;
		return this;
	};
	
	this.ForceGravity = function() 
	{
		if(this.gravityMode) 
		{
			this.sceneObject.y += this.gravity;
		};
		return this;
	};
	
	this.ForceAccum = function() 
	{
		this.sceneObject.x += this.constantForceX;
		this.sceneObject.y += this.constantForceY;
		return this;
	};
	
	this.LinearVelocityX = function( velocity ) 
	{
		if(velocity == undefined) 
			velocity = this.velocityX;
		this.sceneObject.x += velocity;
		return this;
	};
	
	this.LinearVelocityY = function( velocity ) 
	{
		if(velocity == undefined) 
			velocity = this.velocityY;
		this.sceneObject.y += velocity;
		return this;
	};
	
	this.AngularVelocity = function( angle ) 
	{
		if(angle == undefined)
			angle = this.angleVelocity;
		this.sceneObject.angle += angle;
		return this;
	};
};

Carem.WorldLimit = function( sceneObject ) 
{
	this.sceneObject = sceneObject;
	this.boundMinX = 0;
	this.boundMinY = 0;
	this.boundMaxX = 0;
	this.boundMaxY = 0;
	this.mode = CAREM_LIMIT_OFF;
	this.testCallback = 0;
	
	this.SetMode = function( mode ) 
	{
		this.mode = mode;
		return this;
	};
	
	this.SetBound = function( minX, minY, maxX, maxY ) 
	{
		this.boundMinX = minX;
		this.boundMinY = minY;
		this.boundMaxX = maxX;
		this.boundMaxY = maxY;
		return this;
	};

	this.SetCallback = function( c ) 
	{
		this.testCallback = c;
		return this;
	};
	
	this.TestLimit = function() 
	{
		var lim = -1;
		if(this.sceneObject.x < this.boundMinX) 
		{
			lim = CAREM_LIMIT_LEFT;
		} 
		else if(this.sceneObject.y < this.boundMinY) 
		{
			lim = CAREM_LIMIT_TOP;
		} 
		else if(this.sceneObject.x > this.boundMaxX) 
		{
			lim = CAREM_LIMIT_RIGHT;
		} 
		else if(this.sceneObject.y > this.boundMaxY) 
		{
			lim = CAREM_LIMIT_BOTTOM;
		}
		if(lim >= 0 && this.testCallback != 0)
			this.testCallback(lim);
	};
};

Carem.Collision = function( source ) 
{
	this.collision = source;
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
	this.source = source;
	this.blind = false;
	this.collisionMode = CAREM_COLLISION_RECT;
	
	this.SetBox = function( l, t, w, h ) 
	{
		this.minX = l;
		this.minY = t;
		this.maxX = w;
		this.maxY = h;
		this.collisionMode = CAREM_COLLISION_RECT;
		setBound(this, this.source);
		return this;
	};
	
	var setBound = function( collision, source ) 
	{
		if(source != undefined || source != 0) 
		{
			collision.boundLeft 	= collision.minX+(source.orginNode.x*source.scaleX)+source.x;
			collision.boundTop 		= collision.minY+(source.orginNode.y*source.scaleY)+source.y;
			collision.boundRight 	= collision.boundLeft+collision.maxX;
			collision.boundBottom 	= collision.boundTop+collision.maxY;
		}
	};
	
	this.SetRadius = function( cX, cY, r ) 
	{
		this.centerX= cX;
		this.centerY= cY;
		this.radius = r;
		this.collisionMode = CAREM_COLLISION_RAD;
		return this;
	};
	
	this.SetCollisionMode = function( mode ) 
	{
		this.collisionMode = mode;
		return this;
	};
	
	this.AddTarget = function( target, callback ) 
	{
		this.target.push({
			"checker": target, 
			"callback": callback
		});
		return this;
	};

	this.CancelCollision = function( target ) 
	{
		target.blind = true;
		var targets = this.target;
		var size = targets.length;
		for(var i=0;i<size;i++) 
		{
			if(targets[i]["checker"].blind) 
			{
				delete targets[i];
				targets.splice(i,1);
				break;
			}
		} 
		return this;
	};
	
	this.Test = function() 
	{
		var size = this.target.length;
		if(size >= 1) 
		{
			setBound(this, this.source);
			for(var i=0;i<size;i++) 
			{
				var checker = this.target[i]["checker"];
				if(checker.visible) 
				{
					setBound(checker.collision, checker);
					if(!(this.boundLeft > checker.collision.boundRight
					|| this.boundRight < checker.collision.boundLeft
					|| this.boundTop > checker.collision.boundBottom
					|| this.boundBottom < checker.collision.boundTop))
					{
						if(this.collisionMode == CAREM_COLLISION_RECT 
						&& checker.collision) 
						{
							this.target[i]["callback"]();
						}
					}
				}
			}
		}
	};
};

Carem.Button = function(asset, x, y, w, h, canvas) 
{
	this.button = 1;
	if(undefined!=canvas) 
	{
		canvas.AddButton(this);
	}
	/** Extends Graphic */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__.__proto__ = new Carem.SceneObject();
	/** Button Section */
	this.image = asset.asset;
	this.mouseUpCallback = 0;
	this.mouseMoveCallback = 0;
	this.mouseDownCallback = 0;
	this.imagePositionX = 0;
	this.imagePositionY = 0;

	this.SetPosition(x, y);
	this.SetSize(w, h);

	this.SetAsset = function( asset ) 
	{
		this.image = asset.asset;
		return this;
	};

	this.SetImagePosition = function( x, y ) 
	{
		this.imagePositionX = x;
		this.imagePositionY = y;
		return this;
	};

	this.SetImagePositionX = function( value ) 
	{
		this.imagePositionX = value;
		return this;
	};

	this.SetImagePositionY = function( value ) 
	{
		this.imagePositionY = value;
		return this;
	};

	this.onMouseDown = function( c ) 
	{
		this.mouseDownCallback = c;
		return this;
	};

	this.onMouseMove = function( c ) 
	{
		this.mouseMoveCallback = c;
		return this;
	};

	this.onMouseUp = function( c ) 
	{
		this.mouseUpCallback = c;
		return this;
	};

	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.rect(0, 0, this.width, this.height);
		this.context.clip();
		this.context.drawImage(this.image, this.imagePositionX, this.imagePositionY);
	}
};

Carem.StaticSprite = function(asset, x, y, w, h, canvas) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphics */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__
		.__proto__ = new Carem.SceneObject();
	/** Extends Physics */
	this.__proto__
		.__proto__
		.__proto__ = new Carem.Physics(this);
	/** Extends WorldLimit */
	this.__proto__
		.__proto__
		.__proto__
		.__proto__ = new Carem.WorldLimit(this);
	/** Extends Collision */
	this.__proto__
		.__proto__
		.__proto__
		.__proto__
		.__proto__ = new Carem.Collision(this);
	/** Static Sprite Section */
	this.image = asset.asset;
	this.cropX = x;
	this.cropY = y;

	this.SetSize(w, h);
	
	this.SetCollisionBound = function( l, t, w, h ) 
	{
		this.SetBox( l, t, w, h );
		return this;
	};
	
	this.AddCollisionTarget = function( target, callback ) 
	{
		this.AddTarget( target, callback );
		return this;
	};
	
	this.SetWorldLimit = function( minX, minY, maxX, maxY ) 
	{
		this.SetBound(minX, minY, maxX, maxY);
		return this;
	};

	this.SetWorldLimitTest = function( c ) 
	{
		this.SetCallback( c );
		return this;
	};

	this.TestWorldLimit = function() 
	{
		this.TestLimit();
	};
	
	/** Graphics Property Settings */
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		if(this != 0)
		{
			if(this.gravityMode)
				this.ForceGravity(); 
			this.ForceAccum();
			this.LinearVelocityX();
			this.LinearVelocityY();
			this.AngularVelocity();
			this.TestWorldLimit();
			this.Test();
		}
		this.context.rect(0, 0, this.width, this.height);
		this.TestHitPoint();
		this.context.clip();
		this.context.drawImage(this.image, -this.cropX, -this.cropY);
	};
};


Carem.AnimeSprite = function(asset, w, h, canvas) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphics */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__
		.__proto__ = new Carem.SceneObject();
	/** Extends Physics */
	this.__proto__
		.__proto__
		.__proto__ = new Carem.Physics(this);
	/** Extends WorldLimit */
	this.__proto__
		.__proto__
		.__proto__
		.__proto__ = new Carem.WorldLimit(this);
	/** Extends Collision */
	this.__proto__
		.__proto__
		.__proto__
		.__proto__
		.__proto__ = new Carem.Collision(this);
	/** Scroller Section */
	this.image = asset.asset;
	this.cropX = 0;
	this.cropY = 0;
	this.currFrame = 0;
	this.currAction = 0;
	this.timer = 0;
	this.offsetTime = 4;
	this.actions = 0;

	this.SetSize(w, h);
	
	this.SetAction = function( value ) 
	{
		this.currAction = value;
		return this;
	};
	
	this.SetCollisionBound = function( l, t, w, h ) 
	{
		this.SetBox( l, t, w, h );
		return this;
	};
	
	this.AddCollisionTarget = function( target, callback ) 
	{
		this.AddTarget( target, callback );
		return this;
	};
	
	this.SetWorldLimit = function( minX, minY, maxX, maxY ) 
	{
		this.SetBound(minX, minY, maxX, maxY);
		return this;
	};

	this.SetWorldLimitTest = function( c ) 
	{
		this.SetCallback( c );
		return this;
	};

	this.TestWorldLimit = function() 
	{
		this.TestLimit();
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		if(this != 0) 
		{
			if(this.gravityMode)
				this.ForceGravity(); 
			this.ForceAccum();
			this.LinearVelocityX();
			this.LinearVelocityY();
			this.AngularVelocity();
			this.TestWorldLimit();
			this.Test();
		}
		this.context.rect(0, 0, this.width, this.height);
		this.TestHitPoint();
		
		this.context.clip();
		
		var maxCol = this.image.width/this.width-1;
		this.timer += 1;
		if(this.timer%this.offsetTime == 0) 
		{
			if(this.currFrame >= maxCol)
				this.currFrame = 0
			else 
				this.currFrame+=1;
		}
		
		var maxRow =  this.image.height/this.height-1;
		if(maxRow <= this.currAction)
			this.currAction = maxRow;
		this.cropX = this.width*this.currFrame;
		this.cropY = this.height*this.currAction;
		this.context.drawImage(this.image, -this.cropX, -this.cropY);
	};
};


Carem.Scroller = function(asset, canvas) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Graphics Section */
	this.__proto__ = new Carem.Graphics();
	/** Scene Object */
	this.__proto__
		.__proto__ = new Carem.SceneObject();
	/** Scroller Section */
	this.image = asset.asset;
	this.direct = {x:1,y:0};
	this.scrollPositionX = 0;
	this.scrollPositionY = 0;
	this.scrollVelocity = 0;

	this.SetSize( this.image.width, this.image.height );
	
	this.SetVelocity = function( value ) 
	{
		this.scrollVelocity = value;
		return this;
	};
	
	this.SetDirect = function( dim ) 
	{
		if(dim == CAREM_HORIZONTAL)
			this.direct = {x:1,y:0};
		else 
			this.direct = {x:0,y:1};
		return this;
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		this.context.rect(0, 0, this.image.width, this.image.height);
		this.TestHitPoint();
		this.context.clip();
		this.scrollPositionX += this.scrollVelocity*this.direct.x;
		this.scrollPositionY += this.scrollVelocity*this.direct.y;
		if(this.scrollPositionX >= this.DOMCanvasElement.width)
			this.scrollPositionX = 0;
		if(this.scrollPositionY >= this.DOMCanvasElement.height)
			this.scrollPositionY = 0;
		var scrollX = this.scrollPositionX;
		var scrollY = this.scrollPositionY;
		this.context.drawImage(this.image, this.direct.x*scrollX, this.direct.y*scrollY);
		this.context.drawImage(this.image, 
			this.direct.x*(this.DOMCanvasElement.width-scrollX)*(-1), 
			this.direct.y*(this.DOMCanvasElement.height-scrollY)*(-1)
		);
	};
};


Carem.Particle = function(asset, density, canvas) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Graphics Section */
	this.__proto__ = new Carem.Graphics();
	/** Scene Object */
	this.__proto__
		.__proto__ = new Carem.SceneObject();
	/** Scroller Section */
	this.image 		= asset.asset;
	this.density 	= density || 10;
	this.particles 	= new Array();
	this.loopMode 	= CAREM_LOOP_CYCLE;
	this.alphaBase 	= false;
	this.alphaLife 	= false;
	this.scaleXBase = false;
	this.scaleXLife = false;
	this.scaleYBase = false;
	this.scaleYLife = false;
	this.emittion 	= false;
	this.rotation 	= false;
	this.angularSpeed = 0;
	this.positionXMin = 0;
	this.positionXMax = 320;
	this.positionYMin = 0;
	this.positionYMax = 480;
	this.lifeMin 	= 100;
	this.lifeMax 	= 800;
	this.boundMinX = 0;
	this.boundMinY = 0;
	this.boundMaxX = 0;
	this.boundMaxY = 0;

	this.SetMode = function( mode ) 
	{
		this.loopMode = mode;
		return this;
	};
	
	this.SetEmittion = function( value ) 
	{
		this.emittion = value;
		return this;
	};
	
	this.SetLifeTime = function( minTime, maxTime ) 
	{
		this.lifeMin = minTime;
		this.lifeMax = maxTime;
		return this;
	};
	
	this.SetPositionRandom = function( minX, maxX, minY, maxY ) 
	{
		this.positionXMin = minX;
		this.positionXMax = maxX;
		this.positionYMin = minY;
		this.positionYMax = maxY;
		return this;
	};
	
	this.SetDensity = function( value ) 
	{
		this.density = value;
		return this;
	};
	
	this.SetAlphaBase = function( value ) 
	{
		this.alphaBase = value;
		return this;
	};
	
	this.SetAlphaLife = function( baseVal, endVal ) 
	{
		this.alphaBase = baseVal;
		this.alphaLife = endVal;
		return this;
	};
	
	this.SetScaleBase = function( value ) 
	{
		this.scaleXBase = value;
		this.scaleYBase = value;
		return this;
	};
	
	this.SetScaleXBase = function( value ) 
	{
		this.scaleXBase = value;
		return this;
	};
	
	this.SetScaleYBase = function( value ) 
	{
		this.scaleYBase = value;
		return this;
	};
	
	this.SetScaleLife = function( baseVal, endVal ) 
	{
		this.SetScaleBase(baseVal);
		this.scaleXLife = endVal;
		this.scaleYLife = endVal;
		return this;
	};
	
	this.SetScaleXLife = function( baseVal, endVal ) 
	{
		this.scaleXBase = baseVal;
		this.scaleXLife = endVal;
		return this;
	};
	
	this.SetScaleYLife = function( baseVal, endVal ) 
	{
		this.scaleYBase = baseVal;
		this.scaleYLife = endVal;
		return this;
	};
	
	this.SetRotation = function( angle ) 
	{
		this.rotation = Carem.Math.RadianFromAngle(angle);
		return this;
	};
	
	this.SetAngularSpeed = function( value ) 
	{
		this.angularSpeed = value;
		return this;
	};
	
	this.SetWorldLimit = function( bndMinX, bndMinY, bndMaxX, bndMaxY ) 
	{
		this.boundMinX = bndMinX;
		this.boundMinY = bndMinY;
		this.boundMaxX = bndMaxX;
		this.boundMaxY = bndMaxY;
		return this;
	};
	
	this.GenParticle = function() 
	{
		for(var i=0; i<this.density; i++) 
		{
			var lifeTime = Carem.Math.IntRandom(this.lifeMin, this.lifeMax);
			
			/** Calculate the Position of Particles. */
			var positionX = Carem.Math.IntRandom(this.positionXMin, this.positionXMax);
			var positionY = Carem.Math.IntRandom(this.positionYMin, this.positionYMax);
			
			/** Calculate the Alpha of Particles. */
			if(!this.alphaBase)
				this.alphaBase = Carem.Math.IntRandom(1, 100)/100;
			if(this.alphaLife)
				var deltaAlpha = this.alphaLife-this.alphaBase;
			else 
				var deltaAlpha = 0;
			
			/** Calculate the Scale X-Asis of Particles. */
			if(!this.scaleXBase)
				this.scaleXBase = Carem.Math.IntRandom(1, 100)/100;
			if(this.scaleXLife) 
				var deltaScaleX = this.scaleXLife-this.scaleXBase;
			else
				var deltaScaleX = 0;
			
			/** Calculate the Scale Y-Asis of Particles. */
			if(!this.scaleYBase)
				this.scaleYBase = Carem.Math.IntRandom(1, 100)/100;
			if(this.scaleYLife) 
				var deltaScaleY = this.scaleYLife-this.scaleYBase;
			else
				var deltaScaleY = 0;
				
			/** Calculate the Speed of Rotation of particles */
			var angularSpeed = Carem.Math.IntRandom(0, this.angularSpeed);
			angularSpeed = Carem.Math.RadianFromAngle(angularSpeed);
			
			/** Calculator the PositionLife X */
			var deltaPosX = Carem.Math.IntRandom(this.boundMinX, this.boundMaxX);
			deltaPosX = deltaPosX-positionX;
			var deltaPosY = Carem.Math.IntRandom(this.boundMinY, this.boundMaxY);
			deltaPosY = deltaPosY-positionY;
			
			this.particles.push({
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
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		//this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		
		for(var i=0; i<this.density; i++) 
		{
			this.context.save();
			var alpha;
			var scaleX;
			var scaleY;
			var angle;
			var positionX;
			var positionY;
			
			this.particles[i].Life += 1;
			var life = (this.particles[i].Life%this.particles[i].Lifetime);
			life = life/this.particles[i].Lifetime;
			life = life.toFixed(3);
			var iLife = 1-life;
			iLife = iLife.toFixed(3);
			
			if(this.loopMode == CAREM_LOOP_CYCLE 
			|| this.particles[i].Life < this.particles[i].Lifetime) 
			{
				/** process for alpha */
				if(this.particles[i].deltaAlpha < 0) 
					alpha = this.alphaLife+(iLife*Math.abs(this.particles[i].deltaAlpha));
				else
					alpha = this.particles[i].alpha+(life*this.particles[i].deltaAlpha);
				/** process for scaleX */
				if(this.particles[i].deltaScaleX < 0) 
					scaleX = this.scaleXLife+(iLife*Math.abs(this.particles[i].deltaScaleX));
				else
					scaleX = this.particles[i].scaleX+(life*this.particles[i].deltaScaleX);
				/** process for scaleY */
				if(this.particles[i].deltaScaleY < 0) 
					scaleY = this.scaleYLife+(iLife*Math.abs(this.particles[i].deltaScaleY));
				else
					scaleY = this.particles[i].scaleY+(life*this.particles[i].deltaScaleY);
				/** process for rotation */
				this.particles[i].angle += this.particles[i].speedRotate;
				angle = this.particles[i].angle;
				/** process for movement X */
				/* if(this.particles[i].deltaPosX < 0) 
					positionX = this.scaleYLife+(iLife*Math.abs(this.particles[i].deltaScaleY));
				else
					scaleY = this.particles[i].scaleY+(life*this.particles[i].deltaScaleY); */
				if(this.emittion) {
					if(this.particles[i].x < this.boundMinX 
					|| this.particles[i].x > this.boundMaxX
					|| this.particles[i].y < this.boundMinY
					|| this.particles[i].y > this.boundMaxY) 
					{
						var resetPosX = Carem.Math.IntRandom(this.positionXMin, this.positionXMax);
						var resetPosY = Carem.Math.IntRandom(this.positionYMin, this.positionYMax);
						this.particles[i].x = resetPosX;
						positionX = this.particles[i].x;
						this.particles[i].y = resetPosY;
						positionY = this.particles[i].y;
					} 
					else 
					{
						var moveX = Carem.Math.IntRandom(-5, 5);
						moveX = moveX/10;
						this.particles[i].x += moveX;
						positionX = this.particles[i].x;
						var moveY = Carem.Math.IntRandom(-30, 0);
						moveY = moveY/10;
						this.particles[i].y += moveY;
						positionY = this.particles[i].y;
					}
				} 
				else 
				{
					positionX = this.particles[i].x;
					positionY = this.particles[i].y;
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

Carem.Tile = function( canvas ) 
{
	if(undefined!=canvas) 
	{
		canvas.AddChild(this);
	}
	/** Extends Graphics */
	this.__proto__ = new Carem.Graphics();
	/** Extends SceneObject */
	this.__proto__
		.__proto__ = new Carem.SceneObject();
	/** Extends Physics */
	this.__proto__
		.__proto__
		.__proto__ = new Carem.Physics(this);
	/** Extends WorldLimit */
	this.__proto__
		.__proto__
		.__proto__
		.__proto__ = new Carem.WorldLimit(this);
	/** Tile Section */
	this.align = CAREM_ALIGN_BOTTOM;
	this.order = CAREM_ORDER_LEFT;
	this.tiles = new Array();
	
	this.AddCell = function( asset, x, y ) 
	{
		this.tiles.push( { image: asset.asset, x: x, y: y } );
		return this;
	};

	this.SetWorldLimit = function( minX, minY, maxX, maxY ) 
	{
		this.SetBound(minX, minY, maxX, maxY);
		return this;
	};

	this.SetWorldLimitTest = function( c ) 
	{
		this.SetCallback( c );
		return this;
	};

	this.TestWorldLimit = function() 
	{
		this.TestLimit();
	};
	
	this.Draw = function( ratio, layerX, layerY ) 
	{
		this.UpdateScene(ratio, layerX, layerY);
		this.UpdateGraphics();
		if(this != 0) 
		{
			if(this.gravityMode)
				this.ForceGravity(); 
			this.ForceAccum();
			this.LinearVelocityX();
			this.LinearVelocityY();
			this.AngularVelocity();
			this.TestWorldLimit();
		}
		var size = this.tiles.length;
		for(var i=0;i<size;i++) 
		{
			this.context.drawImage(
				this.tiles[i].image, 
				this.tiles[i].x, 
				this.tiles[i].y
			);
		}
	};
};