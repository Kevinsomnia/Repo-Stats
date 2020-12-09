const Chart = require("chart.js");

const graphBgColor = 'rgba(120, 255, 110, 0.25)';
const graphBorderColor = 'rgba(120, 255, 110, 0.5)';

let ctx = $('#commitChart');
var commitChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            backgroundColor: graphBgColor,
            borderColor: graphBorderColor,
            borderWidth: 2,
            pointRadius: 0,
            lineTension: 0.3,
            data: [
                0,
                1,
                2,
                1,
                3,
                2,
                4
            ]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    maxTicksLimit: 4,
                    stepSize: 5
                }
            }]
        }
    }
});
