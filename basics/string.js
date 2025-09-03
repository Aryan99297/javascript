const name="aryan"
const repo=50
console.log(`hello my name is ${name} and my repo is ${repo}`)
const gameName=new String('hite-sh-com')
console.log(gameName)//string:hitesh


console.log(gameName[0])
//console.log(__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))
const newString=gameName.substring(0,4)
console.log(newString)
const anotherString=gameName.slice(-8,5)
console.log(anotherString)
const news="     hitesh      "
console.log(news)
console.log(news.trim())
const url="http://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20",'-'))
console.log(url.includes('hitesh'))
console.log(gameName.split('-'))