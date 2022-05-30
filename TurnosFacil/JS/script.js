"use strict";

let medicos = [
    {
        "id" : 1,
        "apellido" : "Perez",
        "nombre" : "Romina",
        "especialidad" : "Traumatologia",
        "obrasSociales" : [
            "pami",
            "osde",
            "osecac",
            "ioma",
            "medicus"
        ],
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
        "obrasSociales" : [
            "pami",
            "osde",
            "medicus"
        ],
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
        "obrasSociales" : [],
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
let medicosSelecionados = medicos;

let nodoMedico = document.querySelector("#medicos");
medicos.forEach(medico => {
    let option = document.createElement("option");
    nodoMedico.appendChild(option);
    option.value = medico.id;
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
            for (let medico of medicosSelecionados) {
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

nodoMedico.addEventListener("change", resp => {
    let id = resp.target.value;
    let medicosFiltrado = medicos.filter( medico => medico.id == id );
    medicosSelecionados = medicosFiltrado;
    cargarMedicos();
});

nodoEspec.addEventListener("change", resp => {
    let especialidad = resp.target.value;
    let medicosFiltrado = medicos.filter( medico => medico.especialidad == especialidad );
    medicosSelecionados = medicosFiltrado;
    cargarMedicos();
});

nodoOS.addEventListener("change", resp => {
    let obraSocial = resp.target.value;
    let medicosFiltrado = medicos.filter( medico => medico.obrasSociales.includes(obraSocial) );
    medicosSelecionados = medicosFiltrado;
    cargarMedicos();
})