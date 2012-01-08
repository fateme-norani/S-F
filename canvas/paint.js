Object.prototype.Each=function(fn){
	for(var i in this){
		if(this[i]==Object[i]) continue;
		fn(this[i],i);
	}
}

var mycanvas = document.getElementById('paint');

var ctx = mycanvas.getContext?mycanvas.getContext('2d'):alert('Canvas not support, khak bar saret');


ctx.beginPath();
ctx.strokeStyle="#D11";
ctx.lineWidth=3;

var painting = false;

mycanvas.onmousemove=function(evt){
	var point = {x:evt.clientX-mycanvas.offsetLeft, y:evt.clientY-mycanvas.offsetTop};
	document.getElementById('pos').innerHTML="X: "+point.x+" Y: "+point.y;
	if(!painting) return false;
	ctx.lineTo(point.x,point.y);
	ctx.stroke();
	
}

mycanvas.onmousedown=function(evt){
	var point = {x:evt.offsetX, y:evt.offsetY };
	ctx.beginPath(); // baraye inke stroke az enteda stroke nakone va beshe rangesho avaz kard
	ctx.moveTo(point.x,point.y);
	painting = true;
}

mycanvas.onmouseup=function(){
	painting = false;
}

var lists = document.getElementById('colors').getElementsByTagName('li');

lists.Each(function(el,i){
	if(isNaN(i)) return null;
	el.onclick=function(){
		ctx.strokeStyle=this.style.backgroundColor;
		if(this.style.backgroundColor=='white'){
			ctx.lineWidth=35;
		}else{
			ctx.lineWidth=3;
		}
	}
});