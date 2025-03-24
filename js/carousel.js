
const carouselArr = [];


class Carousel {
    constructor(Imagem, Title, Url) {
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }

    static Start(arr) {
        if ( arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length; 
            Carousel._arr = arr; 

            Carousel.Next();

            Carousel._interval = setInterval(function () {
                Carousel.Next();
            }, 2000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }
    static Next() {

        const carouselElement = document.getElementById('carousel');
        const UrlElement = document.getElementById ('carousel-title');

        if(carouselElement && UrlElement ){
        const slide_carrossel = carouselArr[Carousel._sequence]; 
        
        carouselElement.style.backgroundImage = `url('img/${slide_carrossel.imagem}')`;
        carouselElement.style.backgroundSize = 'cover';
        carouselElement.innerHTML = '';

        UrlElement.innerHTML = `<a href='${slide_carrossel.url}'> ${slide_carrossel.title} </a>`




        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
        



        
    }
};
  
