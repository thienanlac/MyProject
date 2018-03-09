
//Phần này để cài nhạc 
function audioPlayer(){
	var imautau=0;
	$("#audioPlayer")[0].src= $("#playlist li a")[0];
	$("#audioPlayer")[0].play();
	$("#playlist li a").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src=this;
		$("#audioPlayer")[0].play();
		$("#playlist li").removeClass("imautau");
		imautau=$(this).parent().addClass("imautau");
	});
	$("#audioPlayer")[0].addEventListener("ended", function(){
		imautau++;
		if(imautau == $("#playlist li a").length())
			imautau = 0;
		$("#playlist li").removeClass("imautau");
		$("#playlist li:eq("+imautau+")").addClass("imautau");
		$("#audioPlayer")[0].src = $("#playlist li a")[imautau].href();
		$("#audioPlayer")[0].play();
	});
}
