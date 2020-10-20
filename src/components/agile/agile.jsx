import React, {Component} from 'react';
import './agile.css';
import { FaPizzaSlice } from 'react-icons/fa';


class AgileComponent extends Component {

    render() {
        return (
          <div className="agile">
              <p className="headline" style={{fontSize:"16px"}}>Who Am I ?</p>
              <p className="text-justify" style={{fontSize:"16px"}}>
                Ambivert by personality, Extrovert inside my mind. 
                I seek opotunities which will help me build myself. 
                I love observing my surrounding so if you found me staring at you am just observing the changes in you and your surrounding.
                <br /> <br/>
                I love Pizzas  <FaPizzaSlice />
                <br />
                Bye!
              </p>
          </div>
        );
    }
}

export default AgileComponent;
