function preload() {
    img = loadImage('https://i.postimg.cc/gkFD5n5z/5006041-clown-nose-png-101-images-in-collection-page-2-clown-nose-png-640-480-preview.png')
}

function setup() {
    canvas = createCanvas(400 ,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();

    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on('pose', gotPoses);
}

noseX = "";
noseY = "";

function gotPoses(results) {

    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x =" + results[0].pose.nose.x);
        console.log("Nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function draw() {
    image(video , 0,0,400,400);
    image(img , noseX -13 ,noseY -10 , 30 ,25);


}

function take_snapshot() {
    save("My_selfie.jpg")
}
