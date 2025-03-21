

//carousel

//Array storage class
const carouselArr = [];


//class Carousel
class Carousel {
    constructor(Imagem, Title, Url){
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }
    

    
      
    static Start(arr){

        for(let i = 0; i < carouselArr.length; i++){
        this.imagens = document.createElement('img');
        this.imagens.setAttribute('src', carouselArr[i].imagem);
        document.querySelector('#carousel').insertAdjacentElement('beforeend', this.imagens);
        }

        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    

    static Next(){
        
    }
};
