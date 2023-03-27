function preload(){
    img = loadImage("bedroom.png");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting objects...";
}

function modelLoaded(){
    console.log("Model loaded successfully");
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 600, 400);
}