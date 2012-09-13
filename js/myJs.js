(function(){
	var myJs={
		addLoadEvent:function(func){
			var oldonload=window.onload;
			if(typeof window.onload!='function')
			{
				window.onload=func;
			}
			else
			{
				window.onload=function(){
					oldonload();
					func();
				}
			}
		},
		htmlHeight:document.documentElement.clientHeight,
		bodyHeight:document.getElementsByTagName("body")[0].clientHeight,
		footer:document.querySelector(".footer"),
		fixedFoot:function(){
			if(this.htmlHeight>this.bodyHeight){
				this.footer.className+=" fixedFooter";
			}
		}
	};
	myJs.addLoadEvent(myJs.fixedFoot.call(myJs));
})();