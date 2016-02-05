var squareSide = 20;
var paperSide = 800;
var imgSide = paperSide / squareSide;
var paper = Snap(paperSide, paperSide);

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
  for (var i = 0; i < paperSide / imgSide; i++) {
    for (var j = 0; j < paperSide / imgSide; j++) {
      var f = filters[Math.floor(Math.random() * filters.length)];
      var image = paper.image("birds.svg", i * imgSide, j * imgSide, imgSide, imgSide).attr({
        filter: f
      });
    }
  }
};

var bench = new Benchmark("objects", render)
  .on('complete', function () {
    $("#results").html("<b>Benchmark results </b> <br/> Total time " + this.times.elapsed + "  <br> Number of cycles  "
    + this.stats.sample.length + " <br> Average time per cycle " + this.times.elapsed / this.stats.sample.length);
  })
  .run({ 'async': true });
