var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")
tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.remove(); //subir para o pai que foi clicado
})