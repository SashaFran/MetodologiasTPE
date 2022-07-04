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
/**Nombre función: cargarTurnos
    *Funcionalidad: Carga los turnos pendientes de el medico ingresado
    *Retorno: void
*/
function cargarTurnosMedico( id ) {  
    medicosSelecionados = medicos.filter( medico => medico.id == parseInt(idUsuario));
    let turnos = medicosSelecionados[0].turnos;
    
    
}