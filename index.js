let navbar= document.querySelector('nav')


window.onscroll = function(){
 if(window.scrollY>0){
    navbar.style.background = '#eefff9';
 }
 else{
    navbar.style.background = 'transparent';

 }
}

let menulink=document.getElementById('menu')

function toogleMenu(){
  menulink.classList.toggle('show-menu');

}