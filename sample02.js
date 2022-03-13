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
// 참조
//   new  키워드와 함께 생성자 함수로 인스턴스를 만들어 내는 개념을 클래스라 불른다.

//  카멜케이스, 파스칼케이스, 스네이크 케이스