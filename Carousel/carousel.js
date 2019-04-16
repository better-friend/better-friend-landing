class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.paragraphs = document.querySelectorAll('.carousel p');
        this.currentIndex = 0;
        this.paragraphs[this.currentIndex].style.display = 'block';
        console.log('hi');


    }

    moveLeft() {
        console.log('hello');
        this.paragraphs[this.currentIndex].style.display = 'none';
        this.currentIndex -= 1;
        if (this.currentIndex == -1) {
            this.currentIndex = 2;
        }
        console.log("current index", this.currentIndex);
        this.paragraphs[this.currentIndex].style.display = 'block';

    }

}

let carousel = Array.from(document.querySelectorAll('.carousel')).map(carousel => new Carousel(carousel));

setInterval(function(){carousel[0].moveLeft()}, 3000);
