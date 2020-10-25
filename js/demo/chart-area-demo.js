// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}


cookieData = {
  labels: ["7/16/2020",
  "7/17/2020",
  "7/18/2020",
  "7/19/2020",
  "7/20/2020",
  "7/21/2020",
  "7/22/2020",
  "7/23/2020",
  "7/24/2020",
  "7/25/2020",
  "7/26/2020",
  "7/27/2020",
  "7/28/2020",
  "7/29/2020",
  "7/30/2020",
  "7/31/2020",
  "8/1/2020",
  "8/2/2020",
  "8/3/2020",
  "8/4/2020",
  "8/5/2020",
  "8/6/2020",
  "8/7/2020",
  "8/8/2020",
  "8/9/2020",
  "8/10/2020",
  "8/11/2020",
  "8/12/2020",
  "8/13/2020",
  "8/14/2020",
  "8/15/2020",
  "8/16/2020",
  "8/17/2020",
  "8/18/2020",
  "8/19/2020",
  "8/20/2020",
  "8/21/2020",
  "8/22/2020",
  "8/23/2020",
  "8/24/2020",
  "8/25/2020",
  "8/26/2020",
  "8/27/2020",
  "8/28/2020",
  "8/29/2020",
  "8/30/2020",
  "8/31/2020",
  "9/1/2020",
  "9/2/2020",
  "9/3/2020",
  "9/4/2020",
  "9/5/2020",
  "9/6/2020",
  "9/7/2020",
  "9/8/2020",
  "9/9/2020",
  "9/10/2020",
  "9/11/2020",
  "9/12/2020",
  "9/13/2020",
  "9/14/2020",
  "9/15/2020",
  "9/16/2020",
  "9/17/2020",
  "9/18/2020",
  "9/19/2020",
  "9/20/2020",
  "9/21/2020",
  "9/22/2020",
  "9/23/2020",
  "9/24/2020",
  "9/25/2020",
  "9/26/2020",
  "9/27/2020",
  "9/28/2020",
  "9/29/2020",
  "9/30/2020",
  "10/1/2020",
  "10/2/2020",
  "10/3/2020",
  "10/4/2020",
  "10/5/2020",
  "10/6/2020",
  "10/7/2020",
  "10/8/2020",
  "10/9/2020",
  "10/10/2020",
  "10/11/2020",
  "10/12/2020",
  "10/13/2020",
  "10/14/2020",
  "10/15/2020",
  "10/16/2020",
  "10/17/2020",
  "10/18/2020",
  "10/19/2020",
  "10/20/2020",
  "10/21/2020",
  "10/22/2020",
  "10/23/2020",
  "10/24/2020",
  "10/25/2020",
  "10/26/2020",
  "10/27/2020",
  "10/28/2020",
  "10/29/2020",
  "10/30/2020",
  "10/31/2020",
  "11/1/2020",
  "11/2/2020"],
  datasets: [
    {
      label: "Chocolate Chip",
      lineTension: 0.1,
      backgroundColor: "rgba(168, 24, 38, 1)",
      borderColor: "rgba(168, 24, 38, 1)",
      borderWidth: 2,
      offset: true,
      strokeColor: "rgba(168, 24, 38, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [6.0, 6.0, 7.0, 7.0, 7.0, 8.0, 9.0, 6.0, 7.0, 8.0, 8.0, 6.0, 6.0, 9.0, 8.0, 6.0, 6.0, 7.0, 7.0, 8.0, 7.0, 6.0, 6.0, 7.0, 6.0, 7.0, 7.0, 7.0, 8.0, 10.0, 8.0, 8.0, 10.0, 7.0, 11.0, 7.0, 9.0, 8.0, 11.0, 10.0, 10.0, 11.0, 8.0, 12.0, 12.0, 9.0, 12.0, 11.0, 10.0, 11.0, 12.0, 8.0, 11.0, 10.0, 12.0, 12.0, 9.0, 10.0, 10.0, 11.0, 9.0, 12.0, 11.0, 11.0, 8.0, 12.0, 8.0, 11.0, 11.0, 12.0, 8.0, 9.0, 8.0, 12.0, 11.0, 11.0, 10.0, 9.0, 11.0, 12.0, 11.0, 10.0, 9.0, 9.0, 12.0, 11.0, 12.0, 14.0, 10.0, 14.0, 11.0, 11.0, 14.0, 15.0, 13.0, 10.0, 11.0, 14.0, 14.0,12.207475744187832, 12.250609040260315, 12.293400324881077, 12.335849605500698, 12.377956867218018, 12.419722117483616, 12.461145348846912, 12.502226568758488, 12.542965769767761, 12.583362959325314, 12.623418122529984]
    },
    {
      label: "Snickerdoodle",
      lineTension: 0.1,
      backgroundColor: "rgba(112, 121, 216, 1)",
      borderColor: 'rgba(112, 121, 216, 1)',
      borderWidth: 2,
      offset: true,
      strokeColor: 'rgba(112, 121, 216, 1)',
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: 'rgba(220,180,0,1)',
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [7.0, 8.0, 7.0, 5.0, 6.0, 6.0, 8.0, 8.0, 7.0, 7.0, 6.0, 7.0, 6.0, 6.0, 6.0, 9.0, 8.0, 9.0, 6.0, 7.0, 6.0, 6.0, 7.0, 7.0, 6.0, 6.0, 6.0, 6.0, 7.0, 6.0, 8.0, 8.0, 7.0, 8.0, 9.0, 6.0, 7.0, 9.0, 8.0, 8.0, 8.0, 7.0, 8.0, 10.0, 9.0, 11.0, 10.0, 11.0, 13.0, 13.0, 9.0, 13.0, 10.0, 11.0, 12.0, 13.0, 11.0, 14.0, 13.0, 13.0, 13.0, 15.0, 15.0, 13.0, 12.0, 12.0, 14.0, 11.0, 11.0, 12.0, 15.0, 15.0, 14.0, 12.0, 13.0, 12.0, 12.0, 14.0, 14.0, 13.0, 11.0, 12.0, 15.0, 13.0, 16.0, 16.0, 11.0, 13.0, 17.0, 15.0, 12.0, 15.0, 15.0, 15.0, 15.0, 13.0, 12.0, 15.0, 14.0,15.217708479613066, 15.313537877053022, 15.409270271658897, 15.504905661568046, 15.600444046780467, 15.695885429158807, 15.791229804977775, 15.886477176100016, 15.981627544388175, 16.076680904254317, 16.171637257561088]
    },
    {
      label: "Peanut Butter",
      lineTension: 0.1,
      backgroundColor: "rgba(112, 236, 140, 1)",
      borderColor: "rgba(112, 236, 140, 1)",
      borderWidth: 2,
      offset: true,
      strokeColor: "rgba(112, 236, 140, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(151,187,205,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [7.0, 6.0, 6.0, 6.0, 6.0, 7.0, 8.0, 8.0, 8.0, 9.0, 6.0, 8.0, 8.0, 6.0, 8.0, 6.0, 9.0, 7.0, 7.0, 9.0, 7.0, 7.0, 6.0, 6.0, 6.0, 8.0, 9.0, 8.0, 8.0, 8.0, 7.0, 8.0, 9.0, 7.0, 8.0, 7.0, 7.0, 10.0, 7.0, 7.0, 8.0, 8.0, 10.0, 10.0, 7.0, 10.0, 10.0, 8.0, 8.0, 8.0, 8.0, 8.0, 12.0, 12.0, 12.0, 12.0, 10.0, 9.0, 12.0, 11.0, 12.0, 10.0, 13.0, 10.0, 10.0, 12.0, 9.0, 13.0, 12.0, 11.0, 13.0, 10.0, 9.0, 13.0, 9.0, 13.0, 9.0, 10.0, 9.0, 9.0, 10.0, 11.0, 11.0, 13.0, 13.0, 10.0, 11.0, 11.0, 10.0, 11.0, 10.0, 14.0, 10.0, 11.0, 10.0, 10.0, 10.0, 13.0, 10.0,11.345909610390663, 11.367676764726639, 11.38879668712616, 11.409269362688065, 11.429094806313515, 11.44827301800251, 11.46680398285389, 11.484687700867653, 11.5019241720438, 11.518513411283493, 11.534455388784409]
    }
    
  ]
};

