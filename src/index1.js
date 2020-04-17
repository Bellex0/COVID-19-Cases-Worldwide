import React, { Component } from 'react';
import { render } from 'react-dom';
import { Line } from '@nivo/line';
import './style.css';
import Dropdown from './Dropdown';
import Trial from './Trail.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      data:[],
      country: [],
      country1: "",
      country2: "",
      country3: "",
      country4: "",
      data1: [],
      data2: [],
      data3: [],
      data4: [],
    };
  }

componentDidMount(){
fetch('https://pomber.github.io/covid19/timeseries.json')
.then(r=>r.json())
.then(data=>{
          this.setState( (state) => {
            return {
                    data: data
                  }
          },
          ()=>{
            this.setState({
              country: [...this.state.country, Object.keys(data)]
            })
          }
          )
})
}

  get lineChartConfig() {
    console.log(Object.keys(this.state.data))
    console.log(this.state.country)
    return {
      width: 800,
      height: 600,
      data: [
        {
          id: `Line`,
          data: [
            { x: new Date(`09-10-2018`), y: 3 },
            { x: new Date(`09-11-2018`), y: 5 },
            { x: new Date(`09-12-2018`), y: 1 },
            { x: new Date(`09-13-2018`), y: 6 },
          ]
        },
        {
          id: `Line2`,
          data: [
            { x: new Date(`09-10-2018`), y: 5 },
            { x: new Date(`09-11-2018`), y: 3 },
            { x: new Date(`09-12-2018`), y: 4 },
            { x: new Date(`09-13-2018`), y: 3 },
          ]
        }
      ],
      margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
      yScale: {
        type: 'linear',
        stacked: false
        },
      xScale: {
        type: 'time',
        precision: 'day',
      },
      axisBottom: {
        format: '%b %d',
      }
    };
  }

  get lineChartConfigFromExample() {
    return {
      width: 900,
      height: 400,
      margin: {
        top: 20,
        right: 20,
        bottom: 60,
        left: 80
      },
      data: [
        {
          id: 'fake corp. A',
          data: [
            {x: '2018-01-01',y: 7},
            {x: '2018-01-02',y: 5},
            {x: '2018-01-03',y: 11},
          ]
        },
        {
          id: 'fake corp. B',
          data: [
            {x: '2018-01-04',y: 14},
            {x: '2018-01-05',y: 14},
            {x: '2018-01-06',y: 15},
          ]
        }
      ],
      animate: true,
      xScale:{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day'
        },
      yScale: {
        type: 'linear',
        stacked: false
      },
      axisBottom: {
        format: '%b %d'
      },
      curve: 'step',
      enableDotLabel: true,
      dotSize: 16,
      dotBorderWidth: 1,
      dotBorderColor: 'inherit:darker(0.3)'
    };
  }

  
  render() {

    
    return (
      <div>
        <h3>Custom Data Index1 </h3>
        <Line key={1}
          {...this.lineChartConfig}
        />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
