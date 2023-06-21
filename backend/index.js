const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv/config.js')
const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
const { Client } = require('pg');

const USER_BD = process.env.PGUSER
const HOST = process.env.PGHOST
const DATABASE = process.env.PGDATABASE
const PASSWORD_BD = process.env.PGPASSWORD
const PORT_CLIENT = process.env.PGPORT 


const client = new Client({
    user: USER_BD,
    host: HOST,
    database: DATABASE,
    password: PASSWORD_BD,
    port: PORT_CLIENT,
  })

client.connect();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/submitForm', (req, res) => {
   const email = req.body.email;
   const name = req.body.name;
   const companyName = req.body.company;
   const phone = req.body.phone;
   const message = req.body.message;
   client.query(`INSERT INTO dados (email,name,phone,nameCompany,message) VALUES ($1, $2, $3, $4, $5)`, [email, name, phone, companyName, message ])
   .then(results => {
       const resultado = results
       if (resultado.rowCount === 1) {
           return res.json({ "success": "Enviado com sucesso" });
       } else {
           return res.json({ "error": "Erro ao enviar" });
       }
   })
})
  
app.listen(port, ()=> {
    console.log(`Rodando na porta ${port}`)
})
