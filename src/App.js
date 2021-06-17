import React, { Component } from 'react'
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
import CombineChart from './components/CombineChart';
import HorizontalBarChart from './components/HorizontalBarChart';
import RadarChart from './components/RadarChart';
import AnotherLine from './components/AnotherLine';

class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
        <h1>BAR CHART</h1>
        <BarChart/>
        <br/><br/><br/>

        <h1> HORIZONTAL BAR CHART</h1>
        <HorizontalBarChart/>
        <br/><br/><br/>

        <h1>LINE CHART</h1>
        <LineChart/>
        <br/><br/><br/>

        <h1>PIE CHART</h1>
        <PieChart/>
        <br/><br/><br/>

        <h1>RADAR CHART</h1>
        <RadarChart/>
        <br/><br/><br/>

        <h1>DOUGHNUT CHART</h1>
        <DoughnutChart/>
        <br/><br/><br/>

        <h1>MIXED CHART</h1>
        <CombineChart/>
      </div>
      <div className='chart'>
        <AnotherLine/>
      </div>
      </div>
    )
  }
}

export default App
