import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class Profile extends Component{
  render(){
    const {image} = this.props.profile;

    return(
      <div style = {{display: 'inline-block', margin: 5}}>
        <img src = {image} style ={{width: 20}}/>
      </div>
    )
  }
}

class SocialProfiles extends Component{
  render(){
    return(
      <div>
        <h4> Contact Me </h4>
        {
          SOCIAL_PROFILES.map(sp => {
            return(
              <Profile key = {sp.id} profile = {sp} />
            );
          })
        }
      </div>
    );
  }
}

export default SocialProfiles;
