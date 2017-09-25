import React, {Component} from 'react'
'use strict'

export default class CreatePost extends Component {
  constructor(props){
    super(props)

    this.addToList = this.addToList.bind(this);
    this.handleAuthor =
    this.handleAuthor.bind(this);
    this.handleTitle =
    this.handleTitle.bind(this);
    this.handlePost =
    this.handlePost.bind(this);

    this.state = {
      blogTitler : "",
      authorName : "",
      blogEntry : ""
    }
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({author : e.target.value, title: e.target.value, post : e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({author: '', title: '', post : ''});
  }

  handleAuthor(e){
    e.preventDefault();
    this.setState( { authorName :e.target.value})
  }

  handleTitle(e){
    e.preventDefault();
    this.setState( { blogTitle :e.target.value})
  }

  handlePost(e){
    e.preventDefault();
    this.setState( { blogEntry :e.target.value})
  }

  render(){
    return(
      <div className = "container-fluid createPost form">
        <form onSubmit ={this.addToList} className = "">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Author :</label>
            <div className="col-sm-10" id="title">
              <input onChange={this.handleAuthor} value={this.state.authorName} type="text" className="form-control"  placeholder="Author"></input>
            </div>
          <label className="col-sm-2 col-form-label">Title :</label>
          <div className="col-sm-10" id="title">
            <input onChange={this.handleTitle} value={this.state.blogTitle} type="text" className="form-control"  placeholder="Title"></input>
          </div>
        <label className="col-sm-2 col-form-label">Post:</label>
        <div className="col-sm-10" id="post">
          <textarea onChange={this.handlePost} value={this.state.blogEntry} type="text" className="form-control"  placeholder="Blog Post Goes Here."></textarea>
        </div>
        <button type="button" onClick={this.addToList} className="btn btn-success">Add To List</button>
      </div>
        </form>
      </div>

    )
  }
}
