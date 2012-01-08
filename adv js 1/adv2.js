// 1query

(function(root){
	root.oneQuery = function(id){
		
		this.element = root.document.getElementById(id);
		
		this.html = function(Html){
			if(Html){
				this.element.innerHTML = Html;
				return this;
			}else{
				return this.element.innerHTML;
			}
		};
		
		this.css=function(prs){
			for(var i in prs){
				this.element.style[i]=prs[i];
			}
			//this.element.style[prprty]=value;
			return this;
		};
		
		this.click = function(fn){
			this.element.onclick=fn;
		}
		
		return this;
		
	}
	
	root.$=root.oneQuery;
})(window);


window.onload=function(){
	
	$('txt').html('<b>ali</b>').click(function(){
		$('txt').css({
			color:'red',
			backgroundColor:'gray',
			paddingLeft:'50px'
		})
	});
	
}