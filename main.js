


var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg','b.jpg','c.png','d.png','e.png','f.png','g.png','h.png'];
var i = 0;

function back(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}
function next(){
    if (i >= images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src','images/' + images[i]);
}







