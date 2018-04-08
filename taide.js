function Load() {

    var objHTTP =new XMLHttpRequest();
    var url='Tên file';//link file json
    objHTTP.onreadystatechange=function(){
      if(objHTTP.readyState==4 && objHTTP.status==200){
          var x=JSON.parse(this.responseText);



          document.getElementById('tendethi').innerHTML=x.De[0].Tende;

          for(var i=0;i<x.De[0].Cau.length;i++)
          {
                var cauhoi=document.createElement('form');
                cauhoi.setAttribute("Id",i);

                var Q =document.createElement('p');
                var nQ=document.createTextNode(x.De[0].Cau[i].Cauhoi);
                Q.appendChild(nQ);
                cauhoi.appendChild(Q);


                    var Q1=document.createElement('p');
                    var A=document.createElement('input');
                    A.setAttribute('type','radio');
                    A.setAttribute('name','optradio');
                    var Q11=document.createTextNode(x.De[0].Cau[i].A);
                    Q1.appendChild(A);
                    Q1.appendChild(Q11);
                    cauhoi.appendChild(Q1);


                    var Q2=document.createElement('p');
                    var B=document.createElement('input');
                    B.setAttribute('type','radio');
                    B.setAttribute('name','optradio');
                    var Q12=document.createTextNode(x.De[0].Cau[i].B);
                    Q2.appendChild(B);
                    Q2.appendChild(Q12);
                    cauhoi.appendChild(Q2);

                    var Q3=document.createElement('p');
                    var C=document.createElement('input');
                    C.setAttribute('type','radio');
                    C.setAttribute('name','optradio');
                    var Q13=document.createTextNode(x.De[0].Cau[i].C);
                    Q3.appendChild(C);
                    Q3.appendChild(Q13);
                    cauhoi.appendChild(Q3);

                    var Q4=document.createElement('p');
                    var D=document.createElement('input');
                    D.setAttribute('type','radio');
                    D.setAttribute('name','optradio');
                    var Q14=document.createTextNode(x.De[0].Cau[i].D);
                    Q4.appendChild(D);
                    Q4.appendChild(Q14);
                    cauhoi.appendChild(Q4);

                    var BL =document.createElement('p');

                    document.getElementById('de').appendChild(cauhoi);
                    document.getElementById('de').appendChild(BL);
                  }

        }
    }

    objHTTP.open('GET',url,true);
    objHTTP.send(null);

};
