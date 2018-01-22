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
    const lane = this.props.lane;
    return (
      <div className="lane-header">
        <div className="lane-add-note">
          <button className="add-note" title="Add item to column" onClick={() => this.addNote()}>+</button>
        </div>
        <div className="lane-name" onClick={() => this.editingLane(lane)}>
          <Editable
            editing={lane.editing}
            value={lane.name}
            onEdit={this.editLane}
            id={lane._id}
            className={"lane-name"}/>
        </div>
        <button className="lane-delete" title="Delete column" onClick={() => this.deleteLane(lane)}>x</button>
      </div>
    );
  };
}
