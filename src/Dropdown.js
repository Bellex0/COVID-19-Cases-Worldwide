import React, { Component } from 'react';
import Index1 from './index1'
import Trail from './Trail.js';

export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
          country1: "US",
          country2: "",
          country3: "",
          country4: "",
        };
      }

    changeSelect = (e) => {
            this.setState({
                country1: e.target.value
            });
            this.props.changeState(e.target.value)
    }
    

    render() {
        console.log(this.props.data, this.state)
        return (
        <div>
        <select class="custom-select"
                        style={{"margin-bottom":"15px", "height":"30px","font-size":"17px",
                                "background-color":"#ffff00"
                        }}
                        values={[]}
                        onChange={this.changeSelect}
            >
        {this.props.data.map((country) => (
                <option
                      style={{"font-size":"30px"}}
                      selected={null}
                      key={country}
                      value={country}
                >
                      {country}
                </option>
        ))}
        </select>         
            </div>
        )
    }
}
