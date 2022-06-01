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
let copyCourses = courses
const ot = document.getElementById('ot')
ot.oninput = () => {
    value1 = ot.value
    if (ot.value === '') {
        value1 = null
    }
    copyCourses = courses.filter(getRange2)
    render()
    // getRange2(courses,[value1,value2])
}
const doo = document.getElementById('doo')
doo.oninput = () => {
    value2 = doo.value
    if (doo.value === '') {
        value2 = null
    }
    copyCourses = courses.filter(getRange2)
    render()
    // getRange2(courses,[value1,value2])
}
function render() {
    const div = document.getElementById('div')
    console.log(div)
    div.innerHTML = ''
    for (i of copyCourses) {
        let li = document.createElement('li')
        let iff1 = i.prices[0] ? ' от ' + i.prices[0] : ' '
        let iff2 = i.prices[1] ? ' до ' + i.prices[1] : ' '
        li.innerHTML = i.name + iff1 + iff2;
        li.className = 'start'
        div.append(li)

    }
}
render()


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
function getRange2(element) {
    if (element.prices[0] === null && element.prices[1] === null)
        return true
    if (value1 === null) {
        if (value2 !== null) {
            if (element.prices[0] <= value2)
                return true

        }
        else return true
    }
    if (value2 === null) {
        if (value1 !== null) {
            if (element.prices[1] >= value1 || element.prices[0] >= value1)
                return true
        }
        else return true
    }
    if (element.prices[0] <= value2 && element.prices[1] >= value1)
        return true
    if (element.prices[1] === null && (element.prices[0] <= value2 && element.prices[0] >= value1))
        return true
}


