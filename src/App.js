import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/header/header';
import DarkVoiceComponent from './components/dark-voice/dark-voice';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ProgrammingComponent from './components/programming/programming';
import AgileQuoteComponent from './components/agile-quote/agile-quote';
import AgileComponent from './components/agile/agile';
import DesignComponent from './components/design/design';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

class App extends Component {
  // componentDidMount() {
  //   const script2 = document.createElement("script");
  //   // 
  //   script2.src = "https://rawgithub.com/soulwire/sketch.js/v1.0/js/sketch.min.js";
  //   const script = document.createElement("script");
  //   // https://rawgithub.com/soulwire/sketch.js/v1.0/js/sketch.min.js
  //   script.src = "./sketchwala.js";
  //   // script.async = true;
  //   // script2.type = "module"
  //   script.type = "module";
  //   // script.async = true;
  //   this.div.appendChild(script2);
  //   this.div.appendChild(script);
  //   }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BrowserDetectComponent></BrowserDetectComponent>
          <ProgressComponent></ProgressComponent>
          <div className="section header-section " ref={el => (this.div = el)}>
          
            <div className="section-container header-component"  >
              <HeaderComponent ></HeaderComponent>
            </div>
            {/* <div id="container"></div> */}
            
          </div>
          <div className="section colored">
            <div className="section-container">
              <IntroductionComponent></IntroductionComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <TimelineComponent></TimelineComponent>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container">
              <DarkVoiceComponent></DarkVoiceComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <ProgrammingComponent></ProgrammingComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <DesignComponent></DesignComponent>
            </div>
          </div>

          <div className="section colored">
            <div className="section-container">
              <AgileComponent></AgileComponent>
            </div>
          </div>
          <div className="section dark">
            <div className="section-container">
              <AgileQuoteComponent></AgileQuoteComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <CodeGithubComponent></CodeGithubComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ContactComponent></ContactComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container footer-component">
              <FooterComponent></FooterComponent>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
