class contato {
    constructor(nome,email, cpf,telefone,contato){
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone; 
    this.contato = contato; 
}
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value,
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem('textarea').value,
            form.elements.namedItem("contato").value);
    console.table(data)
  form.reset();
}

function Enviar() {
    const checkbox = document.getElementById('obrigatorio');
    const nome = document.getElementById("nome");
    const errocheck = document.getElementById("erro_checkbox");
    const erroicon = '<i class="fa-light fa-circle-exclamation"></i>'

    if(!checkbox.checked){
        errocheck.innerHTML = `${erroicon} É Nescessário Confirmar Que Leu` ;
    }


    if (nome.value != "" && checkbox.checked) {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

    
}
const home = document.querySelector('#Home');
if(home){
        home.addEventListener('mouseover', ()=> {
        home.classList.add('hoverme');
        Contato.classList.remove('hoverme')
    })
}
if(home){
        home.addEventListener('mouseout', () =>{
        home.classList.remove('hoverme')
        Contato.classList.add('hoverme');
})};
    

const lancamento = document.querySelector ('#lancamento')
if(home && lancamento){    
    lancamento.addEventListener('mouseover', (event) =>{
    Contato.classList.remove('hoverme'); 
    lancamento.classList.add('hoverme');
    
});}
if(home && lancamento){
    lancamento.addEventListener('mouseout', () =>{
        lancamento.classList.remove('hoverme')
        Contato.classList.add('hoverme');
    })
}

const Contato = document.querySelector('#contato');
Contato.classList.add('hoverme');

console.log(contato)
