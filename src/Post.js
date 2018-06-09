import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        postTitle : this.props.title,
        postSubtitle : this.props.subtitle
      }
      this.updateState = this.updateState.bind(this);
    }
    
    //useless fun
    updateState (title, subtitle) {
        this.setState(
            {postTitle : title,
            postSubtitle : subtitle
            }
        );
    }
    //useless fun
    takeProps() {
        var title = this.props.title;
        var subtitle = this.props.subtitle;
        this.updateState(title, subtitle);
    }

  render() {
    return (
      <div>
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                {this.state.postTitle}
              </h2>
              <h3 className="post-subtitle">
                {this.state.postSubtitle}
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on September 24, 2018</p>
          </div>
          <hr/>
      </div>
    )
  }
}
