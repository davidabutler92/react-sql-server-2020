import React, { Component } from 'react';
import request from 'superagent';

const user = {
    userId: 1
}

export default class CreatePage extends Component {

    state = {
        brands: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://secret-scrubland-39461.herokuapp.com/brands')
        this.setState({ brands: response.body })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const newSowboard = {
            snowbaord_name: this.state.snowbaordName,
            flex: this.state.flex,
            is_all_mountain: this.state.isAllMountain,
            brand_id: this.state.brandId,
            owner_id: user
        };

        await request
        .post('https://secret-scrubland-39461.herokuapp.com/snowboards')
        .send(newSowboard);
    }

    render() {
        return (
            <div>
                Create page
            </div>
        )
    }
}
