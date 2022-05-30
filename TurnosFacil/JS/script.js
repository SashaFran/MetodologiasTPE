"use strict";


/*---------- Variables -----------*/

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
let nodoOS = document.querySelector("#obraSocial");
let nodoEspec = document.querySelector("#especialidad");
let quitarFiltroBtn = document.querySelector("#quitarFiltroBtn");
let sacarTurnoBtn = document.querySelector("#sacarTurnoBtn");



/*--------------------------- FORMULARIO -----------------------------------------------------------*/

/*------------- 1. Carga de selects ---------------------------------
*Nombre función: cargarSelects, cargarMedico, cargarOS, cargarEsp
*Funcionalidad: carga la información guardada en cada uno de los selects del formulario de filtrado
*Retorno: void
*/

function cargarMedico() {
    medicos.forEach(medico => {
        let option = document.createElement("option");
        nodoMedico.appendChild(option);
        option.value = medico.id;
        option.text = `${medico.apellido}, ${medico.nombre}`;
    });
}

function cargarOS(){
    obras_sociales.forEach(obra_social => {
        let option = document.createElement("option");
        nodoOS.appendChild(option);
        option.value = obra_social;
        option.text = obra_social;
    });
}

function cargarEsp() {
    especialidades.forEach(especialidad => {
        let option = document.createElement("option");
        nodoEspec.appendChild(option);
        option.value = especialidad;
        option.text = especialidad;
    });
}

function cargarSelects() {
    cargarMedico();
    cargarEsp();
    cargarOS();
}


/*------------- 2. Filtrado ---------------*/
/*
*Nombre función: setearEventos, setearEventoMedico, setearEventoEsp, setearEventoOS
*Funcionalidad: setea los eventos de los selects -definiendo las funció de filtrado
vinculada a cada uno de ellos- y del botón principal "Sacar turno"
*Retorno: void
*/

function setearEventoMedico() {
    nodoMedico.addEventListener("change", resp => {
        let id = resp.target.value;
        let medicosFiltrado = medicos.filter( medico => medico.id == id );
        medicosSelecionados = medicosFiltrado;
        cargarMedicos();
        quitarFiltroBtn.classList.remove("hidden");
    });
}

function setearEventoEsp() {
    nodoEspec.addEventListener("change", resp => {
        let especialidad = resp.target.value;
        let medicosFiltrado = medicos.filter( medico => medico.especialidad == especialidad );
        medicosSelecionados = medicosFiltrado;
        cargarMedicos();
        quitarFiltroBtn.classList.remove("hidden");
    });
}

function setearEventoOS() {
    nodoOS.addEventListener("change", resp => {
        let obraSocial = resp.target.value;
        let medicosFiltrado = medicos.filter( medico => medico.obrasSociales.includes(obraSocial) );
        medicosSelecionados = medicosFiltrado;
        cargarMedicos();
        quitarFiltroBtn.classList.remove("hidden");
    });
}

function setearEventoBtnQuitarFiltro() {
    quitarFiltroBtn.addEventListener("click", () => {
        medicosSelecionados = medicos;
        cargarMedicos();
        quitarFiltroBtn.classList.add("hidden");
    });
}

function setearEventos() {
    setearEventoMedico();
    setearEventoEsp();
    setearEventoOS();
    setearEventoBtnQuitarFiltro();
    sacarTurnoBtn.addEventListener("click", habilitarSeleccion);
}



/*------------------------------ RENDERIZADO --------------------------------*/

/*
*Nombre función: cargarMedicos
*Funcionalidad: renderiza la información guardada en forma de cards médicas 
*al cargarse la página y luego de cada filtrado
*Retorno: void
*/
function cargarMedicos() {  
        let contenedor = document.querySelector("#filtrados");
            contenedor.innerHTML="";
            for (let medico of medicosSelecionados) {
                contenedor.innerHTML += `<div class="cartaMedica">
                                            <div id="infoMedico">
                                                <h3 id="nombreMedico-h">${medico.apellido}, ${medico.nombre}</h3>
                                                <h3 id="especialidad-h">${medico.especialidad}</h3>
                                            </div>
                                            <div class="turnos"  id="turnos${medico.id}"></div>    
                                         </div>`;
               
                let contenedorTurnos = document.querySelector(`#turnos${medico.id}`);
                contenedorTurnos.innerHTML="";
                for (let turno of medico.turnos) {
                    contenedorTurnos.innerHTML += `<div class="dia-turno-div"> 
                                                        <div class="dia-header">
                                                            <p> ${turno.dia} </p> 
                                                        </div>
                                                        <div class="horario" data-turno="${medico.id}, ${medico.apellido} ${medico.nombre}, ${turno.dia}, ${turno.hora1}">
                                                            <p>${turno.hora1} </p>
                                                        </div>
                                                        <div class="horario" data-turno="${medico.id}, ${medico.apellido} ${medico.nombre}, ${turno.dia}, ${turno.hora2}">
                                                            <p>${turno.hora2} </p>
                                                        </div>
                                                        <div class="horario" data-turno="${medico.id}, ${medico.apellido} ${medico.nombre}, ${turno.dia}, ${turno.hora1}">
                                                            <p> ${turno.hora3}</p>
                                                        </div>                
                                                  </div>`
            }                                  
        }
}

window.onload = () => {
    cargarSelects();
    cargarMedicos();
    setearEventos();
};

/*------------------------------ SACAR TURNO ---------------------------------------------------------*/
/*
*Nombre función: habilitarSeleccion
*Funcionalidad: al hacer click sobre el botón "Sacar turno", habilita la selección de horario
*Retorno: event listener
*/

function habilitarSeleccion(){
    sacarTurnoBtn.classList.add("hidden");
    document.querySelectorAll(".dia-header").forEach(dia => {
        dia.classList.remove("dia-header");
        dia.classList.add("dia-header-pink");
    });
    document.querySelectorAll(".horario").forEach(turno => {
        turno.classList.toggle("blue");
        turno.addEventListener("click", () => {
            verificarSeleccion(turno)});
    });
}



/*
*Nombre función: verificarSeleccion
*Funcionalidad: al hacer click sobre un horario, muestra un mensaje de confirmación
*Retorno: event listener
*/
function verificarSeleccion(turno) {
    let data = turno.getAttribute("data-turno").split(",");
    let msg = `¿Desea sacar un turno para ${data[1]} el día ${data[2]} a las ${data[3]} hs.?`
    showModal(msg, turno);
}


/*
*Nombre función: showModal
*Funcionalidad: muestra los datos del turno y los botones "confirmar" o "cancelar"
*Retorno: event listener
*/
function showModal(msg, turno) {
    let body = document.querySelector("#contenedor");
    body.classList.add("opacity");
    let msgDiv = document.createElement("div");
    msgDiv.id = "modal";
    let btn = document.createElement("button");
    btn.innerHTML = "Confirmar";
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Cancelar";
    msgDiv.appendChild(document.createTextNode(msg));
    msgDiv.appendChild(btn);
    msgDiv.appendChild(btn2);
    body.appendChild(msgDiv);
    btn.addEventListener("click", () => {
        body.removeChild(msgDiv);
        body.classList.remove("opacity");
        cargarMedicos();
        sacarTurnoBtn.classList.toggle("hidden");
        guardarTurno(turno);
    });
    btn2.addEventListener("click", () => {
        body.removeChild(msgDiv);
        body.classList.remove("opacity");
        sacarTurnoBtn.classList.toggle("hidden");
    });  
}

function guardarTurno(turno) {
    console.log("guardado");
}
