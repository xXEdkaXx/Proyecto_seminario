const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', require('./router/router'));

app.listen(5000, () => {
    console.log('Servidor Local http://localhost:5000')
});