import React, { Component } from 'react';
import request from 'superagent';
import getAllSnowboards from './services/fetch';
import { Link } from 'react-router-dom';
import './App.css';

const user = {
    userId: 1,
}

export default class CreatePage extends Component {

    state = {
        brands: [],  
        snowboardName: '',
        flex: '',
        isAllMountain: '',
        brandId: '' 
    }

    componentDidMount = async () => {
        getAllSnowboards()
        this.setState({ brands: response.body })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const newSnowboard = {
            snowboard_name: this.state.snowboardName,
            flex: this.state.flex,
            is_all_mountain: this.state.isAllMountain,
            brand_id: this.state.brandId,
            owner_id: user.userId
        };

        await request
        .post('https://secret-scrubland-39461.herokuapp.com/snowboards')
        .send(newSnowboard);
    }

    handleChange = (e) => {
        this.setState({ brandId: e.target.value })
    }

    render() {
        return (
            <div className='div'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>
                        <input onChange={e => this.setState({ snowboardName: e.target.value })} placeholder='Snowboard Name'></input>
                    </label>
                    <label>
                        <input type='number' onChange={e => this.setState({ flex: e.target.value })} placeholder='Snowboard Flex'></input>
                    </label>
                    <select onChange={e => this.setState({ isAllMountain: e.target.value })}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                    <select onChange={e => this.setState({ brandId: e.target.value })}>
                        {
                            this.state.brands.map (brand => <option value={ brand.id } key={ brand.id }>{ brand.name }</option>)
                            
                        }
                    </select>
                    <button>Submit</button>
                <Link to='/'>Home page</Link>
                </form>
            </div>
        )
    }
}
