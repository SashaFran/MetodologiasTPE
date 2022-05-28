"use strict";

let medicos = [
    {
        "id" : 1,
        "apellido" : "Perez",
        "nombre" : "Romina",
        "especialidad" : "Traumatologia" 
    },
    {
        "id" : 2, 
        "apellido" : "Gonzales",
        "nombre" : "Jorgelina",
        "especialidad" : "Clinica" 
    },
    {
        "id" : 3, 
        "apellido" : "Anchorena",
        "nombre" : "Marisol",
        "especialidad" : "Cirugia nuclear" 
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




