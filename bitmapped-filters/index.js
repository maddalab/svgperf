var paper = Snap(800, 800);

// load images at 200x200, gives us 16 images

var render = function () {
  paper.clear();
  var filters = [
    paper.filter(Snap.filter.blur(3,1)),
    paper.filter(Snap.filter.shadow(2, 2, 2, 'black')),
    paper.filter(Snap.filter.shadow(2, 2, 2, 'black')),
    paper.filter(Snap.filter.grayscale(0.5)),
    paper.filter(Snap.filter.sepia(0.5)),
    paper.filter(Snap.filter.saturate(0.5))
  ];
  var f = filters[Math.floor(Math.random() * filters.length)];
  var image = paper.image("backgrounds.jpg", 0, 0, 800, 800).attr({
    filter: f
  });
};

//render();
var bench = new Benchmark("objects", render)
  .on('complete', function () {
    $("#results").html("<b>Operations per second</b> " + this.hz + "<br/><b>Mean</b> " + this.stats.mean);
  })
  .run({ 'async': true });
