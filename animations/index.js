var numberOfGroups = 1000;
var paper = Snap(1600, 1600);

var render = function () {
    paper.clear();
    var allGroups = [];
    for (var i=0; i < numberOfGroups; i++)
    {
      var x = Math.floor((Math.random()*800));
      var y = Math.floor((Math.random()*800));
      var r = paper.rect(x, y,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
      var c = paper.circle(x+100,y+100,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });
      var g = paper.group(r,c);
      allGroups.push(g);
    }
    allGroups.forEach(function (g) {
      g.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
    });
};
var bench = new Benchmark("objects", render)
  .on('complete', function () {
    $("#results").html("<b>Operations per second</b> " + this.hz + "<br/><b>Mean</b> " + this.stats.mean);
  })
  .run();
