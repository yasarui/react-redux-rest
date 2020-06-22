import {jsonPlaceHolderApi} from '../api';
import _ from 'lodash';

export const fetchPosts = () =>{
    return async (dispatch)=>{
        const response = await jsonPlaceHolderApi().get("/posts");
        dispatch({
            type:"FETCHED_POSTS",
            payload:response.data
        })
    }
}

export const fectchUser = id => dispatch => {
    _fetchUser(id,dispatch)
} 

const _fetchUser = _.memoize(async(id,dispatch) =>{
    const response = await jsonPlaceHolderApi().get(`/users/${id}`);
    dispatch({
        type:"FETCHED_USER",
        payload:response.data
    })
})