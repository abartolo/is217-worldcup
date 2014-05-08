




historicalBarChart = [ 
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "United States" ,
        "value" : 2
      } , 
      { 
        "label" : "Brazil" , 
        "value" : 5
      } , 
      { 
        "label" : "Canada" , 
        "value" : 1
      } , 
      { 
        "label" : "Argentina" , 
        "value" : 4
      } , 
      { 
        "label" : "England" ,
        "value" : 1
      } , 
      { 
        "label" : "Russia" , 
        "value" : 1
      } , 
      { 
        "label" : "Germany" , 
        "value" : 3
      } , 
      { 
        "label" : "Holland" , 
        "value" : 2
      }
    ]
  }
];


nv.addGraph(function() {  
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
      //.staggerLabels(historicalBarChart[0].values.length > 8)
      .tooltips(false)
      .showValues(true)
      .transitionDuration(250)
      ;

  d3.select('#chart1 svg')
      .datum(historicalBarChart)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});
