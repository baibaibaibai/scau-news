window.onload=function(){
     var odi=document.getElementById('div1');
     var oul=odi.getElementsByTagName('ul')[0];
     var oli=oul.getElementsByTagName('li');
     var s=2;
     var t=null;
   
     oul.innerHTML=oul.innerHTML+oul.innerHTML;
     oul.style.width=oli[0].offsetWidth*oli.length+'px';
     function move(){
     	
     	if(oul.offsetLeft>0){
     		oul.style.left=-oul.offsetWidth/2+'px';
     	}
        oul.style.left=oul.offsetLeft+s+'px';

     }
     t=setInterval(move,30);
     odi.onmouseover=function(){
     	clearInterval(t);

     }
     odi.onmouseout=function(){
     	t=setInterval(move,30);

     }
};