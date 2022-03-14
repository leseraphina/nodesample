// this
//  일반(normal) 함수는 호출 위치에 따라  this 가 정의된다.
//  화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 가 정의됨.

const fruit = {
  name:'apple',
  normal(){
    console.log(this.name);
  },
  arrow: ()=>{
    console.log(this.name);
  }
}
fruit.normal();
// fruit.name 로 된다.
fruit.arrow();
// 현재 범위에서는 함수를 알 수 없다.

const fruit2={
  name:'banana',
  normal:fruit.normal,
  arrow:fruit.arrow
}
fruit2.normal();
fruit2.arrow();

