var tempo = 3000;

function slide1(){
    document.getElementById("slider").src="images/slide1.png"
    setTimeout("slide2()", tempo)
}
function slide2(){
    document.getElementById("banner").src="images/slide2.png"
    setTimeout("slide3()", tempo)
}
function slide3(){
    document.getElementById("banner").src="images/slide3.png"
    setTimeout("slide1()", tempo)
}