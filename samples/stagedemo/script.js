// JavaScript Document
function init() 
{
	var stage = new Carem.Layer('stage');
	stage.SetBackground(255, 255, 255, 1);
	
	var myRect_01 = new Carem.SymbolRect(stage);
	myRect_01.SetSize(80, 40);
	myRect_01.SetRotate(45);
	myRect_01.SetPosition(10, 10);
	myRect_01.SetBackground([{r:128, g: 128, b: 128, a: 1}]);
	myRect_01.SetStrokeColor([{r:255, g:0, b:0, a:1, stop:0}]);
	myRect_01.SetMask();
	
	var myRRect = new Carem.SymbolRect(stage);
	myRRect.SetPosition(30, 30);
	myRRect.SetSize(120, 35);
	myRRect.SetStrokeColor([{r:255, g:128, b:128, a:1, stop:0}]);
	myRect_01.SetBackground([{r:128, g: 128, b: 128, a: 1}]);
	myRRect.EndMask();

	stage.Zoom(100);
	stage.Swap();
	return;
	
}