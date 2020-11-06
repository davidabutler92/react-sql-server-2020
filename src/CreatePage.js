import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getBrands, createSnowboard } from './services/fetch';
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
        is_all_mountain: false,
        brandId: '' 
    }

    componentDidMount = async () => {
        const response = await getBrands();
        this.setState({ brands: response })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        await createSnowboard({
            snowboard_name: this.state.snowboardName,
            flex: this.state.flex,
            is_all_mountain: this.state.isAllMountain,
            brand_id: this.state.brandId,
            owner_id: user.userId
        }); 

        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div className='div'>
                <h2 className='createPageH2'>Add snowboard to cart</h2>
                    <form className='form' onSubmit={this.handleSubmit}>
                        
                        <label>
                            <input onChange={e => this.setState({ snowboardName: e.target.value })} 
                            className='inputSearch'
                            placeholder='Snowboard Name'
                            required
                            ></input>
                        </label>

                        <label>
                            <input type='number' onChange={e => this.setState({ flex: e.target.value })} 
                            className='inputSearch'
                            placeholder='Snowboard Flex'
                            required
                            ></input>
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
                    <Link className='linkToHome' to='/'>Home page</Link>
                    </form>
                </div>
            </>
        )
    }
}
