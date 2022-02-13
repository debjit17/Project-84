var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var label = document.getElementById("h3");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		aplhabetkey();
	}
	else if((keyPressed >=48 && keyPressed<=57))
	{
		numberkey();
	}
	else if((keyPressed >=37 && keyPressed<=40))
	{
		arrowkey();
	}
	else if((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27))
	{
		specialkey();
	}
	else
	{
		otherkey();
		label.innerHTML = "Other Key Pressed";
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	label.innerHTML = "Alphabet Key Pressed";
	add();
}

function numberkey()
{
	img_image="numkey.png";
	label.innerHTML = "Number Key Pressed";
	add();
}

function arrowkey()
{
	img_image="Arrkey.png";
	label.innerHTML = "Arrow Key Pressed";
	add();
}

function specialkey()
{
	img_image="spkey.png";
	label.innerHTML = "Special Key Pressed";
	add();
}

function otherkey()
{
	img_image="otherkey.png";
	add();
}
