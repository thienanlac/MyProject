var minute = 0;
var second = 20;

function changeVisibility() {
    document.getElementById("start-button").style.visibility = "hidden";
}

function Chuongreo() {
  var x= document.createElement("AUDIO");
  x.setAttribute("Id","Myaudio");
  var y=document.createElement("SOURCE");
  y.setAttribute("src","horse.mp3");
  y.setAttribute("type","audio/mpeg");
  x.appendChild(y);
  x.autoplay=true;

}
function demnguoc(){
  changeVisibility();
  document.getElementById('dongho').innerHTML=minute+":"+second;
  second--;
  if(second==0 && minute==0){
    document.getElementById('dongho').innerHTML="Hết giờ";
    Chuongreo();


  }
  else{
    if (second==0) {
      minute--;
      second=60;
      setTimeout("demnguoc()",1000);
    }
    else{
      document.getElementById('dongho').innerHTML=minute+":"+second;
      setTimeout("demnguoc()",1000);
    }
  }
}
