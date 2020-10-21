import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/picografix">
            Github
          </a>
           /
          <a target="_blank" href="https://twitter.com/gauranshsoni">
            Twitter
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/gauransh-soni-745794191/">
            LinkedIn
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
