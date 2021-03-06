import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';


class App extends Component{
  state = {displayBio: false};
  // constructor(){
  //   super();
  //   this.state = {displayBio:false};
  //
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio})
  }

  render(){
    return(
      <div>
        <h1>My Name is Timothy Choi, Portfolio</h1>
        {this.state.displayBio ? (
          <div>
          <p> I live in San Francisco</p>
          <button onClick = {this.toggleDisplayBio} > Read Less </button>
          </div>
        ) : (
          <div>
            <button onClick = {this.toggleDisplayBio} > Read More </button>
          </div>
        )}
        <hr/>
        <Projects/>
        <SocialProfiles />
      </div>

    );
  }
}

export default App;
