rightWristX = "";
rightWristY = "";
right_wrist_score = 0;

function setup(){
    canvas = createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.parent(canvas) 
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,250,250);
    fill("red");
    stroke("red");

    if (right_wrist_score > 0.2){
       
        circle(rightWristX,rightWristY,20);
    }
}

function modelLoaded(){
    console.log("model loaded");
    
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rightWristX + ", y = " + rightWristY);

        right_wrist_score = results[0].pose.score;
    console.log("score = " + right_wrist_score);
    }
}