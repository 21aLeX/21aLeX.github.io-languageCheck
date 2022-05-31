let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null]
let value1 = null
let value2 = null

let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
console.log(value1 + ' ' + value2)
const ot = document.getElementById('ot')
ot.oninput = () => {
    value1 = ot.value
    if (ot.value === '') {
        value1 = null
    }
    getRange(courses,[value1,value2])
}
const doo = document.getElementById('doo')
doo.oninput = () => {
    value2 = doo.value
    if (doo.value === '') {
        value2 = null
    }
    getRange(courses,[value1,value2])
}

for (i of courses) {
    let div = document.createElement('li')
    let iff1 = i.prices[0] ? ' от ' + i.prices[0] : ' '
    let iff2 = i.prices[1] ? ' до ' + i.prices[1] : ' '
    div.innerHTML = i.name + iff1 + iff2;
    div.className = 'start'
    document.body.append(div)

}


function sortPrices(arr) {
    arr.sort((a, b) => {
        if (a.prices[0] > b.prices[0]) {
            return 1
        }
        if (a.prices[0] < b.prices[0]) {
            return -1
        }
        return 0
    })
    return arr
}

let answerArr = []
function getRange(arr, arrPrices) {
    let a = b = false
    for (key of arr) {
        if (arrPrices[0] < arrPrices[1]) {
            a = (key.prices[0] >= arrPrices[0] && key.prices[0] <= arrPrices[1])
            if (!a) {
                b = key.prices[0] <= arrPrices[1]
                if (b) a = true
            }
            else b = true
        }
        else if (arrPrices[0] == arrPrices[1]) {
            a = (key.prices[0] == arrPrices[0])
            b = (key.prices[1] == arrPrices[1])
        }
        else if (arrPrices[0] > arrPrices[1]) {
            a = key.prices[0] >= arrPrices[0]
            b = true
            if (key.prices[0] == null && key.prices[1] == null) {
                a = true
                b = true
            }
        }

        if (a && b) {
            answerArr.push(key)
        }
    }
}

function createRange(required) {
    answerArr = []
    getRange(sortPrices(courses), required)
    let div = document.createElement('div')
    div.innerHTML = '------------------------------------------';
    document.body.append(div)
    let divHead = document.createElement('div')
    let iff1 = required[0] ? ' от ' + required[0] : ' '
    let iff2 = required[1] ? ' до ' + required[1] : ' '
    divHead.innerHTML = 'Курсы подходящие :' + iff1 + iff2;
    divHead.className = 'if'

    document.body.append(divHead)
    for (i of answerArr) {
        let div = document.createElement('div')
        let iff1 = i.prices[0] ? ' от ' + i.prices[0] : ' '
        let iff2 = i.prices[1] ? ' до ' + i.prices[1] : ' '
        div.innerHTML = i.name + iff1 + iff2;
        div.className = 'answer'
        document.body.append(div)
    }
}

createRange(requiredRange1)
createRange(requiredRange2)
createRange(requiredRange3)


