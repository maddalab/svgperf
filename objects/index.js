var numberOfPoints = 1000; // adjust this to produce more/less points
var paper = Snap(800, 800);

var render = function () {
    paper.clear();
    var circle;
    for (var i=0; i < numberOfPoints; i++)
    {
        circle = paper.circle(
            Math.floor((Math.random()*500)),
            Math.floor((Math.random()*500)),
            2
        );
        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");
    }
};
render();
var bench = new Benchmark("objects", render)
  .on('complete', function () {
    console.log("Operations per second " + this.hz);
    console.log("Mean " + this.stats.mean)
  })
  .run();
