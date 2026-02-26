let lista = document.getElementById("listaOS");
function abrirOS() {
let equipamento = document.getElementById("equipamento").value;
let prioridade = document.getElementById("prioridade").value;
let descricao = document.getElementById("descricao").value;
if(equipamento === "" || prioridade === "" || descricao === "") {
alert("Preencha todos os campos!");
return;
}
let os = document.createElement("li");
os.innerHTML = `
<strong>Equipamento:</strong> ${equipamento} <br>
<strong>Prioridade:</strong> ${prioridade} <br>
<strong>Descrição:</strong> ${descricao}
`;
lista.appendChild(os);
limparCampos();
}
function limparCampos() {
document.getElementById("equipamento").value = "";
document.getElementById("prioridade").value = "";
document.getElementById("descricao").value = "";
}