function execute(){
	var src = document.querySelectorAll('img[srcset]')[0].src;

    var img = document.createElement('img');
    img.src = src; 

    var a = document.createElement('a');
    a.href = img.src;
    a.download = "";

    a.appendChild(img);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


execute();