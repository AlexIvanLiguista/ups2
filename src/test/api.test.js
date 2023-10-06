const request= require('supertest');
const app = require('../app');

describe('api',function(){
    describe('GET /empleados',function(){
        it('Responde una lista de empleados', function(){
            request(app).get('/empleados').expect(200);
        });
    });
});

describe('api',function(){
    describe('POST /empleados',function(){
        it('TEST 01 usuario creado', done=>{
            const data = {
                "nombre": "Alex Llumitaxi"
            }
            request(app).post('/empleados').
                send(data).expect(404).end((err)=>{
                if (err) return done(err);
                done();
            });
        });
    });
});

describe("empleados",()=>{
    it("Lista de empleado existentes", (done)=>{
        request(app)
                .get("/api/empleados/")
                .set("Accept","application/json")
                .expect("Content-Type", /json/)
                .expect(200, done);
                done();
    });
    it("Editar empleado existente",(done)=>{
        const idEmpleadoExistente = '651c2ebaeee51acede289ab2';
        const datosEdicion = {
            nombre: "Otro Nombre",
            cargo: "CARGO",
            departamento: "Dep",
            sueldo : 9000
        };
        request(app)
            .put("/api/empleados/${idEmpleadoExistente}")
            .set("Accept","application/json")
                .expect("Content-Type", /json/)
                .expect(200, done);
                done();
    });
    it("Empleado que no existe",(done)=>{
        const idEmpleadoExistente = '24125';
        const datosEdicion = {
            nombre: "Otro Nombre",
            cargo: "CARGO",
            departamento: "Dep2",
            sueldo : 9000
        };
        request(app)
            .put("/api/empleados/${idEmpleadoExistente}")
            .set("Accept","application/json")
                .expect("Content-Type", /json/)
                .expect(404, done);
                done();
    });

});

module.exports=app;