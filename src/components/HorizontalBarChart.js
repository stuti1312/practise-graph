import React, { Component } from 'react'
import {HorizontalBar, defaults} from 'react-chartjs-2'

defaults.global.tooltips.enabled= true
class HorizontalBarChart extends Component {
    render (){
        return (
            <div className='BarGraph'>
                <HorizontalBar
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
                            {
                                label: 'PEOPLE INVITED',
                                data: [15, 30, 25, 20, 10],
                                backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
                                borderColor: 'black',
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
export default HorizontalBarChart
