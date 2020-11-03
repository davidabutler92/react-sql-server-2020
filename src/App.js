import React, { Component } from 'react'
import Fetch from 'superagent';


export default class App extends Component {

  state = {
    snowboards: [],
    loading: true
  }

  

  componentDidMount = async () => {
    const data = await Fetch.get('https://secret-scrubland-39461.herokuapp.com/snowboards')
    this.setState({ snowboards: data.body, loading: false })
  }
  render() {

    return (
      <div>
        {
          
          this.state.snowboards.map((data, i) => 
            <div>
                <div>Snowboard: {data.snowboard_name}</div>
                <div>Flexability 1-10: {data.flex}</div>
                <div>Brand: {data.brand}</div>
                <div>{data.is_all_mountain}</div>
            </div>
          )
        }
      </div>
    )
  }
}
