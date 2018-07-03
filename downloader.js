var src;
document.onmousedown = function (event) {
    src = event.target.parentNode.children[0].firstChild.attributes.src.value;
};
function download(){
	return src;
}
download();