import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions'

class Posts extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
        return this.props.posts.map((post,index)=>{
             return(
                <li className="list-group-item" key={index} >
                    <h4> {post.title} </h4>
                    <p> {post.body} </p>
                    <User userId={post.userId} />
                </li>
             )
        })
    }
    render(){
       if(!this.props.posts.length > 0) return <div> Fetching posts... </div>
       return(
          <ul className="list-group">
             {this.renderList()}
          </ul>  
       )
    }
}

function mapStateToProps(state){
     return {
        posts:state.posts
     }
}

export default connect(mapStateToProps,{fetchPosts:fetchPosts})(Posts);