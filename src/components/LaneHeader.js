import React from 'react';
import Editable from './Editable';

import uuid from 'uuid';
import '../styles/Lane.css';

export default class Notes extends React.Component {
  constructor(props){
  super(props);
  this.editLane = this.editLane.bind(this);
}

  addNote(){
    const data = new FormData();
    data.append('laneId', this.props.lane._id)
    this.props.mappedAddNote(data);
  }

  editLane(laneToEdit){
    this.props.mappedEditLane(laneToEdit);
  }

  editingLane(laneToEdit){
    this.props.mappedEditingLane(laneToEdit);
  }

  deleteLane(laneToDelete){
    this.props.mappedDeleteLane(laneToDelete);
  }

  render(){
    // const lane = this.props.mappedLaneState;
    // console.log(lane);
    return (
      <div className="lane-header">
        <div className="lane-add-note">
          <button className="add-note" onClick={() => this.addNote()}>+</button>
        </div>
        <div className="lane-name" onClick={() => this.editingLane(this.props.lane)}>
          <Editable
            editing={this.props.lane.editing}
            value={this.props.lane.name}
            onEdit={this.editLane}
            id={this.props.lane._id}
            className={"lane-name"}/>
        </div>
        <button className="lane-delete" onClick={() => this.deleteLane(this.props.lane)}>x</button>
      </div>
    );
  };
}
