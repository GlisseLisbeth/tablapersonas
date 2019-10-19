import React from "react";
import "./App.css";
import TableHead from './Components/TableHead';
import TableBody from './Components/TableBody';

function App() {
  const ListadoCabecera = ['#', 'Nombre', 'Apellido', 'Trabajo'];
  const ObjetoPersona = [
    {
      id: 1,
      name: 'Eduardo',
      lastname: 'Lulichac',
      work: 'Profesor'
    },
    {
      id: 2,
      name: 'Juan',
      lastname: 'Maquina',
      work: 'Ingeniero'
    },
    {
      id: 3,
      name: 'Pamela',
      lastname: 'Garcia',
      work: 'Doctora'
    }
  ]
  return (
    <section className="container">
      <h1>Tabla de personas</h1>
      <table className="table">
        <TableHead listado={ListadoCabecera} />
        <TableBody objeto={ObjetoPersona} />
      </table>
    </section>
  );
}

export default App;
