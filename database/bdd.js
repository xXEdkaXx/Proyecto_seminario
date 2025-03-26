const mysql = require('mysql');
const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'proyecto'
});

conexion.connect((error)=>{
    if(error){
        console.error('Se presentó un error: '+error);
        return
    }
    console.log('Conexión Exitosa');
});
module.exports=conexion;