class Team {
    constructor(element) {
   
      this.element = element;
  
      this.expandButton = element.querySelector('.expandButton');
 
      this.expandButton.textContent = 'Click to Expand';
 
      this.expandButton.addEventListener('click', () => this.expandProfile());
    }
  
    expandProfile() {
 
  
      if (this.expandButton.textContent === 'Click to Expand') {
        this.expandButton.textContent = 'Click to Close';
        this.element.classList.toggle('profile-open');
  
        TweenMax.to(".profile-open", .5, {
          height: 400,
        })
      } else if (this.expandButton.textContent === 'Click to Close') {
        this.expandButton.textContent = 'Click to Expand';
  
        TweenMax.to(".profile-open", .5, {
          height: 50,
        })
        this.element.classList.toggle('profile-open');
     
      }
    }
  }
  

  let mainContent = document.querySelectorAll('.teammate');
  mainContent.forEach(teammate => new Team(teammate));