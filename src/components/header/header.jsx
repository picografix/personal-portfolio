import React, {Component} from 'react';
deployed// import {useEffect} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
const scrollTo = require('scroll-to');
import './header.css';
// import './style.css';
// import './script';
// import ScriptTag from 'react-script-tag';
// import './style.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }
    // componentDidMount() {
    
    // }
    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      const script = document.createElement("script");

      script.src = "./script.js";
      // script.async = true;
      this.div.appendChild(script);
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
          <div className="header-wrapper" style={{"height": this.state.height}}>
            <div className="header" gi>
                <h3>Gauransh Soni</h3>
                <h6>Junior Undergraduate @ IIT Delhi </h6>
                <div className="content">
                    <h6 className="random" style={{opacity:"0"}}> </h6>
                    </div>
                <div className="social">
                  <ul id="social-list">
                    <li className="list-item"><a className="item-link Telegram" href="https://t.me/umarcbs" target="blank">Telegram</a></li>
                    <li className="list-item"><a className="item-link Twitter" href="https://twitter.com/gauranshsoni" target="blank">Twitter</a></li>
                    <li className="list-item"><a className="item-link Medium" href="https://www.instagram.com/gauransh.soni" target="blank">Instagram</a></li>
                    <li className="list-item"><a className="item-link Codepen" href="https://www.linkedin.com/in/gauransh-soni-745794191/" target="blank">LinkedIn</a></li>
                    <li className="list-item"><a className="item-link Github" href="https://github.com/umarcbs" target="blank">Github</a></li>
                  </ul>
                </div>
              {/* <ScriptTag type="text/javascript" src="./main.js" /> */}
              {/* <ScriptTag type="text/javascript" src="./hello.js" /> */}
            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#A80202" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
