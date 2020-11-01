google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartLine);
google.charts.setOnLoadCallback(drawChart3DPie);


// line chart
function drawChartLine() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Salary'],
    ['Jan', 1000],
    ['Feb', 1170],
    ['Mar', 660],
    ['April', 800],
    ['May', 500],
    ['June', 400],
    ['July', 300],
    ['Aug', 900],
    ['Sep', 800],
    ['Oct', 600],
    ['Nov', 980],
    ['Dec', 1030],
  ]);

  var options = {
    // title: 'Earnings Overview',
    curveType: 'function',
    vAxis: { title: "Salary",maxValue: 10},
    width: 600, height: 500,
    legend: { position: 'bottom'},
    // hAxis: { title: "Month" },
    chartArea: {width: '80%', right: 40}
    
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}


//3D Pie Chart

function drawChart3DPie() {
  var data = google.visualization.arrayToDataTable([
    ['Food', 'Order'],
    ['Cake', 11],
    ['Grilled', 2],
    ['Vegetable', 2],
    ['Soup', 2],
    ['Sea', 7]
  ]);

  var options = {
    // title: 'Revenue Sources',
    is3D: true,
    width: 450, height: 500,
    legend: { position: 'bottom' },
    chartArea: {width: '80%',right: 0}
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

