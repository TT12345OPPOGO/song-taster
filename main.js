song1_status = "";
song2_status = "";

song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLefWrist = 0;
scoreRightWrist = 0;
InNumberleftwristY = 400.34568765;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function preload()
{
    Harry_Potter_Theme_Song = loadSound("oof.mp3");
    Mortis_game = loadSound("pog.mp3");
}

function play()
{
    Harry_Potter_Theme_Song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw()
{
    image(video, 0, 0, 600, 500)

    fill("#30D5C8");
    stroke("#30D5C8");

    if(scoreRightWrist > 0.2)
    {
    circle(rightWristX, rightWristY, 20);

        song2.stop();

        if(song1_status == false)
        {
            song1.play();
            document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
        }
    }

    if(scoreLefWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song").innerHTML = "Playing - ALONE"
		}
	}
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLefWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        console.log("scoreLefWrist = " + scoreLefWrist)  

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+rightWristY);
    }
}