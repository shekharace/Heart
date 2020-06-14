import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels:['10th jan','15th Feb','20th March','25th April','30th May','5th June'],
      datasets: [{
            label: 'Heart Rate',
            data: [
              110,
              100,
              75,
              60,
              55,
              65

          ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: ' #000'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title:{
          display: true,
          text: 'Heart Rate Data with date'
      },
      legend: {
          display: true,
          position: 'right',
          labels: {
             fontColor: '#000'
          }
      },
      layout: {
          padding: {
              left: 50,
              right: 0,
              bottom: 0,
              top: 0
          }
      },
      tooltips: {
          enabled: true
      }
    }
});

  }

}
