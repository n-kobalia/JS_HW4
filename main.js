// word replace function

const replaceWord = (str, valueToReplace, valueToReplaceWith ) =>{
    let splited = str.split(" ")
    const result = splited.map(function(element){
        if(valueToReplace==element){
            element = valueToReplaceWith
        }
        return element
    })
    
    return result.join(" ")
}
 
let str = "nodari kobalia 27"

console.log(`original string: ${str}`)

console.log(`replaced string: ${replaceWord(str,"27","55")}`)


// touppercase function

const toUpperCaseFunc = (str) => str.toUpperCase() 

console.log(toUpperCaseFunc(str))


// sort by age function

const sortByAgeFun = (user) => user.sort(function(a, b){return a.age - b.age});

const users = [{name: 'Lasha', age: 30},
            {name: 'Saba', age: 20},
            {name: 'nodari', age: 27},
            {name: 'giorgi', age: 35}]


console.log(sortByAgeFun(users))
