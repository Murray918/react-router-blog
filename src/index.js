import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout.js'
import CreatePost from './components/CreatePost.js'
import ShowPost from
 './components/ShowPost.js';
 import PostList from './components/PostList';
 import {BrowserRouter, Route, Switch} from 'react-router-dom'




ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/createpost" component={CreatePost}/>
        <Route path="/showall" component={PostList}/>
        <Route path="/showpost/:id" component ={ShowPost}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
