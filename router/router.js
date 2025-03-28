const express=require('express');
const router = express.Router();
const conexion=require('../database/bdd');
const metodos=require('../controller/me');
const e = require('express');
module.exports = router; 
//Espacio para que cada quien cree sus direcciones
/* 
EDUARDO ALVARADO
INICIO ROL
 */
//Mostrar tabla de Roles en index roles
router.get('/rol', (req,res) => {
    conexion.query('SELECT * FROM rol', (error, results) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('rol/index', {rol: results});
    });
});

//llamar metodo saveRol para guardar 
router.post('/saveRol', metodos.saveRol);

//Mostrar vista de crearRol
router.get('/crearR', (req,res) => {
    res.render('rol/crear');
});

//Mostrar Formulario en vista de VER
router.get('/verR/:id', (req,res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM rol WHERE id = ?', [codigo], (error, resultado) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('rol/ver', {rol: resultado[0]});
    });
});

//Llamar metodo editRol 
router.post('/editRol', metodos.editRol);

//Mostrar formulario de editar rol
router.get('/editarR/:id', (req,res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM rol WHERE id = ?', [codigo], (error, resultado) => { 
        if(error){
            console.log(error);
            return;
        }
        res.render('rol/editar', {rol: resultado[0]}); 
    });
});

//Llamar metodo deleteRol
router.post('/deleteRol', metodos.deleteRol);

//Mostrar formulario de eliminar rol
router.get('/eliminarR/:id', (req,res) => {
    const codigo = req.params.id;
    conexion.query('SELECT * FROM rol WHERE id = ?', [codigo], (error,resultado) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('rol/eliminar', {rol: resultado[0]});
    });
});
/* 
FIN ROl
 */


/* 
EDUARDO ALVARADO
INICIO TECNICO
 */
//Mostrar tabla tecnico
router.get('/tecnico', (req,res) => {
    conexion.query("SELECT tecnico.id, tecnico.nombre_tecnico, tecnico.email, tecnico.telefono, rol.Nombre_rol FROM tecnico JOIN rol ON tecnico.ID_Rol = rol.id", (error, resultado) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('tecnico/index', {tecnico: resultado});
    });
});

//Llamada del metodo Crear Tecnico
router.post('/saveTecnico', metodos.saveTecnico);

//Mostrar formulario de Crear Tecnico
router.get('/crearT', (req,res) => {
    conexion.query("SELECT * FROM rol", (error, resultado) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('tecnico/crear', {rol: resultado});
    });
});