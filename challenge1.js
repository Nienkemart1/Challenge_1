  // Begin javascript code voor de snelheids diagram (donutchart)//
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Niveaus', '#'],
          ['Donkergoen',     8.75],
          ['Groen',          8.75],
          ['Geel',             16],
          ['Oranje',         8.75],
          ['Rood',           8.75],
          ['#',                50]
        ]);

        var options = {
          enableInteractivity : false,
          pieHole: 0.5,
          backgroundColor: 'transparent',
          legend: 'none',
          pieSliceText: 'none',
          pieSliceBorderColor: 'transparent',
          pieStartAngle: -90,
          tooltip: { trigger: 'none' },
          slices: {
            0: { color: '#4c6652' },
            1: { color: '#81ef9a' },
            2: { color: '#f7fc94' },
            3: { color: '#ff9b28' },
            4: { color: '#ff5826' },
            5: { color: 'transparent' },
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }

  //Einde code voor donutchart//


  //Begin code voor etens diagram (piechart)//
   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {

        var data = google.visualization.arrayToDataTable([
          ['Food',    'Quantity'],
          ['Bread',             23],
          ['Fruits',            14],
          ['Nuts',              9],
          ['Veggies',           6],
          ['Cookies',           11]
        ]);

        var options = {
          backgroundColor: 'transparent',
          legend: 'none',
          pieSliceBorderColor: 'transparent',
          slices: {
            0: { color: '#f5a5ff' },
            1: { color: '#bda4ff' },
            2: { color: '#a3e2ff' },
            3: { color: '#a3ffac' },
            4: { color: '#ffcfa3' },
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
  // Einde code voor de piecharts//

  //Begin code voor de line chart (afstand chart)//
   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart4);

      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Distance'],
          [ 6,      2],
          [ 15,    17],
          [ 23,    43],
          [ 32,    99],
          [ 48,   140],
          [ 58,   190],
          [ 66,   230],
          [ 78,   300],
          [ 90,   390],
        ]);

        var options = {
          backgroundColor: 'transparent',
          legend: 'none',
          series: {
            0: { color: '#bda4ff'},
          },
          pointSize: 5,
          hAxis: {
            gridlines: {color: '#bda4ff' },
            title: 'Time',
            baseline: 0,
            textColor: '#bda4ff',
            baselineColor: '#bda4ff',
            titleTextStyle: { color: '#bda4ff' },
          },
          vAxis: {
            gridlines: {color: 'transparent' },
            title: 'Distance in km (x1000)',
            textColor: 'white',
            baselineColor: '#bda4ff',
            titleTextStyle: { color: 'white' },
          },
          crosshair: { trigger: 'both', orientation: 'both' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
  //Einde code voor de line charts//





