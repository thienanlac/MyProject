var minute = 9;
var second = 60;

function changeVisibility() {
    document.getElementById("start-button").style.visibility = "hidden";
}
function changedisenable(){
    document.getElementById('start-button').style.visibility="disenable";
}
function demnguoc(){
  changeVisibility();
  document.getElementById('dongho').innerHTML=minute+":"+second;
  second--;
  if(second==0 && minute==0){
    document.getElementById('dongho').innerHTML="Hết giờ";

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
