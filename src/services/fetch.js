import request from 'superagent';

const URL = 'https://secret-scrubland-39461.herokuapp.com/snowboards'

export async function getAllSnowboards() {
    try {
        const response = await request.get(`${URL}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}