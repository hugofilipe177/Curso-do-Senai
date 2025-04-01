const home = document.querySelector('#Home');
if(home){
    home.classList.add('Home')
}
const lancamento = document.querySelector ('#lancamento')
if(home && lancamento){    
    lancamento.addEventListener('mouseover', (event) =>{
    home.classList.remove('hoverme'); 
    lancamento.classList.add('hoverme');
    
});}
if(home && lancamento){
    lancamento.addEventListener('mouseout', () =>{
        lancamento.classList.remove('hoverme')
        home.classList.add('hoverme');
    })
}

const contato = document.querySelector ('#contato');
if(home && contato){
    contato.addEventListener('mouseover', ()=> {
        contato.classList.add('hoverme');
        home.classList.remove('hoverme')
    } )
}
if(home && contato){
        contato.addEventListener('mouseout', () =>{
        contato.classList.remove('hoverme')
        home.classList.add('hoverme');
})};
