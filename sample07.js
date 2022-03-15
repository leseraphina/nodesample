// 상속 확장

class Book{
  constructor(type,title){
    this.type = type;
    this.title = title;
  }
  list(){
    document.write(`
    ${this.type} : ${this.title}
    <br>
    `);
  }
}
const myBook = new Book('개발서','프론트엔드');
console.log(myBook);
console.log(myBook.type);
myBook.list();
//  extends

class It extends Book{
  constructor(type,title){
    super(type,title);
  }
  list(){
    document.write(`
    ${this.type}  +  ${this.title}
    <br>
    `);
   
  }
}
const myIt = new It('basic','html');
console.log(myIt);
myIt.list();

class Graphic extends Book{
  constructor(type,title,level){
    super(type,title);
    this.level = level;
  }
  list(){
    document.write(`
    ${this.type}  :  ${this.title} :  레벨 ${this.level} 
    <br>
    `);
  }
}

const myGraphic = new Graphic('사진편집','photoshop',1);
myGraphic.list();
