noseX=0;
noseY=0;
difference = 0 ;
leftwristX = 0 ;
rightwristX = 0 ;
function setup()
{
   canvas=createCanvas(400, 400);
   canvas.position(500,200);

   video=createCapture(VIDEO);
   video.size(450, 400);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose" , gotPoses);
}

function modelLoaded() 
{
   console.log('PoseNet Is Initialized');
}

function draw()
{
  background("#cb95c4");
  fill("#03fc6b");
  stroke("#62fc03");
  letter(noseX, noseY, difference);
  document.getElementById("square_side").innerHTML = "Width and Height of the letter is = " + difference + "px";
}

function gotPoses(results)
{
   if (results.length > 0)
   {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX + "noseY = " + noseY);

      leftwristX = results[0].pose.leftWrist.x;
      rightwristX = results[0].pose.rightWrist.x;
      difference = floor(leftwristX - rightwristX);

      console.log("leftwristX = " + leftwristX + " rightwristX = " + rightwristX + " difference = " + difference);
   } 
}