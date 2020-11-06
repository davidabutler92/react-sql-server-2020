import React, { Component } from 'react'
import { getAllSnowboards } from './services/fetch';
import Header from './Header';
import { Link } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  state = {
    snowboards: [],
    loading: true
  }

  

  componentDidMount = async () => {
    const snowboards = await getAllSnowboards()
    this.setState({ snowboards, loading: false })
  }
  render() {

    return (
      <>
      <div className='list'>
      <Header />
        {
          !this.state.loading ?
          this.state.snowboards.map((data, i) => 
          <Link className='link' to={`/detail/${data.id}`}>
            <div className='list card'>
                <div className='name'>Snowboard: {data.snowboard_name}</div>
                <div className='flex'>Flexability: {data.flex}</div>
                <div className='flex'>All mountain {data.is_all_mountain}</div>
                <div className='brand'>Brand: {data.brand}</div>
                <div>{data.is_all_mountain}</div>
            </div>
          </Link>
          ) :
          'Loading'
        }
        <Link to='/create'>Add new products</Link>
      </div>
      </>
    )
  }
}
