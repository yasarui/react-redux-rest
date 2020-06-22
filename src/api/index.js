import axios from 'axios';

export const jsonPlaceHolderApi = () => {
    return axios.create({
        baseURL:"https://jsonplaceholder.typicode.com/"
    })
}