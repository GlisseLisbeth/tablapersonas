import React from "react";

const ListPerson = props => {
  return (
    <tr key={props.listadoPersona.id}>
      <th scope="row">{props.listadoPersona.id}</th>
      <td>{props.listadoPersona.name}</td>
      <td>{props.listadoPersona.lastname}</td>
      <td>{props.listadoPersona.work}</td>
    </tr>
  );
};

export default ListPerson;
