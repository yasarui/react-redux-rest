import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fectchUser } from '../actions';
  
const User = (props) => {
    useEffect(()=>{
        props.fectchUser(props.userId)
    },[]);
    if(!props.user) return null;
    return (
        <div>
            <p> This post is created by {props.user.username} </p>
        </div> 
    )
}


function mapStateToProps(state,ownProps){
    return {
       user: state.users.find((user)=>{ return user.id == ownProps.userId })
    }
}

export default connect(mapStateToProps,{fectchUser})(User);