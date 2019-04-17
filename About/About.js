class Teammate {
  constructor(element) {
    this.element = element;
    this.children = this.element.children;

    for (let i = 0; i < this.children.length; i++) {
      let currentChild = this.children[i];
      let currentChildClassName = currentChild.className;
      if (currentChildClassName === "open-modal") {
        this.openButton = currentChild;
      } else if (currentChildClassName === "teammate-modal") {
        this.modal = currentChild;
        let modalChildren = this.modal.children;
        for (let j = 0; j < modalChildren.length; j++) {
          let currentModalChild = modalChildren[j];
          if (currentModalChild.className === "modal-content") {
            let modalContentChildren = currentModalChild.children;
            for (let k = 0; k < modalContentChildren.length; k++) {
              let currentModalContentChild = modalContentChildren[k];
              if (currentModalContentChild.className === "close") {
                this.span = currentModalContentChild;
              }
            }
          }
        }
      }
    }

    this.openButton.addEventListener('click', () => {
      this.openModal()
    });
    this.span.addEventListener('click', () => {
      this.closeModal();
    });

    // window.onclick = function (event) {
    //   console.log("in window click");
    //   if (event.target == this.modal) {
    //     this.modal.style.display = "none";
    //   }
    // }
  }

  openModal() {
    this.modal.style.display = 'block';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }
}

let teammates = Array.from(document.querySelectorAll(".teammate")).map(teammate => new Teammate(teammate));