import React, { Component } from 'react'
import {defaults, Radar} from 'react-chartjs-2'

defaults.global.tooltips.enabled= true
class RadarChart extends Component {
    render (){
        return (
            <div className='BarGraph'>
                <Radar
                    data={{
                        labels:['APRIL', 'MAY', 'JUNE', 'SEPTEMBER', 'NOVEMBER'],
                        datasets:[
                            {
                                label: 'BIRTHDAY MONTHS',
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
                                borderWidth: 2
                            },
                        ],
                    }}
                    height={400}
                    width={300}
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
export default RadarChart
