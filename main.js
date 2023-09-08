var i = 0; 		
var images = [];	
var time = 4000;	

images[0] = "img/banner4.jpg";
images[1] = "img/banner1.jpg";
images[2] = "img/banner2.jpg";
images[3] = "img/banner3.jpg";

function changeImg(){
	document.imgslide.src = images[i];


	if(i < images.length - 1){

	  i++; 
	} else { 

		i = 0;
	}


	setTimeout("changeImg()", time);
}


window.onload=changeImg;