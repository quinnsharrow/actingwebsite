// JavaScript Document

var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "assets/scaleddownheadshots/PurpleShirtSuit.jpg"// set image src property to image path, preloading image in the process
slideimages[1] = new Image()
slideimages[1].src = "assets/scaleddownheadshots/RedShirt.jpg"
slideimages[2] = new Image()
slideimages[2].src = "assets/scaleddownheadshots/BlueShirt1.jpg"
slideimages[3] = new Image()
slideimages[3].src = "assets/scaleddownheadshots/BlueShirt2.jpg"
slideimages[4] = new Image()
slideimages[4].src = "assets/scaleddownheadshots/WhiteShirt1.jpg"
slideimages[5] = new Image()
slideimages[5].src = "assets/scaleddownheadshots/WhiteShirt2.jpg"
slideimages[6] = new Image()
slideimages[6].src = "assets/scaleddownheadshots/WhiteBlueShirt.jpg"

//variable that will increment through the images
var step=0

function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<6)
  step++
 else
  step=0
 //call function "slideit()" every 6 seconds
 setTimeout("slideit()",4000)
}

slideit()
