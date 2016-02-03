var numberOfStrings = 100000; // adjust this to produce more/less points
var paper = Snap(800, 800);
var items = ["Saab", "Volvo", "BMW", "Honda", "Toyota", "Ford", "Volkswagen" , "Chrysler"];
var colors = ["#fffafa", "#6a5acd", "#48d1cc", "#f5f5dc", "#db7093", "#9370db", "#ff6347" , "#1e90ff"];

var render = function () {
    paper.clear();
    for (var i=0; i < numberOfStrings; i++)
    {
        var item = items[Math.floor(Math.random()*items.length)];
        var color = colors[Math.floor(Math.random()*items.length)];
        var text = paper.text(
            Math.floor((Math.random()*800)),
            Math.floor((Math.random()*800)),
            item
        );
        text.attr('fill', color);
    }
};
var bench = new Benchmark("objects", render)
  .on('complete', function () {
    $("#results").html("<b>Operations per second</b> " + this.hz + "<br/><b>Mean</b> " + this.stats.mean);
  })
  .run();
