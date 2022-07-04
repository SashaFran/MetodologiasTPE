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
            },
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
               },
               {
                "dia": "Jueves 4 de Junio",
                "hora1": "8.15",
                "hora2": "8.30",
                "hora3": "8.45"
               }
            ]
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
            },
        ]
    }
];

let idUsuario = localStorage.getItem('id');
let medicosSelecionados; 
const limitePaginacion = 4;
let pagina = 1;
let totalPaginas = 0;

let btn_prev = document.querySelector('#btn_prev');
let btn_next = document.querySelector('#btn_next');

/**Nombre función: cargarTurnos
    *Funcionalidad: Carga los turnos pendientes de el medico ingresado
    *Retorno: void
*/
function cargarTurnosMedico( id ) {  
    medicosSelecionados = medicos.filter( medico => medico.id == parseInt(idUsuario));
    let turnos = medicosSelecionados[0].turnos;
    totalPaginas = Math.ceil(turnos.length/limitePaginacion);

    let turnosPaginados = turnos.slice((pagina-1)*limitePaginacion,pagina*limitePaginacion)
    let contenedor = document.querySelector("#turnos");
    contenedor.innerHTML="";

    for (let turno of turnosPaginados) {
        contenedor.innerHTML += 
        `<div class="dia-turno-div"> 
            <div class="dia-header">
                <p> ${turno.dia} </p> 
            </div>
            <div class="horario" data-turno="${turno.dia}, ${turno.hora1}">
                <p>${turno.hora1}</p>
            </div>
            <div class="horario" data-turno="${turno.dia}, ${turno.hora2}">
                <p>${turno.hora2} </p>
            </div>
            <div class="horario" data-turno="${turno.dia}, ${turno.hora3}">
                <p> ${turno.hora3}</p>
            </div>                
        </div>`

    
    }     
}
btn_prev.addEventListener('click', e => {
    e.preventDefault();
    if (pagina > 1) {
        pagina--;
        cargarTurnosMedico(idUsuario);
    }
})
btn_next.addEventListener('click', e => {
    e.preventDefault();
    if (pagina < totalPaginas) {
        pagina++;
        cargarTurnosMedico(idUsuario);
    }
})
window.onload = () => {
    cargarTurnosMedico( idUsuario );
};
