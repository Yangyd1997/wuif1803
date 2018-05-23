/*
* @Author: dongge
* @Date:   2018-05-05 15:57:36
* @Last Modified by:   dongge
* @Last Modified time: 2018-05-10 22:55:09
*/
window.onload=function () {
            let bannerdot=document.getElementsByClassName('bannerdot');
            let dot=bannerdot[0].getElementsByClassName('dot');
            let zp=document.getElementsByClassName('zp');
            let img=zp[0].getElementsByTagName('img');
            for(let i=0;i<dot.length;i++){
                dot[i].onclick=function () {
                    for(let j=0;j<dot.length;j++){
                        dot[j].style.background='#949494';
                        img[j].style.zIndex=10;

                    };
                    dot[i].style.background='white'
                    img[i].style.zIndex=999;
                    index=i;
               }
}

     //////////////////////////////////////////
     
 let aa = document.querySelectorAll(".zp img")
 let bb = document.querySelectorAll(".dot")
 let cc=document.querySelector('.banner .zp')
 let dd=setInterval(move, 3000)
 let ee=document.querySelector('.leftbtn')
 let ff=document.querySelector('.rightbtn')
 let index = 0;
 ff.onclick=function(){
 	move()
 }
 ee.onclick=function(){
 	move1()
 }
 cc.onmouseenter=function(){
	clearInterval(dd);
}
cc.onmouseleave=function(){
	dd=setInterval(move, 2000);
}
 function move(){
 	index ++;
 	if(index===aa.length){ 
 		index=0;
 	}
 	aa.forEach(function(element){
 		element.style.zIndex=10;
 	});
 	bb.forEach(function(value){
 		value.style.background ="#949494"
 	},bb)
 	aa[index].style.zIndex=999;
 	bb[index].style.background='white';
 }
 function move1(){
 	index --;
 	if(index<0){ 
 		index=aa.length-1;
 	}
 	aa.forEach(function(element){
 		element.style.zIndex=10;
 	});
 	bb.forEach(function(value){
 		value.style.background ="#949494"
 	},bb)
 	aa[index].style.zIndex=999;
 	bb[index].style.background='white';
 }
////////////////////////////////////////////////////////


}
     
             









