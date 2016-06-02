// JavaScript Document
function init() 
{
	var stage = new Carem.Layer('stage');
	stage.setBackground(255, 255, 255, 1);
	
	var myRect_01 = new Carem.SymbolRect(stage);
	myRect_01.setSize(80, 40);
	myRect_01.setRotate(45);
	myRect_01.setPosition(10, 10);
	myRect_01.setBackground([{r:128, g: 128, b: 128, a: 1}]);
	myRect_01.setStrokeColor([{r:255, g:0, b:0, a:1, stop:0}]);
	myRect_01.setMask();
	
	var myRRect = new Carem.SymbolRect(stage);
	myRRect.setPosition(30, 30);
	myRRect.setSize(120, 35);
	myRRect.setStrokeColor([{r:255, g:128, b:128, a:1, stop:0}]);
	myRect_01.setBackground([{r:128, g: 128, b: 128, a: 1}]);
	myRRect.endMask();

	stage.zoom(120);
	stage.swap();
	return;
	
}