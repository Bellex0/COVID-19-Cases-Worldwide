import  React from 'react';
import {Component} from 'react'
import { ResponsiveLine } from '@nivo/line';
import moment from 'react-moment';



export default class Trail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      countries: [],
      country1: "US",
      country2: "China",
      country3: "Italy",
      country4: "Iran",
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      finalData:[],
      data: [],
      dataObj: {}
    };
  }



  componentDidMount(){
    
    fetch('https://pomber.github.io/covid19/timeseries.json')
    .then(r=>r.json())
    .then(data=>{
              this.setState( (state) => {
                return {
                        data: data,
                        countries: [...this.state.countries, Object.keys(data)]
                      }
              },
             
              )
    })
  }

makeAnArray = () => {
  var finalArr = [this.state.country1,
    this.state.country2,
    this.state.country3,
    this.state.country4,
   ]
  return finalArr
}


addDataToArray (element, index) {
  console.log(element, index)
  console.log(this.state.data[element])
  fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
  data[element].forEach((date, confirmed) => {
    this.setState({
      finalData:  [ ...this.state.finalData, 
      {
        key: index,
        id: element,
        data: [{x: date, y: confirmed}]
      }
    ]
    })
  })
})

}
  
updateFinalData () {
  const finalArr = [this.state.country1,
    this.state.country2,
    this.state.country3,
    this.state.country4,
   ]
   console.log(finalArr)
  finalArr.forEach((element, index)=>
    this.addDataToArray(element, index)
  )
}
  
  render() {
    console.log(this.state.finalData);
    this.updateFinalData();
        const data = [
            {
              "id": "japan",
              "color": "hsl(298, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 65
                },
                {
                  "x": "helicopter",
                  "y": 92
                },
                {
                  "x": "boat",
                  "y": 149
                },
                {
                  "x": "train",
                  "y": 144
                },
                {
                  "x": "subway",
                  "y": 145
                },
                {
                  "x": "bus",
                  "y": 271
                },
                {
                  "x": "car",
                  "y": 205
                },
                {
                  "x": "moto",
                  "y": 284
                },
                {
                  "x": "bicycle",
                  "y": 143
                },
                {
                  "x": "horse",
                  "y": 276
                },
                {
                  "x": "skateboard",
                  "y": 291
                },
                {
                  "x": "others",
                  "y": 31
                }
              ]
            },
            {
              "id": "france",
              "color": "hsl(205, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 242
                },
                {
                  "x": "helicopter",
                  "y": 277
                },
                {
                  "x": "boat",
                  "y": 92
                },
                {
                  "x": "train",
                  "y": 196
                },
                {
                  "x": "subway",
                  "y": 28
                },
                {
                  "x": "bus",
                  "y": 252
                },
                {
                  "x": "car",
                  "y": 283
                },
                {
                  "x": "moto",
                  "y": 89
                },
                {
                  "x": "bicycle",
                  "y": 237
                },
                {
                  "x": "horse",
                  "y": 3
                },
                {
                  "x": "skateboard",
                  "y": 88
                },
                {
                  "x": "others",
                  "y": 82
                }
              ]
            },
            {
              "id": "us",
              "color": "hsl(152, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 25
                },
                {
                  "x": "helicopter",
                  "y": 36
                },
                {
                  "x": "boat",
                  "y": 62
                },
                {
                  "x": "train",
                  "y": 223
                },
                {
                  "x": "subway",
                  "y": 139
                },
                {
                  "x": "bus",
                  "y": 65
                },
                {
                  "x": "car",
                  "y": 250
                },
                {
                  "x": "moto",
                  "y": 119
                },
                {
                  "x": "bicycle",
                  "y": 258
                },
                {
                  "x": "horse",
                  "y": 39
                },
                {
                  "x": "skateboard",
                  "y": 10
                },
                {
                  "x": "others",
                  "y": 110
                }
              ]
            },
            {
              "id": "germany",
              "color": "hsl(292, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 299
                },
                {
                  "x": "helicopter",
                  "y": 111
                },
                {
                  "x": "boat",
                  "y": 210
                },
                {
                  "x": "train",
                  "y": 205
                },
                {
                  "x": "subway",
                  "y": 80
                },
                {
                  "x": "bus",
                  "y": 43
                },
                {
                  "x": "car",
                  "y": 233
                },
                {
                  "x": "moto",
                  "y": 116
                },
                {
                  "x": "bicycle",
                  "y": 45
                },
                {
                  "x": "horse",
                  "y": 299
                },
                {
                  "x": "skateboard",
                  "y": 278
                },
                {
                  "x": "others",
                  "y": 249
                }
              ]
            },
            {
              "id": "norway",
              "color": "hsl(175, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 58
                },
                {
                  "x": "helicopter",
                  "y": 298
                },
                {
                  "x": "boat",
                  "y": 213
                },
                {
                  "x": "train",
                  "y": 215
                },
                {
                  "x": "subway",
                  "y": 191
                },
                {
                  "x": "bus",
                  "y": 270
                },
                {
                  "x": "car",
                  "y": 210
                },
                {
                  "x": "moto",
                  "y": 69
                },
                {
                  "x": "bicycle",
                  "y": 58
                },
                {
                  "x": "horse",
                  "y": 161
                },
                {
                  "x": "skateboard",
                  "y": 76
                },
                {
                  "x": "others",
                  "y": 251
                }
              ]
            }
          ]
        
        
        const MyResponsiveLine = () => (
            <ResponsiveLine
                data={this.state.dataObj}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'nivo' }}
                pointSize={15}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                areaOpacity={0.35}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        )
        return (
            <div>
              <ResponsiveLine
                data={this.state.finalData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'X Axis',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={20}
                pointColor={{ theme: 'labels.text.fill' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                areaOpacity={0.35}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
            </div>
        )
    }
}
