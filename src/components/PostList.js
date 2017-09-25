import React, {Component} from 'react'
import ShowPost from '../components/ShowPost.js'
import {NavLink} from 'react-router-dom';
'use strict'


export default class PostList extends Component {
constructor(props){
  super(props)

  // this.fetchData = this.fetchData.bind(this);

  this.state = {
    posts : []
  }
}

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
          return results.json();
        }).then(data => {
          this.setState({posts : data});
          console.log("state", this.state.posts);
        })
      }



  render(){
    let posts = this.state.posts.map( (posts, index) => {
return (
  <div className="row playlistItem" key={index}>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-block">
          <NavLink  activeClassName="selected" to={`/showpost/${posts._id}`} className="card-text">{posts.blogTitle}  </NavLink>
      </div>
    </div>
  </div>
</div>

)
})

  return(
    <div>
      {posts}
    </div>
    )

  }
}
