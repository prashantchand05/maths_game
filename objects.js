const array1 = [1,2,3,4,5];

let newArr = array1.map((curElem,index,arr) =>{
    return curElm >9;
})
console.log(array1);
console.log(newArr);