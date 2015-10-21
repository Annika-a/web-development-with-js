import React from 'react';
import axios from 'axios';

function getTussit(){
    return axios.get('/api/tussi').then((response)=>{
        return response.data;
    });
}

export default getTussit;
