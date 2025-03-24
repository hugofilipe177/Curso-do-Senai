// Array para armazenar as instâncias do Carousel
const carouselArr = [];

// Classe Carousel
class Carousel {
    constructor(Imagem, Title, Url) {
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }

    static Start(arr) {
        // Verifica se o array foi passado e se não está vazio
        if ( arr.length > 0) {
            Carousel._sequence = 0; // Inicia a sequência no primeiro item
            Carousel._size = arr.length; // Define o tamanho do array
            Carousel._arr = arr; // Armazena o array para uso posterior

            // Exibe a primeira imagem e título
            Carousel.Next();

            // Inicia o intervalo para alternar os itens a cada 5 segundos
            Carousel._interval = setInterval(function () {
                Carousel.Next();
            }, 2000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static Next() {
        // Obtém o elemento do carrossel
        const carouselElement = document.getElementById('carousel');
        const titleElement = document.getElementById('carousel-title');

        // Limpa o conteúdo atual do carrossel e do título
        carouselElement.innerHTML = '';
        titleElement.innerHTML = '';

        // Cria e exibe a próxima imagem
        const img = document.createElement('img');
        img.setAttribute('src', Carousel._arr[Carousel._sequence].imagem);
        carouselElement.appendChild(img);

        // Exibe o próximo título
        const title = document.createElement('p');
        title.textContent = Carousel._arr[Carousel._sequence].title;
        titleElement.appendChild(title);

        // Atualiza a sequência para o próximo item
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}

const edição = document.getElementsByTagName ('img');
    edição.style.width = '5%' ;

