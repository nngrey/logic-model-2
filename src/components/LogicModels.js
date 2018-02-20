import React from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default class LogicModels extends React.Component {
  constructor(props){
  super(props);
}

  addLogicModel(){
    const data = new FormData();
    this.props.mappedAddLogicModel(data);
  }

  render() {
    return (
      <div>
        <div className="container">
          <button className="add-model" onClick={this.addLogicModel}>+ Add Logic Model</button>
        </div>
        <div className="container">
          <h2>Logic Models</h2>
          {[].map(logicModel =>
            <LinkContainer to={{ pathname: `/register/logicModel.id`, query: {  } }}>
              <NavItem eventKey={1}>`logicModel.name`</NavItem>
            </LinkContainer>
          )}
        </div>
      </div>
    );
  }
}
