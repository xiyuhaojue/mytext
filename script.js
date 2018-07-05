window.onload=function(){
		var doc=document.documentElement;
		var width=doc.offsetWidth;
		var rem=width/10;
		var vw=width*0.01;
		var fontS=document.getElementsByClassName("fontS");
		var threeDaoshi=document.getElementsByClassName("three-daoshi")[0];
		var threeDis=document.getElementsByClassName("three-dis")[0];
		for(var i=0;i<fontS.length;i++){
			fontS[i].style.fontSize=1.3*vw+"px";
		}
		doc.style.fontSize=rem+"px";
			window.addEventListener("resize",function(){
				doc=document.documentElement;
				width=doc.offsetWidth;
				rem=width/10;
				vw=width*0.01;
				for(var i=0;i<fontS.length;i++){
					fontS[i].style.fontSize=1.5*vw+"px";
				}
				doc.style.fontSize=rem+"px";
			});
}