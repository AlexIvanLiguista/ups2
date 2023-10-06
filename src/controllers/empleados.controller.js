const empleadoCtrl={};
const Empleado=require('../models/Empleado');


empleadoCtrl.getEmpleados= async(req, res)=>
{
    const empleados= await Empleado.find();
    res.json(empleados);
    }

empleadoCtrl.createEmpleado= async(req,res)=>{
    const empleado=new Empleado({
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    departamento:req.body.departamento,
    sueldo:req.body.sueldo
    });
    console.log(empleado);
    await empleado.save();
    res.json('status: Datos guardados');
    }

empleadoCtrl.getEmpleado=async(req,res)=>{
    const empleado1=await Empleado.findById(req.params.id);
    res.json(empleado1);
}

empleadoCtrl.editEmpleado=async(req,res)=>{
    const empleado={
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    departamento: req.body.departamento,
    sueldo: req.body.sueldo
    };
    await Empleado.findByIdAndUpdate(req.params.id, {$set:empleado},{new: true});
    res.json('status: Datos actualizados');
    }

empleadoCtrl.deleteEmpleado=async(req,res)=>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json('status: Empleado ha sido removido');
    }

module.exports=empleadoCtrl;

/*
empleadoCtrl.getEmpleados=(req,res)=>{
    res.send('Funciona el endpoint get empleados')
}

empleadoCtrl.createEmpleado=(req,res)=>{
    res.send('Ha sido creado el empleado')
}

empleadoCtrl.getEmpleado=(req,res)=>{}

empleadoCtrl.editEmpleado=(req,res)=>{}
empleadoCtrl.deleteEmpleado=(req,res)=>{}

module.exports=empleadoCtrl;
*/