/*
var a = [2,5,6,7];
alert(a[2]);
*/


/*
var a = {t:1,b:3,j:7};
alert(a.b);
*/

/*
var test = function (){
	// ...
}
*/

/*
var a=1;
(function(){
	a=6;
})();
alert(a);
*/

/*

(function(){
	var a=1;
	a++;
	alert(a);
}).call();

*/

/*

(function(){
	var a=1;
	a++;
	alert(a);
})();

*/

/*
var a=1;
window.onload=function(){
	var a=6;
	document.getElementsByTagName('a').item(0).onclick=function(){
		alert(a);
	}
}
alert(a);
*/

/*
(function(){
	var a=1;
	window.onload=function(){
		var a=6;
		document.getElementsByTagName('a').item(0).onclick=function(){
			alert(a);
		}
	}
	alert(a);
})(); // WTF
*/


// -------


/*
function person(fname,lname,age,eyecolor){
	this.firstname=fname;
	this.lastname=lname;
	this.age=age;
	this.eyecolor = eyecolor;
	this.children = new Array();
	this.parents = new Array();
	
	this.harfbezan=function(){
		alert("Hello, i'm "+this.firstname+' '+this.lastname);
	}
	
	this.addChild=function(child){
		this.children.push(child);
		child.parents.push(this);
	}
	
}

var ali = new person("ali","abdollahi",20,'honeyi');
var gholi = new person("gholi","abdollahi",16,'honeyi');
var majeed = new person("majid","abdollahi",46,'brown');

majeed.addChild(ali);
majeed.addChild(gholi);


majeed.children[1].parents[0].children[0].parents[0].harfbezan();
*/


/*
function avrg(arr){
	var sum=0;
	for ( var n in arr) {
		sum+=arr[n];
	}
	return sum/arr.length;
}


var n=avrg([4,6,9]);
alert(n);
*/

/*

function Loop(obj){
	if(!obj.step) obj.step=1;
	if(!obj.start) obj.start=0;
	for(var i=obj.start;i<=obj.end;i+=obj.step){
		document.write("<br/>i -&gt; "+i);
	}
	
}

Loop({
	step:2,
	end:15
	
});
*/
