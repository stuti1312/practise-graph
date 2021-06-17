import React, { Component } from 'react'
import {Line, defaults} from 'react-chartjs-2'

defaults.global.tooltips.enabled= true
class LineChart extends Component {
    render (){
        return (
            <div>
                <Line
                    data={{
                        labels:['APRIL', 'MAY', 'JUNE', 'SEPTEMBER', 'NOVEMBER'],
                        datasets:[
                            {
                                label: 'BIRTHDAY MONTHS',
                                data: [3, 6, 7, 15, 18, 10, 20],
                                backgroundColor: [
                                    'rgba(255, 100, 135, 0.2)',
                                    'rgba(55, 165, 235, 0.2)',
                                    'rgba(255, 205, 85, 0.2)',
                                    'rgba(75, 190, 195, 0.2)',
                                    'rgba(155, 105, 255, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 100, 135, 1)',
                                    'rgba(10, 20, 255, 1)',
                                    'rgba(255, 205, 85, 1)',
                                    'rgba(15, 155, 50, 1)',
                                    'rgba(165, 45, 40, 1)'
                                ],
                                borderWidth: 5
                            },
                            {
                                label: 'dates',
                                data: [15, 30, 5, 45, 10],
                                backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
                                borderColor: ['brown','black', 'red', 'blue', 'green'],
                                borderWidth: 5
                            },
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
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}
export default LineChart
