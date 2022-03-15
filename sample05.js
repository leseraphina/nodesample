//   단축만들기
const fruit = {
  name: 'red',
  type: 'apple',
  list :function(){
    console.log(`${this.name} : ${this.type}`);
  }
}
fruit.list();

const fruit2 = {
  name: 'red',
  type: 'apple',
  list(){
    console.log(`${this.name} : ${this.type}`);
  }
}
fruit2.list();