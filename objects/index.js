var numberOfPoints = 1000; // adjust this to produce more/less points
var paper = Snap(800, 800);

var benchmarkOptions = {
    'teardown': function () {
         paper.clear();
    }
};

var render = function () {
    // Creates circle at x = 50, y = 40, with radius 10
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

var bench = new Benchmark("objects", render, benchmarkOptions);

render();
