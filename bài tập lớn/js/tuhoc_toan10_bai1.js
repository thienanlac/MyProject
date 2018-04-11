// hàm tải lý thuyết.
function taolythuyet() {
   document.getElementByName('Lythuyet').disabled = true;
  var objHTTP =new XMLHttpRequest();
  var url='json/Lythuyettoan10_bai1.json';
  objHTTP.onreadystatechange=function(){
    if(objHTTP.readyState==4 && objHTTP.status==200){
        var x=JSON.parse(this.responseText);

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

      }
  }

  objHTTP.open('GET',url,true);
  objHTTP.send(null);

};

function Loaddethi() {

    var objHTTP =new XMLHttpRequest();
    var url='json/deToan10_01.json';//link file json..................
    objHTTP.onreadystatechange=function(){
      if(objHTTP.readyState==4 && objHTTP.status==200){
          var x=JSON.parse(this.responseText);



          // gán đề bài
          var lambai = document.createElement('h4');
          var gan = document.createTextNode(x.De[0].Tende);
          lambai.appendChild(gan);
          document.getElementById('baitest').appendChild(cauhoi);

          // gán câu hỏi
          for(var i=0;i<x.De[0].Cau.length;i++)
          {
                var cauhoi=document.createElement('form');
                cauhoi.setAttribute("name",i);

                var Q =document.createElement('p');
                var nQ=document.createTextNode(x.De[0].Cau[i].Cauhoi);
                Q.appendChild(nQ);
                cauhoi.appendChild(Q);


                    var Q1=document.createElement('p');
                    var A=document.createElement('input');
                    A.setAttribute('type','radio');
                    A.setAttribute('name',(i+3));
                    A.setAttribute('value','A');
                    A.setAttribute('checked','checked');
                    var Q11=document.createTextNode(x.De[0].Cau[i].A);
                    Q1.appendChild(A);
                    Q1.appendChild(Q11);
                    cauhoi.appendChild(Q1);


                    var Q2=document.createElement('p');
                    var B=document.createElement('input');
                    B.setAttribute('type','radio');
                    B.setAttribute('name',i+3);
                    B.setAttribute('value','B');
                    var Q12=document.createTextNode(x.De[0].Cau[i].B);
                    Q2.appendChild(B);
                    Q2.appendChild(Q12);
                    cauhoi.appendChild(Q2);

                    var Q3=document.createElement('p');
                    var C=document.createElement('input');
                    C.setAttribute('type','radio');
                    C.setAttribute('name',i+3);
                    C.setAttribute('value','C');
                    var Q13=document.createTextNode(x.De[0].Cau[i].C);
                    Q3.appendChild(C);
                    Q3.appendChild(Q13);
                    cauhoi.appendChild(Q3);

                    var Q4=document.createElement('p');
                    var D=document.createElement('input');
                    D.setAttribute('type','radio');
                    D.setAttribute('name',i+3);
                    D.setAttribute('value','D');
                    var Q14=document.createTextNode(x.De[0].Cau[i].D);
                    Q4.appendChild(D);
                    Q4.appendChild(Q14);
                    cauhoi.appendChild(Q4);



                    document.getElementById('baitest').appendChild(cauhoi);

                  }

        }
    }

    objHTTP.open('GET',url,true);
    objHTTP.send(null);

    var btnchamdiem=document.createElement('button');
    btnchamdiem.setAttribute('onclick','chamdiem');
    btnchamdiem.setAttribute('type','button');
    document.getElementById('baitest').appendChild(btnchamdiem);

};

function chamdiem() {

      var objHTTP =new XMLHttpRequest();
      var url='json/deToan10_01.json';//................
      objHTTP.onreadystatechange=function(){
        if(objHTTP.readyState==4 && objHTTP.status==200){
            var x=JSON.parse(this.responseText);

            var diem=0;
            for(var i=0;i<x.De[0].Cau.length;i++)
            {
                for(var y=0;y<4;y++)
                    if(document.i.(i+3)[y].checked){
                        if(document.i.(i+3)[y].value==x.De[0].Cau.Dapan)
                        {
                            diem++;
                            alert('Câu '+ (i+1)+'đúng');
                        }
                        else
                            alert('Câu'+(i+1)+'sai','đáp án là'+x.De[0].Cau.Dapan);
                    }
             }
             alert('điểm của bạn là'+diem);
          }
        }
      objHTTP.open('GET',url,true);
      objHTTP.send(null);

  };