// function sample(title,type){
//   this.title = title;
//   this.type = type;
//   this.list = function(){
//     console.log(
//       `${this.title} : ${this.type}`
//       )
//   }
// }
// const fruit01 = new sample('red','apple');
// const fruit02 = new sample('yellow','banana');
// const fruit03 = new sample('violet','grape');
// fruit01.list();
// fruit02.list();
// fruit03.list();

class sample{
  // constructor:function(){}
  constructor(title,type){
    this.title = title;
    this.type = type;
  }
  // list:function(){}
  list(){
    console.log(
      `${this.title} : ${this.type}`
      )
  }
}

const fruit = [
  new sample('red','apple'),
  new sample('yellow','banana'),
  new sample('violet','grape')
]
fruit[0].list();
fruit[1].list();
fruit[2].list();
// const fruit01 = new sample('red','apple');
// const fruit02 = new sample('yellow','banana');
// const fruit03 = new sample('violet','grape');
// fruit01.list();
// fruit02.list();
// fruit03.list();

