import axios from 'axios';
import React from 'react';  
import apis from "./ApiConfig" 

const apiAxios = axios.create({
    responseType: 'json',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export const staffListFn = async () => {
    console.log(apis.url);
	return apiAxios
	.get(apis.url+ 'getName')
	.catch(function (error) {
		if(error.response) console.log("resp err", error.response)
		else if(error.request) console.log("req err", error.request)
	});
}

