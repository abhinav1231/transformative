import { Component, OnInit } from '@angular/core';

declare let Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    height = '30px';
    model;
    closeDatepicker(id) {
        id.close();
      }

  ngOnInit() {
    var ctx = document.getElementById('myChart2');
    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'July'],
            datasets: [{
                label: false,
                data: [ 7000 , 9000 , 9500 , 7500 , 12000 , 52000 , 56000],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                // borderColor: [
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(54, 162, 235, 1)',

                // ],
                // borderWidth: 1
            }]
        },
        options: {
              legend: {
                display: false
            },
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fixedStepSize: 0,
                        max: 60000,
                        min: 0
                    },
                }],
                xAxes: [{
                  barPercentage: 5.0,
                        categoryPercentage: 0.1
                }]
            }
        }
    });

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apl', 'May'],
        datasets: [{
            label: '# of Votes',
            data: [120, 110, 430, 160, 150],
            backgroundColor: [
                'rgba(174, 213, 254, 0.5)',
            ],
            borderColor: [
                'rgba(174, 213, 254, 0.5)',

            ],
            borderWidth: 1
        },
        {
            label: '# of Votes2',
            data: [200, 110, 300, 50, 100],
            backgroundColor: [
                'rgba(255, 200, 177, 0.8)',
            ],
            borderColor: [
                'rgba(255, 200, 177, 0.8)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

        }
}
