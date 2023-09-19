let box = document.getElementById("box");

box.addEventListener('mouseover',function (){
    this.style.background="green";
})
box.addEventListener('mouseleave',function (){
    this.style.background="red";
})
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
    ];
     function byField(users){
    return (a, b) => a[users] > b[users] ? 1 : -1;
  }
  console.log(byField(users));