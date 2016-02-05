var paper = Snap(800, 800);

paper.clear();
var blurFilter = paper.filter(Snap.filter.blur(3,1));
var grayscaleFilter = paper.filter(Snap.filter.grayscale(0.5));

var background = paper.image("backgrounds.jpg", 0, 0, 1200, 1200).attr({
  filter: blurFilter
});

var clipCircle = paper.circle(400,400,200).attr({
  fill: paper.gradient("r(0.5, 0.5, 0.5)#000-#fff")
});
var foreground = paper.image("backgrounds.jpg", 0, 0, 1200, 1200).attr({
  filter: grayscaleFilter,
  "clip-path": clipCircle
});
var imgGroup = paper.g(background, foreground)

var render = function () {
  console.log("invoked");
  var newx = Math.floor(Math.random() * 200);
  foreground.attr({
    x: newx
  });
  background.attr({
    x: newx
  });
};

//render();
var bench = new Benchmark("objects", render)
  .on('complete', function () {
    $("#results").html("<b>Operations per second</b> " + this.hz + "<br/><b>Mean</b> " + this.stats.mean);
  })
  .run({ 'async': true });
