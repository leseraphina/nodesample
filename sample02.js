function fruit(first,last){
  this.first = first;
  this.last = last;
}
fruit.prototype.action = function(){
  return `${this.first} ${this.last}`;
}
// 인스턴스
const grape = new fruit('violet,small');
const apple = new fruit('red,middle');
const banana = new fruit('yellow,large');

console.log(grape.action());
console.log(apple.action());
console.log(banana.action());