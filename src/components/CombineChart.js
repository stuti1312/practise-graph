import React, { Component } from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.defaultFontFamily = "Lato";
defaults.global.tooltips.enabled = true;

class CombineChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: null
        }
    }
    
  render() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.items
        });
      });
      console.log(this.items);
    return (
      <div className="combine">
        <Bar
          data={{
            labels: ["DEC 19", "JAN 20", "FEB 20", "MARCH 20", "APRIL 20"],
            datasets: [
              {
                label: ["DEC 19"],
                data: [6, 4, 6, 2.5, 3.5],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
                hoverBorderColor: "black",
                hoverBorderWidth: 3,
              },
              // {
              //     label: ['JAN 20'],
              //     data: [4, 4.9, 1.5, 4.8, 1.3],
              //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
              //     borderColor: 'rgba(54, 162, 235, 1)',
              //     borderWidth: 2
              // },
              // {
              //     label: 'FEB 20',
              //     data: [4.9, 6.5, 4, 4, 6],
              //     backgroundColor: 'rgba(255, 206, 86, 0.2)',
              //     borderColor: 'rgba(255, 206, 86, 1)',
              //     borderWidth: 2
              // },
              // {
              //     label: 'MARCH 20',
              //     data: [6.5, 4.8, 4.8, 6, 1.5],
              //     backgroundColor: 'rgba(75, 192, 192, 0.2)',
              //     borderColor: 'rgba(75, 192, 192, 1)',
              //     borderWidth: 2
              // },
              // {
              //     label: 'APRIL 20',
              //     data: [6.5, 4, 5, 6.9, 4.8],
              //     backgroundColor: 'rgba(153, 102, 255, 0.2)',
              //     borderColor: 'rgba(153, 102, 255, 1)',
              //     borderWidth: 2
              // },
              // {
              //     label: 'Others',
              //     data: [1.5, 1.5, 4.8, 7.5],
              //     backgroundColor: 'rgba(170, 100, 110, 1)',
              //     borderColor: 'brown',
              //     borderWidth: 2
              // },
              // {
              //     label: 'rest',
              //     data: [5, 4.8, 6, 4.9],
              //     backgroundColor: '#bebebe',
              //     borderColor: '#6a6a6a',
              //     borderWidth: 2
              // },
              // {
              //     type: 'line',
              //     label: 'SALES',
              //     data: [5, 3, 4, 5.4, 3, 0.8, 5],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'yellow', 'skyblue', 'grey'],
              //     borderColor: 'black',
              //     pointBackgroundColor:'',
              //     pointBorderColor:''
              // },

              // {
              //     label: 'BIRTHDAY MONTHS',
              //     data: [3, 4.8, 1.5, 4.8, 1.3],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
              //     borderColor: 'black',
              //     type: 'line'
              // },
              // {
              //     label: 'BIRTHDAY MONTHS',
              //     data: [4, 6.5, 4, 4, 6],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
              //     borderColor: 'black',
              //     type: 'line'
              // },
              // {
              //     label: 'BIRTHDAY MONTHS',
              //     data: [5.4, 4.8, 4.8, 6, 1.5],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
              //     borderColor: 'black',
              //     type: 'line'
              // },
              // {
              //     label: 'BIRTHDAY MONTHS',
              //     data: [3, 4, 5, 6.8, 4.8],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
              //     borderColor: 'black',
              //     type: 'line'
              // },
              // {
              //     label: 'BIRTHDAY MONTHS',
              //     data: [0.8, 1.5, 4.8, 7.6],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
              //     borderColor: 'black',
              //     type: 'line'
              // },
              // {
              //     label: 'BIRTHDAY MONTHS',
              //     data: [5, 4.8, 6, 4.9],
              //     borderWidth: 2,
              //     backgroundColor: ['red', 'blue', 'orange', 'green', 'brown'],
              //     borderColor: 'black',
              //     type: 'line'
              // },
            ],
          }}
          height={400}
          width={300}
          options={{
            title: {
              display: true,
              text: "SALES GRAPH",
              fontSize: 25,
            },
            legend: {
              position: "right",
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default CombineChart;
