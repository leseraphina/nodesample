class Rect {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // 메서드
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rect(10, 10);

console.log(square.area); // 100

