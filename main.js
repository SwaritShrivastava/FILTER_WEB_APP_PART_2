mustacheX=0;
mustacheY=0;
function preload() {
    mustache= loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqvkeECN9qxYtkJCEHhs5HsV_ZqRGx5l2bw&usqp=CAU');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded() {
    console.log('PoseNet Is Initialized');
    }
    function gotPoses(results) {
    if(results.length > 0) {
    console.log(results);
    mustacheX = results[0].pose.mustache.x-15;
    mustacheY = results[0].pose.mustache.y-15;
    } }
    function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 50, 50);
    }
    function take_snapshot(){
    save('myFilterImage.png');
    }