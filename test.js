import myData from './main.json';

const book = {
  type : 'It' ,
  title:'javascript',
  level : '1',
  'main - email' : 'aaa#naver.com',
}
console.log(book);

const book1 = {
  'type' : 'It' ,
  'title':'javascript',
  'level' : '1',
  'main - email' : 'aaa#naver.com',
}
console.log(book1);

// json  은 문자 데이터 이다.
console.log(myData);
console.log(myData.string);
// JSON.stringify()
const str = JSON.stringify(book);
console.log(str);
//  json 파일 만들기
console.log(typeof str);
// JSON.parse()
const obj = JSON.parse(str);
console.log(obj);

