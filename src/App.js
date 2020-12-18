import React, { Component } from 'react';
import Post from './components/post';
import PostForm from './components/postForm';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
