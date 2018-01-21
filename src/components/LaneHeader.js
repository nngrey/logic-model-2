import React from 'react';
import uuid from 'uuid';
import '../styles/Lane.css';

export default class Notes extends React.Component {
//   constructor(props){
//   super(props);
//   this.addLane = this.addLane.bind(this);
// }

  addNote(){
    const data = new FormData();
    data.append('laneId', this.props.lane._id)
    this.props.mappedAddNote(data);
  }

  deleteLane(laneToDelete){
    this.props.mappedDeleteLane(laneToDelete);
  }

  render(){

    return (
      <div className="lane-header">
        <div className="lane-add-note">
          <button className="add-note" onClick={() => this.addNote()}>+</button>
        </div>
        <div className="lane-name">{this.props.lane.name}</div>
        <button className="lane-delete" onClick={() => this.deleteLane(this.props.lane)}>x</button>
      </div>
    );
  };
}
