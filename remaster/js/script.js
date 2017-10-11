// Javascript Document 
var domain = 'bapquadgames.com'; 
var protocol = 'http://';
var dataPath = 'docs/';
var reffPath = dataPath + 'referrence/';
var tutsPath = dataPath + 'tutorials/';
var demoPath = dataPath + 'demos/';
var mainView = 0;
var menuPoint = 0;
var backBtn = 0;
var navSection = 0;
var menuPage = 0;
var navItem = 0;
var menuPageNext = '';
var menuItemCurr = 0;
var docContent;
var connBtn;
var mainLoad;
var currDataLink;
var requestConn = request5.Initialize();

var sDim = 
{
	width: 0, 
	height: 0,
}

function windowResize() 
{
	sDim.width = window.innerWidth;
	sDim.height = window.innerHeight;
}

function openMenu( e ) 
{
	menuPoint.css( 'display', 'none' );
	menuView();
	menuPoint.AddClass( 'open' );
}

function closeMenu( e ) 
{
	returnMain();
	menuPoint.RemoveClass( 'open' );
}

function menuView() 
{
	mainView.css( { 'transform': 'translateX(' + sDim.width + 'px)' } );
	navSection.css( { 'transform': 'translateX(0px)' } );
}

function returnMain() 
{
	mainView.css( { 'transform': 'translateX(0px)' } );
	navSection.css( { 'transform': 'translateX(-50px)' } );
}

function toggleMenu( e ) 
{
	if( menuPoint.HasClass( 'open' ) ) 
	{
		closeMenu( e );
	} 
	else 
	{
		openMenu( e );
	}
} 

function openInc( e ) 
{
	var incList = element5( '#nav nav .include' );
	
	if( incList.HasClass( 'open' ) ) 
	{
		// Close the include list.
		incList.css( { height: '0px' } );
		incList.RemoveClass( 'open' );
	}
	else 
	{
		// Open the include list.
		incList.css( { height: '30px' } );
		incList.AddClass( 'open' );
	}
}

function menuPageHidden( e ) 
{
	e.target.RemoveClass( 'active' );
	e.target.removeEventListener( 'transitionend', menuPageHidden );
	
	var nextEl = element5( '#nav .page .' + menuPageNext );
	nextEl.AddClass( 'active' );
	
	var timer = setTimeout( function() 
	{
		nextEl.AddClass( 'show' );
		
		var currentActive = element5( '#nav .menu-page.active' );
		currentActive.RemoveClass( 'active' );
		menuItemCurr.AddClass( 'active' );
		
		clearTimeout( timer );
	}, 50 );
}

function navItemClickHandle( e ) 
{
	var target = e.target;
	var next = target.GetBackData( 'page' );
	var pages = menuPage.children;
	var len = pages.length;
	
	for( var i = 0; i < len; i++ ) 
	{
		var item = element5( pages[ i ] );
		if( item.HasClass( 'active' ) && !item.HasClass( next ) ) 
		{
			item.RemoveClass( 'show' );
			item.addEventListener( 'transitionend', menuPageHidden );
			menuItemCurr = target;
			menuPageNext = next;
		}
	}
}

function loadCompleted( eventObject ) 
{
	eventObject.target.removeEventListener( 'transitionend', loadCompleted );
	mainLoad.css( 'display', 'none' );
	
	// Fill the response text lasted loaded.
	docContent.innerHTML = requestConn.responseText;
} 

function contentDataLoaded( eventObject ) 
{
	eventObject.target.removeEventListener( 'load', contentDataLoaded );
	
	mainLoad.addEventListener( 'transitionend', loadCompleted );
	mainLoad.AddClass( 'faded' );
} 

function loadPageContent( eventObject ) 
{
	eventObject.target.removeEventListener( 'transitionend', loadPageContent );
	requestConn.connect();
	
	menuPoint.css( 'display', 'block' );
}

function intoContentHandle( eventObject ) 
{
	eventObject.preventDefault();
	
	if( menuPoint.HasClass( 'open' ) ) 
	{
		var url;
		
		mainLoad.RemoveClass( 'faded' );
		mainLoad.css( 'display', 'block' );
		mainView.addEventListener( 'transitionend', loadPageContent );
		
		/** Clear the old content. */
		docContent.innerHTML = '';
		
		/** Parse the data content url. */
		if( this.GetBackData( 'dir' ) == 'demo' ) 
		{
			url = demoPath + this.GetBackData( 'conn' ); 
		}
		else if( this.GetBackData( 'dir' ) == 'tuts' ) 
		{
			url = tutsPath + this.GetBackData( 'conn' ); 
		}
		else 
		{
			url = reffPath + this.GetBackData( 'conn' ); 
		}
		
		/** Make a connect to content data. */
		requestConn.requestUrl = url;
		requestConn.addEventListener( 'load', contentDataLoaded );
		
		closeMenu( eventObject );
	}
}

function backMainComplete() 
{
	mainView.removeEventListener( 'transitionend', backMainComplete );
	menuPoint.css( 'display', 'block' );
}

function backBtnHandle( eventObject ) 
{
	mainView.addEventListener( 'transitionend', backMainComplete );
	closeMenu();
}

window.addEventListener( "resize", function() 
{
	windowResize();
});

window.addEventListener( "DOMContentLoaded", function( e ) 
{
	// Computing the size of window.
	windowResize();
	
	menuPoint	= element5( '#menupoint' );
	navSection	= element5( '#nav' );
	backBtn		= element5( '#nav .back-btn' );
	menuPage	= element5( '#nav .page' );
	navItem		= element5( '#nav .menu-page' );
	connBtn		= element5( '#nav .intoContent' );
	mainView 	= element5( '#main' );
	mainLoad	= element5( '#main .load-init' );
	docContent	= element5( '#main .page#doc-content' );
	
	var navlen = navItem.length || 0;
	if( navlen ) 
	{
		for( var i = 0; i < navlen; i++ ) 
		{
			if( i == 0 ) 
			{
				menuItemCurr = navItem[ i ];
			}
			navItem[ i ].addEventListener( 'click', navItemClickHandle );
		}
	}
	else 
	{
		menuItemCurr = navItem;
	}
	
	connBtn.each( function( el, index ) 
	{
		el.addEventListener( 'click', intoContentHandle);
	});
	
	menuItemCurr.AddClass( 'active' );
	mainView.css( { 'z-index': '10000' } );
	menuPoint.css( 'display', 'none' );
	
	backBtn.addEventListener( 'click', backBtnHandle );
	
	menuPoint.addEventListener( 'click', toggleMenu );
	
	var timer = setTimeout( function() 
	{
		menuPoint.css( 'display', 'block' );
		mainLoad.RemoveClass( 'ani-scale' );
		clearTimeout( timer );
	}, 3000);
});