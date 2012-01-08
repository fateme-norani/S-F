/**
 * @author Ali Mihandoost
 */

/*

 // mici(bili) like code !

 function rnd(min, max) {
 var num = Math.random()*(max+1);
 num= Math.floor(num);
 if(num<min) return rnd(min,max) ;

 return num;
 }
 */

/*
 for(var i=0;i<30;i++){
 document.write(rnd(3,10)+'<br />');
 }
 */

function rnd(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
function getNumber (title,def) {
var n=prompt(title,def);

if( isNaN(n) || n=='' || n==null )
return getNumber(title,def);

return n;
}

alert( getNumber("Enter a number.",'') );
*/

// goog like !
function getInRange(x, arr) {// arr = [x1,x2,y1,y2]
	return ((arr[3] - arr[2]) * (x - arr[0])) / (arr[1] - arr[0]) + arr[2];
}

function getTranTime(n, config) {
	var tranTime = n * config.step + config.startTime.valueOf();
	return new Date(tranTime);
}

var pm = 12;
var sec = 60 * 1000;

var config = {
	startTime : (new Date()).setHours(6, 0, 0),
	endTime : (new Date()).setHours(9 + pm, 0, 0),
	step : 10 * sec
}

//alert( getTranTime(25,config ).toLocaleTimeString() );

function extend(){
	
}

var config = {
	a : 2
	
}

function doIt(cnfg) {

	var def = {
		a : 1,
		b : 2,
		c : 3
	}
	
	cnfg.extend(def);

	document.write(cnfg.a + cnfg.b + cnfg.c);
}

