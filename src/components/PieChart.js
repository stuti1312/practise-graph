import React, { Component } from 'react'
import {Pie, defaults} from 'react-chartjs-2'

defaults.global.tooltips.enabled= true
defaults.global.legend.position= 'bottom'

class PieChart extends Component {
    render (){
        return (
            <div>
                <Pie
                    data={{
                        labels:['APRIL', 'MAY', 'JUNE', 'SEPTEMBER', 'NOVEMBER'],
                        datasets:[
                            {
                                label: 'BDAY MONTHS',
                                data: [3, 6, 7, 15, 18],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)'
                                ],
                                borderWidth: 5
                            },
                            // {
                            //     label: 'dates',
                            //     data: [15, 10, 15, 30],
                            //     backgroundColor: ['skyblue', 'yellow', 'lightgreen', 'brown']
                            // },
                        ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                            },],
                        },
                        legend: {
                            labels: {
                                fontSize: 15
                            },
                        },
                    }}
                />
            </div>
        )
    }
}

export default PieChart
