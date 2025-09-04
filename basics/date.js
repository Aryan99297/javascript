let myDate=new Date()
console.log(myDate.toString())
console.log(typeof(myDate)) //object
//let myCreatedDate=new Date(2023,0,23)
//console.log(myCreatedDate.toDateString())
//let myCreatedDate=new Date("14-01-2023")
let myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString())//date and time
let myTimestamp=Date.now()
console.log(myTimestamp)//any number 
console.log(myCreatedDate.getTime())//17368736783683
console.log(Math.floor(Date.now()/1000))//to get in seconds
let newDate=new Date()
console.log(newDate.getMonth()+1)//2
console.log(`the day is ${newDate.getDate}and the time is ${newDate.getHours}`)
newDate.toLocaleString('default',{
    timeZone: "long"//object bhidefine kar skte h iske andar
})