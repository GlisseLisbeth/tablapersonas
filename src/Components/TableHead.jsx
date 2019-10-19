import React, { Component } from "react";
import ListTitle from './ListTitle';

class TableHead extends Component {
  render() {
    const {listado}=this.props;
    return (
      <thead className="thead-dark">
        <tr>
            {listado.map((titulo, index)=><ListTitle key={index} titulo={titulo} />)}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
