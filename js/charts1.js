


d3.csv('../data/Graffiti_cartodb.csv', function (data) {
    // Since its a csv file we need to format the data a bit.
    var dateFormat = d3.time.format('%m/%d/%Y %I:%M:%S %p');
    var numberFormat = d3.format('.2f');

    data.forEach(function (d) {
        d.dd = dateFormat.parse(d.created_date);
        d.day = d3.time.day(d.dd); // pre-calculate month for better performance

    });

    nv.addGraph(function() {
    var chart = nv.models.cumulativeLineChart()
                  .x(function(d) { return d.day })
                  .y(function(d) { return d[1]/100 }) //adjusting, 100% is 1.00, not 100 as it is in the data
                  .color(d3.scale.category10().range())
                  .useInteractiveGuideline(true)
                  ;

     chart.xAxis
        .tickValues([1078030800000,1122782400000,1167541200000,1251691200000])
        .tickFormat(function(d) {
            return d3.time.format('%x')(new Date(d))
          });

    chart.yAxis
        .tickFormat(d3.format(',.1%'));

    d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    //TODO: Figure out a good way to do this automatically
    nv.utils.windowResize(chart.update);

    return chart;
  });

 });