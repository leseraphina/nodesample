const grape ={
  first : 'violet',
  last : 'small',
  getCall(){
    return `${this.first} ${this.last}`
  }
}
// console.log(grape);
// console.log(grape.getCall());
const apple ={
  first : 'red',
  last : 'middle',
  getCall(){
    return `${this.first} ${this.last}`
  }
}
const banana={
  first : 'yellow',
  last : 'small',
  getCall(){
    return `${this.first} ${this.last}`
  }
}
 console.log(grape.getCall());
 console.log(apple.getCall());
 console.log(banana.getCall());

 