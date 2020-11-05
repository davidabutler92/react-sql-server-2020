import React, { Component } from 'react'
import Fetch from 'superagent';
import './App.css';
import { Link } from 'react-router-dom';


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
      <>
      <div className='list'>
        {
          !this.state.loading ?
          this.state.snowboards.map((data, i) => 
            <div className='list card'>
                <div className='name'>Snowboard: {data.snowboard_name}</div>
                <div className='flex'>Flexability: {data.flex}</div>
                <div className='brand'>Brand: {data.brand}</div>
                <div>{data.is_all_mountain}</div>
            </div>
          ) :
          'Loading'
        }
        <Link to='/create'>Add new products</Link>
      </div>
      </>
    )
  }
}
