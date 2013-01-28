//extension generated using Peter Legierski's bookmarklet to chrome extension converter
//seehttp://blog.self.li/post/16366939413/how-to-convert-bookmarklet-to-chrome-extension
//cat image courtesty placekitten.com
void((function (d) {
	var catImg = d.createElement('img');
	catImg.id='rndmCatForPinning';
	catImg.src='http://placekitten.com/420/420';
	catImg.style.width = "420px";
	catImg.style.height = "420px";
	document.getElementsByTagName('body')[0].appendChild(catImg);
    var e = d.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'UTF-8');
    e.setAttribute('src', '//assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
    d.body.appendChild(e)
})(document));