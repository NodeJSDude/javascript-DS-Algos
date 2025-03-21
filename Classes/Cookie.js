class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color; // a getter
  }
  setColor(color) {
    this.color = color; // a setter
  }
}

let cookieOne = new Cookie("green");

let cookieTwo = new Cookie("blue");
