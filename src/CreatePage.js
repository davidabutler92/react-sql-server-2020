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
    }

    render() {
        return (
            <div>
                Create page
            </div>
        )
    }
}
