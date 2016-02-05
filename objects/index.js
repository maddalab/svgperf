var numberOfPoints = 100000;
var paper = Snap(800, 800);

var render = function () {
    paper.clear();
    var circle;
    for (var i=0; i < numberOfPoints; i++)
    {
        circle = paper.circle(
            Math.floor((Math.random()*800)),
            Math.floor((Math.random()*800)),
            2
        );
        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");
    }
};
var bench = new Benchmark("objects", render)
  .on('complete', function () {
    $("#results").html("<b>Operations per second</b> " + this.hz + "<br/><b>Mean</b> " + this.stats.mean);
  })
  .run();
