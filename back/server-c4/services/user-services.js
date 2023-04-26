const obtenerTodosLosUsuarios = async () => {
  throw new Error('Service: Error.');
  return 'Service: Lista de todos los usuarios.';
};

const obtenerUsuarioPorId = async (id) => {
  return `GET get-user-by-id. Params id: ${id}`;
};

const crearUsuario = async (userData) => {
  console.log(userData);
  return 'POST create-user';
};

const editarUsuario = async (id, userData) => {
  console.log(userData);
  return `PATCH edit-user. Params id: ${id}.`;
};

const eliminarUsuario = async (id) => {
  return `DELETE delete-user. Params id: ${id}`;
};

module.exports = {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
};
