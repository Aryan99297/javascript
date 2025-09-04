function sayName(){
  console.log("hi")  
  console.log("fi")  
  console.log("ti")  
  console.log("hi")  
  console.log("hi")  
  console.log("hi")  
}
//sayName()
function userName(user ="sam")
{
    if(!user){
        console.log("please enter a username")
        return
    }
    return `${user} just logged in`
}
console.log(userName())
