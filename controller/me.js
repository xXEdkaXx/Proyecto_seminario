const conexion = require('../database/bdd');
// ROL
exports.saveRol = (req, res) => {
    const Nombre_rol = req.body.Nombre_rol;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO rol SET ?', { Nombre_rol }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/rol'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.editRol = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const id = req.body.id;
    const Nombre_rol = req.body.Nombre_rol;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE rol SET ? WHERE id = ?', [{ Nombre_rol }, id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/rol');
        }
    });
};

exports.deleteRol = (req, res) => {
    const id = req.body.id; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM rol WHERE id = ?', [id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/rol');
        }
    });
};


// CLIENTE
exports.saveCliente = (req, res) => {
    // Obtiene los valores enviados en el cuerpo de la solicitud
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO cliente SET ?', { nombre, email, telefono }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/clientes'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.editCliente = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const id = req.body.id;
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE cliente SET ? WHERE id = ?', [{ nombre, email,telefono }, id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/clientes');
        }
    });
};

exports.deleteRol = (req, res) => {
    const id = req.body.id; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM cliente WHERE id = ?', [id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/rol');
        }
    });
};


// TECNICO
exports.saveTecnico = (req, res) => {
    // Obtiene los valores enviados en el cuerpo de la solicitud
    const nombre_tecnico = req.body.nombre_tecnico;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const ID_Rol = req.body.ID_Rol;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO tecnico SET ?', { nombre_tecnico, email, telefono,ID_Rol }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/tecnicos'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.editTecnico = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const id = req.body.id;
    const nombre_tecnico = req.body.nombre_tecnico;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const ID_Rol = req.body.ID_Rol;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE tecnico SET ? WHERE id = ?', [{ nombre_tecnico, email,telefono,ID_Rol }, id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/tecnicos');
        }
    });
};

exports.deleteTecnico = (req, res) => {
    const id = req.body.id; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM tecnico WHERE id = ?', [id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/tecnicos');
        }
    });
};




// USUARIO
exports.saveUsuario = (req, res) => {
    // Obtiene los valores enviados en el cuerpo de la solicitud
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const contrasenia = req.body.contrasenia;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO usuario SET ?', { nombre,usuario,contrasenia }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/usuarios'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.editUsuario = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const contrasenia = req.body.contrasenia;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE usuario SET ? WHERE id = ?', [{ nombre,usuario,contrasenia }, id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/usuarios');
        }
    });
};

exports.deleteUsuario = (req, res) => {
    const id = req.body.id; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM usuario WHERE id = ?', [id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/usuarios');
        }
    });
};




// INVENTARIADO
exports.saveInventariado = (req, res) => {
    // Obtiene los valores enviados en el cuerpo de la solicitud
    const nombre_dispositivo = req.body.nombre_dispositivo;
    const fecha_registro = req.body.fecha_registro;
    const ID_Usuario = req.body.ID_Usuario;
    const ID_Tecnico = req.body.ID_Tecnico;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO inventaariado SET ?', { nombre_dispositivo,fecha_registro,ID_Usuario,ID_Tecnico }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/inventariados'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.editInventariado = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const id = req.body.id;
    const nombre_dispositivo = req.body.nombre_dispositivo;
    const fecha_registro = req.body.fecha_registro;
    const ID_Usuario = req.body.ID_Usuario;
    const ID_Tecnico = req.body.ID_Tecnico;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE inventariado SET ? WHERE id = ?', [{ nombre_dispositivo,fecha_registro,ID_Usuario,ID_Tecnico }, id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/inventariados');
        }
    });
};

exports.deleteInventariado = (req, res) => {
    const id = req.body.id; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM inventariado WHERE id = ?', [id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/inventariados');
        }
    });
};



// REPARACION
exports.saveReparacion = (req, res) => {
    // Obtiene los valores enviados en el cuerpo de la solicitud
    const tipo = req.body.tipo;
    const estado = req.body.estado;
    const fecha_reparacion = req.body.fecha_reparacion;
    const ID_Inventariado = req.body.ID_Inventariado;

    // Inserta un nuevo cliente en la base de datos
    conexion.query('INSERT INTO reparacion SET ?', { tipo, estado, fecha_reparacion, ID_Inventariado }, (error) => {
        if (error) {
            console.log(error); // Manejo básico de errores
        } else {
            res.redirect('/reparaciones'); // Redirecciona tras una inserción exitosa
        }
    });
};

exports.editReparacion = (req, res) => {
    // Obtiene los valores del cuerpo de la solicitud
    const id = req.body.id;
    const tipo = req.body.tipo;
    const estado = req.body.estado;
    const fecha_reparacion = req.body.fecha_reparacion;
    const ID_Inventariado = req.body.ID_Inventariado;

    // Actualiza los datos de un cliente según su código
    conexion.query('UPDATE reparacion SET ? WHERE id = ?', [{ tipo, estado, fecha_reparacion, ID_Inventariado }, id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/reparaciones');
        }
    });
};

exports.deleteReparacion = (req, res) => {
    const id = req.body.id; // Código del cliente a eliminar

    // Elimina un cliente de la base de datos
    conexion.query('DELETE FROM reparacion WHERE id = ?', [id], (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/reparaciones');
        }
    });
};