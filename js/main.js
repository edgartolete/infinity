//for go to top button
var mybutton = document.getElementsByClassName("go-top")[0];
var mytopnav = document.getElementsByClassName("navbar-2")[0];
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.opacity = "1";
    mybutton.style.cursor = "pointer";
	mytopnav.style.top = '0';
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.cursor = "default";
	mytopnav.style.top = '-200px';
	}
}
document.getElementsByClassName("go-top")[0].addEventListener("click", goToTop);
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//for the slider
$(document).ready(function(){
  $('.single-item').slick({
 });
    $(".regular").slick({
        dots: false, 
        infinite: true,	
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
		responsive: [
    {

      breakpoint: 900,
      settings: {
        slidesToShow: 1,
 		autoplay: true,
		autoplaySpeed: 3000,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
 
 });
 
 

//for the toggle button
document.getElementById('toggle-x').addEventListener('click',delayMenu);




function toggleMenu(){
	document.getElementsByClassName('overlay')[0].style.display = 'flex';
	document.getElementsByClassName('overlay')[0].style.opacity = '1';
	document.getElementsByClassName('overlay')[0].style.animation = 'show 0.3s';

	document.getElementsByClassName('overlay-1')[0].style.padding = '0';	
	var1 = setTimeout(delay1, 300);

	document.getElementsByClassName('overlay-2')[0].style.padding = '0';	
	var2 = setTimeout(delay2, 500);

	document.getElementsByClassName('overlay-3')[0].style.padding = '0';	
	var3 = setTimeout(delay3, 700);

	document.getElementsByClassName('overlay-4')[0].style.padding = '0';	
	var4 = setTimeout(delay4, 900);

	document.getElementsByClassName('overlay-5')[0].style.padding = '0';	
	var5 = setTimeout(delay5, 1200);

}
function closeMenu(){
	document.getElementsByClassName('overlay')[0].style.display = 'none';
}
function delayMenu(){
	document.getElementsByClassName('overlay')[0].style.animation = 'hide 0.3s';
	setTimeout(closeMenu,300);
	document.getElementsByClassName('overlay-1')[0].style.opacity = '0';	
	document.getElementsByClassName('overlay-2')[0].style.opacity = '0';
	document.getElementsByClassName('overlay-3')[0].style.opacity = '0';
	document.getElementsByClassName('overlay-4')[0].style.opacity = '0';
	document.getElementsByClassName('overlay-5')[0].style.opacity = '0';
	
	document.getElementsByClassName('toggle-content')[0].style.maxHeight = '0';
	document.getElementById('collapsable-down').style.display = 'inline-block';
	document.getElementById('collapsable-up').style.display = 'none';
}

function delay1(){
	document.getElementsByClassName('overlay-1')[0].style.padding = '15px';	
	document.getElementsByClassName('overlay-1')[0].style.opacity = '1';	

}
function delay2(){
	document.getElementsByClassName('overlay-2')[0].style.padding = '15px';	
	document.getElementsByClassName('overlay-2')[0].style.opacity = '1';		
}
function delay3(){
	document.getElementsByClassName('overlay-3')[0].style.padding = '15px';	
	document.getElementsByClassName('overlay-3')[0].style.opacity = '1';	
}
function delay4(){
	document.getElementsByClassName('overlay-4')[0].style.padding = '15px';	
	document.getElementsByClassName('overlay-4')[0].style.opacity = '1';	
	}
function delay5(){
	document.getElementsByClassName('overlay-5')[0].style.padding = '15px';	
	document.getElementsByClassName('overlay-5')[0].style.opacity = '1';	
	
}

document.getElementById('collapsable-down').addEventListener('click',()=>{
		document.getElementsByClassName('toggle-content')[0].style.maxHeight = '100%';
		document.getElementById('collapsable-down').style.display = 'none';
		document.getElementById('collapsable-up').style.display = 'inline-block';
	});
	
document.getElementById('collapsable-up').addEventListener('click',()=>{
		document.getElementsByClassName('toggle-content')[0].style.maxHeight = '0';
		document.getElementById('collapsable-down').style.display = 'inline-block';
		document.getElementById('collapsable-up').style.display = 'none';
	});