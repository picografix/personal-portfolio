import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline" style={{fontSize:"16px"}}>Skills and Expertise </p>
            <p className="text-justify">
              when I came to college I started photography and then shifted to Photoshop and then UI design and now I am currently working on UX Research Project.

              My interests in Coding let me enter the beautiful world of Machine Learning and Data Science.

              I am curretly exploring my interest in the intersection of these two domains.

            </p>

              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="UX-Research"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Photoshop"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Illustrator"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="After Effects"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              iconStyle={{"fill":"#A80202"}}
              label="Deep Learning"
            />
        </div>

          </div>
        );
    }
}

export default DesignComponent;
