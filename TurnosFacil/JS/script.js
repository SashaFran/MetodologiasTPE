"use strict";

let medicos = [
    {
        "id" : 1,
        "apellido" : "Perez",
        "nombre" : "Romina",
        "especialidad" : "Traumatologia",
        "turnos": [
            {
             "dia": "Lunes 1 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Martes 2 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Miercoles 3 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Jueves 4 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Viernes 5 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            }]
    },
    {
        "id" : 2, 
        "apellido" : "Gonzales",
        "nombre" : "Jorgelina",
        "especialidad" : "Clinica",
        "turnos": [
            {
             "dia": "Lunes 1 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Martes 2 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Miercoles 3 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Jueves 4 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Viernes 5 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            }]
    },
    {
        "id" : 3, 
        "apellido" : "Anchorena",
        "nombre" : "Marisol",
        "especialidad" : "Cirugia nuclear",
        "turnos": [
            {
             "dia": "Lunes 1 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Martes 2 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Miercoles 3 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Jueves 4 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            },
            {
             "dia": "Viernes 5 de Junio",
             "hora1": "8.15",
             "hora2": "8.30",
             "hora3": "8.45"
            }]
    }
];

let obras_sociales = ["pami", "osde", "osecac", "ioma", "medicus"];

let especialidades = ["Traumatologia", "Clinica", "Cirugia nuclear"];

let nodoMedico = document.querySelector("#medicos");
medicos.forEach(medico => {
    let option = document.createElement("option");
    nodoMedico.appendChild(option);
    option.value = medico;
    option.text = `${medico.apellido}, ${medico.nombre}`;
});

let nodoOS = document.querySelector("#obraSocial");
obras_sociales.forEach(obra_social => {
    let option = document.createElement("option");
    nodoOS.appendChild(option);
    option.value = obra_social;
    option.text = obra_social;
});

let nodoEspec = document.querySelector("#especialidad");
especialidades.forEach(especialidad => {
    let option = document.createElement("option");
    nodoEspec.appendChild(option);
    option.value = especialidad;
    option.text = especialidad;
});



cargarMedicos();
function cargarMedicos() {  //Renderiza totalidad de medicos en la pagina inicial
        let contenedor = document.querySelector(".cartaMedica");
            contenedor.innerHTML="";
            for (let medico of medicos) {
               contenedor.innerHTML += `<div>
                                            <div class="contenedor-medic"> ${medico.nombre}, ${medico.apellido}
                                            <div>${medico.especialidad} </div>
                                            </div>
                                             
                                             <div class="turnos" id="turnos${medico.id}" >
                                              
                                             </div>
                                         </div>
               
               `
               
               let contenedorTurnos = document.querySelector(`#turnos${medico.id}`);
               contenedorTurnos.innerHTML="";
               for (let turno of medico.turnos) {
                contenedorTurnos.innerHTML+=` <div> <p class="btn btn-light"> ${turno.dia} </p> 
                
                                                    <p class="btn btn-light"> ${turno.hora1} </p>
                                                    <p class="btn btn-light"> ${turno.hora2} </p>
                                                    <p class="btn btn-light"> ${turno.hora3} </p>
                
                                            </div>`
            }                               
            
            
        
        }
    
}
