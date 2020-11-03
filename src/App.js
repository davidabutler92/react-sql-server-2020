import React, { Component } from 'react'
import Fetch from 'superagent';
import './App.css';


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
      <div className='list'>
        {
          !this.state.loading ?
          this.state.snowboards.map((data, i) => 
            <div className='list'>
                <div className='name'>Snowboard: {data.snowboard_name}</div>
                <div className='flex'>Flexability 1-10: {data.flex}</div>
                <div className='brand'>Brand: {data.brand}</div>
                <div>{data.is_all_mountain}</div>
            </div>
          ) :
          'Loading'
        }
      </div>
    )
  }
}
