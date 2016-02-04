var numberOfCircles = 1000;
var circleRadius = 6;
var svgWidth = 800;
var svgHeight = 800;
var startx = svgWidth / 2 - circleRadius;
var starty = svgHeight / 2 - circleRadius;
var colors = ["#cc0000", "#ffcc00", "#aaff00", "#0099cc", "#194c99", "#661999"];
var paper = Snap(svgWidth, svgHeight);
var frameTimes = [];
var maxVelocity = 500;

var circles = [];

var render = function () {
    paper.clear();
    for (var i=0; i < numberOfCircles; i++) {
        var circle = paper.circle(
            startx,
            starty,
            circleRadius
        );
        circle.attr("fill", colors[Math.floor(Math.random() * colors.length)]);
        circle.attr("stroke", "#fff");
        var angle = Math.PI * 2 * Math.random();
        var velocity = maxVelocity / 8 * 7 * Math.random() + maxVelocity / 8;
        circle.data("angle", angle);
        circle.data("velocity", velocity);
        circles.push(circle);
    }

    // Start the animation
    setInterval(animate, 1);
};

var reDraw = function(circle, timeDelta) {
  // Calculate next position of circle
  var angle = circle.data("angle");
  var velocity = circle.data("velocity");
  var nextX = parseInt(circle.attr("cx")) + Math.cos(angle) * velocity * (timeDelta / 1000);
  var nextY = parseInt(circle.attr("cy")) + Math.sin(angle) * velocity * (timeDelta / 1000);

  // If circle is going to move off right side of screen
  if (nextX + circleRadius * 2 > svgWidth)
  {
    // If angle is between 3 o'clock and 6 o'clock
    if ((angle >= 0 && angle < Math.PI / 2))
    {
      angle = Math.PI - angle;
    }
    // If angle is between 12 o'clock and 3 o'clock
    else if (angle > Math.PI / 2 * 3)
    {
      angle = angle - (angle - Math.PI / 2 * 3) * 2
    }
  }

  // If circle is going to move off left side of screen
  if (nextX < 0)
  {
    // If angle is between 6 o'clock and 9 o'clock
    if ((angle > Math.PI / 2 && angle < Math.PI))
    {
      angle = Math.PI - angle;
    }
    // If angle is between 9 o'clock and 12 o'clock
    else if (angle > Math.PI && angle < Math.PI / 2 * 3)
    {
      angle = angle + (Math.PI / 2 * 3 - angle) * 2
    }
  }

  // If circle is going to move off bottom side of screen
  if (nextY + circleRadius * 2 > svgHeight)
  {
    // If angle is between 3 o'clock and 9 o'clock
    if ((angle > 0 && angle < Math.PI))
    {
      angle = Math.PI * 2 - angle;
    }
  }

  // If circle is going to move off top side of screen
  if (nextY < 0)
  {
    // If angle is between 9 o'clock and 3 o'clock
    if ((angle > Math.PI && angle < Math.PI * 2))
    {
      angle = angle - (angle - Math.PI) * 2;
    }
  }
  console.log("Next X " + nextX + circleRadius);
  console.log("Next Y " + nextY + circleRadius);
  circle.data("angle", angle);
  circle.attr({
        "cx": nextX,
        "cy": nextY
    });
};

function animate()
{
	// Limit the frame time array to the last 30 frames
	if (frameTimes.length > 30) {
		frameTimes.splice(0, 1);
	}

	var currTime = new Date().getTime();
	frameTimes.push(currTime);

	// Calculate the framerate based upon the difference between the absolute times of the oldest and newest frames,
  // subdivided by how many frames were drawn inbetween
	var frameRate = $("#results");
	var frameRateText = 1000 / ((currTime - frameTimes[0]) / (frameTimes.length - 1)) + "";
	frameRateText = frameRateText.replace(/(^[^.]+\...).*/, "$1");
	frameRateText += " FPS";
	frameRate.html("<b>" + frameRateText + "</b>");

	var timeDelta = currTime - frameTimes[frameTimes.length - 2];

	if (isNaN(timeDelta)) {
		timeDelta = 0;
	}

	// Draw each circle
	for (var index in circles) {
		reDraw(circles[index], timeDelta);
	}
};

render();
