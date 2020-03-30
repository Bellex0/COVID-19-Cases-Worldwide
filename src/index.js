import React, { Component } from 'react';
import { render } from 'react-dom';
import { Line, ResponsiveLine } from '@nivo/line';
import './style.css';
import html2canvas from 'html2canvas';
import Dropdown from './Dropdown';
import moment from 'react-moment';
import Trail from './Trail';
import uuid from 'react-uuid';
import { ThemeProvider } from '@nivo/core';
import { black } from 'color-name';
import saveImage from "./dom2Image";
import Multiselect from "@khanacademy/react-multi-select"; 


export default class App extends Component {
  constructor(props) {
    super(props);
    this.printme = this.printme.bind(this);
    this.state = {
      name: 'React',
      data:[],
      country: [],
      countries: ["US","China","Italy","Iran"],
      country1: "US",
      country2: "China",
      country3: "Italy",
      country4: "Iran",
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      selected: [],
      isLoading: true
    };
  }


componentDidMount(){
setTimeout(() => {
    this.setState({
      isLoading: false
    });
  }, 5000);
fetch('https://pomber.github.io/covid19/timeseries.json')
//   method: 'GET'
// })
.then(r=>r.json())
.then(data=>{
          this.setState( (state) => {
            return {
                    // country: [...this.state.country, country],
                    data: data
                  }
          },
          
          )
        

    
})
this.fetchAgain();


}



makeArrayOfCountries = () => {
  const countriesArray = Object.keys(this.state.data)
  console.log(countriesArray)
  //!  how do i iterate over this array to have output like {label: country, value: country}
  var outcome = countriesArray.sort().map(function(value){
    return {label: value, value: value};
  })
  return outcome
    
}

fetchAgain = () => {
  this.setState({
    data1: []
  })
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[3]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[3],
          // color: "hsl(348, 70%, 50%)",
          data: [
            {key: uuid(),  x: new Date(`${date}`), y: confirmed, value: "a" },
          ]
        }
      ]
    })
  )
})

fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[2]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[2],
          color: "hsla(117, 100%, 50%, 1)",
          data: [
            { key: uuid(),  x: new Date(`${date}`), y: confirmed, value: "a" },
          ]
        }
      ]
    })
  )
})
//! 3 
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[1]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[1],
          color: "hsla(311, 100%, 50%, 1)",
          data: [
            { key: uuid(), x: new Date(`${date}`), y: confirmed, value: "a" },
          ]
        }
      ]
    })
  )
})
//! 4 
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[0]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[0],
          color: "hsl(348, 70%, 50%)",
          data: [
            { key: uuid(), x: new Date(`${date}`), y: confirmed , value: "a"},
          ]
        }
      ]
    })
  )
})
}

printme = event => {
  saveImage("dom2Image");
};

options = [
  { label: "KPI Degradtion", value: "kpi_degradation" },
  { label: "Sleeping Cell", value: "sleeping_cell" },
  { label: "Anomaly", value: "anomaly" },
  { label: "Label1", value: "label_1" },
  { label: "Label2fgfgfgfghfghgh", value: "label_2" },
  { label: "Label3", value: "label_3" },
  { label: "Label4", value: "label_4" },
  { label: "Label5", value: "label_5" }
];



handleSelectedChanged = selected => {
  this.setState({ selected: selected });
  console.log(this.state.selected);
};

resetCountries = () => {
  this.setState({selected: []})
}

updateCountries = () => {
  this.setState({countries: this.state.selected});
  this.fetchAgain();
  
}

changeState = (e) => {
  // this.stateChange(e)
  this.setState({
    country1: e
  })
  console.log(this.state.country1)
}


  get lineChartConfig() {
    
    return {
      background: black,
      // width: 1200,
      // height: 900,
      data: this.state.data1,
      xScale:{type: 'point' },
      yScale:{ type: 'linear', min: '57', max: 'auto', stacked: true, reverse: false },
      curve:"monotoneY",
      margin: {
        top: 50,
        right: 80,
        bottom: 80,
        left: 90,
      },
      
      lineWidth:8,
      pointSize:19,
      yScale: {
        type: 'linear',
        stacked: false
        },
      xScale: {
        type: 'time',
        precision: 'day',
      },
      
      axisBottom:{
        format: '%b %d',
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 0,
      //   tickRotation: 0,
        legend: 'Time period',
        legendOffset: 60,
        legendPosition: 'center'
      },
      axisLeft:{
        orient: 'left',
        tickSize: 5,
        tickPadding: 0,
        tickRotation: 0,
        legend: 'Confirmed Cases',
        legendOffset: -54,
        legendPosition: 'center'
      },
      enableCrosshair:false,
      enableGridY:false,
      pointColor:{ theme: 'background' },
      enableArea:true,
      useMesh:true,
      
    
   
    tooltip: {
      container: {
          background: 'white',
          color: 'inherit',
          fontSize: 'inherit',
          borderRadius: '2px',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
          padding: '5px 9px',
      },
      basic: {
          whiteSpace: 'pre',
          display: 'flex',
          alignItems: 'center',
      },
      table: {},
      tableCell: {
          padding: '3px 5px',
      },
  },
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
      data: this.state.data1,
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
    const content = (
      <div>
        <p style={{'font-size':'20px'}}>Select 4 Countries to Compare</p>
      </div>
  )

  const countriesCount = this.state.selected.length
    

    const { selected, isLoading } = this.state;
    return (

      <>

 <div class="navButtons">
 <a target="_blank" href='https://coronadeaths.netlify.com'> <button class="deathsButton"> Deaths</button> </a>
<a target="_blank" href='https://coronarecovered.netlify.com'>  <button class="recoveredButton"> Recovered </button> </a>
</div>    
      
      <div style={{'width':'800', textAlign: "center", "marginLeft":'300', 'margin': '0 auto'}}>
      <h1 className="title">COVID-19 <span style={{"color":"yellow"}}>CASES</span> ACROSS THE GLOBE</h1>

     
      <div class="covid"> 
      <div class="surgeon"> 😷</div>
      <div class="shot"> 💉</div>
      <div class="world"> 🌎</div>
      </div>
     
      
        <Multiselect
        style={{"display":"flex", "justify-content":"center", "align-items":"center"}}
          options={this.makeArrayOfCountries()}
          onSelectedChanged={this.handleSelectedChanged}
          selected={this.state.selected}
          isLoading={isLoading}
          disabled={isLoading}
          disableSearch={false}
          overrideStrings={{
            selectSomeItems: "Select Exactly 4 Countries ",
            allItemsAreSelected: "Please select exactly 4 countries",
            search: "Add 4 countries"
          }}
        />
        <button class="resetButton" onClick={this.resetCountries}> Reset </button>
        {countriesCount === 4 ? <button  class="updateButton" onClick={this.updateCountries}>Update</button> : null}
        <h3 style={{'color':'white'}}>{selected.join(", ")}</h3>
        
        </div>

        

        <div id="dom2Image"style={{'width':'100vw', 'margin': '75', 'backgroundColor':'white'}}>
        <ResponsiveLine key={null}
          {...this.lineChartConfig}
        />     
      </div>
     
      </>

<a  style={{'color':'#56A0D0','font-size':'18px'}} target="_blank" href="https://bellep.info"> Get in Touch? </a>
    );
  }
}

render(<App />, document.getElementById('root'));
