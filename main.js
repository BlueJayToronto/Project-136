var noseX=0;
var noseY=0;
var leftWristX=0;
var rightWristX=0;
var difference=0;

function preload (){    
}

function setup (){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function draw() {
    background('#abdbe3')
      fill('#154c79');
      stroke('e28743');
      square(noseX,noseY, difference);
}
function gotPoses(results)
    {
        if(results.length >0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("noseX =" + noseX +"noseY" +noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference= leftWristX-rightWristX;
        }

    }