import React from 'react';
import uuid from 'uuid';
import '../styles/Lane.css';

export default class Notes extends React.Component {

  addNote(){
    const data = new FormData();
    data.append('laneId', this.props.lane._id)
    this.props.mappedAddNote(data);
  }

  render(){

    return (
      <div className="lane-header">
        <div className="lane-add-note">
          <button className="add-note" onClick={() => this.addNote()}>Add Note</button>
        </div>
        <div className="lane-name">{this.props.lane.name}</div>
      </div>
    );
  };
}
