import React, { Component } from "react";
import ListPerson from './ListPerson';

class TableBody extends Component {
  render() {
    const { objeto } = this.props;
    return (
      <tbody>
        {objeto.map((listadoPersona,index) => (
          <ListPerson key={index} listadoPersona={listadoPersona} />
        ))}
      </tbody>
    );
  }
}

export default TableBody;
