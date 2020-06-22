import {combineReducers} from 'redux';

function postsReducer(posts = [],action){
    if(action.type === "FETCHED_POSTS"){
        return action.payload;
    }
    return posts;
}

function usersReducer(users = [],action){
    if(action.type === "FETCHED_USER"){
        return [...users,action.payload]
    }
    return users;
}


export default combineReducers({posts:postsReducer,users:usersReducer});