donutData = {
  labels: ["7/16", "7/17", "7/18", "7/19", "7/20", "7/21", "7/22", "7/23", "7/24", "7/25", "7/26", "7/27"],
  datasets: [
    {
      label: "Glazed",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      strokeColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [8, 8, 8, 7, 7, 8, 6, 7, 6, 7, 6, 8]
    },
    {
      label: "Strawberry",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: 'rgba(220,180,0,1)',
      strokeColor: 'rgba(220,180,0,1)',
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: 'rgba(220,180,0,1)',
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [8, 7, 6, 6, 6, 6, 7, 8, 6, 8, 6, 9]
    },
    {
      label: "Chocolate",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(151,187,205,1)",
      strokeColor: "rgba(151,187,205,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(151,187,205,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [6, 7, 6, 7, 7, 6, 6, 5, 6, 6, 5, 6]
    },
    {
      label: "Pumpkin Spice",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(151,187,205,1)",
      strokeColor: "rgba(151,187,205,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(151,187,205,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [6, 7, 6, 7, 7, 6, 6, 5, 6, 6, 5, 6]
    }
    
  ]
};

pieData = {
  labels: ["7/16", "7/17", "7/18", "7/19", "7/20", "7/21", "7/22", "7/23", "7/24", "7/25", "7/26", "7/27"],
  datasets: [
    {
      label: "Pumpkin",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      strokeColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [12, 12, 12, 12, 12, 12, 6, 7, 6, 7, 6, 8]
    },
    {
      label: "Apple",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: 'rgba(220,180,0,1)',
      strokeColor: 'rgba(220,180,0,1)',
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: 'rgba(220,180,0,1)',
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [8, 7, 6, 6, 6, 6, 7, 8, 6, 8, 6, 9]
    },
    {
      label: "Lemon",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(151,187,205,1)",
      strokeColor: "rgba(151,187,205,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(151,187,205,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [6, 7, 6, 7, 7, 6, 6, 5, 6, 6, 5, 6]
    }
    
  ]
};

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: cookieData,

  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel+ ": " + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

