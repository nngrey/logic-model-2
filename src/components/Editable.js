import React, { Component } from 'react';
import classnames from 'classnames';
import '../styles/Editable.css';

const Editable = (props) => {
  if(props.editing) {
    return <Edit
    className={props.className}
    value={props.value}
    onEdit={props.onEdit}
    id={props.id} />;
  }

  return <span className={classnames('value', props.className)}>{props.value}</span>;
}

class Edit extends Component {
  render() {
    const className = this.props.className;
    const value = this.props.value;

    return <input
      type="text"
      className={classnames('edit', className)}
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}/>;
  }

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      const data = new FormData();
      data.append('noteText', value);
      data.append('id', this.props.id)
      this.props.onEdit(data);
    }
  }
}

export default Editable;
