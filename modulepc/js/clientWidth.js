/*响应式缩放*/
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth>=1200){
				docEl.style.fontSize = 20 * (clientWidth / 1920) + 'px';
			}
			
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	recalc();
})(document, window);