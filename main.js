song1="";
song2="";
function preload(){
    song1=loadSound("Bang.mp3");
    song2=loadSound("That's An Idiom.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}