import React from 'react';
import Lane from '../containers/Lane';
import '../styles/Lane.css';

export default class Lanes extends React.Component {
  constructor(props){
  super(props);
  this.addLane = this.addLane.bind(this);
}

  componentWillMount(){
    this.props.fetchLanes();
  }

  addLane(){
    const data = new FormData();
    this.props.mappedAddLane(data);
  }

  render(){
    const lanes = this.props.mappedLanesState;
    console.log('#######')

    console.log(lanes);
    return (
      <div>
        <div className="container">
          <button className="add-lane" onClick={this.addLane}>+ Add column</button>
        </div>
        <div  className="container lanesContainer">
          {lanes.map(lane =>
            <Lane key={lane._id} lane={lane} />
          )}
        </div>
      </div>
    );
  };
}
