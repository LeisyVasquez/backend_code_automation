import React, { useState } from 'react';

const NewProjectForm = () => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [database, setDatabase] = useState('');
  const [description, setDescription] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [license, setLicense] = useState('');
  const [repoName, setRepoName] = useState('');
  const [version, setVersion] = useState('');
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí se enviaría la información del formulario al backend mediante una petición HTTP
  };

  return (
    <div>
      <h1>Nuevo Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Rama:
          <input type="text" value={branch} onChange={event => setBranch(event.target.value)} />
        </label>
        <br />
        <label>
          Base de Datos:
          <input type="text" value={database} onChange={event => setDatabase(event.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <br />
        <label>
          Usuario Administrador de la Base de Datos:
          <input type="text" value={adminUsername} onChange={event => setAdminUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Licencia:
          <select value={license} onChange={event => setLicense(event.target.value)}>
            <option value="">Seleccione una licencia</option>
            <option value="MIT">MIT</option>
            <option value="Apache-2.0">Apache-2.0</option>
            <option value="GPL-3.0">GPL-3.0</option>
            <option value="BSD-3-Clause">BSD-3-Clause</option>
          </select>
        </label>
        <br />
        <label>
          Repositorio de GitHub:
          <input type="text" value={repoName} onChange={event => setRepoName(event.target.value)} />
        </label>
        <br />
        <label>
          Versión:
          <input type="text" value={version} onChange={event => setVersion(event.target.value)} />
        </label>
        <br />
        <label>
          URL del Repositorio de GitHub:
          <input type="text" value={repoUrl} onChange={event => setRepoUrl(event.target.value)} />
        </label>
        <br />
        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default NewProjectForm;
