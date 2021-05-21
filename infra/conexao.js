const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root',
    password: 'lokaPORbike88',
    database: 'agendawcc'

});

module.exports = conexao;