//const myArr=[1,2,3,4,5]
//console.log(myArr[0])
const myArr2=["don",'rock']
//console.log(myArr2[0])
const myArr3=new Array(1,2,3,4,5)
// myn1=new Array('a',1,2,3,4,5)
    console.log(myn1.slice(1,3))//1 aur 2 bas hatega
    //const myn2=new Array('b',1,2,3,4,5)
    console.log(myn2.splice(1,3))//1 se 3 included hat jayega
    console.log(myn2)
    // array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

////const myArr2 = new Array(1, 2, 3, 4)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);