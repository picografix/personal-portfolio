import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
const scrollTo = require('scroll-to');
import Button from '@material-ui/core/Button';
import './header.css';

class HeaderComponent extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }
    
  
    async componentDidMount() {
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
            <div className="header">
                <h3 className="reveal-text">Gauransh Soni</h3>
                <h6>Junior Undergraduate @ IIT Delhi </h6>
            </div>
            
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#A80202" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
              <Button variant="contained" color="secondary">
              Secondary
              </Button>
            </div>
            

          </div>
          
        );
    }
}

export default HeaderComponent;
