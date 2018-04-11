
function hoclythuyet(var ) {
;
  var objHTTP =new XMLHttpRequest();
  var url=url;
  objHTTP.onreadystatechange=function(){
    if(objHTTP.readyState==4 && objHTTP.status==200){
        var x=JSON.parse(this.responseText);
/*
        var tenbai = document.createElement('h3');
        tenbai.setAttribute('class','title single-title');
        var tenbaihoc = document.createTextNode(x.Bai[0].tenbai);
        tenbai.appendChild(tenbaihoc);
        document.getElementById('divnoidung').appendChild(tenbai);

        for(var i=0;i<x.Bai[0].noidung.length;i++)
        {
            var ndbaihoc = document.createElement('p');
            var nd=document.createTextNode(x.Bai[0].noidung[i]);
            ndbaihoc.appendChild(nd);
            document.getElementById('divnoidung').appendChild(ndbaihoc);
        }
    */
      }
  }

  objHTTP.open('GET',url,true);
  objHTTP.send(null);

};
