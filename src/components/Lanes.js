import React from 'react';
import Lane from '../containers/Lane';
import '../styles/Lane.css';


export default class Lanes extends React.Component {

  render(){
    const lanes = this.props.mappedLanesState;
    return (
      <div>{lanes.map(lane =>
        <Lane key={lane._id} lane={lane} />
      )}</div>
    );
  };
}
