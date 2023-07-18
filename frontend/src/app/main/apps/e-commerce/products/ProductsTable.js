import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import withRouter from '@fuse/core/withRouter';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function ProductsTable(props) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Nombre del proyecto 1',
      description: 'Descripción del proyecto 1',
      databaseName: 'nombre_bd_1',
      databaseUsername: 'usuario_bd_1',
      databasePassword: 'contraseña_bd_1',
      server: 'servidor_1',
      port: 'puerto_1',
      repositoryName: 'repositorio_1',
      repositoryUrl: 'https://github.com/repo_1',
      repositoryBranch: 'rama_1',
      licenseId: 'licencia_1',
      documentationName: 'documentacion_1',
      documentationVersion: 'version_1',
      packageJsonVersion: 'package_json_version_1',
    },
    {
      id: 2,
      name: 'Nombre del proyecto 2',
      description: 'Descripción del proyecto 2',
      databaseName: 'nombre_bd_2',
      databaseUsername: 'usuario_bd_2',
      databasePassword: 'contraseña_bd_2',
      server: 'servidor_2',
      port: 'puerto_2',
      repositoryName: 'repositorio_2',
      repositoryUrl: 'https://github.com/repo_2',
      repositoryBranch: 'rama_2',
      licenseId: 'licencia_2',
      documentationName: 'documentacion_2',
      documentationVersion: 'version_2',
      packageJsonVersion: 'package_json_version_2',
    },
    // Agrega más objetos de ejemplo si es necesario
  ]);

  function handleDeselect() {
    setSelected([]);
  }

  function handleClick(item) {
    props.navigate(`/apps/e-commerce/products/${item.id}/${item.handle}`);
  }

  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <FuseLoading />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          No hay proyectos!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col h-384 shadow">
              <div className="flex flex-col flex-auto p-24">
                {/* Renderizar información de la tarjeta */}
                <div className="mb-8 font-bold">{item.name}</div>
                <div className="text-sm mb-4">{item.description}</div>
                <div className="mb-2">Nombre BD: {item.databaseName}</div>
                <div className="mb-2">Usuario BD: {item.databaseUsername}</div>
                <div className="mb-2">Contraseña BD: {item.databasePassword}</div>
                <div className="mb-2">Servidor: {item.server}</div>
                <div className="mb-2">Puerto de conexión: {item.port}</div>
                <div className="mb-2">Nombre repositorio: {item.repositoryName}</div>
                <div className="mb-2">URL repositorio: {item.repositoryUrl}</div>
                <div className="mb-2">Rama repositorio: {item.repositoryBranch}</div>
                <div className="mb-2">ID licencia: {item.licenseId}</div>
                <div className="mb-2">Nombre documentación: {item.documentationName}</div>
                <div className="mb-2">Versión documentación: {item.documentationVersion}</div>
                <div className="mb-2">Versión package.json: {item.packageJsonVersion}</div>
              </div>
              <div
                className="flex items-center justify-end py-16 px-24"
                style={{
                  backgroundColor: 'lightgray',
                }}
              >
                <button
                  className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  style={{
                    backgroundColor: 'lightblue',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                  }}
                  onClick={() => handleClick(item)}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </FuseScrollbars>
    </div>
  );
}

export default withRouter(ProductsTable);
