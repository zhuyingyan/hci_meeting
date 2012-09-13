var my=(function(){
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
		bodyScroll:document.documentElement.scrollHeight,
		footer:document.querySelector(".footer"),
		fixedFoot:function(){
			if(this.htmlHeight>this.bodyHeight){
				this.footer.className+=" fixedFooter";
			}
		},
		outputDiv:document.getElementById("outputDiv"),
		showMessage:function(){
			var personList=document.querySelector(".hasPerson");
			var close=document.querySelector(".close");
			var that=this;	
			personList.onclick=function(e){	
				var name=that.outputDiv.className;
				if(e.target!=e.currentTarget){			
					var border=document.querySelector(".border");
					var bodyHide=document.documentElement.scrollTop;
					console.log(bodyHide);
					if(name.indexOf(" output")==-1)
					{
						that.outputDiv.className+=" output";
						that.outputDiv.style.height=that.bodyScroll+"px";
						var outputDivHeight=parseInt(border.offsetHeight);
						var number=bodyHide+(that.htmlHeight-outputDivHeight)/2;
						border.style.marginTop=number+"px";
					}
				}
			}
			close.onclick=function(){
				var name=that.outputDiv.className;
				if(name.indexOf(" output")!=-1){
					that.outputDiv.className=that.outputDiv.className.replace(" output","");
				}
			}
		}
	};
	
	return myJs;
})();