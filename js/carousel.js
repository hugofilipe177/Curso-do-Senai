
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

        carouselElement.innerHTML = '';
        UrlElement.innerHTML ='';
        

        const img = document.createElement('img');
        img.setAttribute('src', Carousel._arr[Carousel._sequence].imagem);
        carouselElement.appendChild(img);

        const Url = document.createElement('a');
        Url.href = Carousel._arr[Carousel._sequence].Url;
        Url.textContent = Carousel._arr[Carousel._sequence].title;
        UrlElement.appendChild(Url)


        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
};
  
