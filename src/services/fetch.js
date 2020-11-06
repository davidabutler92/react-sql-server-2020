import request from 'superagent';

const URL = 'https://secret-scrubland-39461.herokuapp.com/'

export async function getAllSnowboards() {
    try {
        const response = await request.get(`${URL}snowboards`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function getASnowboard(id) {
    try {
        const response = await request.get(`${URL}snowboards/${id}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function getBrands() {
    try {
        const response = await request.get(`${URL}brands`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createSnowboard(id, newSnowboard) {
    try {
        await request 
        .put(`${URL}snowboards/${id}`)
        .send(newSnowboard);

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteSnowboard(id) {
    try {
        await request 
        .delete(`${URL}snowboards/${id}`)

        return;
    } catch(err) {
        throw err;
    }
}