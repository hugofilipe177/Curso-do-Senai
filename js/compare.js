//car
let carArr = [];
const checkagem_eliminacao = document.querySelectorAll('.checkbox');

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;

       
       
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){
            
        if(el.checked){
        carArr.push(carClass);
        console.log(carArr)

        } else {
            carArr = carArr.filter(carro => carro.nome !== carClass.nome);
            console.log(carArr);
          
        } 
        console.log(checkagem_eliminacao)
        console.log(carArr.length)
        if(carArr.length == 2 ){
            checkagem_eliminacao.forEach( (checkbox) => {if(!checkbox.checked){
                checkbox.setAttribute("disabled", true);
            }} )

        } else{
            checkagem_eliminacao.forEach( (checkbox) => {if(!checkbox.checked){
                checkbox.removeAttribute('disabled');
            }})
        }; 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length !== 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;

    };

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    carArr.forEach((element, i) => {
        document.getElementById('compare_image_' + i).innerHTML = `<img src="${element.image}" alt="${element.nome}">`;
        document.getElementById('compare_modelo_' + i).innerText = element.nome;
        document.getElementById('compare_alturacacamba_' + i).innerText = element.alturaCacamba;
        document.getElementById('compare_alturaveiculo_' + i).innerText = element.alturaVeiculo;
        document.getElementById('compare_alturasolo_' + i).innerText = element.alturaSolo;
        document.getElementById('compare_capacidadecarga_' + i).innerText = element.capacidadeCarga;
        document.getElementById('compare_motor_' + i).innerText = element.motor;
        document.getElementById('compare_potencia_' + i).innerText = element.potencia;
        document.getElementById('compare_volumecacamba_' + i).innerText = element.volumeCacamba;
        document.getElementById('compare_roda_' + i).innerText = element.roda;
        document.getElementById('compare_preco_' + i).innerText = element.preco;
    });

}