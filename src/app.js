const express=require('express'); 
const morgan=require('morgan'); 
const cors=require('cors'); 
const app=express(); 

//settings 
app.set('puerto',process.env.PORT|| 3000); 
app.set('nombreApp','Gestión de empleados'); 
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(express.json());

module.exports=app;

app.use('/api/empleados',require('./routes/empleados.routes'));
