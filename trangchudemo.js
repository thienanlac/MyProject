var slideIndex = 1;
showSlides(slideIndex); 
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
  slides[i]= setInterval (function(){showSlides()},500);
  }
//phần tin tức

function tin() {
	document.ULR("https://www.amec.com.vn/du-hoc-han-quoc-co-nen-hay-khong.html")
	document.ULR("http://duhocvietnhat.edu.vn/chi-phi-du-hoc-nhat-ban-2018-tai-jellyfish-education/")
	document.ULR("http://duhoc.thanhgiang.com.vn/du-hoc-nhat-ban-khoc-cho-mot-kiep-nguoi")
}
