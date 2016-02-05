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
    $("#results").html("<b>Benchmark results </b> <br/> Total time " + this.times.elapsed + "  <br> Number of cycles  "
    + this.stats.sample.length + " <br> Average time per cycle " + this.times.elapsed / this.stats.sample.length);
  })
  .run({ 'async': true });
