class Teammate {
    constructor(element) {
   
      this.element = element;
  
      this.expandButton = element.querySelector('.expandButton');
 
      this.expandButton.textContent = 'Learn More';
 
      this.expandButton.addEventListener('click', () => this.expandProfile());
    }
  
    expandProfile() {
 
  
      if (this.expandButton.textContent === 'Learn More') {
        this.expandButton.textContent = 'Close';
        this.element.classList.toggle('profile-open');
  
        TweenMax.to(".profile-open", .5, {
          height: 600,
        })
      } else if (this.expandButton.textContent === 'Close') {
        this.expandButton.textContent = 'Learn More';
  
        TweenMax.to(".profile-open", .5, {
          height: 400,
        })
        this.element.classList.toggle('profile-open');
     
      }
    }
  }
  

  let mainContent = document.querySelectorAll('.teammate');
  mainContent.forEach(teammate => new Teammate(teammate));