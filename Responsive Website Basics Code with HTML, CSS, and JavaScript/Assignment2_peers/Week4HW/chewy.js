function upDate(littlePic){
	var pic = littlePic.src;
	var title = littlePic.alt;
	document.getElementById('bigpic').style.backgroundImage = 'url('+pic+')';
	document.getElementById('heading').innerHTML = title;
}

