
function openModal() {
	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 0;
//showSlides(slideIndex);

function currentSlide(n) {
	//showSlides(slideIndex = n + 1);
	showSlides(slideIndex = n);
	//alert(n);
}

function showSlides(n) {
var i;
//var slideIndex = n;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("w3-lightbox-img");
var captionText = document.getElementById("caption");

if (n >= slides.length) {
	slideIndex = 0
}

if (n < 0) {
	slideIndex = slides.length - 1
} /*else {
	var slideIndex = n;
}*/

for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
}
/*
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
*/
slides[slideIndex].style.display = "block";
dots[slideIndex].className += " active";
captionText.innerHTML = dots[slideIndex].alt;

}

function plusSlides(l) {
	showSlides(slideIndex += l);
	//alert(slideIndex);
}
