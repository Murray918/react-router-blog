import React, {Component} from 'react'
import ShowPost from '../components/ShowPost.js'
'use strict'

export default class PostList extends Component {
  constructor(props) {
    super(props)

    // this.fetchData = this.fetchData.bind(this);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL).then(results => {
      return results.json();
    }).then(data => {
      this.setState({posts: data});
      console.log("state", this.state.posts);
    })
  }
  render() {

      return (
        <div className="row playlistItem">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-block">
                <p className="card-text">{this.state.posts.authorName}</p>
                <p className="card-text">{this.state.posts.blogTitle}</p>
                <p className="card-text">{this.state.posts.blogEntry}</p>
              </div>
            </div>
          </div>
        </div>

      )
  }
}
