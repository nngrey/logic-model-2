import React from 'react';
import uuid from 'uuid';
import '../styles/Lane.css';

export default class Notes extends React.Component {

  addNote(){
    const data = new FormData();
    this.props.mappedAddNote(data);
  }

  render(){

    return (
      <div className="lane-header">
        <div className="lane-add-note">
          <button>+</button>
        </div>
        <div className="lane-name">{this.props.lane.name}</div>
      </div>
    );
  };
}
