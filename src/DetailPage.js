import React, { Component } from 'react';
import { getASnowboard, updateSnowboard, getBrands, deleteSnowboard } from './services/fetch';
import './App.css';

const user = {
    userId: 1,
}

export default class CreatePage extends Component {

    state = {
        brands: [],  
        snowboardName: '',
        flex: 1,
        isAllMountain: false,
        brandId: 1 
    }
    
    componentDidMount = async () => {

        const brands = await getBrands();
        const snowboard = await getASnowboard(this.props.match.params.id);
        const brandName = snowboard.brand;
        const matchingBrand = brands.find((brand) => {
            return brand.name === brandName
        })

        this.setState({
            brands: brands,  
            snowboardName: snowboard.snowboard_name,
            flex: snowboard.flex,
            isAllMountain: snowboard.is_all_mountain,
            brandId: matchingBrand.id
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        await updateSnowboard(
            this.props.match.params.id,
            {
                snowboard_name: this.state.snowboardName,
                flex: this.state.flex,
                is_all_mountain: this.state.isAllMountain,
                brand_id: this.state.brandId,
                owner_id: user.userId
            }
        )
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({ brandId: e.target.value })
    }

    removeSnowboard = async () => {
        await deleteSnowboard(this.props.match.params.id)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='div'>
                <h1 className='detailH1'>Update Products</h1>
                <form className='form' onSubmit={this.handleSubmit}>

                    <label>
                        <input 
                        className='inputSearch'
                        value={ this.state.snowboardName }
                        onChange={e => this.setState({ snowboardName: e.target.value })} 
                        required
                        ></input>
                    </label>

                    <label>
                        <input type='number' 
                        className='inputSearch'
                        value={ this.state.flex }
                        onChange={e => this.setState({ flex: e.target.value })} 
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
                            this.state.brands.map (brand => <option 
                                selected={this.state.brandId === brand.id}
                                value={ brand.id } 
                                key={ brand.id }>
                                    { brand.name }
                                    </option>)
                            
                        }
                    </select>

                    <button>Submit</button>
                </form>
                <div>
                    <button onClick={this.removeSnowboard}>Remove Snowboard</button>
                </div>
            </div>
        )
    }
}
