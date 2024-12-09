let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// let dataArr = data.split("\n")
let dataArr = splitExp(data, "\n")
function splitExp(dataArr, sepatationString) {
    let formatedArr = []
    let section = ""
    for (let char of dataArr) {
        if (char === sepatationString) {
            formatedArr.push(section)
            section = ""
        } else {
            section += char
        }
    }
    formatedArr.push(section)
    return formatedArr

}
// console.log(dataArr)

// let [headline, ...formatedArr] = dataArr.map((a) => a.split(","))
let [headline, ...formatedArr] = mapExp(dataArr, (section) => splitExp(section, ","))
function mapExp(arr, takesFunction) {
    let doubleArr = []
    for (let section of arr) {
        doubleArr.push(takesFunction(section))
    }
    return doubleArr
}


// console.log(headline)
// console.log(formatedArr)

// let objectArr = formatedArr.map((user) => {
//     let cellObject = {}
//     for (let section in user) {
//         cellObject[headline[section].toLowerCase()] = user[section]
//     }
//     return cellObject
// })

let objectArr = mapExp(formatedArr, (user) => {
    let cellObject = {}
    for (let section in user) {
        cellObject[headline[section].toLowerCase()] = user[section]
    }
    return cellObject
})
// console.log(objectArr)

// /*  in the lecture it says to remove the last of the sorted list but when i saw the result it was not sorted 
//     uncomment if you want it sorted then remove last */

// // let sorted = objectArr.sort((a, b) => a.age - b.age)
// // console.log(sorted)

objectArr.pop()
// // console.log(objectArr)

// objectArr.splice(1,0,{id: "48", name: "Barry", occupation: "Runner", age: "25" })
spliceExp(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
function spliceExp(index, cellsToDelete, addObject) {
    let arrToMoniputate = []
    let objectHolder = null
    let counter = 0
    for (let section in objectArr) {
        // 
        if (section >= index) {
            if (section == index){
                arrToMoniputate.push(addObject)

            }
            if (counter < cellsToDelete) {
                counter++
            } else {
                arrToMoniputate.push(objectArr[section])

            }
        } else {
            arrToMoniputate.push(objectArr[section])
        }

    }

    objectArr = arrToMoniputate
}
// console.log(objectArr);


objectArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log("///Final String To object Array///");
console.log(objectArr  + "\n")

let average = objectArr.reduce((total, user) => total + Number(user.age), 0) / objectArr.length
console.log("///Average///");
console.log(average + "\n");
// console.log(data);


let headlineReverse = []
for (let cell in objectArr[0]) {
    headlineReverse.push(cell[0].toUpperCase() + cell.slice(1))
}
// console.log(headlineReverse)

let doubleArr = []

doubleArr = objectArr.map((user) => {
    let cellArr = []
    for (let cell in user) {
        cellArr.push(user[cell])
    }
    return cellArr
})
doubleArr.unshift(headlineReverse)

let singlearr = doubleArr.map((section) => section.join())

let backToData = singlearr.slice(0,-1).join("\n")

// console.log(doubleArr)
// console.log(singlearr);

console.log("///Data object converted back to original///");
console.log(backToData + "\n");
console.log("///Original Data///");
console.log(data);
