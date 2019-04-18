class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.paragraphs = document.querySelectorAll('.carousel p');
        this.currentIndex = 0;
        this.paragraphs[this.currentIndex].style.display = 'block';
        console.log('hi');
    }

    moveLeft() {
        let currentBrowserWidth = $(window).width();
        let centerPoint = Math.floor(currentBrowserWidth / 2);
        let currentIndex = this.currentIndex;
        let self = this;
        let currentParagraph = this.paragraphs[this.currentIndex];

        $(currentParagraph).css("margin-left", currentBrowserWidth * 2 + "px");
        currentParagraph.style.display = 'block';
        $(currentParagraph).animate({ marginLeft: "5%" }, 1000,
            function () {
                function sleep(time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
                sleep(2000).then(function () {
                    $(currentParagraph).animate({ marginLeft: currentBrowserWidth * -2 }, 1000);
                });
                currentIndex -= 1;
                if (currentIndex == -1) {
                    currentIndex = 2;
                }
                self.currentIndex = currentIndex;
            });
    }

}

let carousel = Array.from(document.querySelectorAll('.carousel')).map(carousel => new Carousel(carousel));

setInterval(function () { carousel[0].moveLeft() }, 4500);
