
//class contato

class contato {
    constructor(nome,email,telefone,contato){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone; 
    this.contato = contato; 
}
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem('textarea').value,
            form.elements.namedItem("contato").value);
  console.log(data);
  form.reset();
}

function Enviar() {
    
    var nome = document.getElementById("nome");


    if (nome.value != "") {
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
