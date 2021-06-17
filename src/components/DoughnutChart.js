import React, { Component } from 'react'
import {Doughnut, defaults} from 'react-chartjs-2'

defaults.global.tooltips.enabled= true
defaults.global.legend.position= 'right'

class DoughnutChart extends Component {
    render (){
        return (
            <div>
                <Doughnut
                    data={{
                        labels:['APRIL', 'MAY', 'JUNE', 'SEPTEMBER', 'NOVEMBER'],
                        datasets:[
                            {
                                label: 'AMAZON INDIA VEZZA',
                                data: [3, 7, 5],
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'FLIPKART Store 1',
                                data: [13, 15, 18],
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 2
                            },
                            {
                                label: 'MYNTRA Bengaluru Store',
                                data: [23, 25, 28],
                                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                                borderColor: 'rgba(153, 102, 255, 1)',
                                borderWidth: 2
                            },
                        ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        title: {
                            display: true,
                            text: 'SALES | RETURNED | CANCELLED',
                            fontSize: 25
                        },
                        maintainAspectRatio: false,
                        cutoutPercentage: 80,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                            }]
                        },
                        legend: {
                            labels: {
                                fontSize: 15
                            },
                        }
                    }}
                />
            </div>
        )
    }
}

export default DoughnutChart
