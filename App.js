import React, {Component} from 'react';
import HveSdk from 'hivesdkbridge';
import {Button} from 'react-native';

class App extends Component {
  startSurvey() {
    HveSdk.startSurvey('InAppUser', 'InApp2021', _message => {});
  }
  render() {
    return (
      <Button onPress={this.startSurvey} title="Start Survey" color="#c00" />
    );
  }
}
export default App;
