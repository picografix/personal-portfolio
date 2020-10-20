import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.png" size={200}/>
            <p className="introduction-text">
              Loves Machine Learning and Human Computer Interaction
              <br/>Professional Procastinator.<br/>
              Junior Undergraduate, Indian Institute of Technology Delhi, India.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
