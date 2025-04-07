const express=require('express');
const router = express.Router();
const conexion=require('../database/bdd');
const metodos=require('../controller/me');

//Espacio para que cada quien cree sus direcciones

/////////////////////////////////REPARACION/////////////////////////////////

router.get('/reparaciones', (req, res) => {
    const mensaje = req.query.mensaje || '';
    conexion.query('SELECT * FROM reparacion', (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('reparaciones/index', { reparaciones: results, mensaje });
        }
    });
});

// MOSTRAR
router.get('/reparaciones/nuevo', (req, res) => {
    res.render('reparaciones/nuevo', { mensaje: '' });
});

// CREAR
router.post('/reparaciones/guardar', metodos.saveReparacion);

// EDITAR
router.post('/reparaciones/editar', metodos.editReparacion);

// ELIMINAR
router.post('/reparaciones/eliminar', metodos.deleteReparacion);

/////////////////////////////////REPARACION/////////////////////////////////

module.exports = router; 