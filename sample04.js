// this
//  일반(normal) 함수는 호출 위치에 따라  this 가 정의된다.
//  화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 가 정의됨.

const timer = {
  name: 'hello',
  thimeout:function(){
    setTimeout(function(){
      console.log(this.name);
      //  setTimeout 에서 실행된다.
    },2000);
  }
}
timer.thimeout();

const timer2 = {
  name: 'hello',
  thimeout:function(){
    setTimeout(()=>{
      console.log(this.name);
      //  setTimeout 에서 실행된다.
    },2000);
  }
}
timer2.thimeout();