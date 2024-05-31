
// let a = 1, b = 1;

// let c = ++a; // ?
// let d = " \t \n" - 2;

// alert(`a ${a}, b ${b}, c ${c}, d ${d}`);
// let a = prompt("Enter number", 10);

// a == 0 ? alert("0") : a > 0 ? alert("1") : alert("-1");

// alert(null == "\n0\n");

// function memoize(fn) {
//     const mem = {};


//     return function(...args) {
//         const symb = String(...args);

//         if(mem?.[symb] || mem?.[symb] == '0'){
//             return mem[symb];
//         }

//         const value = fn(...args);
//         mem[symb] = value;

//         return value;
//     }
// }
 
 
// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
// callCount += 1;
// return a + b;
// })
// console.log('0' === '0')
// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1 
// memoizedFn(0, 0) // 5
// memoizedFn(0, 0) // 5
// console.log(callCount) // 1 

// var isEmpty = function(obj) {
//     let isEmptyObj = true;

//     if(Array.isArray(obj))
//         return obj.length == 0 ? true : false;

//     for(let cell in obj)
//         isEmptyObj == false;

//     return isEmptyObj;
// };

// isEmpty({"х": 5, "у": 42});

// Array.prototype.groupBy = function(fn) {
//     let obj = {};

//     for(let i = 0; i < this.length; i++){
//         let key = fn(this[i]);

//         if(obj?.[key]){
//             let arr = obj[key];
//             arr.push(this[i]);
//         }
//         else{
//             let newArr = [this[i]];
//             obj[key] = newArr;
//         }
//     }

//     return obj;
// };






// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// fn = function (n) { 
//     return String(n > 5);
// }
// array.groupBy(fn);

// var join = function(arr1, arr2) {
//     let result = {};

//     arr1.forEach(item => {
//         let copy = {};
//         Object.assign(copy, item);
//         result[copy.id] = copy;
//     });

//     for(let i = 0; i < arr2.length; i++){
//         if(result[arr2[i].id]){
//             for(let data in arr2[i]){
//                 result[arr2[i].id][data] = arr2[i][data];
//             }
//         }
//         else{
//             result[arr2[i].id] = arr2[i];
//         }
//     }

//     return Object.values(result);
// };

// arr1 = [
//     {"id": 2, "x": 3, "y": 6},
//     {"id": 1, "x": 2, "y": 3},
// ];
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ];
// join(arr1,arr2);


// Array.prototype.WriteArray = function(resultArr, n){
//     this.forEach(element => {
//         if(Array.isArray(element) && n > 0){
//             element.WriteArray(resultArr, n - 1);
//         }
//         else{
//             resultArr.push(element);
//         }
//     });
// }

// var flat = function (arr, n) {
//     let resultArr = [];

//     arr.WriteArray(resultArr, n);

//     return resultArr;
// };

// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// arr = flat(arr, 1);



// var compactObject = function(obj) {
//     let newObj;

//     if(Array.isArray(obj)){
//         newObj = [];

//         for(let i = 0; i < obj.length; i++)
//             if(Boolean(obj[i])){
//                 if(Array.isArray(obj[i]))
//                     newObj.push(compactObject(obj[i]));
//                 else if(typeof obj[i] === 'object')
//                     newObj.push(compactObject(obj[i]));
//                 else
//                     newObj.push(obj[i]);
//         }
//     }
//     else{
//         newObj = {};   

//         for(let key in obj){
//             if(Array.isArray(obj[key])){
//                 newArr = compactObject(obj[key]);

//                 if(newArr.length != 0)
//                     newObj[key] = newArr;
//             }
//             else if(Boolean(obj[key])){
//                 if(typeof obj[key] === 'object')
//                     obj[key] = compactObject(obj[key]);

//                 newObj[key] = obj[key];
//             }
//         }
//     }

//     return newObj;
// };

// obj = {"o":11,"a":68,"m":18,"v":true,"b":false,"h":null,"r":false,"p":93,"l":true,"k":"","n":79,"f":18,"u":null,"j":null,"e":null,"z":{"d":true,"t":null,"o":21,"w":null,"m":82,"k":35,"l":26,"r":45,"b":false,"z":0,"i":null,"c":33,"p":69,"j":27,"e":53,"q":97,"h":true,"a":true,"n":true,"f":73,"u":null},"w":12,"y":0,"q":"","t":null,"s":true,"x":false,"c":true,"i":false,"g":29};
// compactObject(obj);


let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // деструктуризация разбита на несколько строк для ясности
  let {
    size: { // положим size сюда
      width,
      height
    },
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
  } = options;
  
  console.log(options.title);  // Menu
  console.log(options.size.width);  // 100
  console.log(height); // 200
  console.log(item1);  // Cake
  console.log(item2); 
  console.log(size); 
  console.log(items); 





// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//     console.log( this.step );
//       return this;
//     }
//   };
  
//   ladder.up().up().down().showStep().down().showStep();
