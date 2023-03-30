function cadastrarAluno(){
   
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var turma = document.getElementById('turma').value;


    var aluno = {
        "nome": nome,
        "matricula": matricula,
        "turma": turma
    }

    document.getElementById('alunoCadastrado')
    .textContent = 'O ' + aluno.nome + 'foi cadastrado'



}