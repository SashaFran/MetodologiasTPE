let btnPaciente = document.getElementById("btn_pacientes");
let btnInstitucional = document.getElementById("btn_institucional");

let containerIns = document.querySelector(".inst");
let containerPaciente = document.querySelector(".paciente");

let btnIngresarPacientes = document.querySelector('#btn_log_pacientes');
let btnIngresarMedicos = document.querySelector('#btn_log_medicos');

let formMedico = document.forms['login_medico'];

window.onload = function () {
    containerIns.classList.toggle("invisible");
    btnPaciente.style.backgroundColor = "#6C63FF";
    btnInstitucional.style.backgroundColor = "#FF6584";

}
btnPaciente.addEventListener("click", function(){
    if(window.getComputedStyle(containerIns).visibility === "visible"){
        containerIns.classList.toggle("invisible");
        containerIns.classList.remove("visible");

        containerPaciente.classList.toggle("visible");
        containerPaciente.classList.remove("invisible");


        btnPaciente.style.backgroundColor = "#6C63FF";
        btnInstitucional.style.background = "#FF6584";
    }

})

btnInstitucional.addEventListener("click", function(){
    if(window.getComputedStyle(containerPaciente).visibility === "visible"){
        containerIns.classList.toggle("visible");
        containerIns.classList.remove("invisible");

        containerPaciente.classList.toggle("invisible");
        containerPaciente.classList.remove("visible");


        btnPaciente.style.backgroundColor = "#FF6584";
        btnInstitucional.style.backgroundColor = "#6C63FF";
    }
})

btnIngresarPacientes.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = './template-usuario/index.html';
})

btnIngresarMedicos.addEventListener('click', e => {
    e.preventDefault();

    let user = formMedico.usuario.value;
    let pass = formMedico.password.value
    let select =login(user,pass);
    if (select > 0){
        localStorage.setItem('usuario',formMedico.usuario.value);
        localStorage.setItem('id', select);
        window.location.href = './template-medico/index.html';
    }else{
        console.log("Medico no encontrado")
    }


})